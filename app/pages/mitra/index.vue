<script setup lang="ts">
useSeoMeta({
  title: 'Paket Kemitraan Sabun Curah — CleaniqueMart',
  description: 'Mulai bisnis sabun curah menguntungkan bersama CleaniqueMart. Pilih Paket Starter Rp 15 juta, Paket King Rp 27,5 juta, atau konsultasi gratis. Lisensi resmi, training lengkap, ROI cepat.',
})

const carouselIndex = ref(0)
const partnerCarouselIndex = ref(0)
const tierMobileScroller = ref<HTMLElement | null>(null)
let partnerCarouselInterval: ReturnType<typeof setInterval> | null = null
let tierTouchStartX = 0
let tierTouchDeltaX = 0
let isTierSwiping = false
let tierBreakpointQuery: MediaQueryList | null = null

const { data: mitraEntries } = await useAsyncData('mitra-list', () =>
  queryCollection('mitra')
    .order('order', 'ASC')
    .all()
)

const partnerList = computed(() => mitraEntries.value ?? [])

const getWhatsAppLink = (tierName: string) => {
  const text = encodeURIComponent(`Halo Admin CleaniqueMart, saya tertarik bergabung sebagai Mitra dengan *${tierName}*. Mohon info lengkap syarat dan ketentuannya 🙏`)
  return `https://wa.me/6287885590088?text=${text}`
}

function getPartnerLink(partner: { path?: string | null; stem?: string | null }) {
  if (partner.path) {
    return partner.path
  }

  const slug = partner.stem?.replace('mitra/', '')
  return slug ? `/mitra/${slug}` : '/mitra'
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
  if (!partnerList.value.length) {
    return
  }

  partnerCarouselIndex.value = (index + partnerList.value.length) % partnerList.value.length

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

  tierBreakpointQuery = window.matchMedia('(max-width: 767px)')
  tierBreakpointQuery.addEventListener('change', handleTierBreakpointChange)

  if (tierBreakpointQuery.matches) {
    nextTick(() => {
      scrollToTierCard(carouselIndex.value, 'auto')
    })
  }
})

onUnmounted(() => {
  clearPartnerAutoplay()
  tierBreakpointQuery?.removeEventListener('change', handleTierBreakpointChange)
})

const goToTierSlide = (index: number) => {
  if (!tiers.length) {
    return
  }

  carouselIndex.value = (index + tiers.length) % tiers.length

  if (window.matchMedia('(max-width: 767px)').matches) {
    nextTick(() => {
      scrollToTierCard(carouselIndex.value)
    })
  }
}

const nextTierSlide = () => {
  goToTierSlide(carouselIndex.value + 1)
}

const prevTierSlide = () => {
  goToTierSlide(carouselIndex.value - 1)
}

const getTierStackState = (index: number) => {
  const total = tiers.length
  const offset = (index - carouselIndex.value + total) % total

  if (offset === 0) {
    return 'active'
  }

  if (offset === 1) {
    return 'next'
  }

  if (offset === total - 1) {
    return 'prev'
  }

  return 'hidden'
}

function getTierCards() {
  if (!tierMobileScroller.value) {
    return [] as HTMLElement[]
  }

  return Array.from(tierMobileScroller.value.querySelectorAll('.tier-mobile-card')) as HTMLElement[]
}

function scrollToTierCard(index: number, behavior: ScrollBehavior = 'smooth') {
  if (!tierMobileScroller.value) {
    return
  }

  const cards = getTierCards()
  const targetCard = cards[index]

  if (!targetCard) {
    return
  }

  const centeredOffset = targetCard.offsetLeft - Math.max((tierMobileScroller.value.clientWidth - targetCard.clientWidth) / 2, 0)

  tierMobileScroller.value.scrollTo({
    left: centeredOffset,
    behavior,
  })
}

