<script setup lang="ts">
const activeStep = ref(0)
const carouselRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)

// Touch/swipe tracking
let touchStartX = 0
let touchDeltaX = 0
let touchStartY = 0
let touchDeltaY = 0
let isSwiping = false

// Autoplay timing
const AUTOPLAY_NORMAL = 3000 // 3 seconds per slide
const AUTOPLAY_AFTER_INTERACTION = 5000 // 5 seconds delay after user interaction
let autoplayTimer: ReturnType<typeof setInterval> | null = null
let delayTimer: ReturnType<typeof setTimeout> | null = null

const steps = [
  {
    title: 'Hubungi Kami',
    desc: 'Konsultasikan kebutuhan Anda via WhatsApp. Gratis, tanpa syarat, dan tanpa tekanan. Tim kami siap menjawab pertanyaan Anda.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/></svg>`,
    accentGradient: 'linear-gradient(90deg, #1565C0, #42A5F5)',
    iconBg: 'rgba(21, 101, 192, 0.08)',
  },
  {
    title: 'Pilih Paket Mitra',
    desc: 'Kami bantu tentukan paket yang sesuai dengan modal dan target pasar Anda. Fleksibel dan bisa disesuaikan kapasitas.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    accentGradient: 'linear-gradient(90deg, #43A047, #A5D6A7)',
    iconBg: 'rgba(67, 160, 71, 0.08)',
  },
  {
    title: 'Mulai Berjualan',
    desc: 'Stok dikirim ke lokasi Anda. Tim kami mendampingi strategi pemasaran, tips jualan, dan pengelolaan bisnis dari awal.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    accentGradient: 'linear-gradient(90deg, #1565C0, #43A047)',
    iconBg: 'rgba(21, 101, 192, 0.06)',
  },
]

function goToStep(index: number) {
  activeStep.value = Math.max(0, Math.min(index, steps.length - 1))
  restartAutoplayWithDelay()
}

function onTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0]?.clientX ?? 0
  touchStartY = e.touches[0]?.clientY ?? 0
  touchDeltaX = 0
  touchDeltaY = 0
  isSwiping = true
}

function onTouchMove(e: TouchEvent) {
  if (!isSwiping) return
  touchDeltaX = (e.touches[0]?.clientX ?? 0) - touchStartX
  touchDeltaY = (e.touches[0]?.clientY ?? 0) - touchStartY
}

function onTouchEnd() {
  if (!isSwiping) return
  isSwiping = false

  // Let vertical swipes scroll the page; only react to dominant horizontal gestures.
  if (Math.abs(touchDeltaX) <= Math.abs(touchDeltaY)) {
    return
  }

  const threshold = 50
  if (touchDeltaX < -threshold && activeStep.value < steps.length - 1) {
    activeStep.value++
    restartAutoplayWithDelay()
  } else if (touchDeltaX > threshold && activeStep.value > 0) {
    activeStep.value--
    restartAutoplayWithDelay()
  }
}

// --- Autoplay logic ---
function startAutoplay(interval: number = AUTOPLAY_NORMAL) {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    if (window.innerWidth <= 900) {
      activeStep.value = (activeStep.value + 1) % steps.length
    }
  }, interval)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
  if (delayTimer) {
    clearTimeout(delayTimer)
    delayTimer = null
  }
}

function restartAutoplayWithDelay() {
  stopAutoplay()
  // Wait 5 seconds after user interaction, then resume normal 3s autoplay
  delayTimer = setTimeout(() => {
    startAutoplay(AUTOPLAY_NORMAL)
  }, AUTOPLAY_AFTER_INTERACTION)
}

// Scroll reveal (centralized composable)
useScrollReveal()

