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

        <!-- Desktop Grid -->
        <div class="tiers-grid tiers-desktop">
          <div
            v-for="(tier, i) in tiers"
            :key="tier.name"
            class="tier-card glass-card reveal"
            :class="[
              `reveal-delay-${i + 1}`,
              { 'tier-card--popular': tier.isPopular, 'tier-card--consultation': tier.isConsultation }
            ]"
          >
            <img v-if="tier.isLimited" src="/Hanya-untuk-10-orang-pertama.svg" alt="Limited Offer - Hanya untuk 10 orang pertama di bulan ini" class="tier-card__limited-img" />
            <div v-if="tier.isPopular" class="tier-card__badge">Paling Diminati</div>
            <div class="tier-card__header">
              <h3 class="tier-card__name">{{ tier.name }}</h3>
              <p class="tier-card__desc">{{ tier.desc }}</p>
            </div>
            <div class="tier-card__price">
              <span class="tier-card__price-label">{{ tier.isConsultation ? 'Biaya Konsultasi' : 'Investasi' }}</span>
              <div v-if="tier.originalPrice" class="tier-card__price-original">{{ tier.originalPrice }}</div>
              <div class="tier-card__price-amount" :class="{ 'tier-card__price-amount--free': tier.isConsultation }">{{ tier.price }}</div>
            </div>
            <ul class="tier-card__features">
              <li v-for="feature in tier.features" :key="feature.label" :class="{ 'feature--excluded': !feature.included }">
                <span class="feature-icon" :class="feature.included ? 'feature-icon--yes' : 'feature-icon--no'">
                  <svg v-if="feature.included" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </span>
                {{ feature.label }}
              </li>
            </ul>
            <div class="tier-card__footer">
              <a :href="getWhatsAppLink(tier.name)" target="_blank" rel="noopener noreferrer" class="btn w-full" :class="tier.isConsultation ? 'btn-outline-blue' : tier.isPopular ? 'btn-primary' : 'btn-blue'">{{ tier.ctaLabel }}</a>
            </div>
          </div>
        </div>

        <!-- Mobile Carousel -->
        <div class="tiers-carousel">
          <div class="carousel-track">
            <div
              v-for="(tier, i) in tiers"
              :key="tier.name"
              class="tier-card glass-card carousel-slide"
              :class="[
                { 'tier-card--popular': tier.isPopular, 'tier-card--consultation': tier.isConsultation, 'carousel-slide--active': carouselIndex === i }
              ]"
            >
              <img v-if="tier.isLimited" src="/Hanya-untuk-10-orang-pertama.svg" alt="Limited Offer" class="tier-card__limited-img" />
              <div v-if="tier.isPopular" class="tier-card__badge">Paling Diminati</div>
              <div class="tier-card__header">
                <h3 class="tier-card__name">{{ tier.name }}</h3>
                <p class="tier-card__desc">{{ tier.desc }}</p>
              </div>
              <div class="tier-card__price">
                <span class="tier-card__price-label">{{ tier.isConsultation ? 'Biaya Konsultasi' : 'Investasi' }}</span>
                <div v-if="tier.originalPrice" class="tier-card__price-original">{{ tier.originalPrice }}</div>
                <div class="tier-card__price-amount" :class="{ 'tier-card__price-amount--free': tier.isConsultation }">{{ tier.price }}</div>
              </div>
              <ul class="tier-card__features">
                <li v-for="feature in tier.features" :key="feature.label" :class="{ 'feature--excluded': !feature.included }">
                  <span class="feature-icon" :class="feature.included ? 'feature-icon--yes' : 'feature-icon--no'">
                    <svg v-if="feature.included" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </span>
                  {{ feature.label }}
                </li>
              </ul>
              <div class="tier-card__footer">
                <a :href="getWhatsAppLink(tier.name)" target="_blank" rel="noopener noreferrer" class="btn w-full" :class="tier.isConsultation ? 'btn-outline-blue' : tier.isPopular ? 'btn-primary' : 'btn-blue'">{{ tier.ctaLabel }}</a>
              </div>
            </div>
          </div>
          <div class="carousel-dots">
            <button
              v-for="(tier, i) in tiers"
              :key="i"
              class="carousel-dot"
              :class="{ 'carousel-dot--active': carouselIndex === i }"
              :aria-label="`Lihat ${tier.name}`"
              @click="goToTierSlide(i)"
            />
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

    <!-- Mitra Locations Section -->
    <section class="partners-section section">
      <div class="container">
        <div class="partners-section__header reveal">
          <div class="section-badge mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Mitra Kami
          </div>
          <h2 class="text-title mt-4">
            Mitra <span class="gradient-text">Cleanique Mart</span>
          </h2>
          <p class="partners-section__subtitle">
            Temukan mitra Cleanique Mart di lokasi-lokasi berikut ini.
          </p>
        </div>

        <div class="partners-grid">
          <article
            v-for="(partner, index) in partners"
            :key="partner.name"
            class="partner-card glass-card reveal"
            :style="{ transitionDelay: `${Math.min(index * 0.08, 0.56)}s` }"
          >
            <div class="partner-card__media">
              <NuxtImg
                :src="partner.image"
                :alt="partner.imageAlt"
                width="640"
                height="440"
                loading="lazy"
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 360px"
                class="partner-card__image"
              />
            </div>
            <div class="partner-card__body">
              <div class="partner-card__location">{{ partner.location }}</div>
              <h3 class="partner-card__name">{{ partner.name }}</h3>
              <p class="partner-card__address">
                <span>Alamat:</span>
                {{ partner.address }}
              </p>
            </div>
          </article>
        </div>

        <div class="partners-carousel" aria-label="Daftar mitra Cleanique Mart">
          <div class="partners-carousel__viewport">
            <button
              class="partners-carousel__nav partners-carousel__nav--prev"
              type="button"
              aria-label="Mitra sebelumnya"
              @click="prevPartnerSlide()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div class="partners-carousel__track">
              <article
                v-for="(partner, index) in partners"
                :key="partner.name"
                class="partner-card partner-card--mobile glass-card partners-carousel__slide"
                :class="{ 'partners-carousel__slide--active': partnerCarouselIndex === index }"
                :aria-hidden="partnerCarouselIndex !== index"
              >
                <div class="partner-card__media">
                  <NuxtImg
                    :src="partner.image"
                    :alt="partner.imageAlt"
                    width="640"
                    height="440"
                    loading="lazy"
                    sizes="78vw"
                    class="partner-card__image"
                  />
                </div>
                <div class="partner-card__body">
                  <div class="partner-card__location">{{ partner.location }}</div>
                  <h3 class="partner-card__name">{{ partner.name }}</h3>
                  <p class="partner-card__address">
                    <span>Alamat:</span>
                    {{ partner.address }}
                  </p>
                </div>
              </article>
            </div>

            <button
              class="partners-carousel__nav partners-carousel__nav--next"
              type="button"
              aria-label="Mitra berikutnya"
              @click="nextPartnerSlide()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <div class="partners-carousel__dots" role="tablist" aria-label="Pilih mitra">
            <button
              v-for="(partner, index) in partners"
              :key="`partner-dot-${partner.name}`"
              type="button"
              class="partners-carousel__dot"
              :class="{ 'partners-carousel__dot--active': partnerCarouselIndex === index }"
              :aria-label="`Lihat ${partner.name}`"
              @click="goToPartnerSlide(index)"
            />
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

        <div class="faq-list reveal reveal-delay-1">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ 'faq-item--open': faq.open }"
          >
            <button class="faq-question" :aria-expanded="faq.open" @click="toggleFaq(i)">
              <span>{{ faq.label }}</span>
              <span class="faq-chevron" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </button>
            <div class="faq-answer">
              <p>{{ faq.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomeCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Paket Kemitraan Sabun Curah — CleaniqueMart',
  description: 'Mulai bisnis sabun curah menguntungkan bersama CleaniqueMart. Pilih Paket Starter Rp 15 juta, Paket King Rp 27,5 juta, atau konsultasi gratis. Lisensi resmi, training lengkap, ROI cepat.',
})

