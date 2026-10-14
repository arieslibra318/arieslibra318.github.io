/**
 * 張翔鈞 Xiang-Jun Zhang | 財務金融研究所 個人履歷作品集 Script
 * Features: Dark/Light Mode, Mobile Navigation, Navbar Active Spy on Scroll.
 */

// ==========================================================================
// 1. Dark / Light Theme Handling
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
});

// ==========================================================================
// 2. Mobile Navigation Menu
// ==========================================================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// ==========================================================================
// 3. Navbar Active Spy on Scroll
// ==========================================================================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100;

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
