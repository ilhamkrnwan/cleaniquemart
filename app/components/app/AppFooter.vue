<template>
  <footer class="footer">
    <!-- Gradient Transition (replaces hard wave) -->
    <div class="footer__gradient-top" aria-hidden="true"></div>

    <div class="footer__body">
      <!-- Decorative background -->
      <div class="footer__bg-decor" aria-hidden="true"></div>

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

            <!-- Mini CTA -->
            <a
              href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20konsultasi%20menjadi%20mitra%20CleaniqueMart"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__mini-cta"
              aria-label="Konsultasi gratis via WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
              </svg>
              Konsultasi Gratis
            </a>

            <!-- Social Links -->
            <div class="footer__social">
              <a
                href="https://wa.me/6287885590088"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__social-link"
                aria-label="WhatsApp CleaniqueMart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div class="footer__col">
            <h3 class="footer__col-title">
              <span class="footer__col-title-bar" aria-hidden="true"></span>
              Halaman
            </h3>
            <ul class="footer__links" role="list">
              <li v-for="item in pageLinks" :key="item.href">
                <NuxtLink :to="item.href" class="footer__link">
                  <span class="footer__link-arrow" aria-hidden="true">→</span>
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Products -->
          <div class="footer__col">
            <h3 class="footer__col-title">
              <span class="footer__col-title-bar" aria-hidden="true"></span>
              Produk
            </h3>
            <ul class="footer__links" role="list">
              <li v-for="product in productLinks" :key="product">
                <NuxtLink to="/products" class="footer__link">
                  <span class="footer__link-arrow" aria-hidden="true">→</span>
                  {{ product }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer__col">
            <h3 class="footer__col-title">
              <span class="footer__col-title-bar" aria-hidden="true"></span>
              Kontak
            </h3>
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
          <span class="footer__badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Halal MUI
          </span>
          <span class="footer__badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            Izin Edar PKRT
          </span>
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

/* Gradient transition top (replaces hard wave edge) */
.footer__gradient-top {
  height: 120px;
  background: linear-gradient(to bottom, transparent 0%, #091E45 100%);
  pointer-events: none;
}

.footer__body {
  position: relative;
  background: linear-gradient(180deg, #091E45 0%, #0D2B6B 40%, #0A1D3D 100%);
  padding: var(--space-16) 0 var(--space-8);
  overflow: hidden;
}

/* Decorative background circles */
.footer__bg-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 10% 20%, rgba(67, 160, 71, 0.06) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(21, 101, 192, 0.08) 0%, transparent 40%);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
  gap: var(--space-12);
  position: relative;
  z-index: 1;
}

/* Brand */
.footer__logo {
  height: 44px;
  width: auto;
  object-fit: contain;
  margin-bottom: var(--space-5);
  filter: brightness(0) invert(1);
  opacity: 0.9;
}

.footer__tagline {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: var(--space-5);
  max-width: 280px;
}

/* Mini CTA */
.footer__mini-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 8px var(--space-4);
  background: rgba(67, 160, 71, 0.15);
  border: 1px solid rgba(67, 160, 71, 0.3);
  border-radius: var(--radius-full);
  color: var(--color-accent-light);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all var(--transition-fast);
  margin-bottom: var(--space-5);
}

.footer__mini-cta:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-white);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(67, 160, 71, 0.3);
}

.footer__social {
  display: flex;
  gap: var(--space-2);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all var(--transition-fast);
}

.footer__social-link:hover {
  background: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Columns */
.footer__col-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-5);
}

.footer__col-title-bar {
  width: 16px;
  height: 2px;
  background: var(--color-accent);
  border-radius: 2px;
  flex-shrink: 0;
}

.footer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
  transition: color var(--transition-fast), transform var(--transition-fast);
  cursor: pointer;
}

.footer__link-arrow {
  font-size: 0.7rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity var(--transition-fast), transform var(--transition-fast);
  color: var(--color-accent-light);
}

.footer__link:hover {
  color: var(--color-white);
  transform: translateX(2px);
}

.footer__link:hover .footer__link-arrow {
  opacity: 1;
  transform: translateX(0);
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
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.875rem;
  line-height: 1.5;
}

.footer__contact-item svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: rgba(67, 160, 71, 0.7);
}

/* Bottom Bar */
.footer__bottom {
  background: rgba(0, 0, 0, 0.15);
  padding: var(--space-4) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.footer__copyright {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
}

.footer__badges {
  display: flex;
  gap: var(--space-2);
}

.footer__badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px var(--space-3);
  border-radius: var(--radius-full);
  border: 1px solid rgba(67, 160, 71, 0.25);
  background: rgba(67, 160, 71, 0.08);
  color: var(--color-accent-light);
  font-size: 0.72rem;
  font-weight: 600;
}

.footer__badge svg {
  color: var(--color-accent);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }
}

@media (max-width: 600px) {
  .footer__gradient-top {
    height: 80px;
  }

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