onMounted(() => {
  startAutoplay(AUTOPLAY_NORMAL)
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section class="join section" id="cara-bergabung">
    <div class="container">
      <!-- Header -->
      <div class="join__header">
        <div class="section-badge reveal-blur">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Cara Bergabung
        </div>
        <h2 class="join__title reveal reveal-delay-1">
          3 Langkah Mudah <span class="gradient-text">Jadi Mitra</span>
        </h2>
        <p class="join__subtitle reveal reveal-delay-2">
          Proses bergabung sangat mudah dan cepat. Tidak butuh pengalaman bisnis sebelumnya.
        </p>
      </div>

      <!-- Steps — Desktop Grid -->
      <div class="join__steps reveal-scale reveal-delay-2">
        <template v-for="(step, i) in steps" :key="step.title">
          <div class="join__step-card" :class="{ 'join__step-card--active': activeStep === i }">
            <!-- Accent bar top -->
            <div class="join__step-accent" :style="{ background: step.accentGradient }"></div>

            <!-- Step Number watermark -->
            <div class="join__step-num" aria-label="Langkah {{ i + 1 }}">
              {{ String(i + 1).padStart(2, '0') }}
            </div>

            <!-- Icon circle -->
            <div class="join__step-icon" :style="{ background: step.iconBg }">
              <div v-html="step.icon" aria-hidden="true"></div>
            </div>

            <h3 class="join__step-title">{{ step.title }}</h3>
            <p class="join__step-desc">{{ step.desc }}</p>
          </div>

          <!-- Arrow connector (desktop only, between cards) -->
          <div v-if="i < steps.length - 1" class="join__arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </template>
      </div>

      <!-- Steps — Mobile Carousel -->
      <div class="join__carousel reveal-scale reveal-delay-2" ref="carouselRef">
        <div
          class="join__carousel-track"
          ref="trackRef"
          :style="{ transform: `translateX(-${activeStep * 100}%)` }"
          @touchstart.passive="onTouchStart"
          @touchmove.passive="onTouchMove"
          @touchend.passive="onTouchEnd"
        >
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="join__carousel-slide"
          >
            <div class="join__step-card join__step-card--carousel" :class="{ 'join__step-card--active': activeStep === i }">
              <div class="join__step-accent" :style="{ background: step.accentGradient }"></div>
              <div class="join__step-num">{{ String(i + 1).padStart(2, '0') }}</div>
              <div class="join__step-icon" :style="{ background: step.iconBg }">
                <div v-html="step.icon" aria-hidden="true"></div>
              </div>
              <h3 class="join__step-title">{{ step.title }}</h3>
              <p class="join__step-desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Numbered Step Navigation -->
        <div class="join__nav">
          <button
            v-for="(step, i) in steps"
            :key="i"
            class="join__nav-btn"
            :class="{ 'join__nav-btn--active': activeStep === i }"
            :aria-label="`Langkah ${i + 1}`"
            :aria-current="activeStep === i ? 'step' : undefined"
            @click="goToStep(i)"
          >
            {{ String(i + 1).padStart(2, '0') }}
          </button>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="join__cta reveal-scale">
        <p class="join__cta-text">Siap memulai? Tim kami siap membantu Anda 24/7</p>
        <a
          href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20bergabung%20sebagai%20mitra%20CleaniqueMart"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
          </svg>
          Mulai Sekarang via WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.join {
  background: var(--color-surface);
}

/* Header */
.join__header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-16);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.join__title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.join__subtitle {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-light);
}

/* ===========================
   Desktop Steps Grid
   =========================== */
.join__steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-bottom: var(--space-16);
}

/* Step Card (shared style for desktop + carousel) */
.join__step-card {
  flex: 1;
  max-width: 340px;
  min-height: 280px;
  padding: var(--space-8) var(--space-6) var(--space-6);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(21, 101, 192, 0.06);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
  position: relative;
  overflow: hidden;
}

.join__step-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-blue);
  border-color: rgba(21, 101, 192, 0.12);
}

/* Accent top bar */
.join__step-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

/* Step number watermark */
.join__step-num {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 800;
  color: rgba(21, 101, 192, 0.06);
  line-height: 1;
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  pointer-events: none;
  user-select: none;
}

/* Icon circle */
.join__step-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
  flex-shrink: 0;
}

.join__step-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.join__step-desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

/* Arrow connector between cards — desktop only */
.join__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 var(--space-3);
  color: var(--color-primary-light);
  opacity: 0.5;
}

/* ===========================
   Mobile Carousel (hidden on desktop)
   =========================== */
.join__carousel {
  display: none;
  margin-bottom: var(--space-12);
}

.join__carousel-track {
  display: flex;
  transition: transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: transform;
}

.join__carousel-slide {
  flex: 0 0 100%;
  padding: 0 var(--space-2);
}

.join__step-card--carousel {
  max-width: 100%;
  min-height: 260px;
}

/* Navigation Dots with Step Numbers */
.join__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  margin-top: var(--space-6);
  padding-bottom: var(--space-6);
}

.join__nav-btn {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  border: 2px solid rgba(21, 101, 192, 0.15);
  background: var(--color-white);
  color: var(--color-text-light);
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
}

.join__nav-btn:hover {
  border-color: var(--color-primary-light);
  color: var(--color-primary);
  transform: scale(1.08);
}

.join__nav-btn--active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: var(--color-white);
  border-color: var(--color-primary);
  box-shadow: 0 4px 16px rgba(21, 101, 192, 0.3);
  transform: scale(1.1);
}

.join__nav-btn--active:hover {
  color: var(--color-white);
  transform: scale(1.12);
}

/* Bottom CTA */
.join__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  text-align: center;
}

.join__cta-text {
  font-size: 1rem;
  color: var(--color-text-light);
  font-weight: 500;
}

/* ===========================
   Responsive
   =========================== */
@media (max-width: 900px) {
  /* Hide desktop grid on mobile */
  .join__steps {
    display: none;
  }

  /* Show carousel on mobile */
  .join__carousel {
    display: block;
    overflow: hidden;
    position: relative;
  }

  .join__carousel .join__step-card:hover {
    transform: none;
    box-shadow: var(--shadow-md);
    border-color: rgba(21, 101, 192, 0.06);
  }
}

@media (min-width: 901px) {
  .join__carousel {
    display: none !important;
  }
}
</style>
