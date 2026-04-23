<template>
  <section class="opportunity section" id="peluang">
    <div class="container">
      
      <!-- Section 1: Header & Pain Points -->
      <div class="opportunity__header text-center mb-16">
        <div class="section-badge reveal-blur mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Peluang Usaha 2026
        </div>
        <h2 class="opportunity__title reveal reveal-delay-1">
          Peluang Usaha Aneka Sabun dengan Potensi <span class="gradient-text">Omzet 50+ Juta/Bulan!</span>
        </h2>
      </div>

      <div class="opportunity__pain-slider mb-24">
        <div
          class="opportunity__pain-grid"
          ref="painSliderRef"
          @scroll.passive="onPainSliderScroll"
        >
        <!-- Card 1: Problem -->
        <div class="pain-card glass-card reveal reveal-delay-1">
          <div class="pain-card__header">
            <div class="pain-card__icon pain-card__icon--red">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <h3 class="pain-card__title">Kamu Mau Sukses dalam Bisnis, Tapi...</h3>
          </div>
          <ul class="pain-list">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-red"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              <span>Pernah merasa bingung harus mulai dari mana?</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-red"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              <span>Tak tahu cara memasarkan produk dengan efektif?</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-red"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              <span>Bingung dengan cara promosi yang tepat?</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-red"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              <span>Takut bisnis gagal atau malah rugi?</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-red"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              <span>Takut ditipu atau justru gagal total?</span>
            </li>
          </ul>
        </div>

        <!-- Card 2: Consequence -->
        <div class="pain-card pain-card--dark reveal reveal-delay-2">
          <div class="pain-card__header">
            <div class="pain-card__icon pain-card__icon--yellow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h3 class="pain-card__title">Akibatnya...</h3>
          </div>
          <ul class="pain-list">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-yellow"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              <span>Peluang besar terlewat begitu saja.</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-yellow"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              <span>Kamu terjebak dalam kehidupan finansial yang tidak berkembang.</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-yellow"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              <span>Mimpi besar terkubur dalam kondisi finansial terbatas.</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-yellow"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              <span>Rasa menyesal semakin menguasai dirimu.</span>
            </li>
          </ul>
        </div>
        </div>
        <div class="opportunity-slider-dots" v-if="painDotIndexes.length > 1">
          <button
            v-for="(_, i) in painDotIndexes"
            :key="`pain-dot-${i}`"
            type="button"
            class="opportunity-slider-dot"
            :class="{ 'opportunity-slider-dot--active': activePainSlide === i }"
            :style="{ opacity: getDotOpacity(activePainSlide, i) }"
            :aria-label="`Tampilkan slide masalah ${i + 1}`"
            :aria-pressed="activePainSlide === i"
            @click="goToPainSlide(i)"
          ></button>
        </div>
      </div>

      <!-- Section 2: Solution (Zig-Zag 1) -->
      <div class="opportunity-split reveal-stagger mb-24">
        <div class="opportunity-split__content reveal">
          <div class="section-badge reveal-blur mb-4">Solusi Terbaik</div>
          <h3 class="split-title">Ini Solusi Bisnis Tepat Untuk Anda!</h3>
          <h4 class="split-subtitle gradient-text">Cleanique Mart: Bisnis Aneka Sabun Auto Balik Modal</h4>
          <p class="split-desc mb-8">
            Kami menawarkan produk homecare seperti deterjen, sabun, pelembut, dan pewangi yang selalu dibutuhkan oleh konsumen. Dengan inovasi sejak 2011, kami telah menjual lebih dari 1 juta produk dan menjadi pilihan utama bagi banyak pelanggan.
          </p>
          <ul class="feature-list mb-10">
            <li>
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
              <span><strong>Tidak Repot:</strong> Tidak perlu repot cari atau racik produk sendiri.</span>
            </li>
            <li>
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
              <span><strong>Sistem Berjalan:</strong> Sistem bisnis sudah matang dan terbukti berhasil.</span>
            </li>
            <li>
              <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
              <span><strong>Produk Berkualitas:</strong> Varian lengkap dengan harga sangat terjangkau.</span>
            </li>
          </ul>
        </div>
        <div class="opportunity-split__visual reveal">
          <div class="visual-blob"></div>
          <NuxtImg
            src="/home/Bisnis-Aneka-Sabun-Auto-Balik-Modal.webp"
            alt="Bisnis Aneka Sabun Auto Balik Modal CleaniqueMart"
            width="600"
            height="500"
            class="visual-img"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Section 3: Target Audience (Zig-Zag 2) -->
      <div class="opportunity-split opportunity-split--reverse reveal-stagger mb-24">
        <div class="opportunity-split__content reveal">
          <div class="section-badge reveal-blur mb-4">Peluang Sukses Lebih Besar</div>
          <h3 class="split-title">Kesempatan Bagi Anda Yang Ingin Punya Usaha</h3>
          <p class="split-desc mb-8">
            Apakah Anda termasuk dalam salah satu kriteria ini? Jika iya, maka Anda sangat cocok bergabung menjadi Mitra CleaniqueMart.
          </p>
          <div class="target-slider mb-4">
            <div
              class="target-grid"
              ref="targetSliderRef"
              @scroll.passive="onTargetSliderScroll"
            >
              <div class="target-card">
                <div class="target-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div class="target-text">Punya toko kosong</div>
              </div>
              <div class="target-card">
                <div class="target-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div class="target-text">Bosan berpenghasilan pas-pasan</div>
              </div>
              <div class="target-card">
                <div class="target-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div class="target-text">Mau bisnis yang pasti laku & untung</div>
              </div>
              <div class="target-card">
                <div class="target-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <div class="target-text">Modal kecil, bebas repot</div>
              </div>
            </div>
            <div class="opportunity-slider-dots" v-if="targetDotIndexes.length > 1">
              <button
                v-for="(_, i) in targetDotIndexes"
                :key="`target-dot-${i}`"
                type="button"
                class="opportunity-slider-dot"
                :class="{ 'opportunity-slider-dot--active': activeTargetSlide === i }"
                :style="{ opacity: getDotOpacity(activeTargetSlide, i) }"
                :aria-label="`Tampilkan slide target ${i + 1}`"
                :aria-pressed="activeTargetSlide === i"
                @click="goToTargetSlide(i)"
              ></button>
            </div>
          </div>
        </div>
        <div class="opportunity-split__visual reveal">
          <div class="visual-blob visual-blob--alt"></div>
          <NuxtImg
            src="/home/Kesempatan-Untuk-Anda-Yang-Pengin-Punya-Usaha.webp"
            alt="Kesempatan Untuk Anda Yang Pengin Punya Usaha"
            width="600"
            height="500"
            class="visual-img"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Section 4: The Benefit (Zig-Zag 3) -->
      <div class="opportunity-split reveal-stagger">
        <div class="opportunity-split__content reveal">
          <div class="section-badge reveal-blur mb-4">Keuntungan Mitra</div>
          <h3 class="split-title">Bisnis Mudah, Untung Melimpah</h3>
          <h4 class="split-subtitle gradient-text">Jualan Sabun Curah Potensi Profit Besar</h4>
          <p class="split-desc mb-8">
            Inilah alasan mengapa ratusan mitra kami sukses membangun bisnis mereka sendiri dari nol bersama CleaniqueMart.
          </p>
          <div class="benefit-slider">
            <div
              class="benefit-grid"
              ref="benefitSliderRef"
              @scroll.passive="onBenefitSliderScroll"
            >
              <div class="benefit-item">
                <div class="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                <span>Produk Gampang Laku</span>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                <span>Sangat Cocok Pemula</span>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                <span>Minim Resiko Rugi</span>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                <span>Pasti Balik Modal</span>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                <span>Pasti Untung Besar</span>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                <span>Dibutuhkan Semua Kalangan</span>
              </div>
            </div>
            <div class="opportunity-slider-dots" v-if="benefitDotIndexes.length > 1">
              <button
                v-for="(_, i) in benefitDotIndexes"
                :key="`benefit-dot-${i}`"
                type="button"
                class="opportunity-slider-dot"
                :class="{ 'opportunity-slider-dot--active': activeBenefitSlide === i }"
                :style="{ opacity: getDotOpacity(activeBenefitSlide, i) }"
                :aria-label="`Tampilkan slide keuntungan ${i + 1}`"
                :aria-pressed="activeBenefitSlide === i"
                @click="goToBenefitSlide(i)"
              ></button>
            </div>
          </div>
        </div>
        <div class="opportunity-split__visual reveal">
          <div class="visual-blob"></div>
          <NuxtImg
            src="/home/Jualan-Sabun-Curah-Potensi-Profit-Besar.webp"
            alt="Jualan Sabun Curah Potensi Profit Besar"
            width="600"
            height="500"
            class="visual-img"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Section 5: Business Segments -->
      <div class="opportunity-market reveal-stagger">
        <div class="opportunity-market__header text-center mb-10">
          <h3 class="market-title reveal reveal-delay-1">
            Sabun curah sangat dibutuhkan oleh pemilik usaha:
          </h3>
        </div>
        <div class="market-slider">
          <ul
            class="market-grid"
            ref="marketSliderRef"
            aria-label="Segmen usaha yang membutuhkan sabun curah"
            @scroll.passive="onMarketSliderScroll"
          >
            <li
              v-for="segment in businessSegments"
              :key="segment.name"
              class="market-card reveal"
              :style="{ '--segment-color': segment.color }"
            >
              <div class="market-card__icon" aria-hidden="true" v-html="segment.icon"></div>
              <span class="market-card__text">{{ segment.name }}</span>
            </li>
          </ul>
          <div class="opportunity-slider-dots" v-if="marketDotIndexes.length > 1">
            <button
              v-for="(_, i) in marketDotIndexes"
              :key="`market-dot-${i}`"
              type="button"
              class="opportunity-slider-dot"
              :class="{ 'opportunity-slider-dot--active': activeMarketSlide === i }"
              :style="{ opacity: getDotOpacity(activeMarketSlide, i) }"
              :aria-label="`Tampilkan slide segmen usaha ${i + 1}`"
              :aria-pressed="activeMarketSlide === i"
              @click="goToMarketSlide(i)"
            ></button>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
