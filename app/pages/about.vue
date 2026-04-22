<template>
  <div>
    <PageHero
      title="Tentang <span class='accent'>CleaniQue Mart</span>"
      subtitle="Bermula dari semangat memberikan solusi kebersihan yang terjangkau namun berkualitas tinggi, kami tumbuh menjadi mitra andalan bagi ratusan keluarga dan pengusaha di Indonesia."
      badge="Kisah Kami"
    />

    <section class="story-section section">
      <div class="container">
        <div class="story-grid">
          <div class="story-visual reveal">
            <div class="story-img-wrapper glass-card">
              <NuxtImg
                src="/about/hero-section.webp"
                alt="Fasilitas produksi Cleanique Mart"
                class="story-img"
                width="600"
                height="700"
                loading="lazy"
                placeholder
              />
            </div>
            <div class="story-decor" aria-hidden="true"></div>
          </div>
          <div class="story-content reveal reveal-delay-2">
            <h2 class="text-title mb-6">Dedikasi Untuk <br /><span class="gradient-text">Kualitas Tanpa Kompromi</span></h2>
            <p class="mb-4 text-light leading-relaxed">
              CleaniQue Mart bukan sekadar pabrik sabun. Kami berawal dari sebuah tekad: bagaimana menciptakan produk kebersihan rumah tangga dan industri yang secara performa setara dengan merek nasional, namun dengan harga yang tetap ramah bagi keluarga, pelaku UMKM, dan calon mitra di berbagai kota.
            </p>
            <p class="mb-8 text-light leading-relaxed">
              Tim riset dan pengembangan kami menghabiskan banyak waktu untuk menyempurnakan formula, menjaga kestabilan kualitas, dan memastikan produk siap dipasarkan secara profesional. Hasilnya, Cleanique Mart hadir dengan lini produk yang telah tersertifikasi Halal dan terdaftar resmi, sehingga memberi rasa aman bagi konsumen sekaligus kepastian usaha bagi para mitra.
            </p>

            <div class="vision-mission">
              <div class="vm-card">
                <div class="vm-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <h3>Visi Kami</h3>
                <p>Menjadi produsen dan mitra distribusi produk kebersihan yang dipercaya masyarakat Indonesia karena kualitas, legalitas, dan dampak bisnisnya.</p>
              </div>
              <div class="vm-card">
                <div class="vm-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h3>Misi Kami</h3>
                <p>Menghadirkan produk sabun curah dan kebutuhan PKRT yang berkualitas, mudah diakses, ramah lingkungan, dan siap menjadi fondasi usaha mitra.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="brand-section section">
      <div class="container">
        <div class="brand-header text-center mb-12 reveal">
          <h2 class="brand-header__title">Cleanique Mart: Solusi Bisnis PKRT dari PT. Indotech Berkah Abadi</h2>
          <p class="text-light mt-4 mx-auto max-w-3xl leading-relaxed">
            Ekosistem kami mempertemukan produk kebersihan berkualitas, konsep refill yang relevan, dan sistem kemitraan yang membantu bisnis berkembang lebih terarah.
          </p>
        </div>

        <div class="brand-showcase reveal reveal-delay-1">
          <div class="brand-gallery">
            <figure
              v-for="image in galleryImages"
              :key="image.src"
              class="brand-gallery__card glass-card"
            >
              <NuxtImg
                :src="image.src"
                :alt="image.alt"
                class="brand-gallery__img"
                width="640"
                height="480"
                loading="lazy"
                placeholder
              />
              <figcaption class="brand-gallery__caption">{{ image.caption }}</figcaption>
            </figure>
          </div>

          <div class="brand-logo-panel glass-card">
            <NuxtImg
              src="/indotech-full-1536x438.webp"
              alt="Logo PT. Indotech Berkah Abadi"
              class="brand-logo-panel__img"
              width="1536"
              height="438"
              loading="lazy"
              placeholder
            />
          </div>
        </div>

        <div class="brand-copy-panel glass-card reveal reveal-delay-2">
          <div class="brand-copy-panel__body">
            <p>
              <strong>PT. Indotech Berkah Abadi</strong>, perusahaan yang berbasis di Yogyakarta, menghadirkan merek produk <strong>Cleanique Lab</strong> serta kemitraan <strong>Cleanique Mart</strong> sebagai solusi bisnis Perbekalan Kesehatan Rumah Tangga yang lebih modern, aman, dan mudah dijalankan.
            </p>
            <p>
              Melalui Cleanique Lab, kami mengembangkan produk kebersihan yang dirancang untuk kebutuhan rumah tangga, usaha refill, laundry, dan sektor komersial. Fokus kami bukan hanya pada kualitas formula, tetapi juga pada legalitas produk, kestabilan mutu, dan kesiapan pasar agar mitra dapat tumbuh dengan fondasi yang lebih kuat.
            </p>
            <p>
              Sementara itu, Cleanique Mart dibangun untuk membantu masyarakat membuka peluang usaha sabun curah dan produk isi ulang dengan sistem yang lebih praktis. Kami percaya konsep refill tidak hanya memberi nilai ekonomi, tetapi juga menjadi langkah nyata menuju kebiasaan belanja yang lebih hemat dan lebih bertanggung jawab terhadap lingkungan.
            </p>
          </div>

          <div class="brand-focus">
            <div
              v-for="item in brandFocus"
              :key="item"
              class="brand-focus__item"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="proof-section section">
      <div class="container">
        <div class="proof-grid">
          <div class="proof-copy reveal">
            <span class="proof-label">Bukti Kredibilitas</span>
            <h2 class="text-title proof-title">Penghargaan dan pencapaian yang memperkuat kepercayaan.</h2>
            <p class="text-light leading-relaxed">
              Perjalanan Cleanique Mart dibangun melalui proses yang serius, kolaborasi yang panjang, dan standar kerja yang terus ditingkatkan. Dokumentasi penghargaan ini menjadi bagian dari cerita pertumbuhan kami sebagai brand produk kebersihan dan kemitraan sabun curah di Indonesia.
            </p>

            <div class="proof-points">
              <div
                v-for="point in proofPoints"
                :key="point.title"
                class="proof-point glass-card"
              >
                <h3>{{ point.title }}</h3>
                <p>{{ point.description }}</p>
              </div>
            </div>
          </div>

          <div class="proof-awards glass-card reveal reveal-delay-2">
            <NuxtImg
              src="/photo-collage.webp"
              alt="Kolase penghargaan Cleanique Mart"
              class="proof-awards__img"
              width="1200"
              height="1200"
              loading="lazy"
              placeholder
            />
          </div>
        </div>
      </div>
    </section>

    <HomeCTA />
  </div>
