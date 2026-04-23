<template>
  <div>
    <PageHero
      title="Hubungi <span class='accent'>Tim Kami</span>"
      subtitle="Kami siap menjawab pertanyaan Anda seputar produk, peluang kemitraan, maupun dukungan teknis lainnya. Jangan ragu menyapa kami!"
      badge="Layanan 24/7"
    />

    <section class="contact-section section">
      <div class="container">
        <div class="contact-wrapper">
          <!-- Left: Info -->
          <div class="contact-info reveal">
            <h2 class="text-title mb-6">Mari Bicarakan <br/><span class="gradient-text">Bisnis Anda</span></h2>
            <p class="text-light mb-8 leading-relaxed">
              Tim support dan konsultan bisnis kami siap melayani Anda. Jika Anda ingin datang berkunjung langsung ke kantor atau pabrik kami, silakan cek lokasi di bawah ini.
            </p>

            <div class="info-list">
              <a href="https://wa.me/6287885590088" target="_blank" rel="noopener noreferrer" class="info-item glass-card hoverable">
                <div class="info-icon bg-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/></svg>
                </div>
                <div>
                  <h4>WhatsApp Layanan Mitra</h4>
                  <p>0878-8559-0088</p>
                </div>
              </a>

              <a href="mailto:orchidbrand@gmail.com" class="info-item glass-card hoverable">
                <div class="info-icon bg-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Email Kemitraan</h4>
                  <p>orchidbrand@gmail.com</p>
                </div>
              </a>

              <div class="info-item glass-card">
                <div class="info-icon bg-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Kantor Pusat / Gudang</h4>
                  <p>Jongke Tengah No.30, Sendangadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55285</p>
                </div>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="social-links mt-8">
              <span class="text-sm font-bold text-primary-dark mr-4">Ikuti Kami:</span>
              <a href="https://instagram.com/cleaniquemart" target="_blank" rel="noopener noreferrer" class="social-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <!-- Right: Map / Visual Placeholder -->
          <div class="contact-map glass-card reveal reveal-delay-2">
            <h3 class="font-display font-bold text-xl text-primary-dark mb-4">Lokasi Kami</h3>
            <div class="map-container">
              <ClientOnly>
                <iframe
                  :src="mapsEmbedUrl"
                  class="map-embed"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen
                  loading="eager"
                  referrerpolicy="strict-origin-when-cross-origin"
                  title="Peta Lokasi Produk CleaniqueMart"
                ></iframe>
                <template #fallback>
                  <div class="map-fallback" aria-live="polite">Memuat peta lokasi...</div>
                </template>
              </ClientOnly>
            </div>
            <a
              :href="mapsDirectUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-white contact-map__open"
            >
              Buka di Google Maps
            </a>
            
            <!-- Quick Form CTA instead of native form (diverts to WA) -->
            <div class="quick-cta mt-6 text-center">
              <p class="text-sm text-light mb-4">Ingin dikirimkan brosur daftar harga terbaru? Minta langsung ke tim kami sekarang.</p>
              <a href="https://wa.me/6287885590088?text=Halo%2C%20saya%20mohon%20dikirimkan%20brosur%20dan%20daftar%20harga%20terbaru%20produk%20CleaniqueMart" target="_blank" rel="noopener noreferrer" class="btn btn-blue w-full">
                Minta Daftar Harga via WA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { seoConfig, withSiteUrl } from '~~/seo.config'

const mapsEmbedUrl = 'https://maps.google.com/maps?q=-7.756534592261972,110.36015527589505&z=16&output=embed'
const mapsDirectUrl = 'https://maps.google.com/?q=Jongke%20Tengah%20No.30%2C%20Mlati%2C%20Sleman%2C%20Yogyakarta'

