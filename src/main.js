import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   SERVICES CATALOG DATA (BLACK & WHITE STUDIO)
   ========================================================================== */
const catalogServices = [
  {
    id: 'lavado-sin-contacto',
    title: 'Lavado Sin Contacto & Descontaminación',
    category: 'cuidado',
    tag: 'CUIDADO ESENCIAL',
    brief: 'Remoción química de suciedad y polvo férreo sin fricción abrasiva.',
    description: 'Protocolo de lavado studio con espuma activa de pH neutro que encapsula partículas de tierra. Descontaminación química de partículas ferrosas de frenos y descontaminación mecánica con clay bar.',
    duration: '1 Día',
    points: [
      'Espuma activa de alta densidad y pH neutro.',
      'Lavado artesanal de 2 baldes con esponja de microfibra de lana de cordero.',
      'Descontaminación química y mecánica de pintura y cristales.',
      'Limpieza de llantas por cara exterior e interior con removedor férreo.',
      'Secado sin contacto mediante turbina de aire caliente filtrado.'
    ]
  },
  {
    id: 'nutricion-cueros',
    title: 'Acondicionamiento de Cuero & Habitáculo',
    category: 'cuidado',
    tag: 'HABITÁCULO NOBLE',
    brief: '«Tu auto también tiene piel». Nutrición y desinfección a vapor seco.',
    description: 'Tratamiento profundo para tapicerías nobles. Limpieza a vapor seco a 140°C para purificar conductos de climatización sin humedad residual y nutrición de cueros con bálsamos mate de poro abierto.',
    duration: '1 a 2 Días',
    points: [
      'Aspirado minucioso de habitáculo, alfombras y maletero.',
      'Desengrase térmico suave de volante, asientos y consola.',
      'Nutrición de tapices de cuero con bálsamo hidrofóbico mate.',
      'Higienización con vapor seco en conductos de ventilación.',
      'Protección contra rayos UV sin brillo aceitoso ni siliconas.'
    ]
  },
  {
    id: 'ceramico-9h',
    title: 'Blindaje Cerámico 9H (Ceramic Coating)',
    category: 'proteccion',
    tag: 'BLINDAJE QUÍMICO',
    brief: 'Brillo ultra-reflectante, repelencia hidrofóbica extrema y protección UV.',
    description: 'Armadura nanotecnológica de sílice (SiO2) que cristaliza sobre la laca creando una barrera vítrea impenetrable contra el excremento de aves, lluvia ácida y el desgaste solar.',
    duration: '2 a 3 Días',
    points: [
      'Inspección digital de espesor de pintura por panel con micrómetro.',
      'Corrección previa obligatoria para eliminar imperfecciones antes de sellar.',
      'Aplicación manual cruzada de 2 capas base 9H + 1 capa hidrofóbica Top Coat.',
      'Curado con lámparas infrarrojas de onda corta para máxima adhesión.',
      'Sellado de cristales con tratamiento repelente de agua para alta velocidad.'
    ]
  },
  {
    id: 'ppf-film',
    title: 'PPF (Paint Protection Film) Auto-Regenerativo',
    category: 'proteccion',
    tag: 'BLINDAJE FÍSICO',
    brief: 'La máxima protección física contra impactos de gravilla en ruta.',
    description: 'Película de poliuretano termoplástico transparente con tecnología auto-regenerativa frente al calor solar. Opciones de cobertura frontal (parachoques, capot, ópticas) o carrocería completa.',
    duration: '3 a 5 Días',
    points: [
      'Corte milimétrico computarizado por plotter sin bisturí sobre pintura.',
      'Propiedades autorregenerativas con exposición solar o agua tibia.',
      'Opciones en acabado transparente brillante o satinado mate (Stealth).',
      'Protección contra piedras en carretera y roces de estacionamiento.',
      'Garantía de instalación contra burbujas o levantamientos.'
    ]
  },
  {
    id: 'correccion-optica',
    title: 'Corrección Óptica de Barniz Multi-Etapa',
    category: 'restauracion',
    tag: 'RESTAURACIÓN ÓPTICA',
    brief: 'Eliminación del 90%+ de marcas de lavado, hologramas y opacidad.',
    description: 'Pulido técnico progresivo con pastas abrasivas alemanas de corte decreciente y pulidoras orbitales calibradas para restaurar la claridad del barniz original sin desgastar micras de más.',
    duration: '2 a 4 Días',
    points: [
      'Eliminación de marcas provocadas por lavados de supermercado.',
      'Recuperación de la profundidad y perla metálica original.',
      'Inspección continua bajo luces Scangrip CRI 95+ de amplio espectro.',
      'Preparación perfecta de la superficie para cerámico o PPF.'
    ]
  },
  {
    id: 'pdr-desabolladura',
    title: 'Desabolladura en Frío PDR (Sin Repintar)',
    category: 'restauracion',
    tag: 'RESTAURACIÓN OEM',
    brief: 'Reparación de golpes y abolladuras conservando la pintura de fábrica.',
    description: 'Técnica de masajeado de chapa mediante varillas de precisión y ventosas térmicas. Permite reparar golpes de puertas de estacionamiento y granizo conservando el valor de reventa original.',
    duration: '1 Día',
    points: [
      'Conserva 100% la pintura original de fábrica sin perder la garantía.',
      'Sin masillas, sin repintado y sin diferencias de color.',
      'Tiempo de entrega rápido y resultado imperceptible.'
    ]
  }
];

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Lenis Smooth Scroll
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.2
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Smooth Anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        closeMenu();
        lenis.scrollTo(target, { offset: -70 });
      }
    });
  });

  // 2. Interactive Dirt Wipe Canvas (Key-Palette Signature Effect)
  initInteractiveWipe();

  // 3. Render Services Catalogue
  renderServices('all');
  setupFilterTabs();
  setupModal();

  // 4. Mobile Menu
  setupBurgerMenu();

  // 5. Interactive Video Gallery (Proyecto Ema 3D Carousel)
  setupStudioGallery();

  // 6. Scroll Reveals, Word Vanish & Floating Cars
  setupScrollAnimations();

  // 7. Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ==========================================================================
   INTERACTIVE DIRT WIPE CANVAS ENGINE
   ========================================================================== */
