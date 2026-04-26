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

        <!-- Right: Image Visual (Fixed Shape) -->
        <div class="hero__visual reveal reveal-delay-2">
          <!-- Decorative spinning rings -->
          <div class="hero__ring hero__ring--outer" aria-hidden="true"></div>
          <div class="hero__ring hero__ring--inner" aria-hidden="true"></div>

          <!-- Orbiting color accent dots -->
          <div class="hero__orbit hero__orbit--1" aria-hidden="true">
            <span class="hero__orbit-dot hero__orbit-dot--green"></span>
          </div>
          <div class="hero__orbit hero__orbit--2" aria-hidden="true">
            <span class="hero__orbit-dot hero__orbit-dot--teal"></span>
          </div>
          <div class="hero__orbit hero__orbit--3" aria-hidden="true">
            <span class="hero__orbit-dot hero__orbit-dot--sky"></span>
          </div>

          <!-- Main image card — fixed shape, no morphing -->
          <div class="hero__img-card" data-mask-style="soft">
            <!-- Animated gradient border layer (color drifts, shape stays fixed) -->
            <div class="hero__img-border" aria-hidden="true"></div>

            <!-- Image wrapper (fixed shape) -->
            <div class="hero__img-wrap">
              <NuxtImg
                src="/photo-collage.webp"
                alt="Koleksi produk CleaniqueMart — sabun curah premium berkualitas"
                width="480"
                height="480"
                class="hero__img"
                loading="eager"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <!-- Inner brand gradient overlay -->
              <div class="hero__img-overlay" aria-hidden="true"></div>
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
   IMAGE VISUAL — Fixed shape, animated gradient border
   ============================================================ */
.hero__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Decorative spinning rings (outline only, no fill) */
.hero__ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.07);
  pointer-events: none;
}

.hero__ring--outer {
  width: 500px;
  height: 500px;
  animation: spin-slow 40s linear infinite;
  border-color: rgba(255, 255, 255, 0.07);
}

.hero__ring--inner {
  width: 420px;
  height: 420px;
  animation: spin-slow 28s linear infinite reverse;
  border-color: rgba(67, 160, 71, 0.1);
}

/* Orbiting accent dots — rotate only (transform: translate) */
.hero__orbit {
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: none;
}

.hero__orbit--1 {
  width: 460px;
  height: 460px;
  animation: spin-slow 14s linear infinite;
}

.hero__orbit--2 {
  width: 380px;
  height: 380px;
  animation: spin-slow 20s linear infinite reverse;
}

.hero__orbit--3 {
  width: 520px;
  height: 520px;
  animation: spin-slow 32s linear infinite;
  transform-origin: center;
}

.hero__orbit-dot {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 0;
  flex-shrink: 0;
}

.hero__orbit-dot--green {
  background: #69F0AE;
  box-shadow: 0 0 14px 4px rgba(105, 240, 174, 0.55);
}

.hero__orbit-dot--teal {
  background: #4DD0E1;
  box-shadow: 0 0 14px 4px rgba(77, 208, 225, 0.55);
}

.hero__orbit-dot--sky {
  background: #90CAF9;
  box-shadow: 0 0 14px 4px rgba(144, 202, 249, 0.5);
}

