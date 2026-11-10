// src/hakkimizda.js — Hakkımızda page: Lenis + GSAP reveals
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

// ─── Boot ─────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  initHeroAnimation();
  initReveals();
  initNav();
});
