<template>
  <section class="page-hero">
    <div class="page-hero__bg" aria-hidden="true"></div>
    <div class="container page-hero__container">
      <div class="page-hero__content">
        <div v-if="badge" class="section-badge page-hero__badge reveal">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          {{ badge }}
        </div>
        <h1 class="page-hero__title reveal reveal-delay-1" v-html="title"></h1>
        <p v-if="subtitle" class="page-hero__subtitle reveal reveal-delay-2">{{ subtitle }}</p>
      </div>
    </div>
    <!-- Decorative bottom wave -->
    <div class="page-hero__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  badge?: string
}>()

useScrollReveal('.page-hero .reveal', 0.1)
</script>

<style scoped>
.page-hero {
  position: relative;
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 60%, var(--color-sky) 100%);
  padding: calc(var(--space-24) + var(--space-8)) 0 var(--space-16);
  text-align: center;
  overflow: hidden;
  color: var(--color-white);
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.page-hero__container {
  position: relative;
  z-index: 1;
}

.page-hero__content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-hero__badge {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--color-white);
  margin-bottom: var(--space-6);
  backdrop-filter: blur(8px);
}

.page-hero__badge svg {
  color: var(--color-accent);
}

.page-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: var(--space-4);
}

.page-hero__title:deep(.accent) {
  background: linear-gradient(to right, #A5D6A7, #69F0AE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-hero__subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
}

.page-hero__wave {
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
}

.page-hero__wave svg {
  width: 100%;
  height: 60px;
}
</style>
