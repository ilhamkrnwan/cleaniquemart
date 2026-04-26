<template>
  <!-- Floating Sidebar Actions (right center) -->
  <div class="floating-sidebar" aria-label="Aksi cepat">
    <a
      href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20konsultasi%20menjadi%20mitra%20CleaniqueMart"
      target="_blank"
      rel="noopener noreferrer"
      class="floating-sidebar__btn floating-sidebar__btn--wa"
      aria-label="Hubungi via WhatsApp"
    >
      <!-- WhatsApp icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="floating-sidebar__icon">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
      </svg>
      <span class="floating-sidebar__label">Telepon</span>
    </a>

    <a
      href="mailto:cleaniquemart@gmail.com"
      class="floating-sidebar__btn floating-sidebar__btn--email"
      aria-label="Kirim email ke CleaniqueMart"
    >
      <!-- Email icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="floating-sidebar__icon">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
      <span class="floating-sidebar__label">Email</span>
    </a>
  </div>

  <button
    type="button"
    class="floating-scroll-top"
    :class="{ 'is-visible': showScrollTop }"
    aria-label="Scroll to top"
    @click="scrollToTop"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m18 15-6-6-6 6"/>
    </svg>
    <span class="floating-sidebar__tooltip">Scroll to top</span>
  </button>

  <!-- Floating WhatsApp Bubble (bottom right) -->
  <a
    href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20konsultasi%20menjadi%20mitra%20CleaniqueMart"
    target="_blank"
    rel="noopener noreferrer"
    class="floating-wa-bubble"
    aria-label="Chat WhatsApp dengan CleaniqueMart"
  >
    <!-- WA SVG brand icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
    <!-- Pulse ring -->
    <span class="floating-wa-bubble__pulse" aria-hidden="true"></span>
  </a>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  scrollTopThreshold?: number
}>(), {
  scrollTopThreshold: 240
})

const showScrollTop = ref(false)

const onWindowScroll = () => {
  showScrollTop.value = window.scrollY > props.scrollTopThreshold
}

const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  })
}

onMounted(() => {
  onWindowScroll()
  window.addEventListener('scroll', onWindowScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onWindowScroll)
})
</script>

<style scoped>
/* ===========================
   FLOATING SIDEBAR
   =========================== */
.floating-sidebar {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: var(--z-overlay);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.floating-sidebar__btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 11.5px;
  width: 42px;
  height: 42px;
  color: #fff;
  cursor: pointer;
  transition:
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow var(--transition-base),
    background-color var(--transition-base);
  overflow: hidden;
  box-sizing: border-box;
}

.floating-sidebar__btn--wa {
  background: var(--color-accent);
  border-radius: var(--radius-sm) 0 0 0;
  box-shadow: -2px 2px 16px rgba(67, 160, 71, 0.3);
}

.floating-sidebar__btn--email {
  background: var(--color-primary);
  border-radius: 0 0 0 var(--radius-sm);
  box-shadow: -2px 2px 16px rgba(21, 101, 192, 0.3);
}

.floating-sidebar__icon {
  flex-shrink: 0;
}

.floating-sidebar__label {
  margin-left: 10px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.floating-sidebar__btn:hover {
  width: 108px;
  box-shadow: -4px 4px 24px rgba(0, 0, 0, 0.18);
}

.floating-sidebar__btn:hover .floating-sidebar__label {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.05s;
}

/* Tooltip */
.floating-sidebar__tooltip {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 8px;
  padding: 4px 10px;
  background: var(--color-primary-dark);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: translateY(-50%) translateX(6px);
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out;
}

.floating-sidebar__tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: var(--color-primary-dark);
}

/* ===========================
   FLOATING SCROLL TOP
   =========================== */
.floating-scroll-top {
  position: fixed;
  right: 28px;
  bottom: calc(28px + 54px + 12px);
  z-index: var(--z-overlay);
  width: 54px;
  height: 54px;
  border: 1px solid rgba(21, 101, 192, 0.2);
  border-radius: 50%;
  background: #fff;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(21, 101, 192, 0.18);
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px) scale(0.94);
  transition:
    opacity 0.24s ease-out,
    transform 0.24s ease-out,
    box-shadow var(--transition-base),
    color var(--transition-fast);
}

.floating-scroll-top.is-visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.floating-scroll-top:hover,
.floating-scroll-top:focus-visible {
  color: var(--color-primary-dark);
  box-shadow: 0 12px 30px rgba(21, 101, 192, 0.24);
  transform: translateY(-2px);
}

.floating-scroll-top:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.floating-scroll-top:hover .floating-sidebar__tooltip,
.floating-scroll-top:focus-visible .floating-sidebar__tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

/* ===========================
   FLOATING WA BUBBLE
   =========================== */
.floating-wa-bubble {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: var(--z-overlay);
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #25D366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  cursor: pointer;
}

.floating-wa-bubble:hover {
  transform: scale(1.1) translateY(-3px);
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(0, 0, 0, 0.15);
}

.floating-wa-bubble:active {
  transform: scale(0.96);
}

/* Pulse ring animation */
.floating-wa-bubble__pulse {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgba(37, 211, 102, 0.5);
  animation: wa-pulse 2.4s ease-out infinite;
}

@keyframes wa-pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  60% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* ===========================
   MOBILE ADJUSTMENTS
   =========================== */
@media (max-width: 768px) {
  .floating-sidebar {
    display: none;
  }

  .floating-wa-bubble {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 16px;
  }

  .floating-scroll-top {
    right: 16px;
    bottom: calc(20px + 50px + 10px);
    width: 50px;
    height: 50px;
  }
}

/* ===========================
   REDUCED MOTION
   =========================== */
@media (prefers-reduced-motion: reduce) {
  .floating-scroll-top {
    transition: none;
  }

  .floating-wa-bubble__pulse {
    animation: none;
  }
}
</style>
