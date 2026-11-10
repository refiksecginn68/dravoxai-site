// sonder-studio/src/script.js — Three.js spiral + Lenis smooth scroll + GSAP reveals
import './styles.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { SRGBColorSpace, LinearMipmapLinearFilter, LinearFilter } from 'three';
import { vertexShader, fragmentShader } from './shaders.js';

gsap.registerPlugin(ScrollTrigger);

// ─── CONFIG ────────────────────────────────────────────────────
const CONFIG = {
  totalImages:               5,
  tilesPerRevolution:       15,
  revolutions:               5,
  startRadius:               5,
  endRadius:               3.5,
  tileHeightRatio:         1.1,
  tileSegments:             24,
  spiralGap:              0.35,
  tileOverlap:           0.005,
  cameraZ:                  12,
  cameraSmoothing:       0.075,
  baseRotationSpeed:     0.001,
  scrollRotationMultiplier: 0.0035,
  rotationDecay:           0.9,
  scrollMultiplier:       1.25,
  cameraYMultiplier:       0.2,
  parallaxStrength:        0.1,
  spiralOffsetY:          -2.0,
};

// ─── State ─────────────────────────────────────────────────────
const state = {
  isMobile:      window.innerWidth < 768,
  width:         0,
  height:        0,
  scrollProgress: 0,
  scrollVelocity: 0,
  spinVelocity:   0,
  targetCameraY:  0,
  currentCameraY: 0,
  mouseX:         0,
  mouseY:         0,
  targetTiltX:    0,
  targetTiltZ:    0,
  currentTiltX:   0,
  currentTiltZ:   0,
};

// ─── DOM refs ───────────────────────────────────────────────────
const heroEl = document.querySelector('.hero');

// ─── Three.js bootstrap ─────────────────────────────────────────
const scene    = new THREE.Scene();
const camera   = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
const renderer = new THREE.WebGLRenderer({
  antialias:       true,
  alpha:           true,
  powerPreference: 'high-performance',
});

renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setClearColor(0, 0);
renderer.domElement.classList.add('hero__canvas');
heroEl.appendChild(renderer.domElement);

function syncSize() {
  state.width  = heroEl.clientWidth;
  state.height = heroEl.clientHeight;
  state.isMobile = window.innerWidth < 768;

  camera.aspect = state.width / state.height;
  camera.updateProjectionMatrix();
  camera.position.z = CONFIG.cameraZ + (state.isMobile ? 3 : 0);

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(state.width, state.height);

  if (state.isMobile) {
    state.targetTiltX = 0;
    state.targetTiltZ = 0;
  }
}

syncSize();
window.addEventListener('resize', syncSize);

