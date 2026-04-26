<template>
  <section class="hero" aria-label="Hero Section">
    <!-- Subtle dot pattern -->
    <div class="hero__dots" aria-hidden="true"></div>

    <!-- Gradient Mesh Background & Top Glow -->
    <div class="hero__bg-mesh" aria-hidden="true"></div>
    <div class="hero__bg-glow" aria-hidden="true"></div>

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

        <!-- Right: Image Visual (Person & Floating Badges) -->
        <div class="hero__visual reveal reveal-delay-2">
          <!-- Decorative Rings -->
          <div class="hero__ring hero__ring--1" aria-hidden="true"></div>
          <div class="hero__ring hero__ring--2" aria-hidden="true"></div>
          <div class="hero__ring hero__ring--3" aria-hidden="true"></div>

          <!-- Main Person Image -->
          <div class="hero__person-wrap">
            <div class="hero__person-glow" aria-hidden="true"></div>
            
            <!-- Background Clouds (Left & Right) -->
            <NuxtImg src="/cloud.webp" alt="" class="hero__cloud hero__cloud--bg-left" aria-hidden="true" width="300" loading="eager" />
            <NuxtImg src="/cloud.webp" alt="" class="hero__cloud hero__cloud--bg-right" aria-hidden="true" width="300" loading="eager" />

            <NuxtImg
              src="/hero.webp"
              alt="Mitra CleaniqueMart"
              width="500"
              height="650"
              class="hero__person-img"
              loading="eager"
              sizes="(max-width: 768px) 100vw, 500px"
            />

            <!-- Foreground Clouds (Left & Right) -->
            <NuxtImg src="/cloud.webp" alt="" class="hero__cloud hero__cloud--fg-left" aria-hidden="true" width="350" loading="eager" />
            <NuxtImg src="/cloud.webp" alt="" class="hero__cloud hero__cloud--fg-right" aria-hidden="true" width="350" loading="eager" />

            <!-- Floating Badges -->
            <div class="hero__pill hero__pill--1">
              <div class="hero__pill-icon hero__pill-icon--green">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A6 6 0 0 1 12 2a6 6 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                </svg>
              </div>
              <span>Produk Halal & Aman</span>
            </div>

            <div class="hero__pill hero__pill--2">
              <div class="hero__pill-icon hero__pill-icon--teal">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <span>Kualitas Premium</span>
            </div>

            <div class="hero__pill hero__pill--3">
              <div class="hero__pill-icon hero__pill-icon--sky">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <span>Modal Terjangkau</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Layered Wave Bottom — flush to bottom, no gap -->
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

/* === Bubbles === */
.hero__bubbles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__bubble {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  animation: bubble-rise linear infinite;
}

.hero__bubble--1 { width: 24px; height: 24px; left: 8%;  animation-duration: 10s; animation-delay: 0s; }
.hero__bubble--2 { width: 16px; height: 16px; left: 25%; animation-duration: 12s; animation-delay: 2s; }
.hero__bubble--3 { width: 32px; height: 32px; left: 45%; animation-duration: 14s; animation-delay: 1s; }
.hero__bubble--4 { width: 12px; height: 12px; left: 65%; animation-duration: 11s; animation-delay: 3s; }
.hero__bubble--5 { width: 20px; height: 20px; left: 80%; animation-duration: 13s; animation-delay: 0.5s; }
.hero__bubble--6 { width: 28px; height: 28px; left: 92%; animation-duration: 9s;  animation-delay: 4s; }

/* === Background mesh & Decorative Glow === */
.hero__bg-mesh {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 75% 15%, rgba(67, 160, 71, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 15% 75%, rgba(66, 165, 245, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 60%);
  pointer-events: none;
}

.hero__bg-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

/* === Content Layout === */
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

/* === Text Side === */
.hero__text {
  color: var(--color-white);
}

.hero__trust-tag {
  position: relative;
  overflow: hidden;
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

.hero__trust-tag::after {
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

.hero__trust-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  flex-shrink: 0;
  /* Subtle opacity breath — no shape change, only opacity/transform */
  animation: dot-breath 3s ease-in-out infinite;
}

@keyframes dot-breath {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
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

/* ============================================================
   IMAGE VISUAL — Person & Floating Badges
   ============================================================ */
.hero__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Decorative Rings */
.hero__ring {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}

.hero__ring--1 {
  width: 380px;
  height: 380px;
  animation: spin-slow 40s linear infinite;
}

.hero__ring--2 {
  width: 520px;
  height: 520px;
  animation: spin-slow 30s linear infinite reverse;
}

.hero__ring--3 {
  width: 660px;
  height: 660px;
  border: 1px solid rgba(255, 255, 255, 0.08); /* solid outer */
  animation: spin-slow 50s linear infinite;
}

/* Person Wrapper */
.hero__person-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.hero__person-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(144, 202, 249, 0.15) 50%, transparent 70%);
  filter: blur(24px);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}

.hero__person-img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2));
}

