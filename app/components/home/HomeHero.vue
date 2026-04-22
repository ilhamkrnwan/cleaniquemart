<template>
  <section class="hero" aria-label="Hero Section">
    <!-- Animated Bubbles Background -->
    <div class="hero__bubbles" aria-hidden="true">
      <span v-for="i in 12" :key="i" class="hero__bubble" :class="`hero__bubble--${i}`"></span>
    </div>

    <!-- Gradient Mesh Background -->
    <div class="hero__bg-mesh" aria-hidden="true"></div>

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

        <!-- Right: Visual -->
        <div class="hero__visual reveal reveal-delay-2">
          <div class="hero__visual-ring hero__visual-ring--outer" aria-hidden="true"></div>
          <div class="hero__visual-ring hero__visual-ring--middle" aria-hidden="true"></div>
          <div class="hero__visual-card glass-card">
            <NuxtImg
              src="/photo-collage.webp"
              alt="Koleksi produk CleaniqueMart — sabun curah premium berkualitas"
              width="480"
              height="480"
              class="hero__visual-img"
              loading="eager"
              sizes="(max-width: 768px) 100vw, 480px"
            />
            <!-- Floating Badges -->
            <div class="hero__float-badge hero__float-badge--top">
              <span class="hero__float-dot"></span>
              Halal MUI Certified
            </div>
            <div class="hero__float-badge hero__float-badge--bottom">
              <span class="hero__float-icon">🏆</span>
              #1 Sabun Curah Pilihan Mitra
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave Bottom -->
    <div class="hero__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
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

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100dvh;
  background: linear-gradient(135deg, #0D2B6B 0%, #1565C0 45%, #1976D2 70%, #1E88E5 100%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  background: rgba(255, 255, 255, 0.06);
  animation: bubble-rise linear infinite;
}

.hero__bubble--1  { width: 20px; height: 20px; left: 10%; animation-duration: 8s; animation-delay: 0s; }
.hero__bubble--2  { width: 12px; height: 12px; left: 20%; animation-duration: 10s; animation-delay: 1s; }
.hero__bubble--3  { width: 28px; height: 28px; left: 35%; animation-duration: 7s; animation-delay: 2s; }
.hero__bubble--4  { width: 16px; height: 16px; left: 50%; animation-duration: 12s; animation-delay: 0.5s; }
.hero__bubble--5  { width: 24px; height: 24px; left: 65%; animation-duration: 9s; animation-delay: 3s; }
.hero__bubble--6  { width: 10px; height: 10px; left: 75%; animation-duration: 11s; animation-delay: 1.5s; }
.hero__bubble--7  { width: 32px; height: 32px; left: 85%; animation-duration: 8s; animation-delay: 2.5s; }
.hero__bubble--8  { width: 18px; height: 18px; left: 5%; animation-duration: 14s; animation-delay: 4s; }
.hero__bubble--9  { width: 14px; height: 14px; left: 45%; animation-duration: 6s; animation-delay: 1s; }
.hero__bubble--10 { width: 22px; height: 22px; left: 90%; animation-duration: 13s; animation-delay: 0s; }
.hero__bubble--11 { width: 8px;  height: 8px;  left: 28%; animation-duration: 9s; animation-delay: 3.5s; }
.hero__bubble--12 { width: 26px; height: 26px; left: 58%; animation-duration: 10s; animation-delay: 2s; }

/* === Background mesh === */
.hero__bg-mesh {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 80% 20%, rgba(67, 160, 71, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 10% 80%, rgba(66, 165, 245, 0.12) 0%, transparent 50%);
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
  padding: var(--space-2) var(--space-4);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space-6);
  backdrop-filter: blur(8px);
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
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-white);
  margin-bottom: var(--space-6);
}

.hero__headline-accent {
  display: block;
  background: linear-gradient(135deg, #A5D6A7, #43A047, #69F0AE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__sub {
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.78);
  max-width: 500px;
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
  gap: var(--space-3);
}

.hero__badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
}

.hero__badge-icon {
  color: var(--color-accent);
}

/* === Visual === */
.hero__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__visual-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.08);
  animation: spin-slow linear infinite;
}

.hero__visual-ring--outer {
  width: 520px;
  height: 520px;
  animation-duration: 30s;
}

.hero__visual-ring--middle {
  width: 420px;
  height: 420px;
  animation-duration: 20s;
  animation-direction: reverse;
  border-color: rgba(67, 160, 71, 0.12);
}

.hero__visual-card {
  position: relative;
  width: 380px;
  height: 380px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  animation: float-slow 6s ease-in-out infinite;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 20px 60px rgba(13, 43, 107, 0.5),
    0 0 0 1px rgba(255,255,255,0.1) inset;
}

.hero__visual-img {
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
  padding: var(--space-2) var(--space-3);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-md);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
}

.hero__float-badge--top {
  top: var(--space-4);
  left: -var(--space-4);
  transform: translateX(-20px);
  animation: float 4s ease-in-out infinite;
}

.hero__float-badge--bottom {
  bottom: var(--space-6);
  right: -var(--space-4);
  transform: translateX(20px);
  animation: float 5s ease-in-out infinite;
  animation-delay: 1s;
}

.hero__float-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  flex-shrink: 0;
}

.hero__float-icon {
  font-size: 1rem;
}

/* === Wave === */
.hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.hero__wave svg {
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

  .hero__visual-card {
    width: 300px;
    height: 300px;
  }

  .hero__visual-ring--outer {
    width: 380px;
    height: 380px;
  }

  .hero__visual-ring--middle {
    width: 320px;
    height: 320px;
  }
}

@media (max-width: 600px) {
  .hero .container {
    padding-top: var(--space-12);
  }

  .hero__visual-card {
    width: 260px;
    height: 260px;
  }

  .hero__visual-ring--outer,
  .hero__visual-ring--middle {
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
}
</style>
