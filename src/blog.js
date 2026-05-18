// src/blog.js — Blog sayfaları: nav + copy link
import './styles.css';
import './blog.css';

// ─── Nav scroll hide/show ─────────────────────────────────────
const nav = document.querySelector('.nav');
let lastY = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y > lastY && y > 80) nav?.classList.add('nav--hidden');
      else nav?.classList.remove('nav--hidden');
      lastY = y;
      ticking = false;
    });
    ticking = true;
  }
});

// ─── Nav dropdown toggle ──────────────────────────────────────
document.querySelectorAll('.nav__dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
  });
  btn.addEventListener('blur', () => {
    setTimeout(() => btn.setAttribute('aria-expanded', 'false'), 150);
  });
});

// ─── Copy link button ─────────────────────────────────────────
const copyBtn = document.getElementById('copy-link');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      copyBtn.classList.add('copied');
      copyBtn.textContent = 'Kopyalandı!';
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.textContent = 'Linki Kopyala';
      }, 2000);
    });
  });
}
