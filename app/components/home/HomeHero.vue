<template>
  <section class="hero" aria-label="Hero Section">
    <!-- Subtle dot pattern -->
    <div class="hero__dots" aria-hidden="true"></div>

    <!-- Gradient Mesh Background -->
    <div class="hero__bg-mesh" aria-hidden="true"></div>

    <!-- Animated Bubbles — reduced to 6 -->
    <div class="hero__bubbles" aria-hidden="true">
      <span v-for="i in 6" :key="i" class="hero__bubble" :class="`hero__bubble--${i}`"></span>
    </div>

    <div class="container">
      <div class="hero__content">
        <!-- Left: Text Content -->
        <div class="hero__text">
          <!-- Trust Badge -->
          <div class="hero__trust-tag reveal">
            <span class="hero__trust-dot"></span>
            Lebih dari 50 Mitra Aktif se-Indonesia
          </div>

          <!-- Headline -->
          <h1 class="hero__headline reveal reveal-delay-1">
            Ubah Modal Kecil Jadi
            <span class="hero__headline-accent">Bisnis Sabun</span>
            yang Menggiurkan
          </h1>

          <!-- Subheadline -->
          <p class="hero__sub reveal reveal-delay-2">
            Bergabung bersama jaringan mitra CleaniQue Mart dan raih penghasilan tambahan tanpa pengalaman bisnis sekalipun. Produk selalu dibutuhkan, market tak pernah sepi.
          </p>

          <!-- CTA Buttons -->
          <div class="hero__cta-group reveal reveal-delay-3">
            <a
              href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20konsultasi%20menjadi%20mitra%20CleaniqueMart"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary hero__btn-main"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/>
              </svg>
              Mulai Konsultasi Gratis
            </a>
            <NuxtLink to="/products" class="btn btn-outline-white hero__btn-sec">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Lihat Produk
            </NuxtLink>
          </div>

          <!-- Trust Badges -->
          <div class="hero__badges reveal reveal-delay-4">
            <div class="hero__badge" v-for="badge in trustBadges" :key="badge.text">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="hero__badge-icon" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {{ badge.text }}
            </div>
          </div>
        </div>

        <!-- Right: Blob Visual -->
        <div class="hero__visual reveal reveal-delay-2">
          <!-- Decorative rings -->
          <div class="hero__blob-ring hero__blob-ring--outer" aria-hidden="true"></div>
          <div class="hero__blob-ring hero__blob-ring--inner" aria-hidden="true"></div>

          <!-- Blob card -->
          <div class="hero__blob-card">
            <div class="hero__blob-gradient" aria-hidden="true"></div>
            <div class="hero__blob-img-wrap">
              <NuxtImg
                src="/photo-collage.webp"
                alt="Koleksi produk CleaniqueMart — sabun curah premium berkualitas"
                width="480"
                height="480"
                class="hero__blob-img"
                loading="eager"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>

            <!-- Floating Badges -->
            <div class="hero__float-badge hero__float-badge--top">
              <span class="hero__float-dot"></span>
              Halal MUI Certified
            </div>
            <div class="hero__float-badge hero__float-badge--bottom">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero__float-trophy" aria-hidden="true">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
              #1 Sabun Curah Pilihan Mitra
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Layered Wave Bottom -->
    <div class="hero__wave" aria-hidden="true">
      <svg class="hero__wave-back" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" fill="rgba(248,251,255,0.5)"/>
      </svg>
      <svg class="hero__wave-front" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,50 1440,60 L1440,100 L0,100 Z" fill="#F8FBFF"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const trustBadges = [
  { text: 'Halal MUI' },
  { text: 'Beroperasi Sejak 2011' },
  { text: 'Izin Edar Legal' },
  { text: 'Harga Kompetitif' },
]

useScrollReveal()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100dvh;
  background: linear-gradient(145deg, #091E45 0%, #0D2B6B 25%, #1565C0 55%, #1976D2 75%, #1E88E5 100%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* === Dot Pattern === */
.hero__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

/* === Bubbles (reduced) === */
.hero__bubbles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__bubble {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  animation: bubble-rise linear infinite;
}

.hero__bubble--1 { width: 24px; height: 24px; left: 8%;  animation-duration: 10s; animation-delay: 0s; }
.hero__bubble--2 { width: 16px; height: 16px; left: 25%; animation-duration: 12s; animation-delay: 2s; }
.hero__bubble--3 { width: 32px; height: 32px; left: 45%; animation-duration: 14s; animation-delay: 1s; }
.hero__bubble--4 { width: 12px; height: 12px; left: 65%; animation-duration: 11s; animation-delay: 3s; }
.hero__bubble--5 { width: 20px; height: 20px; left: 80%; animation-duration: 13s; animation-delay: 0.5s; }
.hero__bubble--6 { width: 28px; height: 28px; left: 92%; animation-duration: 9s;  animation-delay: 4s; }

/* === Background mesh === */
.hero__bg-mesh {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 75% 15%, rgba(67, 160, 71, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 15% 75%, rgba(66, 165, 245, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 60%);
  pointer-events: none;
}

/* === Content === */
.hero .container {
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: var(--space-16);
  padding-bottom: var(--space-24);
}

.hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  width: 100%;
}

/* === Text === */
.hero__text {
  color: var(--color-white);
}

.hero__trust-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 6px var(--space-4);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: var(--space-6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  letter-spacing: 0.01em;
}

.hero__trust-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  animation: pulse-glow 2.5s infinite;
  flex-shrink: 0;
}

