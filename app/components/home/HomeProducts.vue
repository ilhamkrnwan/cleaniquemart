<template>
  <section class="products section" id="produk">
    <!-- Wave Top -->
    <div class="products__wave-top" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,0 L0,0 Z" fill="#F8FBFF"/>
      </svg>
    </div>

    <div class="container">
      <!-- Header -->
      <div class="products__header">
        <div class="section-badge reveal-blur">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Varian Produk
        </div>
        <h2 class="products__title reveal reveal-delay-1">
          Produk <span class="gradient-text">Unggulan Kami</span>
        </h2>
        <p class="products__subtitle reveal reveal-delay-2">
          8 varian sabun curah premium yang sudah terbukti laris di pasaran. Semua ukuran 25 liter, siap kirim ke seluruh Indonesia.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="products__grid reveal-stagger" ref="sliderRef" @scroll.passive="onSliderScroll">
        <article
          v-for="(product, i) in products"
          :key="product.name"
          class="product-card glass-card reveal"
        >
          <div class="product-card__img-wrap">
            <NuxtImg
              :src="product.image"
              :alt="`${product.name} 25 Liter - CleaniqueMart`"
              width="300"
              height="300"
              class="product-card__img"
              loading="lazy"
              sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 280px"
            />
            <div class="product-card__badge">25 L</div>
          </div>
          <div class="product-card__body">
            <div class="product-card__header">
              <h3 class="product-card__name">{{ product.name }}</h3>
              <div class="product-card__tag" :class="`tag--${product.category.toLowerCase().replace(' ', '-')}`">
                {{ product.category }}
              </div>
            </div>
            <p class="product-card__desc">{{ product.desc }}</p>
          </div>
        </article>
      </div>

      <div class="products__slider-dots" v-if="sliderDots.length > 1">
        <button
          v-for="(_, i) in sliderDots"
          :key="`dot-${i}`"
          type="button"
          class="products__slider-dot"
          :class="{ 'products__slider-dot--active': activeGroup === i }"
          :style="{ opacity: getDotOpacity(i) }"
          :aria-label="`Tampilkan grup produk ${i + 1}`"
          :aria-pressed="activeGroup === i"
          @click="goToGroup(i)"
        ></button>
      </div>

      <!-- View All CTA -->
      <div class="products__more reveal-scale">
        <NuxtLink to="/products" class="btn btn-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Lihat Semua Produk
        </NuxtLink>
      </div>
    </div>

    <!-- Wave Bottom -->
    <div class="products__wave-bottom" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,50 1440,40 L1440,80 L0,80 Z" fill="#F8FBFF"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const sliderRef = ref<HTMLElement | null>(null)
const activeGroup = ref(0)
const isSliderViewport = ref(false)

const cardsPerGroup = 2

const products = [
  {
    name: 'Hand Washing',
    category: 'Pembersih',
    desc: 'Sabun cuci tangan anti bakteri dengan formula pelembab. Merawat kulit tetap lembut.',
    image: '/products/Hand-Washing-25L.webp',
  },
  {
    name: 'Deterjen Busa',
    category: 'Deterjen',
    desc: 'Deterjen busa tinggi dengan wangi tahan lama. Mengangkat noda membandel efektif.',
    image: '/products/Deterjen-Busa-25L.webp',
  },
  {
    name: 'Deterjen Matic',
    category: 'Deterjen',
    desc: 'Formula khusus mesin cuci matic, busa rendah, daya angkat noda optimal.',
    image: '/products/Deterjen-Matic-25L.webp',
  },
  {
    name: 'Dish Washing',
    category: 'Pembersih',
    desc: 'Sabun cuci piring pembersih lemak kuat, aman di tangan, harum segar.',
    image: '/products/Dish-Washing-25L.webp',
  },
  {
    name: 'Softener',
    category: 'Perawatan Pakaian',
    desc: 'Pelembut pakaian dengan aroma bunga yang tahan lama. Menjaga serat kain tetap lembut.',
    image: '/products/Softener-25L.webp',
  },
  {
    name: 'Pelicin Setrika',
    category: 'Perawatan Pakaian',
    desc: 'Pelicin setrika dengan formula anti lengket. Pakaian lebih rapi dan mudah disetrika.',
    image: '/products/Pelicin-Setrika-25L.webp',
  },
  {
    name: 'Pel Lantai',
    category: 'Pembersih',
    desc: 'Cairan pel lantai dengan desinfektan alami. Bersih dari kuman, harum segar.',
    image: '/products/Pel-Lantai-25L.webp',
  },
  {
    name: 'Parfum Waterbase',
    category: 'Perawatan Pakaian',
    desc: 'Parfum laundry berbasis air tahan lama. Memberikan keharuman pada pakaian bersih.',
    image: '/products/Parfum-Waterbase-25L.webp',
  },
]

const sliderDots = computed(() => {
  return Array.from({ length: Math.ceil(products.length / cardsPerGroup) })
})

