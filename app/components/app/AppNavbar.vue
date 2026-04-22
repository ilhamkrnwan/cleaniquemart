<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isMenuOpen }">
    <div class="navbar__inner container">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar__logo" aria-label="CleaniqueMart - Beranda">
        <NuxtImg
          src="/cleanique-mart-logo-outline-scaled.webp"
          alt="CleaniqueMart Logo"
          fit="contain"
          class="navbar__logo-img"
          loading="eager"
        />
      </NuxtLink>

      <!-- Desktop Navigation (centered) -->
      <nav class="navbar__nav" role="navigation" aria-label="Navigasi Utama">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="navbar__link"
          active-class="navbar__link--active"
          exact-active-class="navbar__link--active"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- CTA Button (Desktop) -->
      <div class="navbar__cta">
        <a
          href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20konsultasi%20menjadi%20mitra%20CleaniqueMart"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary navbar__cta-btn"
          aria-label="Daftar sebagai mitra CleaniqueMart via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
          </svg>
          Daftar Mitra
        </a>
      </div>

      <!-- Hamburger (Mobile) -->
      <button
        class="navbar__hamburger"
        :class="{ 'navbar__hamburger--open': isMenuOpen }"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigasi"
        type="button"
      >
        <span class="navbar__hamburger-bar"></span>
        <span class="navbar__hamburger-bar"></span>
        <span class="navbar__hamburger-bar"></span>
      </button>
    </div>

    <!-- Mobile Drawer: full-screen, simple & clean -->
    <Transition name="mobile-drawer">
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="navbar__drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
      >
        <!-- Header -->
        <div class="navbar__drawer-header">
          <NuxtImg
            src="/cleanique-mart-logo-outline-scaled.webp"
            alt="CleaniqueMart"
            fit="contain"
            class="navbar__drawer-logo"
          />
          <button
            class="navbar__drawer-close"
            @click="closeMenu"
            aria-label="Tutup menu"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Nav Links -->
        <nav class="navbar__drawer-nav">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="item.href"
            :to="item.href"
            class="navbar__drawer-link"
            :class="{ 'navbar__drawer-link--visible': isMenuOpen }"
            :style="{ transitionDelay: isMenuOpen ? `${index * 45 + 60}ms` : '0ms' }"
            active-class="navbar__drawer-link--active"
            exact-active-class="navbar__drawer-link--active"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- CTA strip -->
        <div
          class="navbar__drawer-cta-wrap"
          :class="{ 'navbar__drawer-cta-wrap--visible': isMenuOpen }"
          :style="{ transitionDelay: isMenuOpen ? `${navItems.length * 45 + 80}ms` : '0ms' }"
        >
          <a
            href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20konsultasi%20menjadi%20mitra%20CleaniqueMart"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary navbar__drawer-cta"
            @click="closeMenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
            </svg>
            Konsultasi Gratis
          </a>
          <p class="navbar__drawer-powered">© {{ currentYear }} CleaniqueMart</p>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const currentYear = new Date().getFullYear()

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Mitra', href: '/mitra' },
  { label: 'Produk', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/contact' },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

function closeMenu() {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})

const route = useRoute()
watch(() => route.path, closeMenu)
</script>

<style scoped>
/* ===========================
   NAVBAR BASE
   =========================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px) saturate(1.8);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  border-bottom: 1px solid rgba(21, 101, 192, 0.07);
  transition:
    background var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 16px rgba(13, 43, 107, 0.08), 0 1px 4px rgba(13, 43, 107, 0.05);
  border-bottom-color: rgba(21, 101, 192, 0.1);
}

.navbar--open {
  z-index: calc(var(--z-modal) + 10);
}

/* ===========================
   INNER — 3-column grid
   =========================== */
.navbar__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--space-4);
  height: 72px;
  transition: height var(--transition-base);
}

.navbar--scrolled .navbar__inner {
  height: 62px;
}

/* ===========================
   LOGO
   =========================== */
.navbar__logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-self: start;
}

.navbar__logo-img {
  display: block;
  width: min(220px, 100%);
  max-height: 44px;
  height: auto;
  object-fit: contain;
  object-position: left center;
  transition: height var(--transition-base), opacity var(--transition-fast);
}

.navbar--scrolled .navbar__logo-img { max-height: 38px; }
.navbar__logo:hover .navbar__logo-img { opacity: 0.82; }

/* ===========================
   DESKTOP NAV
   =========================== */
.navbar__nav {
  display: flex;
  align-items: center;
  gap: 2px;
  justify-self: center;
}

.navbar__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 7px 14px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-light);
  white-space: nowrap;
  transition: color var(--transition-fast), background var(--transition-fast);
}

.navbar__link:hover {
  color: var(--color-primary);
  background: rgba(21, 101, 192, 0.06);
}

.navbar__link--active {
  background: var(--color-accent);
  color: #fff !important;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(67, 160, 71, 0.28);
}

.navbar__link--active:hover {
  background: var(--color-accent-dark);
  color: #fff;
}

/* ===========================
   CTA
   =========================== */
