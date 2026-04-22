<template>
  <div>
    <PageHero
      title="Tips, Insight & <span class='accent'>Inspirasi Bisnis</span>"
      subtitle="Kumpulan artikel edukasi tentang bisnis sabun, strategi marketing UMKM, dan tips mengelola usaha rumahan agar berkembang."
      badge="Blog CleaniqueMart"
    />

    <section class="blog-list section">
      <div class="container">

        <!-- Featured Post -->
        <template v-if="featured && safePage === 1">
          <div class="blog-featured reveal">
            <NuxtLink :to="`/blog/${featured.stem?.replace('blog/', '')}`" class="blog-featured__inner">
              <div class="blog-featured__img-wrap">
                <NuxtImg
                  :src="featured.image ?? '/blog/default.webp'"
                  :alt="featured.title"
                  class="blog-featured__img"
                  width="720"
                  height="440"
                  loading="eager"
                />
                <span class="blog-featured__badge">Artikel Terbaru</span>
              </div>
              <div class="blog-featured__body">
                <div class="blog-featured__meta">
                  <span class="blog-cat">{{ featured.category }}</span>
                  <span class="blog-dot">·</span>
                  <time :datetime="featured.date" class="blog-date">{{ formatDate(featured.date) }}</time>
                </div>
                <h2 class="blog-featured__title">{{ featured.title }}</h2>
                <p class="blog-featured__desc">{{ featured.description }}</p>
                <span class="blog-readmore">
                  Baca Selengkapnya
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
            </NuxtLink>
          </div>
        </template>

        <!-- Rest Posts -->
        <div v-if="paginatedRest.length" class="blog-grid">
          <NuxtLink
            v-for="(post, i) in paginatedRest"
            :key="post.stem"
            :to="`/blog/${post.stem?.replace('blog/', '')}`"
            class="blog-card glass-card reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <div class="blog-card__img-wrap">
              <NuxtImg
                :src="post.image ?? '/blog/default.webp'"
                :alt="post.title"
                class="blog-card__img"
                width="480"
                height="280"
                loading="lazy"
              />
            </div>
            <div class="blog-card__body">
              <div class="blog-card__meta">
                <span class="blog-cat">{{ post.category }}</span>
                <span class="blog-dot">·</span>
                <time :datetime="post.date" class="blog-date">{{ formatDate(post.date) }}</time>
              </div>
              <h3 class="blog-card__title">{{ post.title }}</h3>
              <p class="blog-card__desc">{{ post.description }}</p>
              <span class="blog-readmore">
                Baca Artikel
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
              </span>
            </div>
          </NuxtLink>
        </div>

        <nav v-if="totalPages > 1" class="blog-pagination" aria-label="Navigasi halaman blog">
          <NuxtLink
            v-if="safePage > 1"
            :to="pageLink(safePage - 1)"
            class="blog-pagination__btn"
            aria-label="Halaman sebelumnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
            Sebelumnya
          </NuxtLink>

          <div class="blog-pagination__numbers">
            <NuxtLink
              v-for="page in pageNumbers"
              :key="page"
              :to="pageLink(page)"
              class="blog-pagination__number"
              :class="{ 'blog-pagination__number--active': page === safePage }"
              :aria-current="page === safePage ? 'page' : undefined"
            >
              {{ page }}
            </NuxtLink>
          </div>

          <NuxtLink
            v-if="safePage < totalPages"
            :to="pageLink(safePage + 1)"
            class="blog-pagination__btn"
            aria-label="Halaman berikutnya"
          >
            Berikutnya
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
          </NuxtLink>
        </nav>

        <!-- Empty state -->
        <div v-if="!featured && !restAll.length" class="blog-empty">
          <p>Belum ada artikel yang dipublikasikan. Nantikan update kami!</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog — Tips Bisnis Sabun Curah | CleaniqueMart',
  description: 'Baca artikel edukasi dan inspirasi bisnis dari CleaniqueMart. Tips memulai usaha produk pembersih, strategi marketing, dan cara memaksimalkan margin keuntungan.',
})

// Fetch all blog posts, sorted newest first
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

const route = useRoute()
const pageSize = 10

const featured = computed(() => posts.value?.[0] ?? null)
const restAll = computed(() => posts.value?.slice(1) ?? [])

const currentPage = computed(() => {
  const page = Number(route.query.page ?? 1)
  if (!Number.isFinite(page) || page < 1) {
    return 1
  }

  return Math.floor(page)
})

