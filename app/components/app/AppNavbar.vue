<template>
  <header
    ref="navbarRef"
    class="navbar"
    :class="{
      'navbar--scrolled': isScrolled,
      'navbar--open': isMenuOpen,
    }"
  >
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
      <nav
        ref="navRef"
        class="navbar__nav"
        role="navigation"
        aria-label="Navigasi Utama"
        @mouseleave="onNavMouseLeave"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          :ref="(el) => setLinkRef(item.href, el)"
          class="navbar__link"
          active-class="navbar__link--active"
          exact-active-class="navbar__link--active"
          @mouseenter="onLinkMouseEnter(item.href)"
        >
          {{ item.label }}
        </NuxtLink>

        <!-- Ghost hover underline marker -->
        <span
          class="navbar__marker navbar__marker--ghost"
          :class="{ 'navbar__marker--visible': ghostMarker.visible }"
          :style="ghostMarkerStyle"
          aria-hidden="true"
        ></span>

        <!-- Active underline marker -->
        <span
          class="navbar__marker navbar__marker--active"
          :class="{ 'navbar__marker--visible': activeMarker.visible }"
          :style="activeMarkerStyle"
          aria-hidden="true"
        ></span>
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

    <!-- Mobile Expand Menu — expands from navbar -->
    <div
      id="mobile-menu"
      class="navbar__expand"
      :class="{ 'navbar__expand--open': isMenuOpen }"
      role="navigation"
      aria-label="Menu navigasi mobile"
    >
      <div class="navbar__expand-inner">
        <nav
          ref="mobileNavRef"
          class="navbar__expand-nav"
          @mouseleave="onMobileNavMouseLeave"
        >
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="item.href"
            :to="item.href"
            :ref="(el) => setMobileLinkRef(item.href, el)"
            class="navbar__expand-link"
            :class="{ 'navbar__expand-link--visible': isMenuOpen }"
            :style="{ transitionDelay: isMenuOpen ? `${index * 40 + 80}ms` : '0ms' }"
            active-class="navbar__expand-link--active"
            exact-active-class="navbar__expand-link--active"
            @click="closeMenu"
            @mouseenter="onMobileLinkMouseEnter(item.href)"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Mobile ghost hover marker -->
          <span
            class="navbar__expand-marker navbar__expand-marker--ghost"
            :class="{ 'navbar__expand-marker--visible': mobileGhostMarker.visible }"
            :style="mobileGhostMarkerStyle"
            aria-hidden="true"
          ></span>

          <!-- Mobile active marker -->
          <span
            class="navbar__expand-marker navbar__expand-marker--active"
            :class="{ 'navbar__expand-marker--visible': mobileActiveMarker.visible }"
            :style="mobileActiveMarkerStyle"
            aria-hidden="true"
          ></span>
        </nav>

        <!-- CTA -->
        <div
          class="navbar__expand-cta"
          :class="{ 'navbar__expand-cta--visible': isMenuOpen }"
          :style="{ transitionDelay: isMenuOpen ? `${navItems.length * 40 + 120}ms` : '0ms' }"
        >
          <a
            href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20konsultasi%20menjadi%20mitra%20CleaniqueMart"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary navbar__expand-cta-btn"
            @click="closeMenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
            </svg>
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- Backdrop overlay when menu is open -->
  <Transition name="backdrop-fade">
    <div
      v-if="isMenuOpen"
      class="navbar__backdrop"
      @click="closeMenu"
      aria-hidden="true"
    ></div>
  </Transition>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const navbarRef = ref<HTMLElement | null>(null)

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Mitra', href: '/mitra' },
  { label: 'Produk', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/contact' },
]

// --- Menu ---
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

// Click outside navbar to close
function handleClickOutside(event: MouseEvent) {
  if (!isMenuOpen.value) return
  if (navbarRef.value && !navbarRef.value.contains(event.target as Node)) {
    closeMenu()
  }
}

// --- Liquid Underline System ---
const navRef = ref<HTMLElement | null>(null)
const linkRefs = new Map<string, HTMLElement>()

