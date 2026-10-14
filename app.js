/**
 * 張翔鈞 Xiang-Jun Zhang | FinTech Quantitative Portfolio & Resume Script
 * Features: Dark/Light Mode, Bilingual Toggle (繁中 / EN), Animated Counters,
 * Interactive Go Board (Weiqi) Sandbox, Project Filtering, Mobile Navigation.
 */

// ==========================================================================
// 1. Bilingual Data Dictionary (i18n)
// ==========================================================================
const i18n = {
  zh: {
    "nav.about": "關於我",
    "nav.journey": "轉折歷程",
    "nav.skills": "核心能力",
    "nav.projects": "量化研究",
    "nav.go": "圍棋✕投資風控",
    "nav.audit": "履歷體檢",
    "nav.contact": "聯絡交流",
    "btn.exportPdf": "匯出履歷",
    
    "hero.badge": "國立臺中科技大學 財金所 ✕ 量化分析與資產配置",
    "hero.greeting": "你好，我是",
    "hero.subtitle": "融合生技實證邏輯、澎湖消防局 500+ 件前線極限抗壓、業餘圍棋六段大局算度，立志成為實力、風控與誠信責任兼備的專業投信基金經理人。",
    "hero.ctaProjects": "查看量化作品",
    "hero.ctaJourney": "跨領域轉折故事",
    
    "stat.go": "業餘圍棋六段 (頂尖大局博弈)",
    "stat.ems": "澎湖消防救護任務 ✕ 1起OHCA成功救援",
    "stat.roi": "逆向價值投資自選策略實盤翻倍",
    "stat.license": "自修跨考證券商高級業務員證照",
    
    "about.kicker": "WHO I AM",
    "about.title": "跨越生技、前線救護與圍棋大局觀的財金量化開拓者",
    "about.card1Title": "生技科學實證基底",
    "about.card1Desc": "大學畢業於國立中興大學生物科技學系，專攻醫學與生物催化專題研究。實驗室培養的嚴密對照組思維、統計假設檢驗與數據敏感度，成為日後建構量化策略、排除過度擬合 (Overfitting) 的科學基石。",
    "about.card2Title": "澎湖消防極限抗壓與志向啟蒙",
    "about.card2Desc": "服役於澎湖縣消防局，親身參與近 500 件緊急救護，成功以 CPR 將命危公務司機從鬼門關拉回；並深入了解詐騙受害者的無助，領悟到守護他人不僅止於生理生命，更在於建立正確投資與資產保護體系。",
    "about.card3Title": "圍棋 6 段之大局觀與風控哲學",
    "about.card3Desc": "自幼習弈榮獲業餘圍棋六段。圍棋「捨小就大、勝率動態推演、嚴格止損、精準官子」的底層思維，與金融市場中面對黑天鵝事件的冷靜定力、下單決策果斷性及資產配置策略完全同構。",
    "about.card4Title": "全方位量化程式與 AI 理財架構",
    "about.card4Desc": "現就讀國立臺中科技大學財金所碩二，自學精通 Python、XScript，每週風雨無阻赴雲林虎尾科大向許江河副教授深造交易回測技術；已完成 DNN 神經網路模型與 AI 理財機器人 Canvas 架構規劃。",
    
    "journey.kicker": "MY CAREER TRANSFORMATION",
    "journey.title": "人生轉捩與心態演進歷程",
    "journey.desc": "每一次關鍵抉擇，都是為日後在資本市場乘風破浪積累深度與韌性。",
    
    "skills.kicker": "COMPETENCY MATRIX",
    "skills.title": "核心競爭力矩陣與專業證照",
    
    "projects.kicker": "PORTFOLIO & RESEARCH",
    "projects.title": "量化專案與財金科技研究",
    "projects.desc": "結合理論模型、量化回測程式與實戰投資驗證的成果。",
    
    "go.kicker": "THE MINDSET MAPPING",
    "go.title": "圍棋六段戰略 ✕ 金融交易風控思維模型",
    "go.desc": "點擊下方棋盤交互區域，探索圍棋最高境界如何轉化為金融市場中的頂級決策力。",
    
    "audit.kicker": "EXECUTIVE AUDIT",
    "audit.title": "履歷專業診斷與升級進化報告",
    "audit.desc": "對比原始敘事型自傳與本網站現代化投信專業履歷之優化亮點。",
    
    "contact.kicker": "GET IN TOUCH",
    "contact.title": "聯絡交流與合作機會",
    "contact.desc": "歡迎金融機構主管、量化研究團隊、學術師長及業界夥伴隨時聯繫交流！"
  },
  en: {
    "nav.about": "About",
    "nav.journey": "Journey",
    "nav.skills": "Skills & Certs",
    "nav.projects": "Projects",
    "nav.go": "Go & Risk Control",
    "nav.audit": "Resume Audit",
    "nav.contact": "Contact",
    "btn.exportPdf": "Export CV",
    
    "hero.badge": "NTCUST Finance Master's ✕ Quantitative Asset Allocation",
    "hero.greeting": "Hello, I am",
    "hero.subtitle": "Synthesizing scientific experiment rigor, 500+ emergency EMS crisis resilience, and 6-Dan Go strategic game theory — aspiring to become an exceptional Portfolio Manager with high alpha and rigorous risk ethics.",
    "hero.ctaProjects": "Explore Quant Projects",
    "hero.ctaJourney": "My Pivotal Journey",
    
    "stat.go": "6-Dan Go Master (Elite Strategic Game Theory)",
    "stat.ems": "500+ EMS Rescues ✕ 1 OHCA Life Revived via CPR",
    "stat.roi": "100%+ Live Portfolio Alpha (Contrarian Value)",
    "stat.license": "Senior Securities Specialist (Cleared in 3 Mos)",
    
    "about.kicker": "WHO I AM",
    "about.title": "FinTech Quantitative Pioneer Bridging Biotech, Emergency EMS & Go 6-Dan",
    "about.card1Title": "Scientific Empirical Foundation",
    "about.card1Desc": "Graduated from National Chung Hsing University (Biotechnology). Trained in hypothesis testing, control experiments, and statistical rigor — essential for avoiding data snooping and model overfitting in quantitative finance.",
    "about.card2Title": "Penghu EMS Resilience & Purpose",
    "about.card2Desc": "Served at Penghu Fire Bureau EMS handling ~500 missions. Successfully performed CPR to revive a dying driver on duty (OHCA). Witnessed financial fraud victims, realizing that saving lives also means protecting people's lifelong wealth through sound investing.",
    "about.card3Title": "6-Dan Go Mindset & Risk Philosophy",
    "about.card3Desc": "Ranked 6-Dan amateur in Weiqi (Go). The core principles of Go — sacrifice tactical stones for strategic initiative, dynamic win-rate calculation, and ruthless stop-losses — translate seamlessly into trading discipline and capital allocation.",
    "about.card4Title": "Quantitative Programming & AI Systems",
    "about.card4Desc": "Master's candidate in Finance at NTCUST. Self-taught Python and XScript. Commuted weekly to NFU to study quantitative backtesting under Prof. Chiang-Ho Hsu. Designed DNN prediction models and Robo-Advisor Canvas architectures.",
    
    "journey.kicker": "MY CAREER TRANSFORMATION",
    "journey.title": "Pivotal Milestones & Growth Evolution",
    "journey.desc": "Every major life crossroad has fortified my resilience and analytical depth in navigating capital markets.",
    
    "skills.kicker": "COMPETENCY MATRIX",
    "skills.title": "Core Competencies & Professional Licenses",
    
    "projects.kicker": "PORTFOLIO & RESEARCH",
    "projects.title": "Quantitative Research & FinTech Projects",
    "projects.desc": "Bridging institutional theoretical frameworks, code backtesting, and live market execution.",
    
    "go.kicker": "THE MINDSET MAPPING",
    "go.title": "6-Dan Go Strategy ✕ Financial Risk Management",
    "go.desc": "Click on the interactive board to explore how elite Go principles empower market risk discipline.",
    
    "audit.kicker": "EXECUTIVE AUDIT",
    "audit.title": "Resume Diagnostics & Executive Upgrade Report",
    "audit.desc": "A direct comparison between the initial essay draft and this institutional-grade portfolio.",
    
    "contact.kicker": "GET IN TOUCH",
    "contact.title": "Connect & Collaboration",
    "contact.desc": "Welcoming discussions with asset managers, quantitative funds, academic mentors, and industry peers."
  }
};