function initInteractiveWipe() {
  const container = document.getElementById('wipe-container');
  const canvas = document.getElementById('wipe-canvas');
  const resetBtn = document.getElementById('btn-reset-dirt');
  if (!container || !canvas) return;

  const ctx = canvas.getContext('2d');
  let dirtyImage = new Image();
  dirtyImage.src = '/media/hero-dirty.jpg';

  let isLoaded = false;
  let isPointerDown = false;
  let lastPos = null;

  function resize() {
    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    if (isLoaded) drawDirtyOverlay();
  }

  function drawDirtyOverlay() {
    const rect = container.getBoundingClientRect();
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(dirtyImage, 0, 0, rect.width, rect.height);
  }

  dirtyImage.onload = () => {
    isLoaded = true;
    resize();
  };

  window.addEventListener('resize', resize);

  function getCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function eraseAt(x, y, radius = 55) {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, 'rgba(0,0,0,1)');
    gradient.addColorStop(0.5, 'rgba(0,0,0,0.85)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function eraseLine(x1, y1, x2, y2) {
    const dist = Math.hypot(x2 - x1, y2 - y1);
    const steps = Math.max(1, Math.floor(dist / 6));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;
      eraseAt(x, y, 55);
    }
  }

  // Pointer & mouse events
  container.addEventListener('pointerenter', () => { isPointerDown = true; });
  container.addEventListener('pointerleave', () => { isPointerDown = false; lastPos = null; });

  container.addEventListener('pointermove', (e) => {
    const pos = getCoords(e);
    if (lastPos) {
      eraseLine(lastPos.x, lastPos.y, pos.x, pos.y);
    } else {
      eraseAt(pos.x, pos.y, 55);
    }
    lastPos = pos;
  });

  container.addEventListener('touchstart', (e) => {
    isPointerDown = true;
    lastPos = getCoords(e);
    eraseAt(lastPos.x, lastPos.y, 60);
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (!isPointerDown) return;
    const pos = getCoords(e);
    if (lastPos) {
      eraseLine(lastPos.x, lastPos.y, pos.x, pos.y);
    }
    lastPos = pos;
  }, { passive: true });

  container.addEventListener('touchend', () => {
    isPointerDown = false;
    lastPos = null;
  });

  // Reset button
  resetBtn?.addEventListener('click', () => {
    if (isLoaded) {
      drawDirtyOverlay();
    }
  });
}