function setLinkRef(href: string, el: any) {
  if (el?.$el) {
    linkRefs.set(href, el.$el as HTMLElement)
  } else if (el instanceof HTMLElement) {
    linkRefs.set(href, el)
  }
}

const activeMarker = reactive({ left: 0, width: 0, visible: false })
const ghostMarker = reactive({ left: 0, width: 0, visible: false })

const activeMarkerStyle = computed(() => ({
  left: `${activeMarker.left}px`,
  width: `${activeMarker.width}px`,
}))

const ghostMarkerStyle = computed(() => ({
  left: `${ghostMarker.left}px`,
  width: `${ghostMarker.width}px`,
}))

function getMarkerPosition(href: string) {
  const linkEl = linkRefs.get(href)
  const navEl = navRef.value
  if (!linkEl || !navEl) return null

  const navRect = navEl.getBoundingClientRect()
  const linkRect = linkEl.getBoundingClientRect()

  return {
    left: linkRect.left - navRect.left,
    width: linkRect.width,
  }
}

function updateActiveMarker() {
  const pos = getMarkerPosition(route.path)
  if (pos) {
    activeMarker.left = pos.left
    activeMarker.width = pos.width
    activeMarker.visible = true
  } else {
    activeMarker.visible = false
  }
}

function onLinkMouseEnter(href: string) {
  const pos = getMarkerPosition(href)
  if (pos) {
    ghostMarker.left = pos.left
    ghostMarker.width = pos.width
    ghostMarker.visible = true
  }
}

function onNavMouseLeave() {
  ghostMarker.visible = false
}

// --- Mobile Liquid Underline System ---
const mobileNavRef = ref<HTMLElement | null>(null)
const mobileLinkRefs = new Map<string, HTMLElement>()

function setMobileLinkRef(href: string, el: any) {
  if (el?.$el) {
    mobileLinkRefs.set(href, el.$el as HTMLElement)
  } else if (el instanceof HTMLElement) {
    mobileLinkRefs.set(href, el)
  }
}

const mobileActiveMarker = reactive({ top: 0, height: 0, visible: false })
const mobileGhostMarker = reactive({ top: 0, height: 0, visible: false })

const mobileActiveMarkerStyle = computed(() => ({
  top: `${mobileActiveMarker.top}px`,
  height: `${mobileActiveMarker.height}px`,
}))

const mobileGhostMarkerStyle = computed(() => ({
  top: `${mobileGhostMarker.top}px`,
  height: `${mobileGhostMarker.height}px`,
}))

function getMobileMarkerPosition(href: string) {
  const linkEl = mobileLinkRefs.get(href)
  const navEl = mobileNavRef.value
  if (!linkEl || !navEl) return null

  const navRect = navEl.getBoundingClientRect()
  const linkRect = linkEl.getBoundingClientRect()

  return {
    top: linkRect.top - navRect.top,
    height: linkRect.height,
  }
}

function updateMobileActiveMarker() {
  const pos = getMobileMarkerPosition(route.path)
  if (pos) {
    mobileActiveMarker.top = pos.top
    mobileActiveMarker.height = pos.height
    mobileActiveMarker.visible = true
  } else {
    mobileActiveMarker.visible = false
  }
}

function onMobileLinkMouseEnter(href: string) {
  const pos = getMobileMarkerPosition(href)
  if (pos) {
    mobileGhostMarker.top = pos.top
    mobileGhostMarker.height = pos.height
    mobileGhostMarker.visible = true
  }
}

function onMobileNavMouseLeave() {
  mobileGhostMarker.visible = false
}

function updateAllMarkers() {
  updateActiveMarker()
  updateMobileActiveMarker()
}

// --- Lifecycle ---
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  nextTick(() => {
    updateAllMarkers()
  })

  window.addEventListener('resize', updateAllMarkers, { passive: true })
  document.addEventListener('click', handleClickOutside, true)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateAllMarkers)
  document.removeEventListener('click', handleClickOutside, true)
  document.body.style.overflow = ''
})

