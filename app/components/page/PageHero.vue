<template>
  <section class="page-hero" aria-label="Page Header">
    <!-- Background mesh -->
    <div class="page-hero__bg" aria-hidden="true"></div>
    <!-- Subtle dot pattern -->
    <div class="page-hero__dots" aria-hidden="true"></div>

    <!-- Decorative bubbles -->
    <div class="page-hero__deco" aria-hidden="true">
      <span class="page-hero__deco-circle page-hero__deco-circle--1"></span>
      <span class="page-hero__deco-circle page-hero__deco-circle--2"></span>
      <span class="page-hero__deco-circle page-hero__deco-circle--3"></span>
    </div>

    <div class="container page-hero__inner">
      <!-- Badge -->
      <div v-if="badge" class="page-hero__badge">
        <span class="page-hero__badge-dot" aria-hidden="true"></span>
        {{ badge }}
      </div>

      <!-- Title — supports HTML via v-html for accent spans -->
      <h1 class="page-hero__title" v-html="title"></h1>

      <!-- Subtitle -->
      <p v-if="subtitle" class="page-hero__subtitle">{{ subtitle }}</p>

      <!-- Breadcrumb -->
      <nav class="page-hero__breadcrumb" aria-label="Breadcrumb">
        <NuxtLink to="/" class="page-hero__breadcrumb-link">Beranda</NuxtLink>
        <span class="page-hero__breadcrumb-sep" aria-hidden="true">/</span>
        <span class="page-hero__breadcrumb-current" aria-current="page">
          {{ breadcrumbLabel || badge || 'Halaman' }}
        </span>
      </nav>
    </div>

    <!-- Wave bottom -->
    <div class="page-hero__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" fill="#F8FBFF"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  badge?: string
  breadcrumbLabel?: string
}>()
</script>

<style scoped>
.page-hero {
  position: relative;
  background: linear-gradient(135deg, #091E45 0%, #0D2B6B 40%, #1565C0 80%, #1976D2 100%);
  padding: calc(72px + var(--space-6)) 0 var(--space-24);
  overflow: hidden;
  text-align: center;
}

/* Background mesh */
.page-hero__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 70% 20%, rgba(67, 160, 71, 0.14) 0%, transparent 55%),
    radial-gradient(ellipse at 20% 80%, rgba(66, 165, 245, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

/* Dot pattern */
.page-hero__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
}

/* Decorative Circles */
.page-hero__deco {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.page-hero__deco-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.06);
}

.page-hero__deco-circle--1 {
  width: 500px;
  height: 500px;
  top: -150px;
  right: -100px;
  animation: spin-slow 40s linear infinite;
}

.page-hero__deco-circle--2 {
  width: 350px;
  height: 350px;
  bottom: -100px;
  left: -80px;
  border-color: rgba(67, 160, 71, 0.1);
  animation: spin-slow 30s linear infinite reverse;
}

.page-hero__deco-circle--3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(255, 255, 255, 0.03);
  animation: spin-slow 20s linear infinite;
}

.page-hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

/* Badge */
.page-hero__badge {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 5px var(--space-4);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.page-hero__badge::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 38%;
  height: 100%;
  background: linear-gradient(
    105deg,
    transparent 10%,
    rgba(255, 255, 255, 0.72) 50%,
    transparent 90%
  );
  animation: badge-light-sweep 3.2s ease-in-out infinite;
  pointer-events: none;
}

.page-hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent-light);
  flex-shrink: 0;
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}

/* Title */
.page-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-white);
  letter-spacing: -0.02em;
  max-width: 800px;
}

/* Accent span — used in HTML prop via v-html */
.page-hero__title :deep(.accent) {
  background: linear-gradient(135deg, #A5D6A7 0%, #43A047 40%, #69F0AE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtitle */
.page-hero__subtitle {
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.7);
  max-width: 620px;
}

/* Breadcrumb */
.page-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.page-hero__breadcrumb-link {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  transition: color var(--transition-fast);
}

.page-hero__breadcrumb-link:hover {
  color: rgba(255, 255, 255, 0.85);
}

.page-hero__breadcrumb-sep {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.85rem;
}

.page-hero__breadcrumb-current {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-accent-light);
}

/* Wave */
.page-hero__wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 1;
  line-height: 0;
}

.page-hero__wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero {
    padding: calc(64px + var(--space-4)) 0 var(--space-16);
  }

  .page-hero__title {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }

  .page-hero__subtitle {
    font-size: 0.975rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-hero__badge::after {
    animation: none;
  }
}
</style>
