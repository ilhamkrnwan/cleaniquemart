<template>
  <section class="reviews section" id="reviews">
    <!-- Background decoration -->
    <div class="reviews__bg" aria-hidden="true"></div>

    <div class="container">
      <!-- Header -->
      <div class="reviews__header">
        <div class="section-badge reveal-blur">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Ulasan Produk
        </div>
        <h2 class="reviews__title reveal reveal-delay-1">
          Apa Kata <span class="gradient-text">Pelanggan Kami?</span>
        </h2>
        <p class="reviews__subtitle reveal reveal-delay-2">
          Bukti nyata kepuasan pelanggan yang telah merasakan performa tinggi dari produk CleaniqueMart.
        </p>
      </div>

      <!-- Reviews Grid -->
      <div class="reviews__grid reveal-stagger" ref="sliderRef" @scroll.passive="onSliderScroll">
        <button
          v-for="(item, i) in reviews"
          :key="i"
          class="review-card reveal"
          type="button"
          :aria-label="`Buka ulasan ${i + 1} dalam ukuran besar`"
          @click="openPreview(i)"
        >
          <NuxtImg
            :src="item.image"
            :alt="`Ulasan produk CleaniqueMart ke-${i + 1}`"
            width="400"
            height="400"
            class="review-card__img"
            loading="lazy"
            sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 300px"
          />
          <div class="review-card__overlay">
            <div class="review-card__zoom-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            </div>
          </div>
        </button>
      </div>

      <div class="reviews__slider-dots" aria-hidden="true">
        <span
          v-for="(_, i) in reviews"
          :key="`dot-${i}`"
          class="reviews__slider-dot"
          :class="{ 'reviews__slider-dot--active': activeSlide === i }"
          :style="{ opacity: getDotOpacity(i) }"
        ></span>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="review-preview-fade">
        <div
          v-if="previewImage"
          class="review-preview"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau gambar ulasan"
          @click.self="closePreview"
        >
          <button
            class="review-preview__close"
            type="button"
            aria-label="Tutup pratinjau"
            @click="closePreview"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <NuxtImg
            :src="previewImage"
            alt="Pratinjau ulasan pelanggan CleaniqueMart"
            width="1200"
            height="1200"
            fit="contain"
            class="review-preview__img"
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

const reviews = [
  { image: '/reviews/review-arai.webp' },
  { image: '/reviews/review-athari.webp' },
  { image: '/reviews/review-determart.webp' },
  { image: '/reviews/review-essenz.webp' },
  { image: '/reviews/review-malabeez.webp' },
  { image: '/reviews/review-oclean.webp' },
  { image: '/reviews/review-pel-lantai.webp' },
  { image: '/reviews/review-pelicin-setrika.webp' },
  { image: '/reviews/review-soft-sense.webp' },
]

const previewImage = computed(() => {
  if (previewIndex.value === null) {
    return null
  }
  return reviews[previewIndex.value]?.image ?? null
})

let mediaQuery: MediaQueryList | null = null

function getSlides() {
  if (!sliderRef.value) {
    return [] as HTMLElement[]
  }
  return Array.from(sliderRef.value.querySelectorAll('.review-card')) as HTMLElement[]
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
.reviews {
  background: var(--color-white);
  position: relative;
  overflow: hidden;
  padding-bottom: var(--space-16);
}

.reviews__bg {
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
.reviews__header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reviews__title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.reviews__subtitle {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-light);
}

/* Grid */
.reviews__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.reviews__slider-dots {
  display: none;
}

.reviews__slider-dot {
  display: block;
}

/* Review Card */
.review-card {
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

.review-card:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

.review-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: var(--shadow-blue);
}

.review-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.review-card:hover .review-card__img {
  transform: scale(1.05);
}

.review-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(13, 43, 107, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.review-card:hover .review-card__overlay {
  opacity: 1;
}

.review-card__zoom-icon {
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  padding: var(--space-3);
  border-radius: var(--radius-full);
  transform: scale(0.8);
  transition: transform var(--transition-base);
}

.review-card:hover .review-card__zoom-icon {
  transform: scale(1);
}

.review-preview {
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

.review-preview__img {
  width: min(920px, 92vw);
  max-height: 88dvh;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  background: rgba(255, 255, 255, 0.05);
}

.review-preview__close {
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

.review-preview__close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.04);
}

.review-preview-fade-enter-active,
.review-preview-fade-leave-active {
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.review-preview-fade-enter-from,
.review-preview-fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .reviews__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .reviews__slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: var(--space-6);
  }

  .reviews__slider-dot {
    width: 18px;
    height: 6px;
    border-radius: var(--radius-full);
    background: rgba(21, 101, 192, 0.18);
    transition: width var(--transition-base), background var(--transition-base), transform var(--transition-base), opacity var(--transition-base);
  }

  .reviews__slider-dot--active {
    width: 38px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    transform: translateY(-1px);
  }

  .reviews__grid {
    display: flex;
    grid-template-columns: none;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--space-2);
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x;
    scrollbar-width: none;
    align-items: center;
    margin-bottom: var(--space-5);
    padding-inline: var(--space-2);
    padding-bottom: 0;
  }

  .reviews__grid::-webkit-scrollbar {
    display: none;
  }

  .review-card {
    flex: 0 0 min(78%, 280px);
    scroll-snap-align: start;
  }

  .review-card:hover {
    transform: none;
    box-shadow: var(--shadow-sm);
  }
}
</style>
