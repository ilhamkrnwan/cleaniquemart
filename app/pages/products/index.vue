<script setup lang="ts">
useSeoMeta({
  title: 'Katalog Produk — CleaniqueMart',
  description: 'Jelajahi berbagai produk pembersih dan deterjen premium ukuran 25 Liter dari CleaniqueMart. Formula berkualitas tinggi dengan harga mitra bersaing.',
})

const sliderRef = ref<HTMLElement | null>(null)
const activeGroup = ref(0)
const isSliderViewport = ref(false)

const cardsPerGroup = 2

const products = [
  {
    name: 'Hand Washing',
    category: 'Pembersih',
    desc: 'Sabun cuci tangan cair premium yang efektif membunuh kuman sekaligus menjaga kelembutan kulit berkat kandungan moisturizer-nya.',
    image: '/products/Hand-Washing-25L.webp',
    features: ['Efektif angkat kuman', 'Kaya pelembab', 'Aroma segar tahan lama'],
  },
  {
    name: 'Deterjen Busa Tinggi',
    category: 'Deterjen',
    desc: 'Deterjen andalan untuk pencucian pakaian ekstra bersih. Mampu mengangkat noda minyak dan kotoran membandel dengan mudah.',
    image: '/products/Deterjen-Busa-25L.webp',
    features: ['Ekstra busa melimpah', 'Noda membandel rontok', 'Cocok untuk cuci tangan'],
  },
  {
    name: 'Deterjen Matic',
    category: 'Deterjen',
    desc: 'Busa rendah (Low-Suds) dirancang khusus untuk mesin cuci bukaan depan/atas. Mencegah kerak pada mesin cuci dan meluruhkan kotoran.',
    image: '/products/Deterjen-Matic-25L.webp',
    features: ['Low suds/rendah busa', 'Aman untuk mesin cuci', 'Deep cleaning formula'],
  },
  {
    name: 'Dish Washing',
    category: 'Pembersih',
    desc: 'Sabun cuci piring konsentrat yang ampuh menghilangkan lemak membandel dan bau amis seketika. Lembut di tangan.',
    image: '/products/Dish-Washing-25L.webp',
    features: ['Hilangkan lemak bandel', 'Bilas cepat kesat', 'Ekstrak jeruk nipis segar'],
  },
  {
    name: 'Softener (Pelembut)',
    category: 'Perawatan Pakaian',
    desc: 'Merawat serat kain agar tetap lembut, wangi, dan tidak panas saat dikenakan. Menetralkan sisa residu pada deterjen.',
    image: '/products/Softener-25L.webp',
    features: ['Serat kain jadi halus', 'Aroma floral elegan', 'Memudahkan menyetrika'],
  },
  {
    name: 'Pelicin Setrika',
    category: 'Perawatan Pakaian',
    desc: 'Dilengkapi pelicin anti lengket yang menembus serat kain membuat pakaian sangat rapi dan bebas kusut dalam sekali setrika.',
    image: '/products/Pelicin-Setrika-25L.webp',
    features: ['Anti kusut sempurna', 'Anti lengket di setrika', 'Harum fresh sepanjang hari'],
  },
  {
    name: 'Pel Lantai',
    category: 'Pembersih',
    desc: 'Cairan pembersih lantai yang mengangkat kotoran debu dengan kilat. Diformulasikan dengan antibakteri agar lantai bebas kuman.',
    image: '/products/Pel-Lantai-25L.webp',
    features: ['Lantai kilap sempurna', 'Anti lengket', 'Desinfeksi kuman & bakteri'],
  },
  {
    name: 'Parfum Waterbase',
    category: 'Perawatan Pakaian',
    desc: 'Parfum berbasis air yang jauh lebih aman, tidak meninggalkan bekas noda pada pakaian cerah, namun keharumannya awet menempel.',
    image: '/products/Parfum-Waterbase-25L.webp',
    features: ['Non-alkohol berbasis air', 'Tahan hingga 7 hari', 'Tidak menodai kerah'],
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
  return Array.from(sliderRef.value.querySelectorAll('.catalog-item')) as HTMLElement[]
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    })
  }, { threshold: 0.1 })
  
  setTimeout(() => {
    document.querySelectorAll('.products-catalog .reveal').forEach((el) => observer.observe(el))
  }, 100)

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
</script>