const painSliderRef = ref<HTMLElement | null>(null)
const targetSliderRef = ref<HTMLElement | null>(null)
const benefitSliderRef = ref<HTMLElement | null>(null)
const marketSliderRef = ref<HTMLElement | null>(null)

const activePainSlide = ref(0)
const activeTargetSlide = ref(0)
const activeBenefitSlide = ref(0)
const activeMarketSlide = ref(0)

const painSlideCount = ref(0)
const targetSlideCount = ref(0)
const benefitSlideCount = ref(0)
const marketSlideCount = ref(0)

const isSliderViewport = ref(false)

const painDotIndexes = computed(() => Array.from({ length: painSlideCount.value }))
const targetDotIndexes = computed(() => Array.from({ length: targetSlideCount.value }))
const benefitDotIndexes = computed(() => Array.from({ length: benefitSlideCount.value }))
const marketDotIndexes = computed(() => Array.from({ length: marketSlideCount.value }))

const businessSegments = [
  {
    name: 'Laundry',
    color: '#1565C0',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l8-4 8 4"/><path d="M8 11v9"/><path d="M16 11v9"/><path d="M4 7v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7"/></svg>`,
  },
  {
    name: 'Rumah Makan/Restoran',
    color: '#1E88E5',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v8"/><path d="M7 3v8"/><path d="M4 7h3"/><path d="M7 11v10"/><path d="M13 3c2.2 0 4 1.8 4 4v14"/><path d="M13 11h4"/></svg>`,
  },
  {
    name: 'Rumah Tangga',
    color: '#2E7D32',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/></svg>`,
  },
  {
    name: 'Industri Gedung',
    color: '#0D47A1',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M6 21V5l6-2v18"/><path d="M18 21V9l-6-2"/><path d="M9 7h.01"/><path d="M9 11h.01"/><path d="M9 15h.01"/><path d="M15 11h.01"/><path d="M15 15h.01"/></svg>`,
  },
  {
    name: 'Hotel/Penginapan',
    color: '#00838F',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l7-3 11 5-7 3-11-5z"/><path d="M3 12l7 3 11-5"/><path d="M3 18l7 3 11-5"/></svg>`,
  },
  {
    name: 'Salon',
    color: '#26A69A',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12l1 4H5l1-4z"/><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><path d="M9 12l6 6"/><path d="M15 12l-6 6"/></svg>`,
  },
  {
    name: 'Klinik dan Rumah Sakit',
    color: '#00695C',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-2 4-4-8-2 4H2"/><path d="M6.6 18.4a5 5 0 0 1 0-7.1 5 5 0 0 1 7.1 0l.3.3.3-.3a5 5 0 0 1 7.1 7.1L14 21.5z"/></svg>`,
  },
  {
    name: 'Cuci Mobil/Motor',
    color: '#1976D2',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l2-5h10l2 5"/><path d="M4 12h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z"/><circle cx="8" cy="17" r="1.5"/><circle cx="16" cy="17" r="1.5"/></svg>`,
  },
  {
    name: 'Tempat Ibadah',
    color: '#2E7D32',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 14.5A8.5 8.5 0 1 1 10 3a7.2 7.2 0 0 0 11 11.5z"/></svg>`,
  },
]

