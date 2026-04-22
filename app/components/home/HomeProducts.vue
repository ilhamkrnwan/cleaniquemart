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
        <div class="section-badge reveal">
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
      <div class="products__grid">
        <article
          v-for="(product, i) in products"
          :key="product.name"
          class="product-card glass-card reveal"
          :class="`reveal-delay-${(i % 4) + 1}`"
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
            <h3 class="product-card__name">{{ product.name }}</h3>
            <p class="product-card__desc">{{ product.desc }}</p>
            <NuxtLink to="/products" class="product-card__link">
              Lihat Detail
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- View All CTA -->
      <div class="products__more reveal">
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
const products = [
  {
    name: 'Hand Washing',
    desc: 'Sabun cuci tangan anti bakteri dengan formula pelembab. Merawat kulit tetap lembut.',
    image: '/products/Hand-Washing-25L.webp',
  },
  {
    name: 'Deterjen Busa',
    desc: 'Deterjen busa tinggi dengan wangi tahan lama. Mengangkat noda membandel efektif.',
    image: '/products/Deterjen-Busa-25L.webp',
  },
  {
    name: 'Deterjen Matic',
    desc: 'Formula khusus mesin cuci matic, busa rendah, daya angkat noda optimal.',
    image: '/products/Deterjen-Matic-25L.webp',
  },
  {
    name: 'Dish Washing',
    desc: 'Sabun cuci piring pembersih lemak kuat, aman di tangan, harum segar.',
    image: '/products/Dish-Washing-25L.webp',
  },
  {
    name: 'Softener',
    desc: 'Pelembut pakaian dengan aroma bunga yang tahan lama. Menjaga serat kain tetap lembut.',
    image: '/products/Softener-25L.webp',
  },
  {
    name: 'Pelicin Setrika',
    desc: 'Pelicin setrika dengan formula anti lengket. Pakaian lebih rapi dan mudah disetrika.',
    image: '/products/Pelicin-Setrika-25L.webp',
  },
  {
    name: 'Pel Lantai',
    desc: 'Cairan pel lantai dengan desinfektan alami. Bersih dari kuman, harum segar.',
    image: '/products/Pel-Lantai-25L.webp',
  },
  {
    name: 'Parfum Waterbase',
    desc: 'Parfum laundry berbasis air tahan lama. Memberikan keharuman pada pakaian bersih.',
    image: '/products/Parfum-Waterbase-25L.webp',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.08 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
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
  margin-bottom: var(--space-10);
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

.product-card:hover .product-card__img {
  transform: scale(1.06);
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

.product-card__name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  line-height: 1.3;
}

.product-card__desc {
  font-size: 0.825rem;
  line-height: 1.6;
  color: var(--color-text-light);
  flex: 1;
}

.product-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-top: auto;
  transition: gap var(--transition-fast), color var(--transition-fast);
}

.product-card__link:hover {
  gap: var(--space-2);
  color: var(--color-accent);
}

/* More CTA */
.products__more {
  display: flex;
  justify-content: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .products__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}

@media (max-width: 400px) {
  .products__grid {
    grid-template-columns: 1fr;
  }
}
</style>
