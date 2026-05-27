// src/iletisim.js — Contact page: nav + Netlify form submission
import './styles.css';

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

// ─── Contact Form AJAX Submission (Netlify) ────────────────────
function initContactPageForm() {
  const form = document.getElementById('contact-page-form');
  const status = document.getElementById('contact-page-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form__submit');
    
    // Simple verification
    if (!form.checkValidity()) {
      status.textContent = '✕ Lütfen gerekli tüm alanları doldurun.';
      status.className = 'form__status form__status--error';
      return;
    }

    btn.disabled = true;
    btn.querySelector('.form__submit-text').textContent = 'Gönderiliyor…';
    status.textContent = '';
    status.className = 'form__status';

    try {
      const res = await fetch('/', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        status.textContent = '✓ Mesajınız başarıyla iletildi. En kısa sürede geri döneceğiz.';
        status.className = 'form__status form__status--success';
        btn.querySelector('.form__submit-text').textContent = 'Gönderildi';
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = '✕ Gönderim sırasında hata oluştu. WhatsApp veya e-posta ile doğrudan ulaşabilirsiniz.';
      status.className = 'form__status form__status--error';
      btn.disabled = false;
      btn.querySelector('.form__submit-text').textContent = 'Tekrar Dene';
    }
  });
}

window.addEventListener('load', () => {
  initContactPageForm();
});
