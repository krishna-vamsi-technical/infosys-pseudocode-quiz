/**
 * Infosys Pseudocode Quiz Portal — App JS (Landing Page)
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initParticles();
    initModeSelector();
    initHistory();
    initForm();
});

// ---------- Theme Management ----------
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

// ---------- Gentle Particles Background ----------
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 25;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 6 + 2;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        p.style.opacity = (Math.random() * 0.4 + 0.1).toString();
        p.style.animationDuration = `${Math.random() * 20 + 10}s`;
        p.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(p);
    }
}

// ---------- Mode Selection Cards ----------
function initModeSelector() {
    const cards = document.querySelectorAll('.mode-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            const radio = card.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });
}

// ---------- Registration Form & Flow ----------
function initForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    // Pre-fill previously entered student details if available
    const lastStudent = localStorage.getItem('infy_last_student');
    if (lastStudent) {
        try {
            const s = JSON.parse(lastStudent);
            if (s.name) document.getElementById('studentName').value = s.name;
            if (s.roll) document.getElementById('rollNumber').value = s.roll;
            if (s.college) document.getElementById('college').value = s.college;
        } catch (e) {}
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('studentName').value.trim();
        const roll = document.getElementById('rollNumber').value.trim();
        const college = document.getElementById('college').value.trim();
        const modeInput = document.querySelector('input[name="quizMode"]:checked');
        const mode = modeInput ? modeInput.value : 'mock';

        if (!name || !roll || !college) {
            alert('Please fill in all fields (Name, Roll Number, and College).');
            return;
        }

        const studentData = {
            name,
            roll,
            college,
            mode,
            createdAt: new Date().toISOString()
        };

        // Save active session & remember user info
        sessionStorage.setItem('infy_student', JSON.stringify(studentData));
        localStorage.setItem('infy_last_student', JSON.stringify({ name, roll, college }));

        // Navigate to instructions
        window.location.href = 'instructions.html';
    });
}

// ---------- Past Attempts / History ----------
function initHistory() {
    const historySection = document.getElementById('pastAttempts');
    const list = document.getElementById('attemptsList');
    if (!historySection || !list) return;

    const raw = localStorage.getItem('infy_history');
    if (!raw) return;

    try {
        const history = JSON.parse(raw);
        if (!Array.isArray(history) || history.length === 0) return;

        historySection.style.display = 'block';
        list.innerHTML = '';

        // Show latest 5 attempts
        const recent = history.slice(-5).reverse();
        recent.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = 'attempt-item';
            const dateStr = item.date ? new Date(item.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Recent';
            const pct = Math.round((item.score / item.total) * 100);
            const badgeClass = pct >= 70 ? 'badge-pass' : 'badge-retake';

            div.innerHTML = `
                <div class="attempt-left">
                    <span class="attempt-mode">${item.mode === 'mock' ? '⏱️ Mock Test' : '📖 Practice'}</span>
                    <span class="attempt-date">${dateStr}</span>
                </div>
                <div class="attempt-right">
                    <span class="attempt-score ${badgeClass}">${item.score} / ${item.total} (${pct}%)</span>
                </div>
            `;
            list.appendChild(div);
        });
    } catch (e) {
        console.error('Failed to load past attempts', e);
    }
}