const route = useRoute()

watch(() => route.path, () => {
  closeMenu()
  nextTick(() => {
    updateAllMarkers()
  })
})
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
  transition:
    background var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base),
    top var(--transition-base),
    margin var(--transition-base),
    border-radius var(--transition-base);
}

/* Default state: full width, transparent bg */
.navbar:not(.navbar--scrolled) {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px) saturate(1.8);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  border-bottom: 1px solid rgba(21, 101, 192, 0.07);
}

/* Scrolled state: floating */
.navbar--scrolled {
  top: 12px;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  max-width: 1280px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(24px) saturate(1.8);
  -webkit-backdrop-filter: blur(24px) saturate(1.8);
  box-shadow:
    0 4px 24px rgba(13, 43, 107, 0.1),
    0 1px 4px rgba(13, 43, 107, 0.06);
  border: 1px solid rgba(21, 101, 192, 0.1);
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
   DESKTOP NAV — Liquid Underline
   =========================== */
.navbar__nav {
  position: relative;
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
  transition: color var(--transition-fast);
}

.navbar__link:hover {
  color: var(--color-primary);
}

.navbar__link--active {
  color: var(--color-accent-dark) !important;
  font-weight: 600;
}

/* --- Underline Markers --- */
.navbar__marker {
  position: absolute;
  bottom: -4px;
  height: 2.5px;
  border-radius: var(--radius-full);
  pointer-events: none;
  transition:
    left 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.2s ease;
  opacity: 0;
}

.navbar__marker--visible {
  opacity: 1;
}

.navbar__marker--active {
  background: var(--color-accent);
  box-shadow: 0 1px 6px rgba(67, 160, 71, 0.35);
  z-index: 2;
}

.navbar__marker--ghost {
  background: var(--color-primary);
  opacity: 0;
  z-index: 1;
}

.navbar__marker--ghost.navbar__marker--visible {
  opacity: 0.25;
}

/* ===========================
   CTA — Light Sweep Effect
   =========================== */
.navbar__cta {
  justify-self: end;
  flex-shrink: 0;
}

.navbar__cta-btn {
  position: relative;
  overflow: hidden;
  padding: var(--space-2) var(--space-5);
  font-size: 0.875rem;
  min-height: 40px;
  animation: none;
  box-shadow: 0 2px 10px rgba(67, 160, 71, 0.2);
}

.navbar__cta-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.35) 40%,
    rgba(255, 255, 255, 0.45) 50%,
    rgba(255, 255, 255, 0.35) 60%,
    transparent 100%
  );
  animation: badge-light-sweep 4s ease-in-out infinite;
  pointer-events: none;
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
   MOBILE EXPAND MENU
   Uses grid-template-rows: 0fr → 1fr
   for liquid height animation
   =========================== */
.navbar__expand {
  display: none;
}

.navbar__expand-inner {
  overflow: hidden;
}

.navbar__expand-nav {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--space-3) var(--space-4);
}

.navbar__expand-link {
  display: block;
  padding: 12px var(--space-4);
  border-radius: var(--radius-sm);
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  opacity: 0;
  transform: translateY(8px);
  transition:
    color var(--transition-fast),
    background var(--transition-fast),
    opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar__expand-link--visible {
  opacity: 1;
  transform: translateY(0);
}

.navbar__expand-link:hover {
  color: var(--color-primary);
}

.navbar__expand-link--active {
  color: var(--color-accent-dark);
  font-weight: 700;
}

/* --- Mobile Underline Markers --- */
.navbar__expand-marker {
  position: absolute;
  left: var(--space-4);
  width: 3px;
  border-radius: var(--radius-full);
  pointer-events: none;
  transition:
    top 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.2s ease;
  opacity: 0;
}

.navbar__expand-marker--visible {
  opacity: 1;
}

.navbar__expand-marker--active {
  background: var(--color-accent);
  box-shadow: 0 1px 6px rgba(67, 160, 71, 0.35);
  z-index: 2;
}

.navbar__expand-marker--ghost {
  background: var(--color-primary);
  opacity: 0;
  z-index: 1;
}

.navbar__expand-marker--ghost.navbar__expand-marker--visible {
  opacity: 0.25;
}

/* CTA inside expand */
.navbar__expand-cta {
  padding: var(--space-2) var(--space-4) var(--space-4);
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar__expand-cta--visible {
  opacity: 1;
  transform: translateY(0);
}

.navbar__expand-cta-btn {
  position: relative;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  font-size: 0.9rem;
  min-height: 44px;
  animation: none;
}

.navbar__expand-cta-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.35) 40%,
    rgba(255, 255, 255, 0.45) 50%,
    rgba(255, 255, 255, 0.35) 60%,
    transparent 100%
  );
  animation: badge-light-sweep 4s ease-in-out infinite;
  pointer-events: none;
}

