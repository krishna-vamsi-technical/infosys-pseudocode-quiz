/**
 * Infosys Pseudocode Quiz Portal — Results & Review JS
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initParticles();
    loadResults();
});

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('infy_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('infy_theme', next);
            updateThemeIcon(next);
        });
    }
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
}

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 5 + 2;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        p.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        p.style.animationDuration = `${Math.random() * 20 + 10}s`;
        container.appendChild(p);
    }
}

function loadResults() {
    const raw = sessionStorage.getItem('infy_current_result');
    if (!raw) {
        window.location.href = 'index.html';
        return;
    }

    const data = JSON.parse(raw);
    const student = data.student || {};

    // Header info
    const studentEl = document.getElementById('scoreStudent');
    const metaEl = document.getElementById('scoreMeta');
    if (studentEl) {
        studentEl.innerHTML = `Candidate: <strong>${escapeHtml(student.name || 'Candidate')}</strong> (${escapeHtml(student.roll || 'N/A')}) • ${escapeHtml(student.college || '')}`;
    }
    if (metaEl) {
        const modeLabel = data.mode === 'mock' ? '⏱️ Mock Test Mode' : '📖 Practice Mode';
        const dateStr = data.date ? new Date(data.date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }) : '';
        metaEl.textContent = `${modeLabel} • Completed on ${dateStr}`;
    }

    // Score Circle animation
    const scoreNum = document.getElementById('scoreNum');
    const scorePercent = document.getElementById('scorePercent');
    const scoreFill = document.getElementById('scoreFill');

    if (scoreNum) scoreNum.textContent = data.score;
    if (scorePercent) scorePercent.textContent = `${data.percentage}%`;

    if (scoreFill) {
        const circumference = 2 * Math.PI * 52; // ~326.72
        scoreFill.style.strokeDasharray = `${circumference}`;
        scoreFill.style.strokeDashoffset = `${circumference}`;

        // Animate stroke offset
        setTimeout(() => {
            const offset = circumference - (data.percentage / 100) * circumference;
            scoreFill.style.strokeDashoffset = `${offset}`;
        }, 150);
    }

    // Breakdown numbers
    const corEl = document.getElementById('correctCount');
    const wroEl = document.getElementById('wrongCount');
    const skpEl = document.getElementById('skippedCount');
    const timeEl = document.getElementById('timeTaken');

    if (corEl) corEl.textContent = data.correctCount;
    if (wroEl) wroEl.textContent = data.wrongCount;
    if (skpEl) skpEl.textContent = data.skippedCount;

    if (timeEl) {
        const mins = Math.floor((data.totalTimeSeconds || 0) / 60);
        const secs = (data.totalTimeSeconds || 0) % 60;
        timeEl.textContent = `${mins}m ${secs.toString().padStart(2, '0')}s`;
    }

    // Evaluation message
    const msgEl = document.getElementById('scoreMessage');
    if (msgEl) {
        let msg = '';
        if (data.percentage >= 80) {
            msg = '🌟 Outstanding! You scored above 80% and are well-prepared for the Infosys SE Pseudocode round!';
        } else if (data.percentage >= 60) {
            msg = '👍 Good Performance! Review your wrong answers below to bridge the gap and score higher.';
        } else {
            msg = '💡 Keep Practicing! Step through the explanations and code traces below to master pseudocode patterns.';
        }
        msgEl.textContent = msg;
    }

    // Tab violations warning
    const violBox = document.getElementById('tabViolations');
    const violText = document.getElementById('violationText');
    if (data.tabViolations && data.tabViolations > 0) {
        if (violBox) violBox.style.display = 'flex';
        if (violText) violText.textContent = `${data.tabViolations} security/focus violation(s) recorded during this attempt.`;
    }

    // Topic breakdown
    renderTopicBreakdown(data.review || []);

    // Review list
    renderReviewList(data.review || []);
    initReviewFilters(data.review || []);

    // Retry button
    const retryBtn = document.getElementById('retryBtn');
    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            window.location.href = 'instructions.html';
        });
    }
}

function renderTopicBreakdown(reviewItems) {
    const container = document.getElementById('topicBars');
    if (!container) return;
    container.innerHTML = '';

    const topicStats = {};
    reviewItems.forEach(item => {
        const t = item.topic || 'General';
        if (!topicStats[t]) {
            topicStats[t] = { correct: 0, total: 0 };
        }
        topicStats[t].total++;
        if (item.isCorrect) topicStats[t].correct++;
    });

    Object.keys(topicStats).forEach(topic => {
        const stat = topicStats[topic];
        const pct = Math.round((stat.correct / stat.total) * 100);

        const itemEl = document.createElement('div');
        itemEl.className = 'topic-bar-item';
        itemEl.innerHTML = `
            <span class="topic-bar-name">${escapeHtml(topic)}</span>
            <div class="topic-bar-track">
                <div class="topic-bar-fill" style="width: ${pct}%"></div>
            </div>
            <span class="topic-bar-score">${stat.correct}/${stat.total} (${pct}%)</span>
        `;
        container.appendChild(itemEl);
    });
}

function renderReviewList(items, filter = 'all') {
    const list = document.getElementById('reviewList');
    if (!list) return;
    list.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    items.forEach((item, idx) => {
        let status = 'skipped';
        if (!item.isSkipped) {
            status = item.isCorrect ? 'correct' : 'wrong';
        }

        if (filter !== 'all' && filter !== status) {
            return;
        }

        const div = document.createElement('div');
        // Make items expanded by default so candidate can read everything cleanly
        div.className = `review-item ${status} expanded`;

        const badgeText = status === 'correct' ? 'Correct' : (status === 'wrong' ? 'Wrong' : 'Skipped');

        let optionsHtml = '';
        item.options.forEach((optText, optIdx) => {
            const isKey = (optIdx === item.correctAnswer);
            const isPicked = (optIdx === item.selectedIdx);

            let optClass = 'neutral';
            let mark = '';

            if (isKey && isPicked) {
                optClass = 'your-correct';
                mark = ' (Your Choice ✓)';
            } else if (isKey) {
                optClass = 'correct-answer';
                mark = ' (Correct Answer)';
            } else if (isPicked) {
                optClass = 'your-answer';
                mark = ' (Your Choice ✗)';
            }

            optionsHtml += `
                <div class="review-option ${optClass}">
                    <strong>${letters[optIdx]})</strong>
                    <span>${escapeHtml(optText)}${mark}</span>
                </div>
            `;
        });

        div.innerHTML = `
            <div class="review-item-header" onclick="this.parentElement.classList.toggle('expanded')">
                <span class="review-q-num">Q${item.testIndex || (idx + 1)}. ${escapeHtml(item.topic || 'Pseudocode')}</span>
                <span class="review-result-badge ${status}">${badgeText}</span>
            </div>
            <div class="review-item-body">
                <div class="review-question-text">${escapeHtml(item.question || 'What will be the output of the following pseudocode?')}</div>
                <pre class="review-code">${escapeHtml(item.code)}</pre>
                <div class="review-options">
                    ${optionsHtml}
                </div>
                <div class="review-explanation">
                    <strong>💡 Solution & Code Trace:</strong><br>
                    ${escapeHtml(item.explanation)}
                </div>
            </div>
        `;

        list.appendChild(div);
    });

    if (list.children.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding: 24px; color: var(--text-secondary);">No questions found under this filter.</div>`;
    }
}

function initReviewFilters(items) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter || 'all';
            renderReviewList(items, filter);
        });
    });
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