/* ==========================================================================
   INTERACTIVE 3D VIDEO CAROUSEL (PROYECTO EMA ARCHITECTURE)
   ========================================================================== */
function setupStudioGallery() {
  const gallery = document.querySelector('[data-gallery]');
  if (!gallery) return;

  const slides = [...gallery.querySelectorAll('.gallery-slide')];
  const thumbs = [...gallery.querySelectorAll('[data-gallery-target]')];
  const current = gallery.querySelector('[data-gallery-current]');
  const bar = gallery.querySelector('[data-gallery-bar]');
  const soundBtns = [...gallery.querySelectorAll('.slide-sound-btn')];
  let active = 0;
  let isSoundMuted = true; // Browser autoplay starts muted; unmutes on toggle or gesture

  const pad = (value) => String(value + 1).padStart(2, '0');

  const updateSoundUI = () => {
    soundBtns.forEach((btn) => {
      const icon = btn.querySelector('.sound-icon');
      if (icon) {
        icon.textContent = isSoundMuted ? '🔇' : '🔊';
      }
      btn.setAttribute('aria-label', isSoundMuted ? 'Activar sonido' : 'Silenciar sonido');
      btn.classList.toggle('is-muted', isSoundMuted);
    });
  };

  const playWithVolumeRamp = (video, targetVol = 0.75, duration = 1.0) => {
    if (!video) return;
    video.muted = false;
    video.volume = 0.05;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isSoundMuted = false;
          updateSoundUI();
          gsap.killTweensOf(video);
          gsap.to(video, {
            volume: targetVol,
            duration: duration,
            ease: 'power1.out'
          });
        })
        .catch(() => {
          // If unmuted play is blocked by browser policy, keep video playing muted
          video.muted = true;
          video.play().catch(() => {});
          isSoundMuted = true;
          updateSoundUI();
        });
    }
  };

  const update = (next) => {
    active = (next + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      slide.classList.remove('is-active', 'is-prev', 'is-next');
      const video = slide.querySelector('video');
      if (!video) return;

      if (index === active) {
        slide.classList.add('is-active');
        if (!isSoundMuted) {
          playWithVolumeRamp(video, 0.75, 1.0);
        } else {
          video.muted = true;
          video.play().catch(() => {});
        }
      } else if (index === (active - 1 + slides.length) % slides.length) {
        slide.classList.add('is-prev');
        video.pause();
        video.muted = true;
      } else if (index === (active + 1) % slides.length) {
        slide.classList.add('is-next');
        video.pause();
        video.muted = true;
      } else {
        video.pause();
        video.muted = true;
      }
    });

    thumbs.forEach((thumb, index) => thumb.classList.toggle('is-active', index === active));
    if (current) current.textContent = pad(active);
    if (bar) bar.style.width = `${((active + 1) / slides.length) * 100}%`;
  };

  // Sound toggle button on cards
  soundBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const activeVideo = slides[active]?.querySelector('video');
      if (!activeVideo) return;

      if (isSoundMuted) {
        playWithVolumeRamp(activeVideo, 0.75, 0.8);
      } else {
        isSoundMuted = true;
        updateSoundUI();
        gsap.to(activeVideo, {
          volume: 0,
          duration: 0.3,
          onComplete: () => { activeVideo.muted = true; }
        });
      }
    });
  });

  // Clicking on the active slide toggles sound; clicking on neighbors activates that slide
  slides.forEach((slide, index) => {
    slide.addEventListener('click', (e) => {
      if (e.target.closest('.slide-sound-btn')) return;
      if (index === active) {
        const video = slide.querySelector('video');
        if (!video) return;

        if (isSoundMuted) {
          playWithVolumeRamp(video, 0.75, 0.8);
        } else {
          isSoundMuted = true;
          updateSoundUI();
          gsap.to(video, {
            volume: 0,
            duration: 0.3,
            onComplete: () => { video.muted = true; }
          });
        }
      } else {
        update(index);
      }
    });
  });

  // First user interaction anywhere activates audio with 1s smooth ramp
  let hasActivatedAudio = false;
  const onFirstActivation = () => {
    if (hasActivatedAudio) return;
    hasActivatedAudio = true;
    const activeVideo = slides[active]?.querySelector('video');
    if (activeVideo && isSoundMuted) {
      playWithVolumeRamp(activeVideo, 0.75, 1.0);
    }
  };

  // Only listen to authentic user activation events (no mousemove/scroll to avoid browser pauses)
  ['pointerdown', 'mousedown', 'touchstart', 'click', 'keydown'].forEach((evt) => {
    window.addEventListener(evt, onFirstActivation, { once: true, passive: true });
    document.addEventListener(evt, onFirstActivation, { once: true, passive: true });
  });

  // Start active video playing immediately
  const firstVideo = slides[0]?.querySelector('video');
  if (firstVideo) {
    firstVideo.muted = true;
    firstVideo.play().catch(() => {});
  }

  gallery.querySelector('.gallery-prev')?.addEventListener('click', () => update(active - 1));
  gallery.querySelector('.gallery-next')?.addEventListener('click', () => update(active + 1));
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => update(Number(thumb.dataset.galleryTarget)));
  });

  // Spotlight hover coordinates
  const stage = gallery.querySelector('.gallery-stage');
  stage?.addEventListener('mousemove', (event) => {
    const rect = stage.getBoundingClientRect();
    gallery.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    gallery.style.setProperty('--my', `${event.clientY - rect.top}px`);
  });

  update(0);
  updateSoundUI();
}