let currentLang = 'zh';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
  document.getElementById('langLabel').textContent = lang === 'zh' ? 'EN' : '繁中';
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
}

// ==========================================================================
// 2. Dark / Light Theme Handling
// ==========================================================================
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('xiangjun_theme', theme);
  if (theme === 'light') {
    themeIcon.className = 'fa-regular fa-sun';
  } else {
    themeIcon.className = 'fa-regular fa-moon';
  }
}

const savedTheme = localStorage.getItem('xiangjun_theme') || 'dark';
applyTheme(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const target = current === 'dark' ? 'light' : 'dark';
  applyTheme(target);
  drawGoBoard(); // Redraw canvas for theme contrast
});

// Language Toggle Listener
const langToggleBtn = document.getElementById('langToggle');
langToggleBtn.addEventListener('click', () => {
  const nextLang = currentLang === 'zh' ? 'en' : 'zh';
  setLanguage(nextLang);
});

// ==========================================================================
// 3. Mobile Navigation Menu
// ==========================================================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// ==========================================================================
// 4. Animated Counters for Metrics
// ==========================================================================
function initCounters() {
  const counters = document.querySelectorAll('.metric-value');
  let activated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !activated) {
        activated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          const duration = 1500;
          const stepTime = 20;
          const stepVal = target / (duration / stepTime);

          const timer = setInterval(() => {
            count += stepVal;
            if (count >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(count);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const ribbon = document.querySelector('.metrics-ribbon');
  if (ribbon) observer.observe(ribbon);
}

// ==========================================================================
// 5. Interactive 9x9 Go Board (Weiqi) Sandbox
// ==========================================================================
const canvas = document.getElementById('goCanvas');
const ctx = canvas.getContext('2d');
const resetBtn = document.getElementById('resetBoardBtn');
const boardMoveInfo = document.getElementById('boardMoveInfo');
const currentTurnText = document.getElementById('currentTurnText');

const BOARD_SIZE = 9;
const BOARD_PADDING = 28;
let cellSpacing = (canvas.width - BOARD_PADDING * 2) / (BOARD_SIZE - 1);

// Board State: 0 = Empty, 1 = Black, 2 = White
let boardState = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(0));
let currentTurn = 1; // 1 = Black, 2 = White
let totalMoves = 0;

function drawGoBoard() {
  const w = canvas.width;
  const h = canvas.height;
  
  // Board wood texture background
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  ctx.fillStyle = isLight ? '#e6be8a' : '#d2a679';
  ctx.fillRect(0, 0, w, h);

  // Grid Lines
  ctx.strokeStyle = '#4a2c11';
  ctx.lineWidth = 1.2;

  for (let i = 0; i < BOARD_SIZE; i++) {
    const pos = BOARD_PADDING + i * cellSpacing;
    // Horizontal
    ctx.beginPath();
    ctx.moveTo(BOARD_PADDING, pos);
    ctx.lineTo(w - BOARD_PADDING, pos);
    ctx.stroke();

    // Vertical
    ctx.beginPath();
    ctx.moveTo(pos, BOARD_PADDING);
    ctx.lineTo(pos, h - BOARD_PADDING);
    ctx.stroke();
  }

  // Star points (Hoshi) for 9x9: center (4,4) and (2,2), (2,6), (6,2), (6,6)
  const starCoords = [
    [2, 2], [2, 6], [4, 4], [6, 2], [6, 6]
  ];
  ctx.fillStyle = '#4a2c11';
  starCoords.forEach(([r, c]) => {
    const x = BOARD_PADDING + c * cellSpacing;
    const y = BOARD_PADDING + r * cellSpacing;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw Stones
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (boardState[r][c] !== 0) {
        drawStone(r, c, boardState[r][c]);
      }
    }
  }
}

function drawStone(row, col, colorVal) {
  const x = BOARD_PADDING + col * cellSpacing;
  const y = BOARD_PADDING + row * cellSpacing;
  const radius = cellSpacing * 0.44;

  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);

  // Stone gradient & shadow
  const grad = ctx.createRadialGradient(
    x - radius * 0.3, y - radius * 0.3, radius * 0.1,
    x, y, radius
  );

  if (colorVal === 1) { // Black Stone
    grad.addColorStop(0, '#555');
    grad.addColorStop(1, '#111');
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
  } else { // White Stone
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(1, '#dcdcdc');
    ctx.shadowColor = 'rgba(0,0,0,0.35)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
  }

  ctx.fillStyle = grad;
  ctx.fill();
  ctx.restore();
}

// Click to place stone
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  
  const clientX = (e.clientX - rect.left) * scaleX;
  const clientY = (e.clientY - rect.top) * scaleY;

  const col = Math.round((clientX - BOARD_PADDING) / cellSpacing);
  const row = Math.round((clientY - BOARD_PADDING) / cellSpacing);

  if (row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE) {
    if (boardState[row][col] === 0) {
      boardState[row][col] = currentTurn;
      totalMoves++;
      
      // Update Turn
      currentTurn = currentTurn === 1 ? 2 : 1;
      
      drawGoBoard();
      updateBoardStatus();
      pulseHighlightCard(totalMoves);
    }
  }
});

