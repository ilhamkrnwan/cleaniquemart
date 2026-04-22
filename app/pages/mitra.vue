<template>
  <div>
    <PageHero
      title="Gabung Jaringan <span class='accent'>Mitra Terbesar</span>"
      subtitle="Jadilah bagian dari revolusi industri sabun curah di Indonesia. Kami menyediakan sistem kemitraan yang transparan, mudah dijalankan, dan terbukti menguntungkan."
      badge="Peluang Usaha"
    />

    <!-- Mitra Tiers -->
    <section class="mitra-tiers section">
      <div class="container">
        <div class="section-badge reveal mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Pilihan Paket
        </div>
        <h2 class="text-center text-title reveal reveal-delay-1 mb-12">
          Pilih Paket yang Sesuai <br /> <span class="gradient-text">Dengan Bisnis Anda</span>
        </h2>

        <div class="tiers-grid">
          <div
            v-for="(tier, i) in tiers"
            :key="tier.name"
            class="tier-card glass-card reveal"
            :class="[
              `reveal-delay-${i + 1}`,
              { 'tier-card--popular': tier.isPopular }
            ]"
          >
            <div v-if="tier.isPopular" class="tier-card__badge">Paling Diminati</div>
            <div class="tier-card__header">
              <h3 class="tier-card__name">{{ tier.name }}</h3>
              <p class="tier-card__desc">{{ tier.desc }}</p>
            </div>
            
            <div class="tier-card__price">
              <span class="tier-card__price-label">Mulai Dari</span>
              <div class="tier-card__price-amount">{{ tier.price }}</div>
            </div>

            <ul class="tier-card__benefits">
              <li v-for="benefit in tier.benefits" :key="benefit">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {{ benefit }}
              </li>
            </ul>

            <div class="tier-card__footer">
              <a
                :href="getWhatsAppLink(tier.name)"
                target="_blank"
                rel="noopener noreferrer"
                class="btn w-full"
                :class="tier.isPopular ? 'btn-primary' : 'btn-outline-blue'"
              >
                Pilih Paket
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI / Margin Section -->
    <section class="roi-section section">
      <div class="container">
        <div class="roi-grid">
          <div class="roi-text reveal">
            <h2 class="text-title mb-4">Mengapa <span class="gradient-text">Margin Kami Menjanjikan?</span></h2>
            <p class="mb-6 text-light leading-relaxed">
              Sabun adalah barang dengan rasio *repeat order* (pembelian ulang) sangat tinggi. Rata-rata rumah tangga membutuhkan minimal 3 liter berbagai sabun dalam sebulan.
            </p>
            <ul class="roi-points">
              <li>
                <div class="roi-points__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <h4>Harga Pabrik Langsung</h4>
                  <p>Memotong jalur distribusi panjang sehingga Anda mendapat harga dasar terbaik.</p>
                </div>
              </li>
              <li>
                <div class="roi-points__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div>
                  <h4>Tingkat Penjualan Cepat</h4>
                  <p>Pasar terbuka luas: Rumah Tangga, Laundry, Restoran, Kost, hingga Perkantoran.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="roi-visual glass-card reveal reveal-delay-2">
            <h3 class="font-display font-bold text-xl text-primary-dark mb-6 text-center">Simulasi Keuntungan Sederhana</h3>
            <div class="calculation">
              <div class="calc-row">
                <span>Harga Beli Mitra (/Jerigen 25L)</span>
                <strong>± Rp 160.000</strong>
              </div>
              <div class="calc-row">
                <span>Harga Jual Eceran (/Liter)</span>
                <strong>Rp 10.000 - Rp 15.000</strong>
              </div>
              <div class="calc-divider"></div>
              <div class="calc-row">
                <span>Total Omzet (/Jerigen)</span>
                <strong>Rp 250.000 - Rp 375.000</strong>
              </div>
              <div class="calc-row calc-result">
                <span>Profit Bersih Ekstimasi</span>
                <strong>≥ 50% Margin</strong>
              </div>
            </div>
            <p class="text-xs text-center text-light mt-4">*Angka di atas adalah simulasi rata-rata pasar. Harga spesifik berbeda per jenis produk.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section section">
      <div class="container faq-container">
        <div class="text-center mb-12 reveal">
          <div class="section-badge mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Tanya Jawab
          </div>
          <h2 class="text-title mt-4">FAQ Kemitraan</h2>
        </div>

        <div class="reveal reveal-delay-1">
          <UAccordion
            :items="faqs"
            color="primary"
            variant="ghost"
            size="lg"
            :ui="{ wrapper: 'flex flex-col w-full gap-2', item: { padding: 'pt-2 pb-4 text-gray-600' } }"
          />
        </div>
      </div>
    </section>

    <HomeCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Program Kemitraan — CleaniqueMart',
  description: 'Dapatkan harga pabrik untuk bisnis sabun curah Anda. Tersedia paket Reseller, Agen, dan Distributor untuk menjangkau seluruh pangsa pasar Indonesia.',
})