/* ==========================================================================
   SERVICES CATALOGUE RENDERING & FILTERING
   ========================================================================== */
function renderServices(filter = 'all') {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? catalogServices
    : catalogServices.filter((s) => s.category === filter);

  grid.innerHTML = filtered
    .map(
      (s) => `
      <article class="service-bento-card" data-id="${s.id}">
        <div>
          <div class="card-top">
            <span class="card-cat-badge">${s.tag}</span>
            <span class="card-duration-badge">${s.duration}</span>
          </div>
          <h3 class="service-card-title">${s.title}</h3>
          <p class="service-card-brief">${s.brief}</p>
        </div>
        <div class="service-card-footer">
          <button class="btn-card-action framer-btn-link" type="button" data-modal-id="${s.id}">
            <span>Ver Especificaciones</span>
            <span class="arrow-icon">→</span>
          </button>
        </div>
      </article>
    `
    )
    .join('');

  grid.querySelectorAll('[data-modal-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal-id');
      const service = catalogServices.find((s) => s.id === id);
      if (service) openServiceModal(service);
    });
  });
}

function setupFilterTabs() {
  const buttons = document.querySelectorAll('.category-filter-pills .pill-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderServices(btn.getAttribute('data-cat'));
    });
  });
}

/* ==========================================================================
   MODAL DETAIL DIALOG
   ========================================================================== */
let lastFocused = null;

