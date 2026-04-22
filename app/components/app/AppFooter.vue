<template>
  <footer class="footer">
    <!-- Wave Divider -->
    <div class="footer__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#0D2B6B"/>
      </svg>
    </div>

    <div class="footer__body">
      <div class="container">
        <div class="footer__grid">
          <!-- Brand -->
          <div class="footer__brand">
            <NuxtLink to="/" aria-label="CleaniqueMart - Beranda">
              <NuxtImg
                src="/cleanique-mart-logo-scaled.webp"
                alt="CleaniqueMart"
                width="160"
                height="56"
                class="footer__logo"
              />
            </NuxtLink>
            <p class="footer__tagline">
              Mitra sabun curah terpercaya se-Indonesia. Bergabung dan mulai bisnis Anda hari ini.
            </p>
            <!-- Social Links -->
            <div class="footer__social">
              <a
                href="https://wa.me/6287885590088"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__social-link"
                aria-label="WhatsApp CleaniqueMart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/cleaniquemart"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__social-link"
                aria-label="Instagram CleaniqueMart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div class="footer__col">
            <h3 class="footer__col-title">Halaman</h3>
            <ul class="footer__links" role="list">
              <li v-for="item in pageLinks" :key="item.href">
                <NuxtLink :to="item.href" class="footer__link">{{ item.label }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Products -->
          <div class="footer__col">
            <h3 class="footer__col-title">Produk</h3>
            <ul class="footer__links" role="list">
              <li v-for="product in productLinks" :key="product">
                <NuxtLink to="/products" class="footer__link">{{ product }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer__col">
            <h3 class="footer__col-title">Kontak</h3>
            <ul class="footer__contact-list" role="list">
              <li class="footer__contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Jongke Tengah No.30, Mlati, Sleman, Yogyakarta</span>
              </li>
              <li class="footer__contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/></svg>
                <a href="tel:087885590088" class="footer__link">087885590088</a>
              </li>
              <li class="footer__contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:orchidbrand@gmail.com" class="footer__link">orchidbrand@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copyright">
          © {{ currentYear }} PT Indotech Berkah Abadi — CleaniqueMart. Hak cipta dilindungi.
        </p>
        <div class="footer__badges">
          <span class="footer__badge">Halal MUI</span>
          <span class="footer__badge">Izin Edar PKRT</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const pageLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Program Mitra', href: '/mitra' },
  { label: 'Produk', href: '/products' },
  { label: 'Kontak', href: '/contact' },
]

const productLinks = [
  'Hand Washing',
  'Deterjen Busa',
  'Deterjen Matic',
  'Dish Washing',
  'Softener',
  'Pel Lantai',
  'Pelicin Setrika',
  'Parfum Waterbase',
]
</script>

<style scoped>
.footer {
  position: relative;
  font-family: var(--font-body);
}

.footer__wave {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  margin-bottom: -2px;
}

.footer__wave svg {
  width: 100%;
  height: 80px;
}

.footer__body {
  background: var(--color-primary-dark);
  padding: var(--space-16) 0 var(--space-8);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: var(--space-12);
}

/* Brand */
.footer__logo {
  height: 48px;
  width: auto;
  object-fit: contain;
  margin-bottom: var(--space-4);
  filter: brightness(0) invert(1);
}

.footer__tagline {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: var(--space-4);
  max-width: 280px;
}

.footer__social {
  display: flex;
  gap: var(--space-3);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all var(--transition-fast);
}

.footer__social-link:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: white;
  transform: translateY(-2px);
}

/* Columns */
.footer__col-title {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-accent-light);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-4);
}

.footer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__link {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
  cursor: pointer;
}

.footer__link:hover {
  color: var(--color-white);
}

/* Contact */
.footer__contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  line-height: 1.5;
}

.footer__contact-item svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-accent-light);
}

/* Bottom Bar */
.footer__bottom {
  background: rgba(0, 0, 0, 0.3);
  padding: var(--space-4) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.footer__copyright {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
}

.footer__badges {
  display: flex;
  gap: var(--space-2);
}

.footer__badge {
  padding: 2px var(--space-3);
  border-radius: var(--radius-full);
  border: 1px solid rgba(67, 160, 71, 0.4);
  color: var(--color-accent-light);
  font-size: 0.75rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }
}

@media (max-width: 600px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .footer__bottom-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