function syncTierIndexFromScroll() {
  if (!tierMobileScroller.value) {
    return
  }

  const cards = getTierCards()

  if (!cards.length) {
    return
  }

  const viewportCenter = tierMobileScroller.value.scrollLeft + (tierMobileScroller.value.clientWidth / 2)
  let closestIndex = carouselIndex.value
  let closestDistance = Number.POSITIVE_INFINITY

  cards.forEach((card, index) => {
    const cardCenter = card.offsetLeft + (card.clientWidth / 2)
    const distance = Math.abs(cardCenter - viewportCenter)

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  carouselIndex.value = closestIndex
}

function onTierMobileScroll() {
  syncTierIndexFromScroll()
}

function onTierStackTouchStart(event: TouchEvent) {
  tierTouchStartX = event.touches[0]?.clientX ?? 0
  tierTouchDeltaX = 0
  isTierSwiping = true
}

function onTierStackTouchMove(event: TouchEvent) {
  if (!isTierSwiping) {
    return
  }

  tierTouchDeltaX = (event.touches[0]?.clientX ?? 0) - tierTouchStartX
}

function onTierStackTouchEnd() {
  if (!isTierSwiping) {
    return
  }

  isTierSwiping = false

  if (tierTouchDeltaX <= -56) {
    nextTierSlide()
  }
  else if (tierTouchDeltaX >= 56) {
    prevTierSlide()
  }
}

function handleTierBreakpointChange(event: MediaQueryListEvent) {
  if (!event.matches) {
    return
  }

  nextTick(() => {
    scrollToTierCard(carouselIndex.value, 'auto')
  })
}
</script>

<template>
  <div>
    <PageHero
      title="Gabung Jaringan <span class='accent'>Mitra Terbesar</span>"
      subtitle="Jadilah bagian dari revolusi industri sabun curah di Indonesia. Kami menyediakan sistem kemitraan yang transparan, mudah dijalankan, dan terbukti menguntungkan."
      badge="Peluang Usaha"
    />

    <!-- Mitra Tiers -->
    <section class="mitra-tiers section">
      <div class="mitra-tiers__wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,0 L0,0 Z" fill="#F8FBFF" />
        </svg>
      </div>

      <div class="container mitra-tiers__container">
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

        <!-- Tablet Focus Stack -->
        <div class="tiers-stack">
          <div
            class="tiers-stack__viewport"
            @touchstart="onTierStackTouchStart"
            @touchmove="onTierStackTouchMove"
            @touchend="onTierStackTouchEnd"
          >
            <div
              v-for="(tier, i) in tiers"
              :key="`stack-${tier.name}`"
              class="tier-card glass-card tier-stack-card"
              :class="[
                `tier-stack-card--${getTierStackState(i)}`,
                { 'tier-card--popular': tier.isPopular, 'tier-card--consultation': tier.isConsultation }
              ]"
              :aria-hidden="carouselIndex !== i"
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

          <div class="tiers-stack__controls">
            <button type="button" class="tiers-stack__nav" aria-label="Paket sebelumnya" @click="prevTierSlide()">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div class="carousel-dots carousel-dots--stack">
              <button
                v-for="(tier, i) in tiers"
                :key="`stack-dot-${tier.name}`"
                type="button"
                class="carousel-dot"
                :class="{ 'carousel-dot--active': carouselIndex === i }"
                :aria-label="`Lihat ${tier.name}`"
                @click="goToTierSlide(i)"
              />
            </div>
            <button type="button" class="tiers-stack__nav" aria-label="Paket berikutnya" @click="nextTierSlide()">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        <!-- Mobile Scroll -->
        <div class="tiers-mobile">
          <div
            ref="tierMobileScroller"
            class="tiers-mobile__track"
            @scroll.passive="onTierMobileScroll"
          >
            <div
              v-for="(tier, i) in tiers"
              :key="`mobile-${tier.name}`"
              class="tier-card glass-card tier-mobile-card"
              :class="[
                { 'tier-card--popular': tier.isPopular, 'tier-card--consultation': tier.isConsultation, 'tier-mobile-card--active': carouselIndex === i }
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

          <div class="carousel-dots carousel-dots--mobile">
            <button
              v-for="(tier, i) in tiers"
              :key="`mobile-dot-${tier.name}`"
              type="button"
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
      <div class="partners-section__wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,0 L0,0 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div class="container partners-section__container">
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
          <NuxtLink
            v-for="(partner, index) in partnerList"
            :key="partner.path ?? partner.stem"
            :to="getPartnerLink(partner)"
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
              <h3 class="partner-card__name">{{ partner.title }}</h3>
              <p class="partner-card__address">
                <span>Alamat:</span>
                {{ partner.address }}
              </p>
            </div>
          </NuxtLink>
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
              <NuxtLink
                v-for="(partner, index) in partnerList"
                :key="partner.path ?? partner.stem"
                :to="getPartnerLink(partner)"
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
                  <h3 class="partner-card__name">{{ partner.title }}</h3>
                  <p class="partner-card__address">
                    <span>Alamat:</span>
                    {{ partner.address }}
                  </p>
                </div>
              </NuxtLink>
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
              v-for="(partner, index) in partnerList"
              :key="`partner-dot-${partner.path ?? partner.stem}`"
              type="button"
              class="partners-carousel__dot"
              :class="{ 'partners-carousel__dot--active': partnerCarouselIndex === index }"
              :aria-label="`Lihat ${partner.title}`"
              @click="goToPartnerSlide(index)"
            />
          </div>
        </div>
      </div>

      <div class="partners-section__wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,50 1440,40 L1440,80 L0,80 Z" fill="#F8FBFF" />
        </svg>
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
.section-badge {
  width: fit-content;
  margin-inline: auto;
}

/* Tiers Grid */
.mitra-tiers {
  position: relative;
  overflow: hidden;
  background: var(--color-surface);
  padding: 0;
}

.mitra-tiers__wave-top,
.mitra-tiers__wave-bottom,
.partners-section__wave-top,
.partners-section__wave-bottom {
  overflow: hidden;
  line-height: 0;
}

.mitra-tiers__wave-top svg,
.mitra-tiers__wave-bottom svg,
.partners-section__wave-top svg,
.partners-section__wave-bottom svg {
  width: 100%;
  height: 80px;
}

.mitra-tiers__container,
.partners-section__container {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

/* Desktop grid - hidden on mobile */
.tiers-desktop {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  max-width: 1100px;
  margin: 0 auto;
}

.tiers-stack,
.tiers-mobile {
  display: none;
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

/* Tablet Focus Stack */
.tiers-stack {
  max-width: 920px;
  margin: 0 auto;
}

.tiers-stack__viewport {
  display: grid;
  place-items: start center;
  padding: var(--space-8) 0 var(--space-5);
  isolation: isolate;
}

.tier-stack-card {
  grid-area: 1 / 1;
  width: min(100%, 720px);
  transform-origin: center top;
  transition:
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.35s ease,
    filter 0.35s ease,
    box-shadow var(--transition-base);
}

.tier-stack-card--active {
  z-index: 3;
  opacity: 1;
}

.tier-stack-card--prev,
.tier-stack-card--next {
  z-index: 1;
  opacity: 0.36;
  filter: saturate(0.82);
  pointer-events: none;
}

.tier-stack-card--prev {
  transform: translateX(-12%) translateY(38px) scale(0.92) rotate(-1.5deg);
}

.tier-stack-card--next {
  transform: translateX(12%) translateY(38px) scale(0.92) rotate(1.5deg);
}

.tier-stack-card--hidden {
  opacity: 0;
  pointer-events: none;
}

.tiers-stack__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-2);
}

.tiers-stack__nav {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(21, 101, 192, 0.18);
  background: rgba(255, 255, 255, 0.92);
  color: var(--color-primary-dark);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
}

.tiers-stack__nav:hover {
  transform: translateY(-2px);
  border-color: rgba(21, 101, 192, 0.3);
  box-shadow: var(--shadow-md);
}

/* Mobile Snap Scroll */
.tiers-mobile {
  margin-inline: calc(var(--space-4) * -1);
}

.tiers-mobile__track {
  display: flex;
  gap: var(--space-4);
  overflow-x: auto;
  overflow-y: visible;
  padding: var(--space-3) var(--space-4) var(--space-4);
  scroll-snap-type: x mandatory;
  scroll-padding-inline: var(--space-4);
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  touch-action: pan-x;
}

.tiers-mobile__track::-webkit-scrollbar {
  display: none;
}

.tier-mobile-card {
  flex: 0 0 min(85vw, 380px);
  scroll-snap-align: center;
  scroll-snap-stop: always;
  min-width: 0;
  transition: transform var(--transition-base), box-shadow var(--transition-base), opacity var(--transition-base);
}

.tier-mobile-card--active {
  box-shadow: var(--shadow-blue);
}

/* ROI Section */
.roi-section {
  background: var(--color-white);
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
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(67, 160, 71, 0.08), transparent 26%),
    linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  padding: 0;
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
  .roi-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
  .partners-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 1100px) {
  .tiers-desktop {
    display: none;
  }

  .tiers-stack {
    display: block;
  }

  .tier-card {
    padding: var(--space-6);
  }

  .tier-card__header {
    padding-top: 38px;
  }

  .tier-card__limited-img {
    top: 14px;
    right: 14px;
    width: 108px;
  }

  .tier-card__badge {
    top: 16px;
    left: var(--space-6);
    transform: none;
  }
}