function setupModal() {
  const modal = document.getElementById('service-modal');
  const closeBtn = document.getElementById('modal-close');
  if (!modal) return;

  const closeModal = () => {
    modal.close();
    if (lastFocused) lastFocused.focus();
  };

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openServiceModal(service) {
  const modal = document.getElementById('service-modal');
  if (!modal) return;
  lastFocused = document.activeElement;

  document.getElementById('modal-tag').textContent = service.tag;
  document.getElementById('modal-title').textContent = service.title;
  document.getElementById('modal-desc').textContent = service.description;
  document.getElementById('modal-duration').textContent = service.duration;

  const pointsEl = document.getElementById('modal-points');
  pointsEl.innerHTML = service.points.map((p) => `<li>${p}</li>`).join('');

  const waBtn = document.getElementById('modal-wa-btn');
  const msg = `Hola Simón, quiero consultar disponibilidad y valor para el tratamiento "${service.title}" en La Cochera Mall Sport. Mi auto es: [Indicar modelo]`;
  waBtn.href = `https://wa.me/56998724804?text=${encodeURIComponent(msg)}`;

  modal.showModal();
}

/* ==========================================================================
   MOBILE BURGER MENU
   ========================================================================== */
function setupBurgerMenu() {
  const btn = document.getElementById('menu-burger');
  const menu = document.getElementById('nav-menu');
  btn?.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

function closeMenu() {
  const menu = document.getElementById('nav-menu');
  menu?.classList.remove('open');
}

/* ==========================================================================
   SCROLL ANIMATIONS, WORD REVEAL & FLOATING CARS
   ========================================================================== */
function setupScrollAnimations() {
  // 1. Hero text: subtle, slow entrance on load
  gsap.from('.hero-top-shell > *', {
    y: 35,
    opacity: 0,
    duration: 1.4,
    stagger: 0.18,
    ease: 'power2.out'
  });

  // 2. Section Headers & Subtitles: Gradual Appearance on Scroll ("Vanish / Word Scrub" Left-to-Right)
  document.querySelectorAll('.section-title-mono, .contact-card-mono').forEach((header) => {
    const lines = header.querySelectorAll('.title-line, .section-subtitle, .contact-copy');
    const allWords = [];

    lines.forEach((line) => {
      const text = line.innerText.trim();
      if (!text) return;
      const words = text.split(/\s+/);
      line.innerHTML = words.map((w) => `<span class="scrub-word">${w}</span>`).join(' ');
      allWords.push(...line.querySelectorAll('.scrub-word'));
    });

    if (allWords.length > 0) {
      gsap.fromTo(
        allWords,
        {
          opacity: 0.12,
          filter: 'blur(3px)',
          y: 4
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            end: 'bottom 45%',
            scrub: 0.8
          }
        }
      );
    }

    const badge = header.querySelector('.mini-label');
    if (badge) {
      gsap.fromTo(
        badge,
        { opacity: 0.3, y: 4 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: header,
            start: 'top 88%',
            end: 'top 70%',
            scrub: 0.8
          }
        }
      );
    }
  });

  // Location card headline scrub
  const locH3 = document.querySelector('.location-info-card h3');
  if (locH3) {
    const text = locH3.innerText.trim();
    if (text) {
      const words = text.split(/\s+/);
      locH3.innerHTML = words.map((w) => `<span class="scrub-word">${w}</span>`).join(' ');
      gsap.fromTo(
        locH3.querySelectorAll('.scrub-word'),
        { opacity: 0.15, filter: 'blur(3px)', y: 4 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: {
            trigger: locH3,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: 0.8
          }
        }
      );
    }
  }

  // 3. Stage Rows: Cars Displacing UPWARDS on scroll with strong presence
  document.querySelectorAll('.stage-row').forEach((row) => {
    const carImg = row.querySelector('.car-cutout-img');
    const content = row.querySelector('.stage-content');
    const isReverse = row.classList.contains('reverse');

    // Horizontal & elevation entrance
    gsap.from(carImg, {
      x: isReverse ? 60 : -60,
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: row,
        start: 'top 82%'
      }
    });

    // Continuous vertical displacement UPWARDS as user scrolls through
    gsap.fromTo(
      carImg,
      {
        y: 110
      },
      {
        y: -110,
        ease: 'none',
        scrollTrigger: {
          trigger: row,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      }
    );

    gsap.from(content, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: row,
        start: 'top 75%'
      }
    });
  });

  // 4. Bento & Editorial cards fade-in
  gsap.utils.toArray('.team-card, .review-card, .location-info-card, .location-map-card').forEach((el) => {
    gsap.from(el, {
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      }
    });
  });
}