/* Main image card — FIXED shape, gentle float only */
.hero__img-card {
  position: relative;
  width: 400px;
  height: 400px;
  animation: float-gentle 8s ease-in-out infinite;
  --hero-photo-mask: var(--hero-photo-mask-soft);
  --hero-photo-mask-smooth: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='72%2058%20282%20292'%20preserveAspectRatio='none'%20shape-rendering='geometricPrecision'%3E%3Cpath%20fill='black'%20d='M150.5%2064.9C188.4%2060.4%20261.2%2060.6%20296.0%2084.4C330.8%20108.2%20352.0%20157.6%20349.0%20199.8C346.0%20242.0%20309.6%20300.8%20278.8%20324.2C248.0%20347.6%20199.8%20344.8%20173.0%20332.2C146.2%20319.6%20129.8%20281.8%20127.4%20253.0C125.0%20224.2%20162.2%20188.0%20155.8%20169.4C149.4%20150.8%20104.2%20159.2%2090.6%20147.6C77.0%20136.0%2073.2%20117.8%2083.8%20102.2C94.4%2086.6%20112.6%2069.4%20150.5%2064.9Z'/%3E%3C/svg%3E");
  --hero-photo-mask-soft: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='72%2058%20282%20292'%20preserveAspectRatio='none'%20shape-rendering='geometricPrecision'%3E%3Cpath%20fill='black'%20d='M150.5%2064.9C188.8%2060.7%20261.0%2061.6%20295.4%2085.6C329.8%20109.6%20350.0%20157.8%20346.8%20198.8C343.6%20239.8%20307.8%20297.8%20277.8%20321.6C247.8%20345.4%20201.4%20343.8%20175.2%20331.0C149.0%20318.2%20132.4%20282.8%20129.8%20255.2C127.2%20227.6%20162.2%20191.6%20157.2%20173.4C152.2%20155.2%20111.8%20160.8%2098.6%20151.6C85.4%20142.4%2080.6%20123.8%2089.6%20108.2C98.6%2092.6%20112.2%2069.6%20150.5%2064.9Z'/%3E%3C/svg%3E");
  --hero-photo-mask-sharp: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='72%2058%20282%20292'%20preserveAspectRatio='none'%20shape-rendering='geometricPrecision'%3E%3Cpath%20fill='black'%20d='M150.5%2064.9C187.6%2060.2%20262.0%2059.6%20297.6%2082.8C333.2%20106.0%20355.2%20157.4%20352.0%20200.8C348.8%20244.2%20311.2%20304.4%20279.8%20327.6C248.4%20350.8%20198.6%20346.0%20171.6%20333.2C144.6%20320.4%20127.4%20281.0%20124.8%20251.8C122.2%20222.6%20163.8%20184.6%20157.0%20166.6C150.2%20148.6%20101.0%20164.6%2087.8%20153.6C74.6%20142.6%2070.8%20121.4%2081.8%20104.8C92.8%2088.2%20113.4%2069.0%20150.5%2064.9Z'/%3E%3C/svg%3E");
}

.hero__img-card[data-mask-style='smooth'] {
  --hero-photo-mask: var(--hero-photo-mask-smooth);
}

.hero__img-card[data-mask-style='soft'] {
  --hero-photo-mask: var(--hero-photo-mask-soft);
}

.hero__img-card[data-mask-style='sharp'] {
  --hero-photo-mask: var(--hero-photo-mask-sharp);
}

/* 
  Gradient border layer:
  - Fixed border-radius (shape never changes)
  - background-position animates to create color drift effect
  - Uses transform/opacity-safe properties: background-size + background-position
*/
.hero__img-border {
  position: absolute;
  inset: -5px;
  border-radius: 55% 45% 48% 52% / 52% 48% 55% 45%;
  background: linear-gradient(
    135deg,
    #43A047 0%,
    #26C6DA 25%,
    #1E88E5 50%,
    #0D47A1 75%,
    #43A047 100%
  );
  background-size: 300% 300%;
  animation: gradient-drift 6s ease-in-out infinite;
  -webkit-mask-image: var(--hero-photo-mask);
  mask-image: var(--hero-photo-mask);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  z-index: 0;
}

@keyframes gradient-drift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Image wrapper — SAME fixed border-radius as border layer */
.hero__img-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 55% 45% 48% 52% / 52% 48% 55% 45%;
  -webkit-mask-image: var(--hero-photo-mask);
  mask-image: var(--hero-photo-mask);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  overflow: hidden;
  z-index: 1;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Inner brand gradient overlay on the image */
.hero__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(67, 160, 71, 0.14) 0%,
    rgba(38, 198, 218, 0.04) 35%,
    transparent 55%,
    rgba(21, 101, 192, 0.1) 100%
  );
  pointer-events: none;
  z-index: 2;
}

/* Floating Badges */
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
  z-index: 3;
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
  }

  .hero__img-card {
    width: 300px;
    height: 300px;
  }

  .hero__ring--outer {
    width: 380px;
    height: 380px;
  }

  .hero__ring--inner {
    width: 320px;
    height: 320px;
  }

  .hero__orbit--1 { width: 360px; height: 360px; }
  .hero__orbit--2 { width: 290px; height: 290px; }
  .hero__orbit--3 { width: 410px; height: 410px; }

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

  .hero__img-card {
    width: 260px;
    height: 260px;
  }

  .hero__ring--outer,
  .hero__ring--inner {
    display: none;
  }

  .hero__orbit--1 { width: 300px; height: 300px; }
  .hero__orbit--2 { width: 240px; height: 240px; }
  .hero__orbit--3 { display: none; }

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

@media (prefers-reduced-motion: reduce) {
  .hero__trust-tag::after {
    animation: none;
  }
}
</style>