const carouselIndex = ref(0)
const partnerCarouselIndex = ref(0)
let partnerCarouselInterval: ReturnType<typeof setInterval> | null = null

const getWhatsAppLink = (tierName: string) => {
  const text = encodeURIComponent(`Halo Admin CleaniqueMart, saya tertarik bergabung sebagai Mitra dengan *${tierName}*. Mohon info lengkap syarat dan ketentuannya 🙏`)
  return `https://wa.me/6287885590088?text=${text}`
}

interface TierFeature {
  label: string
  included: boolean
}

interface Tier {
  name: string
  desc: string
  price: string
  originalPrice?: string
  isPopular: boolean
  isLimited?: boolean
  isConsultation?: boolean
  features: TierFeature[]
  ctaLabel: string
}

const tiers: Tier[] = [
  {
    name: 'Paket Starter',
    desc: 'Cocok untuk pemula yang ingin mulai bisnis sabun curah dengan modal terjangkau dan dukungan lengkap.',
    price: 'Rp 15.000.000,-',
    isPopular: false,
    ctaLabel: 'Order Sekarang',
    features: [
      { label: 'Rak Depot 8 Kontainer', included: true },
      { label: 'Produk Senilai Rp 6.000.000', included: true },
      { label: 'Desain 3D Interior', included: true },
      { label: 'Lisensi Resmi Cleanique Mart', included: true },
      { label: 'Peralatan Produksi Lengkap', included: true },
      { label: 'Include Biaya Kirim', included: true },
      { label: 'Peralatan Packing', included: false },
      { label: 'Set-Up Marketplace', included: false },
      { label: 'Media Promo Cetak', included: true },
      { label: 'Instalasi Media Promo di Lokasi', included: true },
      { label: 'Training Chemical & Bisnis', included: true },
      { label: 'Landing Page SEO Friendly', included: true },
      { label: 'Listing & Optimasi Google Maps', included: true },
      { label: 'Set-Up & Optimasi Sosmed', included: false },
      { label: 'Filter UV', included: false },
    ],
  },
  {
    name: 'Paket King',
    desc: 'Paket terlengkap untuk Anda yang serius membangun bisnis sabun curah profesional dengan semua fitur premium.',
    price: 'Rp 27.500.000,-',
    originalPrice: 'Rp 30.000.000,-',
    isPopular: true,
    isLimited: true,
    ctaLabel: 'Order Sekarang',
    features: [
      { label: 'Rak Depot 8 Kontainer', included: true },
      { label: 'Produk Senilai Rp 8.000.000', included: true },
      { label: 'Desain 3D Interior', included: true },
      { label: 'Lisensi Resmi Cleanique Mart', included: true },
      { label: 'Peralatan Produksi Lengkap', included: true },
      { label: 'Include Biaya Kirim', included: true },
      { label: 'Peralatan Packing', included: true },
      { label: 'Set-Up Marketplace', included: true },
      { label: 'Media Promo Cetak', included: true },
      { label: 'Instalasi Media Promo di Lokasi', included: true },
      { label: 'Training Chemical & Bisnis', included: true },
      { label: 'Landing Page SEO Friendly', included: true },
      { label: 'Listing & Optimasi Google Maps', included: true },
      { label: 'Set-Up & Optimasi Sosmed', included: true },
      { label: 'Filter UV', included: true },
    ],
  },
  {
    name: 'Paket Konsultasi',
    desc: 'Belum yakin? Konsultasikan kebutuhan bisnis Anda langsung dengan tim ahli kami secara gratis, tanpa syarat.',
    price: 'Gratis',
    isPopular: false,
    isConsultation: true,
    ctaLabel: 'Konsultasi Gratis',
    features: [
      { label: 'Sesi Konsultasi 1-on-1 dengan Tim Ahli', included: true },
      { label: 'Analisis Potensi Pasar Wilayah Anda', included: true },
      { label: 'Rekomendasi Paket Terbaik', included: true },
      { label: 'Estimasi ROI & Proyeksi Keuntungan', included: true },
      { label: 'Tanpa Komitmen Pembelian', included: true },
      { label: 'Panduan Memulai Bisnis Sabun Curah', included: true },
    ],
  },
]

