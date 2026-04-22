<template>
  <section class="cta-section">
    <!-- Decorative bubbles -->
    <div class="cta-section__deco" aria-hidden="true">
      <span class="cta-section__deco-circle cta-section__deco-circle--1"></span>
      <span class="cta-section__deco-circle cta-section__deco-circle--2"></span>
      <span class="cta-section__deco-circle cta-section__deco-circle--3"></span>
    </div>

    <div class="container">
      <div class="cta-section__inner">
        <!-- Label -->
        <div class="cta-section__label reveal-blur">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Bergabung Sekarang
        </div>

        <!-- Headline -->
        <h2 class="cta-section__headline reveal reveal-delay-1">
          Siap Mulai Perjalanan <br />
          <span class="cta-section__headline-accent">Bisnis Anda?</span>
        </h2>

        <!-- Body -->
        <p class="cta-section__body reveal reveal-delay-2">
          Ratusan keluarga di Indonesia sudah membuktikan kualitas produk kami.<br class="hide-mobile">
          Sekarang giliran Anda meraih penghasilan dari bisnis sabun curah premium.
        </p>

        <!-- CTA Buttons -->
        <div class="cta-section__buttons reveal-scale reveal-delay-3">
          <a
            href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20bergabung%20sebagai%20mitra%20CleaniqueMart"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary cta-section__btn-main"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
            </svg>
            Konsultasi WhatsApp Sekarang
          </a>
          <NuxtLink to="/mitra" class="btn btn-outline-white cta-section__btn-sec">
            Pelajari Program Mitra
          </NuxtLink>
        </div>

        <!-- Trust Row -->
        <div class="cta-section__trust reveal reveal-delay-4">
          <div v-for="trust in trustItems" :key="trust" class="cta-section__trust-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="cta-section__check"><polyline points="20 6 9 17 4 12"/></svg>
            {{ trust }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trustItems = [
  'Konsultasi Gratis',
  'Tanpa Pengalaman Bisnis',
  'Pendampingan Penuh',
  'Produk Halal & Legal',
]

useScrollReveal()
</script>

<style scoped>
.cta-section {
  position: relative;
  background: linear-gradient(135deg, #0D2B6B 0%, #1565C0 40%, #1976D2 70%, #0D47A1 100%);
  padding: var(--space-24) 0;
  overflow: hidden;
  text-align: center;
}

/* Decorative Circles */
.cta-section__deco {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-section__deco-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.06);
}

.cta-section__deco-circle--1 {
  width: 500px;
  height: 500px;
  top: -150px;
  right: -100px;
  animation: spin-slow 40s linear infinite;
}

.cta-section__deco-circle--2 {
  width: 350px;
  height: 350px;
  bottom: -100px;
  left: -80px;
  border-color: rgba(67, 160, 71, 0.1);
  animation: spin-slow 30s linear infinite reverse;
}

.cta-section__deco-circle--3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(255, 255, 255, 0.03);
  animation: spin-slow 20s linear infinite;
}

/* Content */
.cta-section__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.cta-section__label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-4);
  background: rgba(67, 160, 71, 0.2);
  border: 1px solid rgba(67, 160, 71, 0.4);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-accent-light);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.cta-section__headline {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.2;
}

.cta-section__headline-accent {
  background: linear-gradient(135deg, #A5D6A7, #69F0AE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-section__body {
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.72);
  max-width: 560px;
}

/* Buttons */
.cta-section__buttons {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--space-2);
}

.cta-section__btn-main {
  font-size: 1.05rem;
  padding: var(--space-4) var(--space-8);
}

.cta-section__btn-sec {
  font-size: 1rem;
  padding: var(--space-4) var(--space-6);
}

/* Trust Row */
.cta-section__trust {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--space-4);
}

.cta-section__trust-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
}

.cta-section__check {
  color: var(--color-accent);
}

/* Responsive */
@media (max-width: 640px) {
  .cta-section__buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-section__btn-main,
  .cta-section__btn-sec {
    text-align: center;
    justify-content: center;
  }

  .cta-section__trust {
    gap: var(--space-3);
  }

  .hide-mobile {
    display: none;
  }
}
</style>
