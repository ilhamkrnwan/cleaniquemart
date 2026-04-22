<template>
  <section class="testimonials section" id="testimoni">
    <!-- Background decoration -->
    <div class="testimonials__bg" aria-hidden="true"></div>

    <div class="container">
      <!-- Header -->
      <div class="testimonials__header">
        <div class="section-badge reveal-blur">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Testimoni Mitra
        </div>
        <h2 class="testimonials__title reveal reveal-delay-1">
          Apa Kata <span class="gradient-text">Mitra Kami?</span>
        </h2>
        <p class="testimonials__subtitle reveal reveal-delay-2">
          Sudah ratusan keluarga di seluruh Indonesia merasakan manfaat bergabung bersama CleaniQue Mart.
        </p>
      </div>

      <!-- Testimonial Grid -->
      <div class="testimonials__grid reveal-stagger">
        <div
          v-for="(item, i) in testimonials"
          :key="i"
          class="testimonial-card reveal"
        >
          <NuxtImg
            :src="item.image"
            :alt="`Testimoni mitra CleaniqueMart ke-${i + 1}`"
            width="400"
            height="400"
            class="testimonial-card__img"
            loading="lazy"
            sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 300px"
          />
          <div class="testimonial-card__overlay">
            <div class="testimonial-card__stars" aria-label="Rating 5 bintang">
              <svg v-for="s in 5" :key="s" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Mitra Map Banner -->
      <div class="testimonials__map-banner glass-card reveal-scale">
        <div class="testimonials__map-text">
          <h3 class="testimonials__map-title">Mitra kami tersebar dari Sabang hingga Merauke</h3>
          <p class="testimonials__map-desc">Yogyakarta · Jakarta · Malang · Palembang · Jambi · Situbondo · Boyolali · Karanganyar · Demak · Temanggung · dan terus berkembang!</p>
        </div>
        <NuxtLink to="/mitra" class="btn btn-blue testimonials__map-cta">
          Lihat Peta Mitra
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  { image: '/testimoni/Testimoni-1.webp' },
  { image: '/testimoni/Testimoni-2.webp' },
  { image: '/testimoni/Testimoni-3.webp' },
  { image: '/testimoni/Testimoni-4.webp' },
  { image: '/testimoni/Testimoni-5.webp' },
  { image: '/testimoni/Testimoni-6.webp' },
  { image: '/testimoni/Testimoni-7.webp' },
]

useScrollReveal('.reveal', 0.08)
</script>

<style scoped>
.testimonials {
  background: var(--color-white);
  position: relative;
  overflow: hidden;
}

.testimonials__bg {
  position: absolute;
  top: -100px;
  left: -100px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(21, 101, 192, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

/* Header */
.testimonials__header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonials__title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.testimonials__subtitle {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-light);
}

/* Grid */
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

/* Testimonial Card */
.testimonial-card {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 4/5;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

/* Last row - center the 3rd item */
.testimonials__grid .testimonial-card:nth-child(5),
.testimonials__grid .testimonial-card:nth-child(6),
.testimonials__grid .testimonial-card:nth-child(7) {
  /* naturally spans */
}

.testimonial-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: var(--shadow-blue);
}

.testimonial-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.testimonial-card:hover .testimonial-card__img {
  transform: scale(1.05);
}

.testimonial-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-3);
  background: linear-gradient(to top, rgba(13, 43, 107, 0.7), transparent);
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.testimonial-card:hover .testimonial-card__overlay {
  opacity: 1;
}

.testimonial-card__stars {
  display: flex;
  gap: 2px;
  color: #FFD600;
}

/* Map Banner */
.testimonials__map-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-8) var(--space-8);
  background: linear-gradient(135deg, var(--color-sky), rgba(165, 214, 167, 0.2));
  border: 1px solid rgba(21, 101, 192, 0.1);
  flex-wrap: wrap;
}

.testimonials__map-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-2);
}

.testimonials__map-desc {
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

.testimonials__map-cta {
  flex-shrink: 0;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .testimonials__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonials__map-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