<template>
  <div>
    <PageHero
      title="Katalog <span class='accent'>Produk Premium</span>"
      subtitle="Semua formulasi CleaniQue Mart diciptakan untuk performa tinggi, efisiensi maksimal, dan keamanan. Tersedia dalam ukuran jerigen 25 Liter untuk kebutuhan bisnis dan rumah tangga skala besar."
      badge="Formulasi Profesional"
    />

    <section class="products-catalog section">
      <div class="products-catalog__wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,0 L0,0 Z" fill="#F8FBFF" />
        </svg>
      </div>

      <div class="container products-catalog__container">
        <div class="catalog-grid" ref="sliderRef" @scroll.passive="onSliderScroll">
          <article
            v-for="(product, i) in products"
            :key="product.name"
            class="catalog-item glass-card reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <div class="catalog-item__visual">
              <NuxtImg
                :src="product.image"
                :alt="`Produk ${product.name} CleaniqueMart`"
                class="catalog-item__img"
                loading="lazy"
                width="400"
                height="400"
              />
              <div class="catalog-item__overlay">
                <span class="catalog-item__size">Ukuran: 25L</span>
              </div>
            </div>
            
            <div class="catalog-item__content">
              <div class="catalog-item__header">
                <h2 class="catalog-item__title">{{ product.name }}</h2>
                <div class="catalog-item__tag" :class="`tag--${product.category.toLowerCase().replace(' ', '-')}`">
                  {{ product.category }}
                </div>
              </div>
              
              <p class="catalog-item__desc">{{ product.desc }}</p>
              
              <ul class="catalog-item__features">
                <li v-for="feat in product.features" :key="feat">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  {{ feat }}
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div class="catalog__slider-dots" v-if="sliderDots.length > 1">
          <button
            v-for="(_, i) in sliderDots"
            :key="`dot-${i}`"
            type="button"
            class="catalog__slider-dot"
            :class="{ 'catalog__slider-dot--active': activeGroup === i }"
            :style="{ opacity: getDotOpacity(i) }"
            :aria-label="`Tampilkan grup produk ${i + 1}`"
            :aria-pressed="activeGroup === i"
            @click="goToGroup(i)"
          ></button>
        </div>
      </div>

      <div class="products-catalog__wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,50 1440,40 L1440,80 L0,80 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>

    <ProductsReviews />
  </div>
</template>

<style scoped>
.products-catalog {
  position: relative;
  overflow: hidden;
  background: var(--color-surface);
  padding: 0;
}

.products-catalog__wave-top,
.products-catalog__wave-bottom {
  overflow: hidden;
  line-height: 0;
}

.products-catalog__wave-top svg,
.products-catalog__wave-bottom svg {
  width: 100%;
  height: 80px;
}

.products-catalog__container {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.catalog__slider-dots {
  display: none;
}

.catalog__slider-dot {
  display: block;
}

.catalog-item {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.08);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.catalog-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-blue);
}

.catalog-item__visual {
  position: relative;
  aspect-ratio: 1.1;
  background: var(--color-sky);
  overflow: hidden;
}

.catalog-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.catalog-item:hover .catalog-item__img {
  transform: scale(1.08);
}

.catalog-item__overlay {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
}

.catalog-item__size {
  background: var(--color-white);
  color: var(--color-primary-dark);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 0.8rem;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
}

.catalog-item__content {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.catalog-item__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-3);
  gap: var(--space-2);
}

.catalog-item__title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  line-height: 1.2;
}

.catalog-item__tag {
  font-size: 0.7rem;
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

.catalog-item__desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: var(--space-5);
  flex: 1;
}

.catalog-item__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: auto;
  margin-bottom: 0;
  border-top: 1px dashed rgba(21, 101, 192, 0.15);
  padding-top: var(--space-4);
}

.catalog-item__features li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text);
}

.catalog-item__features svg {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 1024px) {
  .catalog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .products-catalog__wave-top svg,
  .products-catalog__wave-bottom svg {
    height: 64px;
  }

  .catalog__slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: var(--space-8);
  }

  .catalog__slider-dot {
    width: 18px;
    height: 6px;
    border-radius: var(--radius-full);
    border: none;
    padding: 0;
    background: rgba(21, 101, 192, 0.18);
    transition: width var(--transition-base), background var(--transition-base), transform var(--transition-base), opacity var(--transition-base);
    cursor: pointer;
  }

  .catalog__slider-dot--active {
    width: 38px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    transform: translateY(-1px);
  }

  .catalog__slider-dot:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  .catalog-grid {
    display: flex;
    grid-template-columns: none;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--space-2);
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x pan-y;
    scrollbar-width: none;
    align-items: stretch;
    gap: var(--space-4);
    margin-bottom: var(--space-5);
    padding-inline: var(--space-2);
    padding-bottom: 0;
  }

  .catalog-grid::-webkit-scrollbar {
    display: none;
  }

  .catalog-item {
    flex: 0 0 min(78%, 280px);
    scroll-snap-align: start;
  }
  
  .catalog-item:hover {
    transform: none;
  }
  
  .catalog-item:hover .catalog-item__img {
    transform: none;
  }
}
</style>
