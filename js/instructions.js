/**
 * Infosys Pseudocode Quiz Portal — Instructions Page JS
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initParticles();
    loadStudentAndRules();
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

function loadStudentAndRules() {
    const raw = sessionStorage.getItem('infy_student');
    if (!raw) {
        window.location.href = 'index.html';
        return;
    }

    const student = JSON.parse(raw);
    const infoEl = document.getElementById('studentInfo');
    const titleEl = document.getElementById('instructionsTitle');
    const mockBox = document.getElementById('mockInstructions');
    const practiceBox = document.getElementById('practiceInstructions');
    const readyCheck = document.getElementById('readyCheck');
    const beginBtn = document.getElementById('beginBtn');
    const beginBtnText = document.getElementById('beginBtnText');

    if (infoEl) {
        infoEl.innerHTML = `Candidate: <strong>${escapeHtml(student.name)}</strong> (${escapeHtml(student.roll)}) • ${escapeHtml(student.college)}`;
    }

    const isPractice = student.mode === 'practice';

    if (isPractice) {
        if (titleEl) titleEl.textContent = 'Practice Mode Instructions';
        if (mockBox) mockBox.style.display = 'none';
        if (practiceBox) practiceBox.style.display = 'block';
        if (beginBtnText) beginBtnText.textContent = 'Start Practice';
    } else {
        if (titleEl) titleEl.textContent = 'Mock Test Instructions';
        if (mockBox) mockBox.style.display = 'block';
        if (practiceBox) practiceBox.style.display = 'none';
        if (beginBtnText) beginBtnText.textContent = 'Begin Test (Fullscreen)';
    }

    if (readyCheck && beginBtn) {
        readyCheck.addEventListener('change', () => {
            beginBtn.disabled = !readyCheck.checked;
        });

        beginBtn.addEventListener('click', async () => {
            if (!readyCheck.checked) return;

            // In mock mode, request fullscreen
            if (!isPractice) {
                try {
                    if (document.documentElement.requestFullscreen) {
                        await document.documentElement.requestFullscreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        await document.documentElement.webkitRequestFullscreen();
                    }
                } catch (err) {
                    console.log('Fullscreen request ignored or blocked:', err);
                }
            }

            window.location.href = 'quiz.html';
        });
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    }[m]));
}