let mediaQuery: MediaQueryList | null = null

function getSliderItems(slider: HTMLElement | null) {
  if (!slider) {
    return [] as HTMLElement[]
  }

  return Array.from(slider.children) as HTMLElement[]
}

function updateSliderCount(
  sliderRef: typeof painSliderRef,
  countRef: typeof painSlideCount,
  activeRef: typeof activePainSlide,
) {
  const slides = getSliderItems(sliderRef.value)
  countRef.value = slides.length

  if (!slides.length) {
    activeRef.value = 0
    return
  }

  if (activeRef.value > slides.length - 1) {
    activeRef.value = slides.length - 1
  }
}

function syncActiveSlide(
  sliderRef: typeof painSliderRef,
  activeRef: typeof activePainSlide,
) {
  if (!isSliderViewport.value || !sliderRef.value) {
    return
  }

  const slides = getSliderItems(sliderRef.value)
  if (!slides.length) {
    return
  }

  const scrollLeft = sliderRef.value.scrollLeft
  let nearestIndex = 0
  let smallestDistance = Number.POSITIVE_INFINITY

  slides.forEach((slide, index) => {
    const distance = Math.abs((slide as HTMLElement).offsetLeft - scrollLeft)
    if (distance < smallestDistance) {
      smallestDistance = distance
      nearestIndex = index
    }
  })

  activeRef.value = nearestIndex
}