// ─── Curved BufferGeometry ──────────────────────────────────────
function createCurvedTileGeometry(radius, arcAngle, tileHeight, segments) {
  const positions = [];
  const uvs       = [];
  const indices   = [];

  for (let i = 0; i <= segments; i++) {
    const t     = i / segments;
    const theta = -arcAngle / 2 + t * arcAngle;
    const x     = Math.sin(theta) * radius;
    const z     = Math.cos(theta) * radius;

    // bottom vertex
    positions.push(x, -tileHeight / 2, z);
    uvs.push(t, 0);

    // top vertex
    positions.push(x,  tileHeight / 2, z);
    uvs.push(t, 1);
  }

  for (let i = 0; i < segments; i++) {
    const a = i * 2;
    const b = i * 2 + 1;
    const c = (i + 1) * 2;
    const d = (i + 1) * 2 + 1;
    indices.push(a, c, b);
    indices.push(b, c, d);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv',       new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// ─── Texture loading ────────────────────────────────────────────
function loadTextures() {
  const loader    = new THREE.TextureLoader();
  const fallback  = new THREE.DataTexture(new Uint8Array([22, 22, 24, 255]), 1, 1);
  fallback.needsUpdate = true;

  const urls = Array.from({ length: CONFIG.totalImages }, (_, i) =>
    `./images/img${i + 1}.jpg`
  );

  return Promise.all(
    urls.map((url) =>
      new Promise((resolve) => {
        loader.load(
          url,
          (tex) => {
            tex.colorSpace  = SRGBColorSpace;
            tex.anisotropy  = renderer.capabilities.getMaxAnisotropy();
            tex.minFilter   = LinearMipmapLinearFilter;
            tex.magFilter   = LinearFilter;
            resolve(tex);
          },
          undefined,
          () => resolve(fallback)
        );
      })
    )
  );
}

// ─── Spiral build ────────────────────────────────────────────────
let spiral = null;

function buildSpiral(textures) {
  const group      = new THREE.Group();
  const totalTiles = CONFIG.tilesPerRevolution * CONFIG.revolutions;   // 75
  const angleStep  = (Math.PI * 2) / CONFIG.tilesPerRevolution;
  const arcAngle   = angleStep + CONFIG.tileOverlap;
  const chord      = 2 * CONFIG.startRadius * Math.sin(angleStep / 2);
  const tileHeight = chord * CONFIG.tileHeightRatio;
  const startY     = ((totalTiles - 1) / 2) * CONFIG.spiralGap;

  for (let i = 0; i < totalTiles; i++) {
    const t       = i / Math.max(totalTiles - 1, 1);
    const radius  = CONFIG.startRadius + (CONFIG.endRadius - CONFIG.startRadius) * t;
    const texture = textures[i % textures.length];

    const geo = createCurvedTileGeometry(radius, arcAngle, tileHeight, CONFIG.tileSegments);
    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uMap:            { value: texture },
        uCameraPosition: { value: camera.position },
      },
      side:        THREE.DoubleSide,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = startY - i * CONFIG.spiralGap;
    mesh.rotation.y = i * angleStep;
    group.add(mesh);
  }

  group.position.y = CONFIG.spiralOffsetY;
  return group;
}

// ─── Lenis smooth scroll ─────────────────────────────────────────
const lenis = new Lenis({
  duration:    1.2,
  smoothWheel: true,
  smoothTouch: false,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on('scroll', ({ scroll, limit, velocity }) => {
  state.scrollProgress = Math.min(scroll / Math.max(limit, 1), 1);
  state.scrollVelocity = velocity;
  state.spinVelocity  += velocity * CONFIG.scrollRotationMultiplier * CONFIG.scrollMultiplier;
  ScrollTrigger.update();
});

// Drive Lenis in its own RAF loop
function lenisRaf(time) {
  lenis.raf(time);
  requestAnimationFrame(lenisRaf);
}
requestAnimationFrame(lenisRaf);

// ─── Mouse parallax ──────────────────────────────────────────────
window.addEventListener('mousemove', (e) => {
  if (state.isMobile) return;
  state.mouseX      = (e.clientX / innerWidth)  * 2 - 1;
  state.mouseY      = (e.clientY / innerHeight) * 2 - 1;
  state.targetTiltX =  state.mouseY * CONFIG.parallaxStrength;
  state.targetTiltZ = -state.mouseX * CONFIG.parallaxStrength * 0.5;
});

// ─── GSAP reveals ────────────────────────────────────────────────
function initReveals() {
  const ctx = gsap.context(() => {
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
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });
  });

  if (import.meta.hot) {
    import.meta.hot.dispose(() => ctx.revert());
  }
}

window.addEventListener('load', () => ScrollTrigger.refresh());

// ─── Contact form ─────────────────────────────────────────────────
function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
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
        status.textContent = '✓ Mesajınız alındı. En kısa sürede dönüyoruz.';
        status.classList.add('form__status--success');
        btn.querySelector('.form__submit-text').textContent = 'Gönderildi';
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = '✕ Bir hata oluştu. info@dravoxai.com adresine doğrudan yazabilirsiniz.';
      status.classList.add('form__status--error');
      btn.disabled = false;
      btn.querySelector('.form__submit-text').textContent = 'Tekrar Dene';
    }
  });
}

// ─── Nav hide/show & Smooth Scroll ────────────────────────────────
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

  // Intercept homepage anchor links starting with # for smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -80, duration: 1.2 });
      }
    });
  });

  // Handle incoming hash in the URL on initial page load (e.g. landing from other pages)
  if (window.location.hash) {
    const hash = window.location.hash;
    setTimeout(() => {
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        lenis.scrollTo(targetEl, { offset: -80, duration: 1.2, immediate: false });
      }
    }, 600); // 600ms buffer to allow Three.js canvas and scroll height animations to stabilize
  }
}

