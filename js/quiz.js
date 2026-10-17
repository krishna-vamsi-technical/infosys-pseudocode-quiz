/**
 * Infosys Pseudocode Quiz Portal — Quiz Engine
 */

(function () {
    // State
    let student = null;
    let questions = [];
    let currentIndex = 0;
    let userAnswers = {}; // { qIndex: { selectedIdx, selectedText, isCorrect, timeSpent } }
    let questionTimer = null;
    let totalTimer = null;
    let questionTimeLeft = 90; // seconds
    let totalTimeLeft = 45 * 60; // 45 minutes
    let isPractice = false;
    let tabViolations = 0;
    let testStartTime = Date.now();
    let qStartTime = Date.now();
    let hasAnsweredCurrent = false;

    document.addEventListener('DOMContentLoaded', async () => {
        initTheme();
        if (!loadStudent()) return;
        await loadQuestions();
        initAntiCheat();
        initQuizUI();
        startQuiz();
    });

    // ---------- Theme ----------
    function initTheme() {
        const savedTheme = localStorage.getItem('infy_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // ---------- Student Data ----------
    function loadStudent() {
        const raw = sessionStorage.getItem('infy_student');
        if (!raw) {
            window.location.href = 'index.html';
            return false;
        }
        student = JSON.parse(raw);
        isPractice = student.mode === 'practice';
        return true;
    }

    // ---------- Question Pool & Smart Randomizer ----------
    async function loadQuestions() {
        let pool = [];
        if (window.QUESTIONS_POOL && Array.isArray(window.QUESTIONS_POOL) && window.QUESTIONS_POOL.length > 0) {
            pool = window.QUESTIONS_POOL;
        } else {
            try {
                const res = await fetch('data/questions.json');
                const data = await res.json();
                pool = data.questions || [];
            } catch (e) {
                console.error('Failed to load questions via fetch, fallback to window pool', e);
            }
        }

        if (!pool || pool.length === 0) {
            alert('Error loading question bank. Please return to home.');
            window.location.href = 'index.html';
            return;
        }

        // Retrieve seen question IDs to ensure repeat attempts get fresh questions
        let seenIds = [];
        try {
            const rawSeen = localStorage.getItem('infy_seen_qids');
            if (rawSeen) seenIds = JSON.parse(rawSeen);
        } catch (e) {}

        // Guaranteed Stratified Sampling: Pick exactly 3 questions from each of the 10 core topics
        const topics = [
            "Arithmetic Operators",
            "Relational & Logical Operators",
            "Bitwise Operators",
            "Conditional Statements",
            "Loops",
            "Functions",
            "Recursion",
            "Math + Bitwise Mixed",
            "Loops + Recursion Mixed",
            "Infosys SE Grand Challenge"
        ];

        let selected = [];

        topics.forEach(tName => {
            const topicPool = pool.filter(q => q.topic === tName);
            if (topicPool.length === 0) return;

            let unseenInTopic = topicPool.filter(q => !seenIds.includes(q.id));
            if (unseenInTopic.length < 3) {
                // If fewer than 3 unseen remain in this topic, recycle seen IDs for this topic
                seenIds = seenIds.filter(id => !topicPool.some(q => q.id === id));
                unseenInTopic = [...topicPool];
            }

            shuffleArray(unseenInTopic);
            selected.push(...unseenInTopic.slice(0, 3));
        });

        // Safety fallback if question pool has any unexpected topic names
        if (selected.length < 30) {
            const remaining = pool.filter(q => !selected.some(s => s.id === q.id));
            shuffleArray(remaining);
            selected.push(...remaining.slice(0, 30 - selected.length));
        }

        // Shuffle the 30 questions so topics are naturally interleaved for each student
        shuffleArray(selected);

        // Update seen question IDs in storage
        const newSeen = [...seenIds, ...selected.map(q => q.id)];
        localStorage.setItem('infy_seen_qids', JSON.stringify(newSeen));

        // Build an evenly distributed target position array across the 30 questions
        // (roughly 7-8 of A, 7-8 of B, 7-8 of C, 7-8 of D)
        const targetPositions = [];
        for (let i = 0; i < 30; i++) {
            targetPositions.push(i % 4);
        }
        shuffleArray(targetPositions);

        // Ensure no 3 consecutive questions share the same correct option
        for (let i = 2; i < targetPositions.length; i++) {
            if (targetPositions[i] === targetPositions[i - 1] && targetPositions[i] === targetPositions[i - 2]) {
                for (let j = i + 1; j < targetPositions.length; j++) {
                    if (targetPositions[j] !== targetPositions[i]) {
                        [targetPositions[i], targetPositions[j]] = [targetPositions[j], targetPositions[i]];
                        break;
                    }
                }
            }
        }

        // Process questions and jumble options dynamically
        questions = selected.map((q, idx) => {
            const correctText = String(q.options[q.correctAnswer]);
            // Extract the 3 distractors
            const distractors = q.options.filter((_, oIdx) => oIdx !== q.correctAnswer);
            shuffleArray(distractors);

            // Assign target position (0=A, 1=B, 2=C, 3=D)
            const assignedPos = targetPositions[idx % targetPositions.length];
            const finalOptions = [...distractors];
            finalOptions.splice(assignedPos, 0, correctText);

            return {
                ...q,
                testIndex: idx + 1,
                options: finalOptions,
                correctAnswer: assignedPos,
                originalAnswerText: correctText
            };
        });
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // ---------- Anti-Cheat Protection ----------
    function initAntiCheat() {
        if (isPractice) return; // Anti-cheat only enforced in Mock Test mode

        // Fullscreen monitoring
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

        const returnBtn = document.getElementById('returnFullscreen');
        if (returnBtn) {
            returnBtn.addEventListener('click', async () => {
                try {
                    if (document.documentElement.requestFullscreen) {
                        await document.documentElement.requestFullscreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        await document.documentElement.webkitRequestFullscreen();
                    }
                    const warningOverlay = document.getElementById('fullscreenWarning');
                    if (warningOverlay) warningOverlay.style.display = 'none';
                } catch (e) {}
            });
        }

        // Tab switch & visibility monitoring
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                recordViolation('Tab switch detected');
            }
        });

        window.addEventListener('blur', () => {
            recordViolation('Window focus lost');
        });

        // Disable context menu
        document.addEventListener('contextmenu', (e) => e.preventDefault());

        // Disable copy, cut, paste
        document.addEventListener('copy', (e) => e.preventDefault());
        document.addEventListener('cut', (e) => e.preventDefault());
        document.addEventListener('paste', (e) => e.preventDefault());

        // Disable devtools shortcuts
        document.addEventListener('keydown', (e) => {
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
                (e.ctrlKey && (e.key === 'u' || e.key === 'U'))
            ) {
                e.preventDefault();
            }
        });
    }

    function handleFullscreenChange() {
        const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement);
        const warningOverlay = document.getElementById('fullscreenWarning');
        if (!isFull) {
            recordViolation('Exited fullscreen mode');
            if (warningOverlay) warningOverlay.style.display = 'flex';
        } else {
            if (warningOverlay) warningOverlay.style.display = 'none';
        }
    }

    function recordViolation(reason) {
        tabViolations++;
        const warnCountEl = document.getElementById('tabWarnCount');
        if (warnCountEl) {
            warnCountEl.textContent = `Warning: ${tabViolations} violation(s) recorded. (Reason: ${reason})`;
        }
    }

    // ---------- UI & Navigation Setup ----------
    function initQuizUI() {
        const nameEl = document.getElementById('headerStudentName');
        const badgeEl = document.getElementById('modeBadge');
        if (nameEl) nameEl.textContent = student.name;
        if (badgeEl) {
            badgeEl.textContent = isPractice ? 'PRACTICE' : 'MOCK TEST';
            badgeEl.className = isPractice ? 'mode-badge practice' : 'mode-badge mock';
        }

        if (isPractice) {
            const timerDisplay = document.getElementById('timerDisplay');
            const totalTimerDisplay = document.getElementById('totalTimerDisplay');
            if (timerDisplay) timerDisplay.style.display = 'none';
            if (totalTimerDisplay) totalTimerDisplay.style.display = 'none';
        }

        // Navigation buttons
        const nextBtn = document.getElementById('nextBtn');
        const skipBtn = document.getElementById('skipBtn');
        const submitBtn = document.getElementById('submitQuizBtn');

        if (nextBtn) {
            nextBtn.addEventListener('click', handleNextClick);
        }

        if (skipBtn) {
            skipBtn.style.display = 'inline-flex';
            skipBtn.addEventListener('click', () => {
                if (!hasAnsweredCurrent) {
                    recordAnswer(null); // marked as skipped
                }
                advanceQuestion();
            });
        }

        if (submitBtn) {
            submitBtn.addEventListener('click', () => showSubmitModal());
        }

        // Modal triggers
        const cancelSubmit = document.getElementById('cancelSubmit');
        const confirmSubmit = document.getElementById('confirmSubmit');
        if (cancelSubmit) {
            cancelSubmit.addEventListener('click', () => {
                const modal = document.getElementById('submitModal');
                if (modal) modal.style.display = 'none';
            });
        }
        if (confirmSubmit) {
            confirmSubmit.addEventListener('click', () => {
                finishQuiz();
            });
        }
    }

    // ---------- Quiz Loop & Flow ----------
    function startQuiz() {
        currentIndex = 0;
        testStartTime = Date.now();
        renderQuestion(currentIndex);

        if (!isPractice) {
            startQuestionTimer();
            startTotalTimer();
        }
    }

    function renderQuestion(index) {
        const q = questions[index];
        if (!q) return;

        hasAnsweredCurrent = false;
        qStartTime = Date.now();

        // Update header & counter
        const counterEl = document.getElementById('questionCounter');
        if (counterEl) counterEl.textContent = `Q ${index + 1} / ${questions.length}`;

        // Progress bar
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const pct = ((index + 1) / questions.length) * 100;
            progressBar.style.width = `${pct}%`;
        }

        // Question text
        const qText = document.getElementById('questionText');
        if (qText) qText.textContent = q.question || 'What will be the output of the following pseudocode?';

        // Code block
        const qidEl = document.getElementById('codeQid');
        const codeEl = document.getElementById('codeContent');
        if (qidEl) qidEl.textContent = `${q.topic} • ${q.difficulty}`;
        if (codeEl) codeEl.textContent = q.code;

        // Hide explanation panel for new question
        const explanationPanel = document.getElementById('explanationPanel');
        if (explanationPanel) explanationPanel.style.display = 'none';

        // Render options
        const optsContainer = document.getElementById('optionsContainer');
        if (optsContainer) {
            optsContainer.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];

            q.options.forEach((optText, optIdx) => {
                const optBtn = document.createElement('button');
                optBtn.className = 'option-btn';
                optBtn.dataset.index = optIdx;

                optBtn.innerHTML = `
                    <span class="option-letter">${letters[optIdx]}</span>
                    <span class="option-text">${escapeHtml(optText)}</span>
                    <span class="option-status-icon"></span>
                `;

                optBtn.addEventListener('click', () => handleOptionClick(optIdx, optText));
                optsContainer.appendChild(optBtn);
            });
        }

        // Update answered count
        updateAnsweredDisplay();

        // Update Next button label on last question
        const nextBtnText = document.getElementById('nextBtnText');
        const submitBtn = document.getElementById('submitQuizBtn');
        if (index === questions.length - 1) {
            if (nextBtnText) nextBtnText.textContent = 'Review & Submit';
            if (submitBtn) submitBtn.style.display = 'inline-flex';
        } else {
            if (nextBtnText) nextBtnText.textContent = 'Next Question';
            if (submitBtn) submitBtn.style.display = 'none';
        }

        // Reset per-question timer
        if (!isPractice) {
            resetQuestionTimer();
        }
    }

    function handleOptionClick(optIdx, optText) {
        if (hasAnsweredCurrent) return; // Already locked in for this question

        hasAnsweredCurrent = true;
        const q = questions[currentIndex];
        const isCorrect = (optIdx === q.correctAnswer);
        const timeSpent = Math.round((Date.now() - qStartTime) / 1000);

        recordAnswer(optIdx, optText, isCorrect, timeSpent);

        // Highlight options
        const optButtons = document.querySelectorAll('.option-btn');
        optButtons.forEach((btn, idx) => {
            btn.classList.add('disabled');
            if (idx === q.correctAnswer) {
                btn.classList.add('correct');
                const icon = btn.querySelector('.option-status-icon');
                if (icon) icon.textContent = '✓';
            }
            if (idx === optIdx && !isCorrect) {
                btn.classList.add('wrong');
                const icon = btn.querySelector('.option-status-icon');
                if (icon) icon.textContent = '✗';
            }
        });

        // Display explanation panel (visible until student clicks Next)
        showExplanation(isCorrect, q);
        updateAnsweredDisplay();
    }

    function showExplanation(isCorrect, q) {
        const panel = document.getElementById('explanationPanel');
        const iconEl = document.getElementById('explanationIcon');
        const statusEl = document.getElementById('explanationStatus');
        const ansTextEl = document.getElementById('correctAnswerText');
        const detailEl = document.getElementById('explanationDetail');

        if (!panel) return;

        panel.className = `explanation-panel ${isCorrect ? 'is-correct' : 'is-wrong'}`;
        if (iconEl) iconEl.textContent = isCorrect ? '✅' : '❌';
        if (statusEl) statusEl.textContent = isCorrect ? 'Correct Solution!' : 'Incorrect';
        if (ansTextEl) ansTextEl.textContent = q.options[q.correctAnswer];
        if (detailEl) detailEl.textContent = q.explanation;

        panel.style.display = 'block';
        // Smooth scroll to explanation if needed
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function recordAnswer(optIdx, optText = '', isCorrect = false, timeSpent = 0) {
        userAnswers[currentIndex] = {
            questionId: questions[currentIndex].id,
            selectedIdx: optIdx,
            selectedText: optText,
            isCorrect: optIdx !== null ? isCorrect : false,
            isSkipped: optIdx === null,
            timeSpent: timeSpent
        };
    }

    function handleNextClick() {
        if (!hasAnsweredCurrent) {
            // If student didn't pick an option and clicks next, record as skipped
            recordAnswer(null, '', false, Math.round((Date.now() - qStartTime) / 1000));
        }

        if (currentIndex < questions.length - 1) {
            advanceQuestion();
        } else {
            showSubmitModal();
        }
    }

    function advanceQuestion() {
        currentIndex++;
        renderQuestion(currentIndex);
    }

    function updateAnsweredDisplay() {
        const answeredCountEl = document.getElementById('answeredCount');
        if (!answeredCountEl) return;
        const answeredNum = Object.values(userAnswers).filter(a => !a.isSkipped).length;
        answeredCountEl.textContent = `${answeredNum} / ${questions.length} answered`;
    }

    // ---------- Timers ----------
    function startQuestionTimer() {
        questionTimeLeft = 90;
        updateQuestionTimerDisplay();

        clearInterval(questionTimer);
        questionTimer = setInterval(() => {
            questionTimeLeft--;
            updateQuestionTimerDisplay();

            if (questionTimeLeft <= 0) {
                clearInterval(questionTimer);
                // Time up for this question
                if (!hasAnsweredCurrent) {
                    recordAnswer(null, '', false, 90);
                }
                if (currentIndex < questions.length - 1) {
                    advanceQuestion();
                } else {
                    finishQuiz();
                }
            }
        }, 1000);
    }

    function resetQuestionTimer() {
        clearInterval(questionTimer);
        startQuestionTimer();
    }

    function updateQuestionTimerDisplay() {
        const timerVal = document.getElementById('timerValue');
        const timerBox = document.getElementById('timerDisplay');
        if (!timerVal) return;

        const mins = Math.floor(questionTimeLeft / 60);
        const secs = questionTimeLeft % 60;
        timerVal.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (timerBox) {
            if (questionTimeLeft <= 15) {
                timerBox.classList.add('urgent');
            } else {
                timerBox.classList.remove('urgent');
            }
        }
    }

    function startTotalTimer() {
        totalTimeLeft = 45 * 60; // 45 min
        updateTotalTimerDisplay();

        clearInterval(totalTimer);
        totalTimer = setInterval(() => {
            totalTimeLeft--;
            updateTotalTimerDisplay();

            if (totalTimeLeft <= 0) {
                clearInterval(totalTimer);
                alert('Total test time (45 mins) has expired! Your test will be auto-submitted.');
                finishQuiz();
            }
        }, 1000);
    }

    function updateTotalTimerDisplay() {
        const totalVal = document.getElementById('totalTimerValue');
        if (!totalVal) return;

        const mins = Math.floor(totalTimeLeft / 60);
        const secs = totalTimeLeft % 60;
        totalVal.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // ---------- Modal & Submission ----------
    function showSubmitModal() {
        const modal = document.getElementById('submitModal');
        const modalAns = document.getElementById('modalAnswered');
        const modalUnans = document.getElementById('modalUnanswered');

        const answeredNum = Object.values(userAnswers).filter(a => !a.isSkipped).length;
        const unansweredNum = questions.length - answeredNum;

        if (modalAns) modalAns.textContent = answeredNum;
        if (modalUnans) modalUnans.textContent = unansweredNum;
        if (modal) modal.style.display = 'flex';
    }

    function finishQuiz() {
        clearInterval(questionTimer);
        clearInterval(totalTimer);

        // Exit fullscreen if active
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            try {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            } catch (e) {}
        }

        const totalTimeSpentSeconds = Math.round((Date.now() - testStartTime) / 1000);

        // Calculate score
        let correctCount = 0;
        let wrongCount = 0;
        let skippedCount = 0;
        const reviewDetails = [];

        questions.forEach((q, idx) => {
            const ans = userAnswers[idx];
            const isAns = ans && !ans.isSkipped;
            const isCor = ans && ans.isCorrect;

            if (!isAns) skippedCount++;
            else if (isCor) correctCount++;
            else wrongCount++;

            reviewDetails.push({
                questionId: q.id,
                testIndex: idx + 1,
                topic: q.topic,
                difficulty: q.difficulty,
                question: q.question,
                code: q.code,
                options: q.options,
                correctAnswer: q.correctAnswer,
                selectedIdx: ans ? ans.selectedIdx : null,
                selectedText: ans ? ans.selectedText : null,
                isCorrect: !!isCor,
                isSkipped: !isAns,
                explanation: q.explanation
            });
        });

        const resultPayload = {
            student: student,
            date: new Date().toISOString(),
            totalQuestions: questions.length,
            score: correctCount,
            correctCount,
            wrongCount,
            skippedCount,
            percentage: Math.round((correctCount / questions.length) * 100),
            totalTimeSeconds: totalTimeSpentSeconds,
            tabViolations: tabViolations,
            mode: student.mode,
            review: reviewDetails
        };

        // Save active result
        sessionStorage.setItem('infy_current_result', JSON.stringify(resultPayload));

        // Append to history in localStorage
        try {
            const rawHist = localStorage.getItem('infy_history');
            const history = rawHist ? JSON.parse(rawHist) : [];
            history.push({
                date: resultPayload.date,
                mode: student.mode,
                score: correctCount,
                total: questions.length,
                studentName: student.name,
                roll: student.roll
            });
            localStorage.setItem('infy_history', JSON.stringify(history));
        } catch (e) {
            console.error('Failed to update test history', e);
        }

        window.location.href = 'results.html';
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/[&<>"']/g, (m) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m]));
    }
})();