.navbar__cta {
  justify-self: end;
  flex-shrink: 0;
}

.navbar__cta-btn {
  padding: var(--space-2) var(--space-5);
  font-size: 0.875rem;
  min-height: 40px;
  animation: none;
  box-shadow: 0 2px 10px rgba(67, 160, 71, 0.2);
}

.navbar__cta-btn:hover {
  box-shadow: 0 4px 18px rgba(67, 160, 71, 0.38);
}

/* ===========================
   HAMBURGER
   =========================== */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  gap: 5.5px;
  background: none;
  border: 1.5px solid rgba(21, 101, 192, 0.15);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  border-radius: var(--radius-sm);
  justify-self: end;
  transition: background var(--transition-fast), border-color var(--transition-fast);
}

.navbar__hamburger:hover {
  background: rgba(21, 101, 192, 0.06);
  border-color: rgba(21, 101, 192, 0.25);
}

.navbar__hamburger-bar {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-primary-dark);
  border-radius: 2px;
  transform-origin: center;
  transition:
    transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.25s ease-out,
    width 0.3s ease-out;
}

.navbar__hamburger--open .navbar__hamburger-bar:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.navbar__hamburger--open .navbar__hamburger-bar:nth-child(2) {
  opacity: 0;
  width: 0;
}
.navbar__hamburger--open .navbar__hamburger-bar:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

/* ===========================
   MOBILE DRAWER — full-screen, clean
   =========================== */
.navbar__drawer {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100dvh;
  background: var(--color-white);
  z-index: var(--z-modal);
  display: flex;
  flex-direction: column;
  overflow: hidden; /* no scroll */
}

/* Header strip */
.navbar__drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-5);
  height: 68px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #091E45 0%, #0D2B6B 60%, #1565C0 100%);
}

.navbar__drawer-logo {
  display: block;
  width: min(170px, 62vw);
  max-height: 38px;
  height: auto;
  object-fit: contain;
  object-position: left center;
}

.navbar__drawer-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  color: rgba(255, 255, 255, 0.85);
  transition: background var(--transition-fast), border-color var(--transition-fast);
  flex-shrink: 0;
}

.navbar__drawer-close:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
}

/* Nav section — fills remaining space, vertically centered */
.navbar__drawer-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-4) var(--space-6);
  gap: 4px;
}

/* Clean text-only links */
.navbar__drawer-link {
  display: block;
  padding: 12px var(--space-4);
  border-radius: var(--radius-sm);
  border-left: 3px solid transparent;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text);
  opacity: 0;
  transform: translateY(12px);
  transition:
    color var(--transition-fast),
    background var(--transition-fast),
    border-color var(--transition-fast),
    opacity 0.32s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar__drawer-link--visible {
  opacity: 1;
  transform: translateY(0);
}

.navbar__drawer-link:hover {
  color: var(--color-primary);
  background: rgba(21, 101, 192, 0.05);
  border-left-color: rgba(21, 101, 192, 0.25);
}

/* Active state: green left border */
.navbar__drawer-link--active {
  color: var(--color-accent-dark);
  font-weight: 700;
  background: rgba(67, 160, 71, 0.07);
  border-left-color: var(--color-accent);
}

.navbar__drawer-link--active:hover {
  background: rgba(67, 160, 71, 0.1);
}

/* CTA strip at bottom */
.navbar__drawer-cta-wrap {
  padding: var(--space-4) var(--space-6) calc(var(--space-5) + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid rgba(21, 101, 192, 0.08);
  flex-shrink: 0;
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.32s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar__drawer-cta-wrap--visible {
  opacity: 1;
  transform: translateY(0);
}

.navbar__drawer-cta {
  width: 100%;
  justify-content: center;
  font-size: 0.95rem;
  min-height: 48px;
  animation: none;
}

.navbar__drawer-powered {
  text-align: center;
  font-size: 0.72rem;
  color: var(--color-text-light);
  opacity: 0.45;
  margin-top: var(--space-3);
}

/* ===========================
   TRANSITIONS
   =========================== */
.mobile-drawer-enter-active {
  transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-drawer-leave-active {
  transition: transform 0.26s cubic-bezier(0.7, 0, 0.84, 0);
}

.mobile-drawer-enter-from,
.mobile-drawer-leave-to {
  transform: translateX(100%);
}

/* ===========================
   RESPONSIVE
   =========================== */
@media (max-width: 900px) {
  .navbar__inner {
    grid-template-columns: auto 1fr auto;
  }

  .navbar__logo { justify-self: start; }
  .navbar__nav { display: none; }
  .navbar__cta { display: none; }

  .navbar__hamburger {
    display: flex;
    justify-self: end;
  }
}

@media (max-width: 480px) {
  .navbar__inner { height: 64px; }
  .navbar--scrolled .navbar__inner { height: 60px; }
  .navbar__logo-img {
    max-height: 38px;
    width: min(190px, 100%);
  }
  .navbar--scrolled .navbar__logo-img { max-height: 34px; }
  .navbar__drawer-logo {
    max-height: 34px;
    width: min(150px, 58vw);
  }
}
</style>
