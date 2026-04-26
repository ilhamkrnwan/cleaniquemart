<template>
  <section class="testimonials section" id="testimoni">
    <!-- Background decoration -->
    <div class="testimonials__bg" aria-hidden="true"></div>

    <div class="container">
      <!-- Header -->
      <div class="testimonials__header">
        <div class="section-badge reveal-blur">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Testimoni Mitra
        </div>
        <h2 class="testimonials__title reveal reveal-delay-1">
          Apa Kata <span class="gradient-text">Mitra Kami?</span>
        </h2>
        <p class="testimonials__subtitle reveal reveal-delay-2">
          Sudah ratusan keluarga di seluruh Indonesia merasakan manfaat bergabung bersama CleaniQue Mart.
        </p>
      </div>

      <!-- Testimonial Grid -->
      <div class="testimonials__grid reveal-stagger" ref="sliderRef" @scroll.passive="onSliderScroll">
        <button
          v-for="(item, i) in testimonials"
          :key="i"
          class="testimonial-card reveal"
          type="button"
          :aria-label="`Buka testimoni ${i + 1} dalam ukuran besar`"
          @click="openPreview(i)"
        >
          <NuxtImg
            :src="item.image"
            :alt="`Testimoni mitra CleaniqueMart ke-${i + 1}`"
            width="400"
            height="400"
            class="testimonial-card__img"
            loading="lazy"
            sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 300px"
          />
          <div class="testimonial-card__overlay">
            <div class="testimonial-card__stars" aria-label="Rating 5 bintang">
              <svg v-for="s in 5" :key="s" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
          </div>
        </button>
      </div>

      <div class="testimonials__slider-dots" aria-hidden="true">
        <span
          v-for="(_, i) in testimonials"
          :key="`dot-${i}`"
          class="testimonials__slider-dot"
          :class="{ 'testimonials__slider-dot--active': activeSlide === i }"
          :style="{ opacity: getDotOpacity(i) }"
        ></span>
      </div>

      <!-- Mitra Map Banner -->
      <div class="testimonials__map-banner glass-card reveal-scale">
        <div class="testimonials__map-text">
          <h3 class="testimonials__map-title">Mitra kami tersebar dari Sabang hingga Merauke</h3>
          <p class="testimonials__map-desc">Yogyakarta · Jakarta · Malang · Palembang · Jambi · Situbondo · Boyolali · Karanganyar · Demak · Temanggung · dan terus berkembang!</p>
        </div>
        <NuxtLink to="/mitra" class="btn btn-blue testimonials__map-cta">
          Lihat Peta Mitra
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </NuxtLink>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="testimonial-preview-fade">
        <div
          v-if="previewImage"
          class="testimonial-preview"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau gambar testimoni"
          @click.self="closePreview"
        >
          <button
            class="testimonial-preview__close"
            type="button"
            aria-label="Tutup pratinjau"
            @click="closePreview"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <NuxtImg
            :src="previewImage"
            alt="Pratinjau testimoni mitra CleaniqueMart"
            width="1200"
            height="1200"
            fit="contain"
            class="testimonial-preview__img"
            loading="eager"
          />
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const sliderRef = ref<HTMLElement | null>(null)
const activeSlide = ref(0)
const previewIndex = ref<number | null>(null)
const isMobile = ref(false)

const testimonials = [
  { image: '/testimoni/Testimoni-1.webp' },
  { image: '/testimoni/Testimoni-2.webp' },
  { image: '/testimoni/Testimoni-3.webp' },
  { image: '/testimoni/Testimoni-4.webp' },
  { image: '/testimoni/Testimoni-5.webp' },
  { image: '/testimoni/Testimoni-6.webp' },
  { image: '/testimoni/Testimoni-7.webp' },
]

const previewImage = computed(() => {
  if (previewIndex.value === null) {
    return null
  }

  return testimonials[previewIndex.value]?.image ?? null
})

let mediaQuery: MediaQueryList | null = null

function getSlides() {
  if (!sliderRef.value) {
    return [] as HTMLElement[]
  }

  return Array.from(sliderRef.value.querySelectorAll('.testimonial-card')) as HTMLElement[]
}