interface Faq {
  label: string
  content: string
  open: boolean
}

interface PartnerLocation {
  name: string
  location: string
  address: string
  image: string
  imageAlt: string
}

const partners: PartnerLocation[] = [
  {
    name: 'Cleanique Mart Tapos Depok',
    location: 'Depok',
    address: 'Jl. Raya Tapos 17-A depan Perumahan Permata Cimanggis - Depok',
    image: '/mitra/cleanique-mart-tapos-depok.webp',
    imageAlt: 'Cleanique Mart Tapos Depok',
  },
  {
    name: 'Cleanique Mart Palembang',
    location: 'Palembang',
    address: 'Jl. Pipa Reja No.31C, Pipa Jaya, Kec. Kemuning, Kota Palembang, Sumatera Selatan 30128',
    image: '/mitra/cleanique_mart_palembang.webp',
    imageAlt: 'Cleanique Mart Palembang',
  },
  {
    name: 'Cleanique Mart Malang',
    location: 'Malang',
    address: 'Jl. Mayjen Sungkono A11, Kel. Bumiayu, Kec. Kedung Kandang, Kota Malang',
    image: '/mitra/Cleanique-Mart-Malang-Depan-Toko.webp',
    imageAlt: 'Cleanique Mart Malang',
  },
  {
    name: 'Cleanique Mart Situbondo',
    location: 'Situbondo',
    address: 'Jln Cempaka II Gg Nusa Indah No. 1, sekitar 100 m barat pabrik es, Ds Sumberkolak, Kec Panarukan, Situbondo',
    image: '/mitra/Cleanique-Mart-Situbondo-1.webp',
    imageAlt: 'Cleanique Mart Situbondo',
  },
  {
    name: 'Cleanique Mart Demak',
    location: 'Demak',
    address: 'Batursari, Mranggen, Demak, Jawa Tengah 59567',
    image: '/mitra/Mitra-Cleanique-Mart-Demak.webp',
    imageAlt: 'Cleanique Mart Demak',
  },
  {
    name: 'Cleanique Mart Maguwoharjo',
    location: 'Sleman',
    address: 'Jl. Raya Tajem No. 6, RT/RW 02/30, Maguwoharjo, Depok, Sleman',
    image: '/mitra/Mitra-Cleanique-Mart-Tajem.webp',
    imageAlt: 'Cleanique Mart Maguwoharjo',
  },
  {
    name: 'Cleanique Mart Temanggung 1',
    location: 'Temanggung',
    address: 'Jl. WR. Supratman No.34, Dongkelan Utara, Jampiroso, Kec. Temanggung, Kabupaten Temanggung, Jawa Tengah 56212',
    image: '/mitra/Thumbnail-Mitra-Cleanique-Mart-Temanggung-1.webp',
    imageAlt: 'Cleanique Mart Temanggung 1',
  },
  {
    name: 'Cleanique Mart Temanggung 2',
    location: 'Temanggung',
    address: 'Jl. Megatan No. 4, Dusun Nglarangan RT 02, RW 04, Candi Mulyo, Kedu, Temanggung, Jawa Tengah',
    image: '/mitra/Thumbnail-Mitra-Cleanique-Mart-Temanggung-2.webp',
    imageAlt: 'Cleanique Mart Temanggung 2',
  },
  {
    name: 'Cleanique Mart Karanganyar',
    location: 'Karanganyar',
    address: 'Jl. Alternatif Matesih, Supan, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57714',
    image: '/mitra/Thumbnail-Mitra-Cleanique-Mart-Karanganyar.webp',
    imageAlt: 'Cleanique Mart Karanganyar',
  },
  {
    name: 'Cleanique Mart Boyolali',
    location: 'Boyolali',
    address: 'Jalan Jinten No. 10, Pulisen, Boyolali, Jawa Tengah 57316',
    image: '/mitra/Thumbnail-Mitra-Cleanique-Mart-Boyolali.webp',
    imageAlt: 'Cleanique Mart Boyolali',
  },
  {
    name: 'Cleanique Mart Jambi',
    location: 'Jambi',
    address: 'Jl. Kutilang IV No.29, RT.9, Tambak Sari, Kec. Jambi Sel., Kota Jambi, Jambi 36131',
    image: '/mitra/Thumbnail-Mitra-Cleanique-Mart-Jambi.webp',
    imageAlt: 'Cleanique Mart Jambi',
  },
  {
    name: 'Cleanique Mart Jakarta Timur',
    location: 'Jakarta Timur',
    address: 'Jl. Cipinang Kebembem I No.24, RT.007/RW.7, Cipinang, Kec. Pulo Gadung, Kota Jakarta Timur, DKI Jakarta 13240',
    image: '/mitra/cleanique-mart-jakarta-timur-thumbnail.webp',
    imageAlt: 'Cleanique Mart Jakarta Timur',
  },
]

