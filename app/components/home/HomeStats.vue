<template>
  <section class="stats section-sm">
    <div class="container">
      <div class="stats__grid">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stats__item reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="stats__icon" aria-hidden="true" v-html="stat.icon"></div>
          <div class="stats__number">{{ stat.number }}</div>
          <div class="stats__label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    number: '15+',
    label: 'Tahun Berpengalaman',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
  {
    number: '50+',
    label: 'Mitra Aktif se-Indonesia',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    number: '8',
    label: 'Varian Produk Premium',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  },
  {
    number: '25L',
    label: 'Ukuran Stok Siap Kirim',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/></svg>`,
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.stats {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(67, 160, 71, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 50%, rgba(66, 165, 245, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-2);
  position: relative;
  z-index: 1;
}

.stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-8) var(--space-4);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform var(--transition-base);
}

.stats__item:last-child {
  border-right: none;
}

.stats__item:hover {
  transform: translateY(-4px);
}

.stats__icon {
  color: var(--color-accent-light);
  margin-bottom: var(--space-3);
  transition: transform var(--transition-base);
}

.stats__item:hover .stats__icon {
  transform: scale(1.1);
}

.stats__number {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1;
  margin-bottom: var(--space-2);
  background: linear-gradient(135deg, #ffffff, #A5D6A7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stats__label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 768px) {
  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats__item:nth-child(2) {
    border-right: none;
  }

  .stats__item:nth-child(1),
  .stats__item:nth-child(2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

@media (max-width: 400px) {
  .stats__grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
