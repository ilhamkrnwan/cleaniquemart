<template>
  <section class="join section" id="cara-bergabung">
    <div class="container">
      <!-- Header -->
      <div class="join__header">
        <div class="section-badge reveal">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Cara Bergabung
        </div>
        <h2 class="join__title reveal reveal-delay-1">
          3 Langkah Mudah <span class="gradient-text">Jadi Mitra</span>
        </h2>
        <p class="join__subtitle reveal reveal-delay-2">
          Proses bergabung sangat mudah dan cepat. Tidak butuh pengalaman bisnis sebelumnya.
        </p>
      </div>

      <!-- Steps -->
      <div class="join__steps">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="join__step reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <!-- Connector Line -->
          <div v-if="i < steps.length - 1" class="join__connector" aria-hidden="true">
            <div class="join__connector-line"></div>
            <svg class="join__connector-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
          </div>

          <div class="join__step-card">
            <!-- Step Number -->
            <div class="join__step-num" aria-label="Langkah {{ i + 1 }}">
              {{ String(i + 1).padStart(2, '0') }}
            </div>

            <!-- Icon -->
            <div class="join__step-icon" v-html="step.icon" aria-hidden="true"></div>

            <h3 class="join__step-title">{{ step.title }}</h3>
            <p class="join__step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="join__cta reveal">
        <p class="join__cta-text">Siap memulai? Tim kami siap membantu Anda 24/7</p>
        <a
          href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20bergabung%20sebagai%20mitra%20CleaniqueMart"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
          </svg>
          Mulai Sekarang via WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Hubungi Kami',
    desc: 'Konsultasikan kebutuhan Anda via WhatsApp. Gratis, tanpa syarat, dan tanpa tekanan. Tim kami siap menjawab pertanyaan Anda.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/></svg>`,
  },
  {
    title: 'Pilih Paket Mitra',
    desc: 'Kami bantu tentukan paket yang sesuai dengan modal dan target pasar Anda. Fleksibel dan bisa disesuaikan kapasitas.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  },
  {
    title: 'Mulai Berjualan',
    desc: 'Stok dikirim ke lokasi Anda. Tim kami mendampingi strategi pemasaran, tips jualan, dan pengelolaan bisnis dari awal.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.join {
  background: var(--color-surface);
}

/* Header */
.join__header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-16);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.join__title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.join__subtitle {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-light);
}

/* Steps Layout */
.join__steps {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
  position: relative;
  margin-bottom: var(--space-16);
}

.join__step {
  flex: 1;
  max-width: 320px;
  position: relative;
  display: flex;
  align-items: flex-start;
}

.join__step-card {
  flex: 1;
  padding: var(--space-8) var(--space-6);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(21, 101, 192, 0.06);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  position: relative;
  overflow: hidden;
}

.join__step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}

.join__step-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-blue);
}

.join__step-num {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  color: rgba(21, 101, 192, 0.08);
  line-height: 1;
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
}

.join__step-icon {
  color: var(--color-primary);
  margin-bottom: var(--space-1);
}

.join__step-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.join__step-desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

/* Connector between steps */
.join__connector {
  display: flex;
  align-items: center;
  padding: 0 var(--space-2);
  margin-top: var(--space-16);
  flex-shrink: 0;
  color: var(--color-primary-light);
}

.join__connector-line {
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary-light), var(--color-accent-light));
}

.join__connector-arrow {
  flex-shrink: 0;
}

/* Bottom CTA */
.join__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  text-align: center;
}

.join__cta-text {
  font-size: 1rem;
  color: var(--color-text-light);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 900px) {
  .join__steps {
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
  }

  .join__step {
    width: 100%;
    max-width: 480px;
    flex-direction: column;
  }

  .join__connector {
    transform: rotate(90deg);
    margin: 0;
    padding: 0;
  }
}
</style>