function goToSlide(
  sliderRef: typeof painSliderRef,
  activeRef: typeof activePainSlide,
  index: number,
) {
  if (!sliderRef.value) {
    return
  }

  const slides = getSliderItems(sliderRef.value)
  if (!slides.length) {
    return
  }

  const targetIndex = Math.max(0, Math.min(index, slides.length - 1))
  const targetSlide = slides[targetIndex]
  if (!targetSlide) {
    return
  }

  sliderRef.value.scrollTo({
    left: targetSlide.offsetLeft,
    behavior: 'smooth',
  })

  activeRef.value = targetIndex
}

function refreshSliderState() {
  updateSliderCount(painSliderRef, painSlideCount, activePainSlide)
  updateSliderCount(targetSliderRef, targetSlideCount, activeTargetSlide)
  updateSliderCount(benefitSliderRef, benefitSlideCount, activeBenefitSlide)
  updateSliderCount(marketSliderRef, marketSlideCount, activeMarketSlide)

  syncActiveSlide(painSliderRef, activePainSlide)
  syncActiveSlide(targetSliderRef, activeTargetSlide)
  syncActiveSlide(benefitSliderRef, activeBenefitSlide)
  syncActiveSlide(marketSliderRef, activeMarketSlide)
}

function onPainSliderScroll() {
  syncActiveSlide(painSliderRef, activePainSlide)
}

function onTargetSliderScroll() {
  syncActiveSlide(targetSliderRef, activeTargetSlide)
}

function onBenefitSliderScroll() {
  syncActiveSlide(benefitSliderRef, activeBenefitSlide)
}

function onMarketSliderScroll() {
  syncActiveSlide(marketSliderRef, activeMarketSlide)
}

function goToPainSlide(index: number) {
  goToSlide(painSliderRef, activePainSlide, index)
}

function goToTargetSlide(index: number) {
  goToSlide(targetSliderRef, activeTargetSlide, index)
}

function goToBenefitSlide(index: number) {
  goToSlide(benefitSliderRef, activeBenefitSlide, index)
}

function goToMarketSlide(index: number) {
  goToSlide(marketSliderRef, activeMarketSlide, index)
}

function getDotOpacity(activeIndex: number, index: number) {
  const distance = Math.abs(activeIndex - index)

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
    activePainSlide.value = 0
    activeTargetSlide.value = 0
    activeBenefitSlide.value = 0
    activeMarketSlide.value = 0
    return
  }

  nextTick(() => {
    refreshSliderState()
  })
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 768px)')
  isSliderViewport.value = mediaQuery.matches
  mediaQuery.addEventListener('change', handleMediaChange)

  nextTick(() => {
    refreshSliderState()
  })
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', handleMediaChange)
})

useScrollReveal('.reveal', 0.08)
</script>