/* ===========================
   BACKDROP OVERLAY
   =========================== */
.navbar__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(13, 43, 107, 0.18);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  z-index: calc(var(--z-sticky) - 1);
}

.backdrop-fade-enter-active {
  transition: opacity 0.3s ease;
}

.backdrop-fade-leave-active {
  transition: opacity 0.2s ease;
}

.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}

/* ===========================
   RESPONSIVE
   =========================== */
@media (max-width: 900px) {
  /* Keep floating on mobile — just adjust spacing */
  .navbar:not(.navbar--scrolled) {
    top: 8px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: calc(100% - 32px);
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(24px) saturate(1.8);
    -webkit-backdrop-filter: blur(24px) saturate(1.8);
    border: 1px solid rgba(21, 101, 192, 0.1);
    border-bottom: 1px solid rgba(21, 101, 192, 0.1);
    box-shadow:
      0 4px 24px rgba(13, 43, 107, 0.08),
      0 1px 4px rgba(13, 43, 107, 0.04);
  }

  .navbar--scrolled {
    top: 8px;
    width: calc(100% - 32px);
    max-width: none;
  }

  .navbar__inner {
    grid-template-columns: auto 1fr;
    height: 56px;
  }

  .navbar--scrolled .navbar__inner {
    height: 56px;
  }

  .navbar__logo { justify-self: start; }
  .navbar__nav { display: none; }
  .navbar__cta { display: none; }

  .navbar__hamburger {
    display: flex;
    justify-self: end;
  }

  /* Expand menu — visible on mobile */
  .navbar__expand {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border-top: 0px solid rgba(21, 101, 192, 0);
  }

  .navbar__expand--open {
    grid-template-rows: 1fr;
    border-top: 1px solid rgba(21, 101, 192, 0.08);
  }

  /* Logo */
  .navbar__logo-img {
    max-height: 36px;
    width: min(180px, 100%);
  }

  .navbar--scrolled .navbar__logo-img {
    max-height: 34px;
  }
}

@media (max-width: 480px) {
  .navbar:not(.navbar--scrolled),
  .navbar--scrolled {
    width: calc(100% - 24px);
  }

  .navbar__inner {
    height: 52px;
  }

  .navbar--scrolled .navbar__inner {
    height: 52px;
  }

  .navbar__logo-img {
    max-height: 32px;
    width: min(160px, 100%);
  }

  .navbar--scrolled .navbar__logo-img {
    max-height: 30px;
  }

  .navbar__expand-link {
    font-size: 0.95rem;
    padding: 10px var(--space-3);
  }

  .navbar__expand-cta-btn {
    min-height: 42px;
    font-size: 0.85rem;
  }
}

/* ===========================
   REDUCED MOTION
   =========================== */
@media (prefers-reduced-motion: reduce) {
  .navbar__marker {
    transition: none;
  }

  .navbar__cta-btn::after {
    animation: none;
  }

  .navbar__expand {
    transition: none;
  }

  .navbar__expand-link,
  .navbar__expand-cta {
    transition: none;
  }
}
</style>
