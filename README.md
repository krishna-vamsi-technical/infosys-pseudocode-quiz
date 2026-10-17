# 🚀 Infosys SE Pseudocode Quiz Portal

> A modern, responsive, and feature-rich examination & practice portal for students preparing for the **Infosys Software Engineer recruitment drive**.
> Features **300 authentic pseudocode questions** across 9 core topics, with instant step-by-step solution explanations, randomized test draws, anti-cheat detection, and comprehensive performance analytics.

---

## 🌐 Live Portal
- **Live URL**: [https://krishnavamsitechnical-droid.github.io/infosys-pseudocode-quiz/](https://krishnavamsitechnical-droid.github.io/infosys-pseudocode-quiz/)
- **Repository**: [https://github.com/krishnavamsitechnical-droid/infosys-pseudocode-quiz](https://github.com/krishnavamsitechnical-droid/infosys-pseudocode-quiz)

---

## ✨ Features

- 🎯 **300 Authentic Pseudocode Questions**: Modeled directly after actual Infosys SE recruitment test patterns.
- 🎲 **Smart Randomization**: Every test session randomly draws **30 questions** from the pool of 300. Unseen questions are tracked using `localStorage`, ensuring repeat attempts get fresh questions.
- 💡 **Instant Solution & Reasoning**: As soon as a student selects an option, the correct solution and a detailed line-by-line code trace explanation are displayed immediately, remaining visible until the candidate proceeds to the next question.
- ⏱️ **Dual Test Modes**:
  - **Mock Test Mode**: Real exam simulation with a 90-second timer per question, a 45-minute total timer cap, one-way navigation, and automated submission.
  - **Practice Mode**: Untimed, stress-free self-study mode with immediate answer verification.
- 🔒 **Built-in Anti-Cheat Protection (Mock Mode)**:
  - Enforced Fullscreen mode with exit detection and alert overlays.
  - Window blur and tab-switch monitoring with violation logs.
  - Disabled right-click context menu, copy/paste, and developer shortcut keys.
- 📊 **Detailed Result Analytics**:
  - Animated SVG circular score indicator.
  - Breakdown of Correct, Incorrect, and Skipped questions.
  - Topic-wise mastery progress bars.
  - Complete accordion answer key review with step-by-step explanations and filter options (All / Correct / Wrong / Skipped).
- 🌓 **Dark / Light Theme Toggle**: Seamless persistent theme system with dark mode default and Infosys-inspired blue accents.
- 📱 **Fully Responsive**: Optimized for desktop, laptop, tablet, and mobile browsers.
- ⚡ **Zero-Dependency Vanilla Stack**: Pure HTML5, CSS3, and modern Vanilla JavaScript — runs anywhere with zero build steps or server requirements.

---

## 📚 Topics Covered

| # | Topic | Questions | Difficulty |
|---|---|---|---|
| 1 | Arithmetic Operators (`+`, `-`, `*`, `/`, `mod`) | 35 | Basic |
| 2 | Relational & Logical Operators (`AND`, `OR`, `NOT`, `EQUALS`) | 30 | Basic |
| 3 | Bitwise Operators (`&`, `\|`, `^`, `~`, `<<`, `>>`) | 35 | Basic–Medium |
| 4 | Conditional Statements (`if-else`, nested conditionals) | 30 | Medium |
| 5 | Loops (`for`, `while`, step increments, nested loops) | 40 | Medium |
| 6 | Functions (call by value, return values, scope) | 30 | Medium |
| 7 | Recursion (linear, tree recursion, base cases) | 35 | Medium |
| 8 | Math + Bitwise Hybrid | 30 | Medium |
| 9 | Loops + Recursion Combinations | 35 | Medium–Hard |

---

## 📁 Repository Structure

```
infosys-pseudocode-quiz/
├── index.html                  # Candidate registration & mode selection
├── instructions.html           # Test guidelines, anti-cheat rules & agreement
├── quiz.html                   # Interactive quiz engine with code display & timers
├── results.html                # Score breakdown, topic analysis & answer review
├── css/
│   └── style.css               # Master stylesheet (theme tokens, layout, animations)
├── js/
│   ├── app.js                  # Landing page logic & past attempt history
│   ├── instructions.js         # Mode setup & fullscreen initialization
│   ├── quiz.js                 # Quiz loop, randomizer, timers, anti-cheat & scoring
│   └── results.js              # Result charts, breakdown & review accordion
├── data/
│   ├── questions.json          # Master JSON database of all 300 questions
│   ├── questions.js            # Offline/CORS-safe global question pool
│   ├── set-01.json             # Set 1 (Questions 1 - 30)
│   ├── set-02.json             # Set 2 (Questions 31 - 60)
│   ├── set-03.json             # Set 3 (Questions 61 - 90)
│   ├── set-04.json             # Set 4 (Questions 91 - 120)
│   ├── set-05.json             # Set 5 (Questions 121 - 150)
│   ├── set-06.json             # Set 6 (Questions 151 - 180)
│   ├── set-07.json             # Set 7 (Questions 181 - 210)
│   ├── set-08.json             # Set 8 (Questions 211 - 240)
│   ├── set-09.json             # Set 9 (Questions 241 - 270)
│   └── set-10.json             # Set 10 (Questions 271 - 300)
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages deployment workflow
└── README.md
```

---

## 🛠️ How to Publish to GitHub Pages

### 1. Initialize Git & Commit
Open a terminal in the `infosys-pseudocode-quiz` directory:

```bash
git init
git add .
git commit -m "Initial commit: Infosys SE Pseudocode Quiz Portal with 300 questions"
```

### 2. Push to GitHub
Create a new public repository named `infosys-pseudocode-quiz` under your GitHub account (`krishnavamsitechnical-droid`), then run:

```bash
git branch -M main
git remote add origin https://github.com/krishnavamsitechnical-droid/infosys-pseudocode-quiz.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/krishnavamsitechnical-droid/infosys-pseudocode-quiz`
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions** (recommended) or select **Deploy from a branch** (`main` / root).
4. Your portal will be live in 1–2 minutes at:
   `https://krishnavamsitechnical-droid.github.io/infosys-pseudocode-quiz/`

---

## 💻 Running Locally
You can test the portal locally by simply double-clicking `index.html` in your file explorer, or running a lightweight local server:

```bash
# Using Python
python -m http.server 8000

# Open in browser:
# http://localhost:8000/
```

---

## 📝 License
This project is open-source and free to use for educational and preparation purposes.