const faqs = ref<Faq[]>([
  {
    label: 'Apakah ada biaya pendaftaran atau franchise fee untuk menjadi mitra CleaniqueMart?',
    content: 'Tidak ada biaya pendaftaran, franchise fee, maupun royalti. Anda hanya membayar untuk paket produk fisik yang dipilih. Seluruh keuntungan penjualan 100% menjadi milik Anda sepenuhnya.',
    open: false,
  },
  {
    label: 'Berapa estimasi keuntungan atau ROI dari menjadi mitra sabun curah?',
    content: 'Margin keuntungan rata-rata mitra kami mencapai 40–60% dari harga beli. Dengan harga beli mitra ±Rp 160.000/jerigen 25L dan harga jual eceran Rp 10.000–15.000/liter, estimasi profit bersih per jerigen bisa mencapai Rp 90.000–215.000.',
    open: false,
  },
  {
    label: 'Bagaimana sistem pengiriman untuk mitra di luar Yogyakarta?',
    content: 'Kami bekerja sama dengan berbagai mitra kargo darat dan laut untuk pengiriman jerigen 25L ke seluruh Indonesia. Khusus Paket Starter dan King, biaya kirim sudah termasuk dalam paket. Untuk pembelian lanjutan, kami bantu carikan ongkir termurah ke wilayah Anda.',
    open: false,
  },
  {
    label: 'Apakah saya bebas menetapkan harga jual produk kepada pelanggan?',
    content: 'Tentu. Kami hanya memberikan harga dasar mitra. Anda bebas menetapkan harga jual sesuai kondisi pasar di wilayah Anda. Kami menyarankan Harga Eceran Tertinggi (HET) sebagai panduan agar Anda tetap kompetitif.',
    open: false,
  },
  {
    label: 'Bagaimana jika produk rusak atau bocor saat pengiriman?',
    content: 'Keamanan kemasan adalah prioritas kami. Apabila terjadi kerusakan atau kebocoran akibat kelalaian tim kami yang dapat dibuktikan dengan video unboxing, kami akan sepenuhnya mengganti kerugian tersebut.',
    open: false,
  },
  {
    label: 'Apakah produk CleaniqueMart sudah bersertifikat halal dan memiliki izin edar resmi?',
    content: 'Ya, seluruh produk CleaniqueMart telah tersertifikasi halal dan memiliki nomor izin edar PKRT resmi. Sebagai mitra, Anda berhak mencantumkan logo sertifikat halal dan nomor izin edar pada seluruh materi promosi untuk meningkatkan kepercayaan pelanggan.',
    open: false,
  },
])