function openPreview(index: number) {
  previewIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closePreview() {
  previewIndex.value = null
  document.body.style.overflow = ''
}

function onSliderScroll() {
  if (!isMobile.value || !sliderRef.value) {
    return
  }

  const slides = getSlides()
  if (!slides.length) {
    return
  }

  const scrollLeft = sliderRef.value.scrollLeft
  let nearestIndex = 0
  let smallestDistance = Number.POSITIVE_INFINITY

  slides.forEach((slide, index) => {
    const distance = Math.abs(slide.offsetLeft - scrollLeft)
    if (distance < smallestDistance) {
      smallestDistance = distance
      nearestIndex = index
    }
  })

  activeSlide.value = nearestIndex
}

function getDotOpacity(index: number) {
  const distance = Math.abs(activeSlide.value - index)

  if (distance === 0) {
    return 1
  }

  if (distance === 1) {
    return 0.56
  }

  return 0.3
}

function handleWindowKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && previewIndex.value !== null) {
    closePreview()
  }
}

function handleMediaChange(event: MediaQueryListEvent) {
  isMobile.value = event.matches
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 640px)')
  isMobile.value = mediaQuery.matches
  mediaQuery.addEventListener('change', handleMediaChange)
  window.addEventListener('keydown', handleWindowKeydown)
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', handleMediaChange)
  window.removeEventListener('keydown', handleWindowKeydown)
  document.body.style.overflow = ''
})

useScrollReveal('.reveal', 0.08)
</script>

<style scoped>
.testimonials {
  background: var(--color-white);
  position: relative;
  overflow: hidden;
}

.testimonials__bg {
  position: absolute;
  top: -100px;
  left: -100px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(21, 101, 192, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

/* Header */
.testimonials__header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonials__title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.testimonials__subtitle {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-light);
}

/* Grid */
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.testimonials__slider-dots {
  display: none;
}

.testimonials__slider-dot {
  display: block;
}

/* Testimonial Card */
.testimonial-card {
  border: none;
  background: transparent;
  padding: 0;
  width: 100%;
  text-align: left;
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 4/5;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.testimonial-card:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

/* Last row - center the 3rd item */
.testimonials__grid .testimonial-card:nth-child(5),
.testimonials__grid .testimonial-card:nth-child(6),
.testimonials__grid .testimonial-card:nth-child(7) {
  /* naturally spans */
}

.testimonial-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: var(--shadow-blue);
}

.testimonial-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.testimonial-card:hover .testimonial-card__img {
  transform: scale(1.05);
}

.testimonial-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-3);
  background: linear-gradient(to top, rgba(13, 43, 107, 0.7), transparent);
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.testimonial-card:hover .testimonial-card__overlay {
  opacity: 1;
}

.testimonial-card__stars {
  display: flex;
  gap: 2px;
  color: #FFD600;
}

/* Map Banner */
.testimonials__map-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-8) var(--space-8);
  background: linear-gradient(135deg, var(--color-sky), rgba(165, 214, 167, 0.2));
  border: 1px solid rgba(21, 101, 192, 0.1);
  flex-wrap: wrap;
}

.testimonials__map-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-2);
}

.testimonials__map-desc {
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

.testimonials__map-cta {
  flex-shrink: 0;
  font-size: 0.9rem;
}

.testimonial-preview {
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-modal) + 20);
  background: rgba(7, 24, 51, 0.82);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
}

.testimonial-preview__img {
  width: min(920px, 92vw);
  max-height: 88dvh;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  background: rgba(255, 255, 255, 0.05);
}

.testimonial-preview__close {
  position: absolute;
  top: clamp(12px, 2vw, 24px);
  right: clamp(12px, 2vw, 24px);
  width: 42px;
  height: 42px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.testimonial-preview__close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.04);
}

.testimonial-preview-fade-enter-active,
.testimonial-preview-fade-leave-active {
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.testimonial-preview-fade-enter-from,
.testimonial-preview-fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .testimonials__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .testimonials__slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: var(--space-6);
  }

  .testimonials__slider-dot {
    width: 18px;
    height: 6px;
    border-radius: var(--radius-full);
    background: rgba(21, 101, 192, 0.18);
    transition: width var(--transition-base), background var(--transition-base), transform var(--transition-base), opacity var(--transition-base);
  }

  .testimonials__slider-dot--active {
    width: 38px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    transform: translateY(-1px);
  }

  .testimonials__grid {
    display: flex;
    grid-template-columns: none;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--space-2);
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x pan-y;
    scrollbar-width: none;
    align-items: center;
    margin-bottom: var(--space-5);
    padding-inline: var(--space-2);
    padding-bottom: 0;
  }

  .testimonials__grid::-webkit-scrollbar {
    display: none;
  }

  .testimonial-card {
    flex: 0 0 min(78%, 280px);
    scroll-snap-align: start;
  }

  .testimonial-card:hover {
    transform: none;
    box-shadow: var(--shadow-sm);
  }

  .testimonial-card:hover .testimonial-card__img {
    transform: none;
  }

  .testimonial-card:hover .testimonial-card__overlay {
    opacity: 0;
  }

  .testimonials__map-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
