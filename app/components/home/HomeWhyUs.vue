<template>
  <section class="why section" id="mengapa-kami">
    <div class="container">
      <!-- Header -->
      <div class="why__header">
        <div class="section-badge reveal-blur">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Keunggulan Kami
        </div>
        <h2 class="why__title reveal reveal-delay-1">
          Mengapa Pilih <span class="gradient-text">CleaniQue Mart?</span>
        </h2>
        <p class="why__subtitle reveal reveal-delay-2">
          Kami bukan sekadar pemasok sabun. Kami adalah mitra bisnis Anda yang berkomitmen untuk memastikan kesuksesan bersama.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="why__grid reveal-stagger">
        <div
          v-for="(item, i) in whyItems"
          :key="item.title"
          class="why__card glass-card reveal-scale"
        >
          <div class="why__card-icon" :style="{ background: item.iconBg }">
            <span v-html="item.icon" aria-hidden="true"></span>
          </div>
          <h3 class="why__card-title">{{ item.title }}</h3>
          <p class="why__card-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const whyItems = [
  {
    title: 'Produk Selalu Dibutuhkan',
    desc: 'Sabun bukan kebutuhan musiman—semua orang butuhnya setiap hari. Market Anda tidak akan pernah sepi, stabil sepanjang tahun.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    iconBg: 'linear-gradient(135deg, #1565C0, #1976D2)',
  },
  {
    title: 'Modal Terjangkau, Margin Tinggi',
    desc: 'Mulai dengan modal kecil dan nikmati keuntungan yang signifikan. Harga mitra jauh lebih kompetitif dari distributor biasa.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    iconBg: 'linear-gradient(135deg, #43A047, #2E7D32)',
  },
  {
    title: 'Dukungan Penuh & Pendampingan',
    desc: 'Tim kami siap mendampingi Anda dari strategi berjualan, tips marketing, hingga pengelolaan stok. Anda tidak berjalan sendirian.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    iconBg: 'linear-gradient(135deg, #FB8C00, #E65100)',
  },
  {
    title: 'Bersertifikat & Terpercaya',
    desc: 'Semua produk telah mendapat sertifikat Halal MUI dan Izin Edar PKRT. Jualan dengan tenang, pelanggan lebih percaya.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    iconBg: 'linear-gradient(135deg, #8E24AA, #6A1B9A)',
  },
  {
    title: 'Kualitas Premium Formula R&D',
    desc: 'Setiap produk dikembangkan oleh lab Cleanique dengan formula khusus yang mengutamakan kualitas, aroma, dan performa terbaik.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4m-5 0h5"/></svg>`,
    iconBg: 'linear-gradient(135deg, #00ACC1, #006064)',
  },
  {
    title: 'Distribusi Cepat se-Indonesia',
    desc: 'Stok selalu ready dan pengiriman ke seluruh Indonesia. Mitra di Jawa, Sumatera, Kalimantan, hingga wilayah timur sudah kami layani.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    iconBg: 'linear-gradient(135deg, #EF5350, #B71C1C)',
  },
]

useScrollReveal()
</script>

<style scoped>
.why {
  background: var(--color-surface);
  position: relative;
}

.why__header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.why__title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.why__subtitle {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-light);
}

/* Grid */
.why__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

/* Card */
.why__card {
  padding: var(--space-8) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.06);
}

.why__card-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: var(--space-1);
  box-shadow: var(--shadow-sm);
}

.why__card-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  line-height: 1.3;
}

.why__card-desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

/* Responsive */
@media (max-width: 1024px) {
  .why__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .why__grid {
    grid-template-columns: 1fr;
  }
}
</style>