const toggleFaq = (index: number) => {
  const targetFaq = faqs.value[index]

  if (!targetFaq) {
    return
  }

  targetFaq.open = !targetFaq.open
}

function clearPartnerAutoplay() {
  if (!partnerCarouselInterval) {
    return
  }

  clearInterval(partnerCarouselInterval)
  partnerCarouselInterval = null
}

function startPartnerAutoplay() {
  clearPartnerAutoplay()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  partnerCarouselInterval = setInterval(() => {
    nextPartnerSlide(false)
  }, 4000)
}

function goToPartnerSlide(index: number, shouldRestart = true) {
  if (!partners.length) {
    return
  }

  partnerCarouselIndex.value = (index + partners.length) % partners.length

  if (shouldRestart) {
    startPartnerAutoplay()
  }
}

function nextPartnerSlide(shouldRestart = true) {
  goToPartnerSlide(partnerCarouselIndex.value + 1, shouldRestart)
}

function prevPartnerSlide() {
  goToPartnerSlide(partnerCarouselIndex.value - 1)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    })
  }, { threshold: 0.1 })
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  }, 100)

  startPartnerAutoplay()
})

onUnmounted(() => {
  clearPartnerAutoplay()
})

const goToTierSlide = (index: number) => {
  carouselIndex.value = index
}
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

