<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isMenuOpen }">
    <div class="container navbar__inner">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar__logo" aria-label="CleaniqueMart - Beranda">
        <NuxtImg
          src="/cleanique-mart-logo-outline-scaled.webp"
          alt="CleaniqueMart Logo"
          width="160"
          height="56"
          class="navbar__logo-img"
          loading="eager"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="navbar__nav" role="navigation" aria-label="Navigasi Utama">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="navbar__link"
          active-class="navbar__link--active"
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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
      >
        <span class="navbar__hamburger-bar"></span>
        <span class="navbar__hamburger-bar"></span>
        <span class="navbar__hamburger-bar"></span>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="mobile-menu">
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="navbar__drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
      >
        <nav class="navbar__drawer-nav">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            class="navbar__drawer-link"
            active-class="navbar__drawer-link--active"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <a
          href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20konsultasi%20menjadi%20mitra%20CleaniqueMart"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary navbar__drawer-cta"
          @click="closeMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
          </svg>
          Konsultasi Gratis
        </a>
      </div>
    </Transition>

    <!-- Mobile Overlay -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="navbar__overlay" @click="closeMenu" aria-hidden="true"></div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMenuOpen = ref(false)

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

// Close menu on route change
const route = useRoute()
watch(() => route.path, closeMenu)
</script>

<style scoped>
/* === Navbar === */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(21, 101, 192, 0.08);
  transition: all var(--transition-base);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.97);
  box-shadow: var(--shadow-md);
  border-bottom-color: rgba(21, 101, 192, 0.12);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  height: 72px;
}

/* Logo */
.navbar__logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.navbar__logo-img {
  height: 48px;
  width: auto;
  object-fit: contain;
  transition: opacity var(--transition-fast);
}

.navbar__logo:hover .navbar__logo-img {
  opacity: 0.85;
}

/* Desktop Nav */
.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.navbar__link {
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-light);
  transition: color var(--transition-fast), background var(--transition-fast);
  white-space: nowrap;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-primary);
  background: rgba(21, 101, 192, 0.07);
}

/* CTA */
.navbar__cta {
  flex-shrink: 0;
}

.navbar__cta-btn {
  padding: var(--space-2) var(--space-4);
  font-size: 0.9rem;
  min-height: 44px;
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}

.navbar__hamburger-bar {
  display: block;
  width: 100%;
  height: 2.5px;
  background: var(--color-primary-dark);
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-base);
  transform-origin: center;
}

.navbar__hamburger--open .navbar__hamburger-bar:nth-child(1) {
  transform: translateY(8.75px) rotate(45deg);
}

.navbar__hamburger--open .navbar__hamburger-bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.navbar__hamburger--open .navbar__hamburger-bar:nth-child(3) {
  transform: translateY(-8.75px) rotate(-45deg);
}

/* Mobile Drawer */
.navbar__drawer {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-white);
  z-index: var(--z-overlay);
  padding: var(--space-6) var(--space-6) var(--space-12);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  overflow-y: auto;
}

.navbar__drawer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.navbar__drawer-link {
  display: block;
  padding: var(--space-4) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  transition: color var(--transition-fast), background var(--transition-fast);
  border-bottom: 1px solid rgba(21, 101, 192, 0.06);
}

.navbar__drawer-link:hover,
.navbar__drawer-link--active {
  color: var(--color-primary);
  background: var(--color-sky);
}

.navbar__drawer-cta {
  margin-top: auto;
  justify-content: center;
  font-size: 1rem;
}

/* Overlay */
.navbar__overlay {
  position: fixed;
  inset: 72px 0 0;
  background: rgba(13, 43, 107, 0.3);
  z-index: calc(var(--z-overlay) - 1);
}

/* === Transitions === */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform var(--transition-slow);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* === Responsive === */
@media (max-width: 900px) {
  .navbar__nav {
    display: none;
  }

  .navbar__cta {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }
}
</style>
