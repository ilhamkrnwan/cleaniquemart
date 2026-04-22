<template>
  <div>
    <PageHero
      title="Tentang <span class='accent'>CleaniQue Mart</span>"
      subtitle="Bermula dari semangat memberikan solusi kebersihan yang terjangkau namun berkualitas tinggi, kami tumbuh menjadi mitra andalan bagi ratusan keluarga dan pengusaha di Indonesia."
      badge="Kisah Kami"
    />

    <!-- Story Section -->
    <section class="story-section section">
      <div class="container">
        <div class="story-grid">
          <div class="story-visual reveal">
            <div class="story-img-wrapper glass-card">
              <NuxtImg
                src="/about/about-factory.webp"
                alt="Fasilitas Produksi CleaniqueMart"
                class="story-img"
                width="600"
                height="700"
                loading="lazy"
                placeholder
              />
            </div>
            <!-- Decorative Box -->
            <div class="story-decor" aria-hidden="true"></div>
          </div>
          <div class="story-content reveal reveal-delay-2">
            <h2 class="text-title mb-6">Dedikasi Untuk <br /><span class="gradient-text">Kualitas Tanpa Kompromi</span></h2>
            <p class="mb-4 text-light leading-relaxed">
              CleaniQue Mart bukan sekadar pabrik sabun. Kami berawal dari sebuah tekad: bagaimana menciptakan produk kebersihan rumah tangga dan industri yang secara performa setara dengan merk nasional, namun dengan harga yang sangat ramah bagi kantong UMKM.
            </p>
            <p class="mb-8 text-light leading-relaxed">
              Tim riset dan pengembangan (R&D) kami menghabiskan ribuan jam untuk menguji formula. Hasilnya, saat ini kami bangga memiliki puluhan produk tersertifikasi Halal MUI dan terdaftar pada Kemenkes (Izin Edar PKRT), siap didistribusikan ke seluruh negeri melalui jaringan mitra kami yang solid.
            </p>

            <div class="vision-mission">
              <div class="vm-card">
                <div class="vm-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <h3>Visi Kami</h3>
                <p>Menjadi produsen solusi kebersihan terdepan yang memberdayakan ekonomi masyarakat melalui kemitraan.</p>
              </div>
              <div class="vm-card">
                <div class="vm-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h3>Misi Kami</h3>
                <p>Berinovasi tak henti, menjaga stabilitas kualitas produk, serta memberikan kemudahan akses bisnis bagi calon entrepreneur baru.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lab / Quality Control -->
    <section class="qc-section section">
      <div class="container">
        <div class="text-center mb-12 reveal">
          <h2 class="text-title">3 Pilar Produksi <span class="text-white">Cleanique</span></h2>
          <p class="text-light-blue mt-4 mx-auto max-w-2xl">Kepercayaan pelanggan bermula dari apa yang terjadi di balik pintu laboratorium kami.</p>
        </div>

        <div class="qc-grid">
          <div class="qc-card reveal reveal-delay-1">
            <div class="qc-number">01</div>
            <h3>Uji Klinis & R&D</h3>
            <p>Setiap varian baru harus melewati fase beta testing untuk menguji reaksi kulit, kemampuan mengangkat kotoran, dan tingkat busa. Kami pastikan formula stabil di segala cuaca.</p>
          </div>
          <div class="qc-card reveal reveal-delay-2">
            <div class="qc-number">02</div>
            <h3>Kontrol Bahan Baku</h3>
            <p>Kami hanya bekerja sama dengan penyuplai bahan kimia yang memiliki sertifikat industri (COA). Basis formula kami mengutamakan bahan biodegradabel yang ramah lingkungan.</p>
          </div>
          <div class="qc-card reveal reveal-delay-3">
            <div class="qc-number">03</div>
            <h3>Kualifikasi Legalitas</h3>
            <p>Sertifikasi bukan sekadar stempel bagi kami. Kelolosan Halal MUI dan PKRT membuktikan prosedur kebersihan dan kelayakan operasional telah sesuai standar pemerintah.</p>
          </div>
        </div>
      </div>
    </section>

    <HomeCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Tentang Kami — CleaniqueMart',
  description: 'Mengenal lebih dekat CleaniqueMart: Produsen sabun curah inovatif yang memberdayakan UMKM melalui produk berkualitas dan kemitraan terpercaya.',
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
/* Utilities */
.text-center { text-align: center; }
.text-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--color-primary-dark);
}
.text-light { color: var(--color-text-light); }
.text-white { color: var(--color-white); }
.text-light-blue { color: rgba(255, 255, 255, 0.7); }
.mb-4 { margin-bottom: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.mb-8 { margin-bottom: var(--space-8); }
.mb-12 { margin-bottom: var(--space-12); }
.mt-4 { margin-top: var(--space-4); }
.mx-auto { margin-left: auto; margin-right: auto; }
.max-w-2xl { max-width: 42rem; }
.leading-relaxed { line-height: 1.8; }

/* Story Section */
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
  aspect-ratio: 4/5;
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

/* QC Section */
.qc-section {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  color: var(--color-white);
}

.qc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.qc-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(8px);
  transition: transform var(--transition-base), background var(--transition-base);
}

.qc-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.08);
}

.qc-number {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.1);
  line-height: 1;
  margin-bottom: var(--space-4);
}

.qc-card h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--space-3);
  color: var(--color-accent-light);
}

.qc-card p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
}

@media (max-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .story-visual {
    max-width: 500px;
    margin: 0 auto;
  }

  .qc-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .vision-mission {
    flex-direction: column;
  }
  
  .qc-grid {
    grid-template-columns: 1fr;
  }
}
</style>