let mediaQuery: MediaQueryList | null = null

function getSlides() {
  if (!sliderRef.value) {
    return [] as HTMLElement[]
  }

  return Array.from(sliderRef.value.querySelectorAll('.product-card')) as HTMLElement[]
}

function onSliderScroll() {
  if (!isSliderViewport.value || !sliderRef.value) {
    return
  }

  const slides = getSlides()
  if (!slides.length) {
    return
  }

  const scrollLeft = sliderRef.value.scrollLeft
  let nearestGroup = 0
  let smallestDistance = Number.POSITIVE_INFINITY

  sliderDots.value.forEach((_, groupIndex) => {
    const slideIndex = Math.min(groupIndex * cardsPerGroup, slides.length - 1)
    const groupOffset = slides[slideIndex]?.offsetLeft ?? 0
    const distance = Math.abs(groupOffset - scrollLeft)

    if (distance < smallestDistance) {
      smallestDistance = distance
      nearestGroup = groupIndex
    }
  })

  activeGroup.value = nearestGroup
}

function goToGroup(index: number) {
  if (!sliderRef.value) {
    return
  }

  const slides = getSlides()
  if (!slides.length) {
    return
  }

  const targetIndex = Math.min(index * cardsPerGroup, slides.length - 1)
  const targetSlide = slides[targetIndex]
  if (!targetSlide) {
    return
  }

  sliderRef.value.scrollTo({
    left: targetSlide.offsetLeft,
    behavior: 'smooth',
  })

  activeGroup.value = index
}

function getDotOpacity(index: number) {
  const distance = Math.abs(activeGroup.value - index)

  if (distance === 0) {
    return 1
  }

  if (distance === 1) {
    return 0.56
  }

  return 0.3
}

function handleMediaChange(event: MediaQueryListEvent) {
  isSliderViewport.value = event.matches

  if (!event.matches) {
    activeGroup.value = 0
    return
  }

  nextTick(() => {
    onSliderScroll()
  })
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 768px)')
  isSliderViewport.value = mediaQuery.matches
  mediaQuery.addEventListener('change', handleMediaChange)

  nextTick(() => {
    onSliderScroll()
  })
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', handleMediaChange)
})

useScrollReveal('.reveal', 0.08)
</script>

<style scoped>
.products {
  background: linear-gradient(180deg, var(--color-sky) 0%, var(--color-white) 100%);
  position: relative;
  padding: 0;
}

.products__wave-top,
.products__wave-bottom {
  overflow: hidden;
  line-height: 0;
}

.products__wave-top svg,
.products__wave-bottom svg {
  width: 100%;
  height: 80px;
}

.products > .container {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

/* Header */
.products__header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.products__title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.products__subtitle {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-light);
}

/* Grid */
.products__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
  margin-bottom: var(--space-8);
}

.products__slider-dots {
  display: none;
}

.products__slider-dot {
  display: block;
}

/* Product Card */
.product-card {
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.product-card__img-wrap {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--color-sky);
}

.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card__badge {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  padding: 4px var(--space-2);
  background: var(--color-primary);
  color: white;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: var(--radius-full);
}

.product-card__body {
  padding: var(--space-4);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.product-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-2);
}

.product-card__name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  line-height: 1.3;
}

.product-card__tag {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px var(--space-2);
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

.tag--deterjen {
  background: rgba(30, 136, 229, 0.1);
  color: #1E88E5;
}

.tag--pembersih {
  background: rgba(67, 160, 71, 0.1);
  color: #43A047;
}

.tag--perawatan-pakaian {
  background: rgba(142, 36, 170, 0.1);
  color: #8E24AA;
}

.product-card__desc {
  font-size: 0.825rem;
  line-height: 1.6;
  color: var(--color-text-light);
  flex: 1;
}

/* More CTA */
.products__more {
  display: flex;
  justify-content: center;
  margin-top: var(--space-6);
}

/* Responsive */
@media (max-width: 1024px) {
  .products__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products__slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: var(--space-6);
  }

  .products__slider-dot {
    width: 18px;
    height: 6px;
    border-radius: var(--radius-full);
    border: none;
    padding: 0;
    background: rgba(21, 101, 192, 0.18);
    transition: width var(--transition-base), background var(--transition-base), transform var(--transition-base), opacity var(--transition-base);
    cursor: pointer;
  }

  .products__slider-dot--active {
    width: 38px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    transform: translateY(-1px);
  }

  .products__slider-dot:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  .products__grid {
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
    gap: var(--space-4);
    margin-bottom: var(--space-5);
    padding-inline: var(--space-2);
    padding-bottom: 0;
  }

  .products__grid::-webkit-scrollbar {
    display: none;
  }

  .product-card {
    flex: 0 0 min(78%, 280px);
    scroll-snap-align: start;
  }

  .product-card:hover .product-card__img {
    transform: none;
  }
}
</style>