const getWhatsAppLink = (tierName: string) => {
  const text = encodeURIComponent(`Halo, saya tertarik dengan informasi kemitraan CleaniqueMart untuk tingkat *${tierName}*. Boleh minta detail persyaratannya?`)
  return `https://wa.me/6287885590088?text=${text}`
}

const tiers = [
  {
    name: 'Reseller Pemula',
    desc: 'Cocok untuk coba-coba pasar lokal dan tetangga sekitar.',
    price: 'Modal Minim',
    isPopular: false,
    benefits: [
      'Pembelian minimal sangat rendah (1 Jerigen 25L)',
      'Tanpa biaya registrasi',
      'Harga khusus reseller',
      'Konten promosi disiapkan',
    ],
  },
  {
    name: 'Agen Cerdas',
    desc: 'Untuk Anda yang siap menyuplai pengusaha laundry dan restoran lokal.',
    price: '± Rp 1 Jutaan',
    isPopular: true,
    benefits: [
      'Margin keuntungan jauh lebih besar',
      'Prioritas stok produk',
      'Pendampingan strategi marketing',
      'Gratis sampel produk varian baru',
      'Support spanduk/banner (syarat & ketentuan berlaku)',
    ],
  },
  {
    name: 'Distributor Wilayah',
    desc: 'Menguasai area / kabupaten tertentu dengan volume partai besar.',
    price: 'Konsultasi Khusus',
    isPopular: false,
    benefits: [
      'Harga terbaik/pabrik (Bottom Price)',
      'Perlindungan area eksklusif',
      'Dukungan logistik khusus',
      'Prioritas R&D pesanan custom',
      'Training sales tim langsung',
    ],
  },
]

const faqs = [
  {
    label: 'Apakah ada biaya tambahan untuk mendaftar sebagai mitra?',
    content: 'Tidak ada biaya pendaftaran (franchise fee/royalti). Anda hanya cukup membayar untuk pembelian produk fisik. Semua keuntungan 100% milik Anda.',
  },
  {
    label: 'Bagaimana sistem pengiriman untuk luar daerah Yogyakarta?',
    content: 'Kami bekerja sama dengan berbagai kargo (darat maupun laut) yang efisien untuk pengiriman jerigen 25L. Kami akan mencarikan ongkos kirim termurah ke wilayah Anda, biaya ditanggung oleh pembeli atau bisa dinegosiasikan sesuai volume.',
  },
  {
    label: 'Apakah saya bebas menentukan harga jual sendiri?',
    content: 'Tentu. Kami memberikan harga dasar, Anda bebas menentukan harga jual berdasarkan HPP wilayah Anda. Namun, kami selalu menyarankan Harga Eceran Tertinggi (HET) agar tetap bersaing di pasar.',
  },
  {
    label: 'Jika barang rusak / bocor saat pengiriman apakah diganti?',
    content: 'Kami memprioritaskan keamanan kemasan. Namun, jika terjadi cacat/bocor yang diakibatkan kelalaian tim kami dan dapat dibuktikan melalui video unboxing, kami sepenuhnya akan mengganti kerugian tersebut.',
  },
  {
    label: 'Apakah status halal dan izin edarnya bisa dipasang di toko saya?',
    content: 'Ya, seluruh mitra berhak mencantumkan logo sertifikat halal dan nomor izin edar (PKRT) dari produk Cleanique pada materi promosi mereka untuk meningkatkan kepercayaan pelanggan.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    })
  }, { threshold: 0.1 })
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  }, 100)
})
</script>