</template>

<script setup lang="ts">
const brandFocus = [
  'Cleanique Lab',
  'Kemitraan Cleanique Mart',
  'Produk PKRT Berkualitas',
  'Konsep Refill Ramah Lingkungan',
]

const proofPoints = [
  {
    title: 'Brand yang dibangun dengan standar kerja nyata',
    description: 'Setiap langkah pertumbuhan kami didorong oleh pengembangan produk, kesiapan operasional, dan komitmen jangka panjang untuk menjaga kepercayaan pasar.',
  },
  {
    title: 'Kepercayaan yang tumbuh bersama mitra dan pelanggan',
    description: 'Penghargaan dan dokumentasi pencapaian ini memperkuat posisi Cleanique Mart sebagai bisnis yang serius, bertumbuh, dan memiliki arah yang jelas.',
  },
]

const galleryImages = [
  {
    src: '/about/Cleanique-Mart-Situbondo-Depan.webp',
    alt: 'Tampak depan Cleanique Mart Situbondo',
    caption: 'Gerai Cleanique Mart Situbondo',
  },
  {
    src: '/about/Cleanique-Mart-Situbondo-Produk.webp',
    alt: 'Display produk Cleanique Mart Situbondo',
    caption: 'Display produk yang siap melayani pelanggan',
  },
  {
    src: '/about/cleanique-mart-palembang-refil-sabun.webp',
    alt: 'Layanan refill sabun Cleanique Mart Palembang',
    caption: 'Konsep refill sabun yang efisien dan ramah lingkungan',
  },
  {
    src: '/about/Cleanique-Mart-Malang-Depan-Toko.webp',
    alt: 'Toko Cleanique Mart Malang',
    caption: 'Kehadiran brand di berbagai kota berkembang',
  },
]

useSeoMeta({
  title: 'Tentang Kami - CleaniqueMart',
  description: 'Kenali CleaniqueMart, solusi bisnis sabun curah dan produk kebersihan PKRT dari PT. Indotech Berkah Abadi. Temukan cerita brand, Cleanique Lab, kemitraan, dan komitmen ramah lingkungan kami.',
  ogTitle: 'Tentang Kami - CleaniqueMart',
  ogDescription: 'CleaniqueMart menghadirkan produk kebersihan PKRT, kemitraan sabun curah, dan solusi refill ramah lingkungan dari PT. Indotech Berkah Abadi.',
  ogImage: '/photo-collage.webp',
  twitterCard: 'summary_large_image',
  keywords: 'tentang CleaniqueMart, sabun curah, PKRT, Cleanique Lab, PT Indotech Berkah Abadi, mitra Cleanique Mart, produk kebersihan ramah lingkungan',
})

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
.text-center { text-align: center; }
.text-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--color-primary-dark);
}
.text-light { color: var(--color-text-light); }
.mb-4 { margin-bottom: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.mb-8 { margin-bottom: var(--space-8); }
.mb-12 { margin-bottom: var(--space-12); }
.mt-4 { margin-top: var(--space-4); }
.mx-auto { margin-left: auto; margin-right: auto; }
.max-w-3xl { max-width: 48rem; }
.leading-relaxed { line-height: 1.8; }

.story-section {
  background: var(--color-white);
}

.story-grid {
  display: grid;
  grid-template-columns: 5fr 6fr;
  gap: var(--space-16);
  align-items: center;
}

.story-visual {
  position: relative;
}

.story-img-wrapper {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  aspect-ratio: 4 / 5;
  z-index: 2;
  border: 1px solid rgba(21, 101, 192, 0.1);
  background: var(--color-sky);
}

.story-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-decor {
  position: absolute;
  top: var(--space-8);
  right: -var(--space-8);
  bottom: -var(--space-8);
  left: var(--space-8);
  border: 2px dashed rgba(67, 160, 71, 0.3);
  border-radius: var(--radius-2xl);
  z-index: 1;
}

.vision-mission {
  display: flex;
  gap: var(--space-6);
  margin-top: var(--space-8);
}

.vm-card {
  flex: 1;
  background: var(--color-surface);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(21, 101, 192, 0.05);
}

.vm-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(21, 101, 192, 0.1);
  color: var(--color-primary);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
}