/* Desktop grid - hidden on mobile */
.tiers-desktop {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  max-width: 1100px;
  margin: 0 auto;
}

/* Mobile carousel - hidden on desktop */
.tiers-carousel { display: none; }

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

.tier-card--consultation {
  border: 2px dashed rgba(21, 101, 192, 0.25);
  background: linear-gradient(135deg, rgba(21,101,192,0.02), rgba(67,160,71,0.04));
}

/* Limited SVG badge */
.tier-card__limited-img {
  position: absolute;
  top: -16px;
  right: -8px;
  width: 120px;
  height: auto;
  z-index: 2;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
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
  display: block;
}

.tier-card__price-original {
  font-size: 0.95rem;
  color: var(--color-text-light);
  text-decoration: line-through;
  margin-top: 2px;
}

.tier-card__price-amount {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-top: 2px;
}

.tier-card__price-amount--free {
  color: var(--color-accent);
  font-size: 1.75rem;
}

/* Feature list with yes/no icons */
.tier-card__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
  flex: 1;
}

.tier-card__features li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.9rem;
  color: var(--color-text);
  line-height: 1.5;
}

.feature--excluded { opacity: 0.4; }

.feature-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon--yes {
  background: rgba(67, 160, 71, 0.12);
  color: var(--color-accent);
}

.feature-icon--no {
  background: rgba(229, 57, 53, 0.1);
  color: #e53935;
}

.tier-card__footer { margin-top: auto; }

.btn-outline-blue {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}
.btn-outline-blue:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
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

/* FAQ Custom Accordion */
.faq-section { background: var(--color-surface); }
.faq-container { max-width: 800px; }

/* Partner Locations */
.partners-section {
  background:
    radial-gradient(circle at top left, rgba(67, 160, 71, 0.08), transparent 26%),
    linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border-top: 1px solid rgba(21, 101, 192, 0.06);
  border-bottom: 1px solid rgba(21, 101, 192, 0.06);
}

.partners-section__header {
  max-width: 680px;
  margin: 0 auto var(--space-12);
  text-align: center;
}

.partners-section__subtitle {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-light);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-6);
}

.partner-card {
  overflow: hidden;
  border: 1px solid rgba(21, 101, 192, 0.08);
  background: rgba(255, 255, 255, 0.9);
}

.partner-card__media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, rgba(21, 101, 192, 0.08), rgba(67, 160, 71, 0.08));
}

.partner-card__media::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 44%;
  background: linear-gradient(to top, rgba(7, 24, 51, 0.18), transparent);
  pointer-events: none;
}

.partner-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.partner-card:hover .partner-card__image {
  transform: scale(1.04);
}

