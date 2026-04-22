<template>
  <div>
    <PageHero
      title="Katalog <span class='accent'>Produk Premium</span>"
      subtitle="Semua formulasi CleaniQue Mart diciptakan untuk performa tinggi, efisiensi maksimal, dan keamanan. Tersedia dalam ukuran jerigen 25 Liter untuk kebutuhan bisnis dan rumah tangga skala besar."
      badge="Formulasi Profesional"
    />

    <section class="products-catalog section">
      <div class="container">
        <!-- Categories Filter (Visual only for now) -->
        <div class="catalog-filters reveal">
          <button class="filter-btn active">Semua Varian</button>
          <button class="filter-btn">Deterjen</button>
          <button class="filter-btn">Pembersih</button>
          <button class="filter-btn">Perawatan Pakaian</button>
        </div>

        <div class="catalog-grid">
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
              
              <div class="catalog-item__actor">
                <a
                  :href="getWhatsAppLink(product.name)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/></svg>
                  Order Varian Ini
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Katalog Produk — CleaniqueMart',
  description: 'Jelajahi berbagai produk pembersih dan deterjen premium ukuran 25 Liter dari CleaniqueMart. Formula berkualitas tinggi dengan harga mitra bersaing.',
})

const getWhatsAppLink = (productName: string) => {
  const text = encodeURIComponent(`Halo Tim CleaniqueMart, saya tertarik untuk memesan produk varian *${productName}* ukuran 25L. Boleh minta informasi harga dan pengirimannya?`)
  return `https://wa.me/6287885590088?text=${text}`
}

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

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    })
  }, { threshold: 0.1 })
  
  // Need timeout to catch newly mounted elements logic in some frameworks
  setTimeout(() => {
    document.querySelectorAll('.products-catalog .reveal').forEach((el) => observer.observe(el))
  }, 100)
})
</script>

<style scoped>
.products-catalog {
  background: var(--color-surface);
}

.catalog-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-12);
}

.filter-btn {
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.1);
  color: var(--color-text);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  padding: var(--space-2) var(--space-6);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
}

.filter-btn:hover {
  border-color: var(--color-primary-light);
  color: var(--color-primary);
}

.filter-btn.active {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
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
  margin-bottom: var(--space-6);
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

.catalog-item__actor {
  margin-top: auto;
}

.w-full {
  width: 100%;
  justify-content: center;
}

@media (max-width: 1024px) {
  .catalog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .catalog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