<style scoped>
.opportunity {
  background:
    radial-gradient(circle at 10% 8%, rgba(21, 101, 192, 0.07), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  position: relative;
  overflow: hidden;
  padding-block: var(--space-16) var(--space-24);
}

.text-center { text-align: center; }
.mx-auto { margin-inline: auto; }
.mb-4 { margin-bottom: var(--space-4); }
.mb-8 { margin-bottom: var(--space-8); }
.mb-10 { margin-bottom: 2.5rem; }
.mb-16 { margin-bottom: var(--space-16); }
.mb-24 { margin-bottom: var(--space-24); }

.opportunity__header {
  max-width: 800px;
  margin-inline: auto;
}

.opportunity__title {
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 800;
  line-height: 1.25;
  color: var(--color-primary-dark);
}

/* Pain Points Grid */
.opportunity__pain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-8);
  max-width: 1080px;
  margin-inline: auto;
}

.opportunity-slider-dots {
  display: none;
}

.opportunity-slider-dot {
  display: block;
}

.pain-card {
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border-radius: var(--radius-2xl);
  border: 1px solid rgba(21, 101, 192, 0.1);
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  box-shadow: 0 10px 30px rgba(21, 101, 192, 0.04);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.pain-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(21, 101, 192, 0.08);
}

.pain-card--dark {
  background: linear-gradient(145deg, #1A233A 0%, #0D1629 100%);
  color: var(--color-white);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(13, 22, 41, 0.3);
}

.pain-card--dark:hover {
  box-shadow: 0 20px 40px rgba(13, 22, 41, 0.4);
}

.pain-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-4);
  border-bottom: 1px dashed rgba(21, 101, 192, 0.15);
}

.pain-card--dark .pain-card__header {
  border-bottom-color: rgba(255, 255, 255, 0.15);
}

.pain-card__icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pain-card__icon--red {
  background: rgba(239, 68, 68, 0.1);
  color: #EF4444;
}

.pain-card__icon--yellow {
  background: rgba(245, 158, 11, 0.2);
  color: #FCD34D;
}

.pain-card__title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.3;
  color: var(--color-primary-dark);
}

.pain-card--dark .pain-card__title {
  color: var(--color-white);
}

.pain-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.pain-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--color-text);
  font-weight: 500;
}

.pain-card--dark .pain-list li {
  color: rgba(255, 255, 255, 0.9);
}

.icon-red {
  color: #EF4444;
  flex-shrink: 0;
  margin-top: 3px;
}

.icon-yellow {
  color: #FCD34D;
  flex-shrink: 0;
  margin-top: 3px;
}

/* Split Section */
.opportunity-split {
  display: flex;
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
  max-width: 1180px;
  margin-inline: auto;
}

.opportunity-split--reverse {
  flex-direction: row-reverse;
}

.opportunity-split__content {
  flex: 1;
}

.opportunity-split__visual {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  padding: var(--space-4);
}

.split-title {
  font-size: clamp(2rem, 3.5vw, 2.5rem);
  font-weight: 800;
  margin-bottom: var(--space-2);
  line-height: 1.2;
  color: var(--color-primary-dark);
}

.split-subtitle {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: var(--space-4);
  letter-spacing: -0.01em;
}

.split-desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

/* Feature List (Solution) */
.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--color-text);
}

.feature-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.feature-icon svg {
  width: 14px;
  height: 14px;
}

/* Target Grid (Audience) */
.target-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.target-card {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-surface);
  border: 1px solid rgba(21, 101, 192, 0.06);
  border-radius: var(--radius-lg);
  transition: background var(--transition-base), transform var(--transition-base);
}

.target-card:hover {
  background: var(--color-sky);
  transform: translateY(-2px);
}

.target-icon {
  width: 44px;
  height: 44px;
  background: var(--color-white);
  color: var(--color-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(21, 101, 192, 0.08);
}

.target-icon svg {
  width: 22px;
  height: 22px;
}

.target-text {
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.4;
  color: var(--color-primary-dark);
}

/* Benefit Grid (Why Us) */
.benefit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-3);
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  background: var(--color-white);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-full);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  border: 1px solid rgba(21, 101, 192, 0.1);
  box-shadow: 0 2px 8px rgba(21, 101, 192, 0.04);
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.benefit-item:hover {
  transform: translateY(-2px);
  border-color: var(--color-accent);
}

.benefit-icon {
  width: 24px;
  height: 24px;
  background: rgba(38, 166, 154, 0.15);
  color: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.benefit-icon svg {
  width: 14px;
  height: 14px;
}

/* Market Segments */
.opportunity-market {
  max-width: 1080px;
  margin: var(--space-24) auto 0;
}

.market-title {
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  font-weight: 800;
  line-height: 1.2;
  color: var(--color-primary-dark);
}

.market-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}