const totalPages = computed(() => {
  if (!restAll.value.length) {
    return 1
  }

  return Math.ceil(restAll.value.length / pageSize)
})

const safePage = computed(() => Math.min(currentPage.value, totalPages.value))

const paginatedRest = computed(() => {
  const start = (safePage.value - 1) * pageSize
  return restAll.value.slice(start, start + pageSize)
})

const pageNumbers = computed(() => {
  const total = totalPages.value
  const current = safePage.value
  const min = Math.max(1, current - 2)
  const max = Math.min(total, min + 4)
  const adjustedMin = Math.max(1, max - 4)
  const pages: number[] = []

  for (let page = adjustedMin; page <= max; page += 1) {
    pages.push(page)
  }

  return pages
})

function pageLink(page: number) {
  if (page <= 1) {
    return '/blog'
  }

  return {
    path: '/blog',
    query: { page: String(page) },
  }
}

function formatDate(raw?: string) {
  if (!raw) return ''
  return new Date(raw).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible') })
  }, { threshold: 0.08 })
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  }, 100)
})
</script>

<style scoped>
.blog-list {
  background: var(--color-surface);
}

/* ── Featured ─────────────────────────────────────── */
.blog-featured {
  margin-bottom: var(--space-16);
}

.blog-featured__inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 0;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.08);
  box-shadow: var(--shadow-lg);
  text-decoration: none;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.blog-featured__inner:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-blue);
}

.blog-featured__img-wrap {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: var(--color-sky);
}

.blog-featured__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-featured__inner:hover .blog-featured__img {
  transform: scale(1.04);
}

.blog-featured__badge {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  padding: var(--space-1) var(--space-4);
  background: var(--color-accent);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: var(--radius-full);
}

.blog-featured__body {
  padding: var(--space-12) var(--space-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-4);
}

.blog-featured__title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 800;
  color: var(--color-primary-dark);
  line-height: 1.3;
}

.blog-featured__desc {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--color-text-light);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Meta ────────────────────────────────────────── */
.blog-featured__meta,
.blog-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.blog-cat {
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-primary);
  background: rgba(21, 101, 192, 0.08);
  padding: 2px var(--space-2);
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.blog-date {
  font-size: 0.82rem;
  color: var(--color-text-light);
}

.blog-dot {
  color: var(--color-text-light);
  font-size: 0.8rem;
}

.blog-readmore {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-top: auto;
  transition: gap var(--transition-fast);
}

.blog-featured__inner:hover .blog-readmore,
.blog-card:hover .blog-readmore {
  gap: var(--space-2);
  color: var(--color-accent);
}

/* ── Grid Cards ────────────────────────────────────── */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.blog-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border: 1px solid rgba(21, 101, 192, 0.06);
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-decoration: none;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-blue);
}

.blog-card__img-wrap {
  aspect-ratio: 16/9;
  overflow: hidden;
  background: var(--color-sky);
}

.blog-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .blog-card__img {
  transform: scale(1.06);
}

.blog-card__body {
  padding: var(--space-5) var(--space-5) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}

.blog-card__title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.35em * 2);
}

.blog-card__desc {
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--color-text-light);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Empty State ─────────────────────────────────── */
.blog-empty {
  text-align: center;
  padding: var(--space-24) 0;
  color: var(--color-text-light);
  font-size: 1.05rem;
}

/* ── Pagination ──────────────────────────────────── */
.blog-pagination {
  margin-top: var(--space-10);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.blog-pagination__btn,
.blog-pagination__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  border: 1px solid rgba(21, 101, 192, 0.16);
  border-radius: var(--radius-full);
  background: var(--color-white);
  color: var(--color-primary-dark);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.blog-pagination__btn {
  padding: 8px var(--space-4);
}

.blog-pagination__numbers {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.blog-pagination__number {
  width: 36px;
  height: 36px;
}

.blog-pagination__btn:hover,
.blog-pagination__number:hover {
  background: rgba(21, 101, 192, 0.08);
  border-color: rgba(21, 101, 192, 0.24);
}

.blog-pagination__number--active {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

/* ── Responsive ──────────────────────────────────── */
@media (max-width: 960px) {
  .blog-featured__inner {
    grid-template-columns: 1fr;
  }
  .blog-featured__img-wrap {
    aspect-ratio: 16/8;
  }
  .blog-featured__body {
    padding: var(--space-8);
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-pagination {
    gap: var(--space-3);
  }

  .blog-pagination__btn {
    padding: 8px var(--space-3);
  }
}
</style>