<style scoped>
/* Helpers used across page */
.text-center { text-align: center; }
.text-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--color-primary-dark);
}
.text-light { color: var(--color-text-light); }
.text-primary-dark { color: var(--color-primary-dark); }
.text-xl { font-size: 1.25rem; }
.font-display { font-family: var(--font-display); }
.font-bold { font-weight: 700; }
.mb-4 { margin-bottom: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.mb-12 { margin-bottom: var(--space-12); }
.mt-4 { margin-top: var(--space-4); }
.mx-auto { margin-left: auto; margin-right: auto; }
.leading-relaxed { line-height: 1.75; }
.w-full { width: 100%; justify-content: center; }
.text-xs { font-size: 0.8rem; }

/* Tiers Grid */
.mitra-tiers {
  background: var(--color-surface);
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  max-width: 1100px;
  margin: 0 auto;
}

.tier-card {
  position: relative;
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.08);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.tier-card:hover {
  transform: translateY(-8px);
}

.tier-card--popular {
  border: 2px solid var(--color-primary);
  box-shadow: var(--shadow-lg);
  transform: scale(1.02);
}
.tier-card--popular:hover {
  transform: scale(1.02) translateY(-8px);
}

.tier-card__badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.85rem;
  padding: 4px var(--space-4);
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.tier-card__header {
  margin-bottom: var(--space-6);
}

.tier-card__name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-2);
}

.tier-card__desc {
  font-size: 0.9rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

.tier-card__price {
  background: rgba(66, 165, 245, 0.05);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-8);
  text-align: center;
}

.tier-card__price-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.tier-card__price-amount {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-top: 4px;
}

.tier-card__benefits {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
  flex: 1;
}

.tier-card__benefits li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.5;
}

.tier-card__benefits svg {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.tier-card__footer {
  margin-top: auto;
}

/* ROI Section */
.roi-section {
  background: var(--color-white);
  border-top: 1px solid rgba(21, 101, 192, 0.06);
  border-bottom: 1px solid rgba(21, 101, 192, 0.06);
}

.roi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.roi-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.roi-points li {
  display: flex;
  gap: var(--space-4);
}

.roi-points__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: rgba(66, 165, 245, 0.1);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.roi-points h4 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-primary-dark);
  margin-bottom: 4px;
}

.roi-points p {
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.5;
}

.roi-visual {
  background: linear-gradient(135deg, rgba(21, 101, 192, 0.03), rgba(67, 160, 71, 0.05));
  padding: var(--space-8);
  border: 1px solid rgba(21, 101, 192, 0.1);
}

.calculation {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.calc-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
}

.calc-row span {
  color: var(--color-text-light);
}

.calc-row strong {
  font-weight: 700;
  color: var(--color-text);
}

.calc-divider {
  height: 1px;
  background: rgba(21, 101, 192, 0.15);
  margin: var(--space-2) 0;
}

.calc-result {
  background: var(--color-primary-dark);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  margin-top: var(--space-2);
}

.calc-result span {
  color: rgba(255, 255, 255, 0.8);
}

.calc-result strong {
  color: var(--color-white);
  font-family: var(--font-display);
  font-size: 1.25rem;
}

/* FAQ */
.faq-section {
  background: var(--color-surface);
}

.faq-container {
  max-width: 800px;
}

@media (max-width: 1024px) {
  .tiers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .tier-card--popular {
    grid-column: 1 / -1;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .roi-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}

@media (max-width: 640px) {
  .tiers-grid {
    grid-template-columns: 1fr;
  }
  .tier-card--popular {
    grid-column: 1;
    transform: none;
  }
  .tier-card--popular:hover {
    transform: translateY(-8px);
  }
  
  .calc-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