@media (max-width: 767px) {
  .tiers-stack {
    display: none;
  }

  .tiers-mobile {
    display: block;
  }

  .tiers-mobile .glass-card:hover,
  .tiers-mobile .tier-card:hover,
  .tiers-mobile .tier-card--popular:hover {
    transform: none;
    box-shadow: var(--shadow-md);
  }

  .tiers-mobile .tier-mobile-card--active:hover {
    box-shadow: var(--shadow-blue);
  }

  .partners-grid { display: none; }
  .partners-carousel { display: block; }
}

@media (max-width: 640px) {
  .tier-card {
    padding: var(--space-6);
    border-radius: 28px;
  }

  .tier-card__header {
    margin-bottom: var(--space-5);
    padding-top: 34px;
  }

  .tier-card__name {
    font-size: 1.35rem;
  }

  .tier-card__desc,
  .tier-card__features li {
    font-size: 0.95rem;
  }

  .tier-card__price {
    margin-bottom: var(--space-6);
  }

  .tier-card__price-amount {
    font-size: 1.4rem;
  }

  .tier-card__limited-img {
    top: 12px;
    right: 10px;
    width: 92px;
  }

  .tier-card__badge {
    top: 12px;
    left: var(--space-5);
    font-size: 0.78rem;
    padding: 4px var(--space-3);
  }

  .tiers-mobile {
    margin-inline: calc(var(--space-4) * -1);
  }

  .tiers-mobile__track {
    gap: var(--space-3);
    padding-inline: var(--space-4);
  }

  .tier-mobile-card {
    flex-basis: calc(100vw - 2.75rem);
  }

  .carousel-dots--mobile {
    margin-top: var(--space-4);
  }

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

@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