.hero__headline {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.12;
  color: var(--color-white);
  margin-bottom: var(--space-6);
  letter-spacing: -0.02em;
}

.hero__headline-accent {
  display: block;
  background: linear-gradient(135deg, #A5D6A7 0%, #43A047 40%, #69F0AE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__sub {
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.72);
  max-width: 480px;
  margin-bottom: var(--space-8);
}

/* CTA Group */
.hero__cta-group {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  margin-bottom: var(--space-8);
}

.hero__btn-main {
  font-size: 1rem;
  padding: var(--space-4) var(--space-6);
}

.hero__btn-sec {
  font-size: 1rem;
  padding: var(--space-4) var(--space-6);
}

/* Trust badges row */
.hero__badges {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.hero__badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
}

.hero__badge-icon {
  color: var(--color-accent);
}

/* === Blob Visual === */
.hero__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Decorative rings */
.hero__blob-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.06);
}

.hero__blob-ring--outer {
  width: 500px;
  height: 500px;
  animation: spin-slow 35s linear infinite;
}

.hero__blob-ring--inner {
  width: 420px;
  height: 420px;
  animation: spin-slow 25s linear infinite reverse;
  border-color: rgba(67, 160, 71, 0.08);
}

/* Blob card */
.hero__blob-card {
  position: relative;
  width: 400px;
  height: 400px;
  animation: float-gentle 8s ease-in-out infinite;
}

.hero__blob-gradient {
  position: absolute;
  inset: -4px;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  background: linear-gradient(135deg, #43A047 0%, #26C6DA 40%, #1E88E5 70%, #0D2B6B 100%);
  animation: blob-morph 12s ease-in-out infinite;
  z-index: 0;
}

.hero__blob-img-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  overflow: hidden;
  animation: blob-morph 12s ease-in-out infinite;
  z-index: 1;
}

.hero__blob-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Floating badges on card */
.hero__float-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 8px var(--space-3);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: var(--radius-md);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  box-shadow: 0 4px 20px rgba(13, 43, 107, 0.15);
  white-space: nowrap;
  z-index: 2;
}

.hero__float-badge--top {
  top: var(--space-4);
  left: -20px;
  animation: float-gentle 5s ease-in-out infinite;
}

.hero__float-badge--bottom {
  bottom: var(--space-6);
  right: -20px;
  animation: float-gentle 6s ease-in-out infinite;
  animation-delay: 1.5s;
}

.hero__float-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  flex-shrink: 0;
}

.hero__float-trophy {
  color: #F59E0B;
  flex-shrink: 0;
}

/* === Wave === */
.hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.hero__wave-back {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 80px;
}

.hero__wave-front {
  position: relative;
  width: 100%;
  height: 100px;
}

/* === Responsive === */
@media (max-width: 960px) {
  .hero__content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-12);
  }

  .hero__sub {
    margin: 0 auto var(--space-8);
  }

  .hero__cta-group {
    justify-content: center;
  }

  .hero__badges {
    justify-content: center;
  }

  .hero__visual {
    order: -1;
  }

  .hero__blob-card {
    width: 300px;
    height: 300px;
  }

  .hero__blob-ring--outer {
    width: 380px;
    height: 380px;
  }

  .hero__blob-ring--inner {
    width: 320px;
    height: 320px;
  }

  .hero__float-badge--top {
    left: -10px;
    font-size: 0.72rem;
  }

  .hero__float-badge--bottom {
    right: -10px;
    font-size: 0.72rem;
  }
}

@media (max-width: 600px) {
  .hero .container {
    padding-top: var(--space-12);
  }

  .hero__blob-card {
    width: 260px;
    height: 260px;
  }

  .hero__blob-ring--outer,
  .hero__blob-ring--inner {
    display: none;
  }

  .hero__cta-group {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__btn-main,
  .hero__btn-sec {
    text-align: center;
    justify-content: center;
  }

  .hero__float-badge--top {
    left: -8px;
    top: 0;
  }

  .hero__float-badge--bottom {
    right: -8px;
    bottom: var(--space-3);
  }
}
</style>