function updateBoardStatus() {
  const turnName = currentTurn === 1 ? '黑棋 (先行)' : '白棋 (後著)';
  boardMoveInfo.innerHTML = `已落子: ${totalMoves} 手 ｜ 目前輪到: <strong>${turnName}</strong>`;
}

function pulseHighlightCard(moves) {
  const index = (moves % 4) + 1;
  document.querySelectorAll('.phi-card').forEach(c => c.style.borderColor = 'var(--border-color)');
  const targetCard = document.querySelector(`.phi-card[data-step="${index}"]`);
  if (targetCard) {
    targetCard.style.borderColor = 'var(--accent-emerald)';
    targetCard.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.3)';
    setTimeout(() => {
      targetCard.style.boxShadow = 'none';
    }, 1200);
  }
}

// Reset Board
resetBtn.addEventListener('click', () => {
  boardState = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(0));
  currentTurn = 1;
  totalMoves = 0;
  drawGoBoard();
  updateBoardStatus();
  document.querySelectorAll('.phi-card').forEach(c => c.style.borderColor = 'var(--border-color)');
});

// Setup Initial Nice Formation on Board
function presetFormation() {
  boardState[2][2] = 1; // Black Star
  boardState[6][6] = 2; // White Star
  boardState[2][6] = 2; // White Star
  boardState[6][2] = 1; // Black Star
  boardState[4][4] = 1; // Tengen
  totalMoves = 5;
  currentTurn = 2;
  drawGoBoard();
  updateBoardStatus();
}

// ==========================================================================
// 6. Project Filter Logic
// ==========================================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterVal = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filterVal === 'all' || card.getAttribute('data-category') === filterVal) {
        card.style.display = 'flex';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });
  });
});

// ==========================================================================
// 7. Navbar Active Spy on Scroll
// ==========================================================================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 120;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ==========================================================================
// Initialization on DOM Ready
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initCounters();
  presetFormation();
});