usePageSeo({
  title: 'Hubungi Kami',
  description: 'Kontak WhatsApp, email, dan lokasi gudang pusat Cleanique Mart. Kami siap melayani permintaan pengiriman ke seluruh wilayah Indonesia.',
  path: '/contact',
  keywords: 'kontak Cleanique Mart, whatsapp Cleanique Mart, alamat Cleanique Mart, email kemitraan sabun curah',
  ogComponent: 'Default',
  ogProps: {
    title: 'Hubungi Cleanique Mart',
    description: 'Konsultasi kemitraan, tanya produk, dan kunjungi lokasi pusat Cleanique Mart di Sleman, Yogyakarta.',
    tagline: seoConfig.tagline,
    eyebrow: 'Kontak',
    logoUrl: withSiteUrl(seoConfig.logoPath),
    companyLogoUrl: withSiteUrl(seoConfig.companyLogoPath),
  },
})

useSchemaOrg([
  defineWebPage({
    name: 'Hubungi Cleanique Mart',
    description: 'Kontak WhatsApp, email, dan lokasi gudang pusat Cleanique Mart di Sleman, Yogyakarta.',
    url: withSiteUrl('/contact'),
    inLanguage: seoConfig.language,
  }),
  defineLocalBusiness({
    name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    url: withSiteUrl('/contact'),
    image: withSiteUrl(seoConfig.logoPath),
    telephone: seoConfig.phoneE164,
    email: seoConfig.email,
    address: {
      '@type': 'PostalAddress',
      ...seoConfig.address,
    },
    sameAs: [seoConfig.instagramUrl],
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Beranda', item: '/' },
      { name: 'Kontak', item: '/contact' },
    ],
  }),
])

useScrollReveal(0.1)
</script>

<style scoped>
.text-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  color: var(--color-primary-dark);
}
.text-light { color: var(--color-text-light); }
.text-primary-dark { color: var(--color-primary-dark); }
.text-xl { font-size: 1.25rem; }
.text-sm { font-size: 0.875rem; }
.font-display { font-family: var(--font-display); }
.font-bold { font-weight: 700; }
.mb-4 { margin-bottom: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.mb-8 { margin-bottom: var(--space-8); }
.mt-6 { margin-top: var(--space-6); }
.mt-8 { margin-top: var(--space-8); }
.mr-4 { margin-right: var(--space-4); }
.leading-relaxed { line-height: 1.7; }
.w-full { width: 100%; justify-content: center; }
.text-center { text-align: center; }

.contact-section {
  background: var(--color-surface);
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  max-width: 1100px;
  margin: 0 auto;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.08);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
}

.info-item.hoverable:hover {
  transform: translateX(8px);
  border-color: var(--color-primary-light);
  box-shadow: var(--shadow-sm);
}

.info-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-white);
}

.bg-green { background: linear-gradient(135deg, #43A047, #2E7D32); }
.bg-blue { background: linear-gradient(135deg, #1E88E5, #1565C0); }
.bg-purple { background: linear-gradient(135deg, #8E24AA, #6A1B9A); }

.info-item h4 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--color-primary-dark);
  margin-bottom: 4px;
}

.info-item p {
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.5;
}

.social-links {
  display: flex;
  align-items: center;
}

.social-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin-right: var(--space-2);
  transition: all var(--transition-fast);
}

.social-circle:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
}

.contact-map {
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.1);
  padding: var(--space-6);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
}

.map-container {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-surface);
}

.map-embed {
  display: block;
}

.map-fallback {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 0.92rem;
  color: var(--color-text-light);
}

.contact-map__open {
  margin-top: var(--space-4);
  width: 100%;
  justify-content: center;
  color: var(--color-primary);
  border-color: rgba(21, 101, 192, 0.28);
  background: rgba(21, 101, 192, 0.04);
}

.contact-map__open:hover {
  color: var(--color-white);
  background: var(--color-primary);
  border-color: var(--color-primary);
}

@media (max-width: 960px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
  
  .contact-map {
    order: -1;
  }
}
</style>