// ─── Render loop ─────────────────────────────────────────────────
function tick() {
  requestAnimationFrame(tick);

  if (spiral) {
    spiral.rotation.y += CONFIG.baseRotationSpeed + state.spinVelocity;
    state.spinVelocity *= CONFIG.rotationDecay;

    if (!state.isMobile) {
      state.currentTiltX += (state.targetTiltX - state.currentTiltX) * CONFIG.cameraSmoothing;
      state.currentTiltZ += (state.targetTiltZ - state.currentTiltZ) * CONFIG.cameraSmoothing;
      spiral.rotation.x   = state.currentTiltX;
      spiral.rotation.z   = state.currentTiltZ;
    }
  }

  state.targetCameraY   = -state.scrollProgress * CONFIG.cameraYMultiplier * 10;
  state.currentCameraY += (state.targetCameraY - state.currentCameraY) * CONFIG.cameraSmoothing;
  camera.position.y     = state.currentCameraY;
  camera.lookAt(0, state.currentCameraY * 0.4, 0);

  renderer.render(scene, camera);
}

// ─── Entegrasyon Flow Connectors (Dynamic Path Calculations) ───
function updateFlowLines() {
  const container = document.querySelector('.flow-container');
  const svg = document.getElementById('flow-connections');
  if (!container || !svg) return;

  // On mobile (max-width: 900px), lines are hidden, don't waste performance
  if (window.innerWidth <= 900) {
    svg.removeAttribute('viewBox');
    return;
  }

  const containerRect = container.getBoundingClientRect();
  const w = containerRect.width;
  const h = containerRect.height;
  
  // Set dimensions dynamically to map 1:1 with pixels
  svg.setAttribute('width', w);
  svg.setAttribute('height', h);
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

  const brain = document.querySelector('.flow-brain-node');
  if (!brain) return;
  const brainRect = brain.getBoundingClientRect();

  // Find exact center coordinates of brain-core relative to flow-container
  const brainWidth = 120; // width of brain-core in px
  const brainLeftX = brainRect.left - containerRect.left + (brainRect.width - brainWidth) / 2;
  const brainRightX = brainLeftX + brainWidth;
  const brainCenterY = brainRect.top - containerRect.top + brainRect.height / 2;

  // 1. Left nodes (inputs)
  const leftNodes = document.querySelectorAll('.flow-column--left .flow-node');
  leftNodes.forEach((node, index) => {
    const nodeRect = node.getBoundingClientRect();
    // Connect from right edge of left node card
    const startX = nodeRect.right - containerRect.left;
    const startY = nodeRect.top - containerRect.top + nodeRect.height / 2;

    // Curved Cubic Bezier curve paths
    const cp1x = startX + (brainLeftX - startX) * 0.45;
    const cp1y = startY;
    const cp2x = startX + (brainLeftX - startX) * 0.55;
    const cp2y = brainCenterY;

    const d = `M ${startX},${startY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${brainLeftX},${brainCenterY}`;

    const path = document.getElementById(`line-left-${index}`);
    if (path) {
      path.setAttribute('d', d);
    }
  });

  // 2. Right nodes (outputs)
  const rightNodes = document.querySelectorAll('.flow-column--right .flow-node');
  rightNodes.forEach((node, index) => {
    const nodeRect = node.getBoundingClientRect();
    // Connect to left edge of right node card
    const endX = nodeRect.left - containerRect.left;
    const endY = nodeRect.top - containerRect.top + nodeRect.height / 2;

    // Curved Cubic Bezier curve paths
    const cp1x = brainRightX + (endX - brainRightX) * 0.45;
    const cp1y = brainCenterY;
    const cp2x = brainRightX + (endX - brainRightX) * 0.55;
    const cp2y = endY;

    const d = `M ${brainRightX},${brainCenterY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;

    const path = document.getElementById(`line-right-${index}`);
    if (path) {
      path.setAttribute('d', d);
    }
  });
}

function initFlowLines() {
  updateFlowLines();
  window.addEventListener('resize', updateFlowLines);
  
  // Refresh on ScrollTrigger layout updates and font loads
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.addEventListener('refresh', updateFlowLines);
  }
  
  if (document.fonts) {
    document.fonts.ready.then(updateFlowLines);
  }
}

// ─── Boot ─────────────────────────────────────────────────────────
// Defer WebGL setup so hero headline registers as LCP first
const boot = () => {
  loadTextures().then((textures) => {
    spiral = buildSpiral(textures);
    scene.add(spiral);
    renderer.domElement.classList.add('is-ready');
  });

  initReveals();
  initNav();
  initContactForm();
  initFlowLines();
  tick();
};

if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(boot, { timeout: 1500 });
} else {
  requestAnimationFrame(() => requestAnimationFrame(boot));
}