.vm-card h3 {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-2);
}

.vm-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text-light);
}

.brand-section {
  background:
    radial-gradient(circle at top right, rgba(67, 160, 71, 0.08), transparent 26%),
    linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  border-top: 1px solid rgba(21, 101, 192, 0.06);
  border-bottom: 1px solid rgba(21, 101, 192, 0.06);
}

.brand-header {
  max-width: 980px;
  margin-inline: auto;
}

.brand-header__title {
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 4.6vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--color-primary-dark);
}

.brand-showcase {
  max-width: 1020px;
  margin: 0 auto;
}

.brand-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
}

.brand-gallery__card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(21, 101, 192, 0.08);
  box-shadow: var(--shadow-sm);
  background: var(--color-white);
}

.brand-gallery__img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}

.brand-gallery__card:hover .brand-gallery__img {
  transform: scale(1.03);
}

.brand-gallery__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--space-4);
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-white);
  background: linear-gradient(to top, rgba(7, 24, 51, 0.88), rgba(7, 24, 51, 0));
  text-align: center;
}

.brand-logo-panel {
  max-width: 760px;
  margin: var(--space-8) auto 0;
  padding: var(--space-5);
  border-radius: var(--radius-2xl);
  border: 1px solid rgba(21, 101, 192, 0.08);
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  box-shadow: var(--shadow-sm);
}

.brand-logo-panel__img {
  width: 100%;
  height: auto;
  display: block;
}

.brand-copy-panel {
  max-width: 1020px;
  margin: var(--space-10) auto 0;
  border: 1px solid rgba(21, 101, 192, 0.08);
  border-radius: var(--radius-2xl);
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
}

.brand-copy-panel__body {
  padding: var(--space-8);
  padding-bottom: var(--space-5);
}

.brand-copy-panel__body p {
  font-size: 1.02rem;
  line-height: 1.9;
  color: var(--color-text-light);
}

.brand-copy-panel__body p + p {
  margin-top: var(--space-4);
}

.brand-focus {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  padding: 0 var(--space-8) var(--space-8);
}

.brand-focus__item {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 var(--space-4);
  border-radius: var(--radius-full);
  background: rgba(21, 101, 192, 0.06);
  border: 1px solid rgba(21, 101, 192, 0.1);
  color: var(--color-primary-dark);
  font-size: 0.9rem;
  font-weight: 700;
}

.proof-section {
  background: var(--color-white);
}

.proof-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: var(--space-8);
  align-items: start;
}

.proof-copy {
  display: grid;
  gap: var(--space-5);
}

.proof-awards {
  overflow: hidden;
  border-radius: var(--radius-2xl);
  border: 1px solid rgba(21, 101, 192, 0.08);
  background: linear-gradient(180deg, #ffffff 0%, #f6fbff 100%);
  box-shadow: var(--shadow-sm);
  padding: var(--space-5);
}

.proof-points {
  display: grid;
  gap: var(--space-4);
}

.proof-point {
  padding: var(--space-5);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(21, 101, 192, 0.08);
  background: rgba(255, 255, 255, 0.88);
}

.proof-point h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  line-height: 1.4;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-2);
}

.proof-point p {
  font-size: 0.96rem;
  line-height: 1.75;
  color: var(--color-text-light);
}

.proof-label {
  display: inline-flex;
  align-items: center;
  margin-bottom: var(--space-4);
  padding: 6px var(--space-3);
  border-radius: var(--radius-full);
  background: rgba(67, 160, 71, 0.12);
  color: #2e7d32;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.proof-title {
  margin-bottom: var(--space-4);
}

.proof-awards__img {
  width: 100%;
  display: block;
  border-radius: calc(var(--radius-xl) + 2px);
}

@media (max-width: 1100px) {
  .story-grid,
  .proof-grid {
    grid-template-columns: 1fr;
  }

  .story-visual {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .vision-mission {
    flex-direction: column;
  }

  .brand-gallery {
    grid-template-columns: 1fr;
  }

  .brand-logo-panel {
    margin-top: var(--space-6);
    padding: var(--space-4);
  }

  .brand-copy-panel__body,
  .proof-awards {
    padding: var(--space-6);
  }

  .brand-focus {
    padding: 0 var(--space-6) var(--space-6);
  }
}

@media (max-width: 640px) {
  .brand-header__title {
    font-size: clamp(1.8rem, 8vw, 2.6rem);
  }

  .brand-copy-panel__body,
  .brand-focus {
    padding: var(--space-5);
  }
}
</style>