/* Clouds */
.hero__cloud {
  position: absolute;
  pointer-events: none;
  opacity: 0.85;
}

.hero__cloud--bg-left {
  width: 260px;
  height: auto;
  bottom: -100px;
  left: -10%;
  z-index: 0;
  transform: scaleX(-1);
  animation: float-gentle 8s ease-in-out infinite;
}

.hero__cloud--bg-right {
  width: 260px;
  height: auto;
  bottom: -100px;
  right: -10%;
  z-index: 0;
  animation: float-gentle 9s ease-in-out infinite reverse;
}

.hero__cloud--fg-left {
  width: 320px;
  height: auto;
  bottom: -130px;
  left: 0;
  z-index: 2;
  animation: float-gentle 10s ease-in-out infinite;
}

.hero__cloud--fg-right {
  width: 320px;
  height: auto;
  bottom: -130px;
  right: 0;
  z-index: 2;
  transform: scaleX(-1);
  animation: float-gentle 11s ease-in-out infinite reverse;
}

/* Floating Badges (Pills) */
.hero__pill {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px 8px 8px;
  background: var(--color-white, #ffffff);
  border-radius: 50px;
  box-shadow: 0 12px 30px rgba(9, 30, 69, 0.2);
  z-index: 3;
  white-space: nowrap;
}

.hero__pill span {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1E293B;
  font-family: var(--font-sans, sans-serif);
}

.hero__pill-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.hero__pill-icon--green {
  background: #10B981;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.hero__pill-icon--teal {
  background: #06B6D4;
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
}

.hero__pill-icon--sky {
  background: #3B82F6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.hero__pill--1 {
  top: 15%;
  right: -5%;
  animation: float-gentle 6s ease-in-out infinite;
}

.hero__pill--2 {
  top: 45%;
  right: -15%;
  animation: float-gentle 5s ease-in-out infinite;
  animation-delay: 1s;
}

.hero__pill--3 {
  bottom: 25%;
  right: -5%;
  animation: float-gentle 7s ease-in-out infinite;
  animation-delay: 2s;
}

/* ============================================================
   WAVE — Flush to bottom, no gap
   ============================================================ */
.hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  line-height: 0;
  overflow: hidden;
}

.hero__wave-back {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
}

.hero__wave-front {
  position: relative;
  width: 100%;
  height: 100px;
  display: block;
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
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
    margin-top: var(--space-4);
  }

  .hero__person-wrap {
    max-width: 320px;
  }

  .hero__ring--1 { width: 300px; height: 300px; }
  .hero__ring--2 { width: 420px; height: 420px; }
  .hero__ring--3 { width: 540px; height: 540px; }

  .hero__cloud--bg-left { width: 200px; left: -20%; bottom: -80px; }
  .hero__cloud--bg-right { width: 200px; right: -20%; bottom: -80px; }
  .hero__cloud--fg-left { width: 240px; left: -10%; bottom: -100px; }
  .hero__cloud--fg-right { width: 240px; right: -10%; bottom: -100px; }

  /* Reposition to avoid face cover on tablet */
  .hero__pill--1 { top: 5%; left: -5%; right: auto; }
  .hero__pill--2 { top: 45%; right: -10%; left: auto; }
  .hero__pill--3 { bottom: 10%; left: -5%; right: auto; }
}

@media (max-width: 600px) {
  .hero .container {
    padding-top: var(--space-12);
  }

  .hero__person-wrap {
    max-width: 240px;
    margin-top: var(--space-4);
  }

  .hero__ring--1 { width: 260px; height: 260px; }
  .hero__ring--2 { width: 340px; height: 340px; }
  .hero__ring--3 { display: none; }

  .hero__cta-group {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__btn-main,
  .hero__btn-sec {
    text-align: center;
    justify-content: center;
  }

  .hero__pill {
    padding: 6px 14px 6px 6px;
    gap: 8px;
  }

  .hero__pill span {
    font-size: 0.75rem;
  }

  .hero__pill-icon {
    width: 26px;
    height: 26px;
  }

  .hero__cloud--bg-left { width: 140px; left: -15%; bottom: -50px; }
  .hero__cloud--bg-right { width: 140px; right: -15%; bottom: -50px; }
  .hero__cloud--fg-left { width: 180px; left: -5%; bottom: -65px; }
  .hero__cloud--fg-right { width: 180px; right: -5%; bottom: -65px; }

  /* Reposition alternating left/right so it doesn't cover face on mobile */
  .hero__pill--1 { top: 0%; left: -10%; right: auto; }
  .hero__pill--2 { top: 40%; right: -20%; left: auto; }
  .hero__pill--3 { bottom: 5%; left: -5%; right: auto; }
}

@media (prefers-reduced-motion: reduce) {
  .hero__trust-tag::after {
    animation: none;
  }
}
</style>