.market-card {
  --segment-color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  min-height: 92px;
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-md);
  border: 2px solid var(--segment-color);
  background: var(--color-white);
  box-shadow: 0 6px 18px rgba(13, 43, 107, 0.05);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.market-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(13, 43, 107, 0.1);
}

.market-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-white);
  background: var(--segment-color);
}

.market-card__icon :deep(svg) {
  width: 30px;
  height: 30px;
}

.market-card__text {
  color: var(--segment-color);
  font-weight: 700;
  font-size: clamp(0.98rem, 1.3vw, 1.1rem);
  line-height: 1.35;
}

/* Visual Assets */
.visual-img {
  width: 100%;
  max-width: 540px;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: var(--radius-2xl);
  box-shadow: 0 20px 50px rgba(21, 101, 192, 0.15);
  position: relative;
  z-index: 2;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.opportunity-split__visual:hover .visual-img {
  transform: translateY(-10px) scale(1.02);
}

.visual-blob {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130%;
  height: 130%;
  background: radial-gradient(circle, rgba(21, 101, 192, 0.06) 0%, transparent 65%);
  z-index: 1;
  pointer-events: none;
}

.visual-blob--alt {
  background: radial-gradient(circle, rgba(38, 166, 154, 0.06) 0%, transparent 65%);
}

/* Responsive */
@media (max-width: 1024px) {
  .opportunity-split {
    flex-direction: column;
    gap: var(--space-12);
  }

  .market-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .opportunity-split--reverse {
    flex-direction: column;
  }
  
  .opportunity-split__content {
    text-align: center;
  }
  
  .feature-list li {
    text-align: left;
  }
  
  .target-grid {
    text-align: left;
  }
  
  .benefit-item {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .opportunity-slider-dots {
    display: none;
  }

  .opportunity__pain-slider .opportunity-slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: var(--space-4);
  }

  .opportunity__pain-slider .opportunity-slider-dot {
    width: 18px;
    height: 6px;
    border-radius: var(--radius-full);
    border: none;
    padding: 0;
    background: rgba(21, 101, 192, 0.18);
    transition: width var(--transition-base), background var(--transition-base), transform var(--transition-base), opacity var(--transition-base);
    cursor: pointer;
  }

  .opportunity__pain-slider .opportunity-slider-dot--active {
    width: 38px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    transform: translateY(-1px);
  }

  .opportunity__pain-slider .opportunity-slider-dot:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  .opportunity__pain-grid {
    display: flex;
    grid-template-columns: none;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-padding-inline: var(--space-2);
    scrollbar-width: none;
    gap: var(--space-4);
    padding-inline: var(--space-2);
    padding-bottom: 0;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x pan-y;
    margin-bottom: var(--space-5);
  }

  .opportunity__pain-grid::-webkit-scrollbar {
    display: none;
  }

  .target-grid,
  .benefit-grid,
  .market-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: visible;
    gap: var(--space-3);
    padding: 0;
    margin-bottom: 0;
    scroll-snap-type: none;
  }

  .target-card,
  .benefit-item,
  .market-card {
    min-width: 0;
    width: 100%;
    scroll-snap-align: unset;
  }

  .pain-card {
    flex: 0 0 min(86%, 520px);
    width: auto;
    scroll-snap-align: start;
  }

  .target-card {
    gap: var(--space-2);
    padding: var(--space-3);
    align-items: flex-start;
    border-radius: var(--radius-md);
  }

  .target-icon {
    width: 38px;
    height: 38px;
  }

  .target-icon svg {
    width: 18px;
    height: 18px;
  }

  .target-text {
    font-size: 0.84rem;
    line-height: 1.35;
  }

  .benefit-item {
    gap: var(--space-2);
    padding: var(--space-3);
    border-radius: var(--radius-lg);
    align-items: flex-start;
    font-size: 0.85rem;
    line-height: 1.35;
  }

  .benefit-icon {
    width: 22px;
    height: 22px;
  }

  .benefit-icon svg {
    width: 12px;
    height: 12px;
  }

  .market-card {
    min-height: 78px;
    gap: var(--space-3);
    padding: var(--space-3);
    border-width: 1.5px;
  }

  .market-card__icon {
    width: 42px;
    height: 42px;
  }

  .market-card__icon :deep(svg) {
    width: 22px;
    height: 22px;
  }

  .market-card__text {
    font-size: 0.88rem;
    line-height: 1.3;
  }
  
  .visual-img {
    aspect-ratio: auto;
  }
}
</style>
