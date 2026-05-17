// src/oteller.js — Oteller İçin AI page: Lenis + GSAP reveals + FAQ + modal
import './styles.css';
import './oteller.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Lenis smooth scroll ─────────────────────────────────────────
const lenis = new Lenis({
  duration:    1.2,
  smoothWheel: true,
  smoothTouch: false,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on('scroll', () => ScrollTrigger.update());

function lenisRaf(time) {
  lenis.raf(time);
  requestAnimationFrame(lenisRaf);
}
requestAnimationFrame(lenisRaf);

// ─── Hero animation ───────────────────────────────────────────────
function initHeroAnimation() {
  const words = document.querySelectorAll('.hero-word');
  const anims = document.querySelectorAll('.hero-anim');

  if (words.length) {
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.07,
      delay: 0.15,
    });
  }

  if (anims.length) {
    gsap.to(anims, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.12,
      delay: 0.7,
    });
  }
}

// ─── Scroll reveals ───────────────────────────────────────────────
function initReveals() {
  gsap.utils.toArray('.reveal-text').forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });
}

// ─── Nav hide/show ────────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  let lastY  = window.scrollY;
  let hidden = false;

  window.addEventListener('scroll', () => {
    const y    = window.scrollY;
    const diff = y - lastY;

    if (diff > 4 && y > 80 && !hidden) {
      nav.classList.add('nav--hidden');
      hidden = true;
    } else if (diff < -4 && hidden) {
      nav.classList.remove('nav--hidden');
      hidden = false;
    }

    lastY = y;
  }, { passive: true });
}

// ─── FAQ accordion ────────────────────────────────────────────────
function initFAQ() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach((item) => {
    const btn    = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      items.forEach((other) => {
        const otherBtn    = other.querySelector('.faq__question');
        const otherAnswer = other.querySelector('.faq__answer');
        if (otherBtn && otherAnswer && other !== item) {
          otherBtn.setAttribute('aria-expanded', 'false');
          gsap.to(otherAnswer, { height: 0, duration: 0.35, ease: 'power2.inOut' });
        }
      });

      // Toggle current
      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        gsap.to(answer, { height: 0, duration: 0.35, ease: 'power2.inOut' });
      } else {
        btn.setAttribute('aria-expanded', 'true');
        gsap.set(answer, { height: 'auto' });
        const fullH = answer.scrollHeight;
        gsap.fromTo(answer,
          { height: 0 },
          { height: fullH, duration: 0.4, ease: 'power2.out' }
        );
      }
    });
  });
}

// ─── Demo modal ───────────────────────────────────────────────────
function initModal() {
  const modal    = document.getElementById('demo-modal');
  const openBtn  = document.getElementById('open-demo-modal');
  const closeBtn = document.getElementById('close-demo-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (!modal || !openBtn) return;

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    gsap.fromTo(modal.querySelector('.demo-modal__panel'),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
    );
    closeBtn?.focus();
  }

  function closeModal() {
    gsap.to(modal.querySelector('.demo-modal__panel'), {
      opacity: 0,
      y: 16,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        modal.hidden = true;
        document.body.style.overflow = '';
      },
    });
  }

  openBtn.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  // Hero smooth scroll for anchor links
  document.querySelectorAll('a[href="#demo-form"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('demo-form');
      if (target) lenis.scrollTo(target, { offset: -80, duration: 1.2 });
    });
  });
}

// ─── Demo form submission ─────────────────────────────────────────
function initDemoForm() {
  const form   = document.getElementById('otel-demo-form');
  const status = document.getElementById('demo-form-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form__submit');
    btn.disabled = true;
    btn.querySelector('.form__submit-text').textContent = 'Gönderiliyor…';
    status.textContent = '';
    status.className   = 'form__status';

    try {
      const res = await fetch('/', {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        status.textContent = '✓ Talebiniz alındı. En kısa sürede dönüyoruz.';
        status.classList.add('form__status--success');
        btn.querySelector('.form__submit-text').textContent = 'Gönderildi';
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = '✕ Bir hata oluştu. WhatsApp\'tan yazabilirsiniz: wa.me/905301139021';
      status.classList.add('form__status--error');
      btn.disabled = false;
      btn.querySelector('.form__submit-text').textContent = 'Tekrar Dene';
    }
  });
}

// ─── Boot ─────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  initHeroAnimation();
  initReveals();
  initNav();
  initFAQ();
  initModal();
  initDemoForm();
});
