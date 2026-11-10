/* ============================================================
   DRAVOX AI — script.js
   ============================================================ */

/* ── Scroll Reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach(el => revealObserver.observe(el));

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Mobile menu ── */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu   = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  mobileMenuBtn.setAttribute('aria-expanded', isOpen);
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });
});

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── FAQ Accordion ── */
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── Hero card subtle float animation ── */
const hcards = document.querySelectorAll('.hcard');
hcards.forEach((card, i) => {
  const delay = i * 0.4;
  const dur   = 3 + i * 0.5;
  card.style.animation = `float-card ${dur}s ${delay}s ease-in-out infinite`;
});

const floatStyle = document.createElement('style');
floatStyle.textContent = `
  @keyframes float-card {
    0%,100%{ transform: translateY(0px); }
    50%    { transform: translateY(-10px); }
  }
`;
document.head.appendChild(floatStyle);

/* ── Marquee pause on hover ── */
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  const marqueeWrap = marqueeTrack.parentElement;
  marqueeWrap.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeWrap.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

/* ── About text reveal on scroll ── */
const aboutTextBlock = document.querySelector('.about-text-block');
if (aboutTextBlock) {
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutTextBlock.classList.add('visible');
        const muted = aboutTextBlock.querySelector('.text-muted');
        if (muted) {
          setTimeout(() => {
            muted.style.transition = 'color 1s ease 0.4s';
            muted.style.color = '#05050A';
          }, 300);
        }
        textObserver.unobserve(aboutTextBlock);
      }
    });
  }, { threshold: 0.3 });
  textObserver.observe(aboutTextBlock);
}

/* ── Stats counter animation ── */
function animateCounter(el, target, suffix = '') {
  const isPercent = suffix.includes('%');
  let start = 0;
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = (isPercent ? '%' : '') + Math.floor(start) + (isPercent ? '' : suffix);
  }, step);
}

const statNums = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.textContent.trim();
      if (text === '7/24') return;

      if (text.includes('%')) {
        const val = parseInt(text.replace('%', ''));
        el.textContent = '%0';
        animateCounter(el, val, '%');
      } else if (text.includes('x')) {
        const val = parseInt(text.replace('x', ''));
        el.textContent = '0x';
        animateCounter(el, val, 'x');
      }
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => counterObserver.observe(el));