.partner-card__body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.partner-card__location {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  min-height: 30px;
  padding: 0 var(--space-3);
  border-radius: var(--radius-full);
  background: rgba(21, 101, 192, 0.08);
  color: var(--color-primary);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.partner-card__name {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--color-primary-dark);
}

.partner-card__address {
  font-size: 0.93rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

.partner-card__address span {
  font-weight: 700;
  color: var(--color-text);
}

.partners-carousel {
  display: none;
}

.partners-carousel__dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: var(--space-5);
}

.partners-carousel__dot {
  width: 24px;
  height: 6px;
  border-radius: var(--radius-full);
  border: none;
  background: rgba(21, 101, 192, 0.18);
  padding: 0;
  cursor: pointer;
  transition: width var(--transition-base), background var(--transition-base), transform var(--transition-base);
}

.partners-carousel__dot--active {
  width: 42px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  transform: translateY(-1px);
}

.partners-carousel__nav {
  display: none;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.faq-item {
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.1);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: box-shadow var(--transition-base), border-color var(--transition-base);
}

.faq-item:hover {
  border-color: rgba(21, 101, 192, 0.25);
  box-shadow: var(--shadow-sm);
}

.faq-item--open {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  transition: color var(--transition-fast);
}

.faq-question:hover { color: var(--color-primary); }
.faq-item--open .faq-question { color: var(--color-primary); }

.faq-chevron {
  flex-shrink: 0;
  color: var(--color-primary);
  transition: transform var(--transition-base);
  display: flex;
  align-items: center;
}

.faq-item--open .faq-chevron { transform: rotate(180deg); }

.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--transition-slow);
}

.faq-item--open .faq-answer { grid-template-rows: 1fr; }

.faq-answer p {
  overflow: hidden;
  padding: 0 var(--space-6) 0;
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.75;
  transition: padding var(--transition-slow);
}

.faq-item--open .faq-answer p { padding: 0 var(--space-6) var(--space-5); }

/* Carousel styles */
.carousel-track {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-slide { display: none; width: 100%; animation: fadeSlide 0.35s ease-out; }
.carousel-slide--active { display: flex; }

@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
}

.carousel-dot {
  width: 32px;
  height: 6px;
  border-radius: var(--radius-full);
  background: rgba(21, 101, 192, 0.2);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  padding: 0;
}

.carousel-dot--active {
  background: var(--color-primary);
  width: 48px;
}

@media (max-width: 1024px) {
  .tiers-desktop {
    grid-template-columns: repeat(2, 1fr);
  }
  .tiers-desktop .tier-card--popular {
    grid-column: 1 / -1;
    max-width: 500px;
    margin: 0 auto;
  }
  .roi-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
  .partners-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .tiers-desktop { display: none; }
  .tiers-carousel { display: block; }
  .partners-grid { display: none; }
  .partners-carousel { display: block; }
}

@media (max-width: 640px) {
  .calc-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .partners-section__header {
    margin-bottom: var(--space-8);
  }

  .partners-carousel__viewport {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .partners-carousel__track {
    width: 100%;
  }

  .partner-card--mobile {
    display: none;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    animation: fadeSlide 0.35s ease-out;
  }

  .partners-carousel__slide--active {
    display: block;
  }

  .partner-card--mobile .partner-card__body {
    padding: var(--space-4);
  }

  .partners-carousel__nav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border-radius: var(--radius-full);
    border: 1px solid rgba(21, 101, 192, 0.18);
    background: rgba(255, 255, 255, 0.92);
    color: var(--color-primary-dark);
    box-shadow: var(--shadow-sm);
    cursor: pointer;
  }

  .partners-carousel__nav--prev {
    margin-right: var(--space-3);
  }

  .partners-carousel__nav--next {
    margin-left: var(--space-3);
  }

  .partners-carousel__dot {
    width: 18px;
  }

  .partners-carousel__dot--active {
    width: 38px;
  }
}
</style>
