<template>
  <div>
    <PageHero
      title="Tips, Insight & <span class='accent'>Inspirasi Bisnis</span>"
      subtitle="Kumpulan artikel edukasi tentang bisnis sabun, strategi marketing UMKM, dan tips mengelola usaha rumahan agar berkembang."
      badge="Blog Cleanique Mart"
    />

    <section class="blog-list section">
      <div class="container">
        <template v-if="featured && currentPage === 1">
          <div class="blog-featured reveal">
            <NuxtLink :to="postLink(featured)" class="blog-featured__inner">
              <div class="blog-featured__img-wrap">
                <NuxtImg
                  :src="resolveBlogImage(featured.image)"
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

        <div v-if="paginatedRest.length" class="blog-grid">
          <NuxtLink
            v-for="(post, i) in paginatedRest"
            :key="post.stem"
            :to="postLink(post)"
            class="blog-card glass-card reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <div class="blog-card__img-wrap">
              <NuxtImg
                :src="resolveBlogImage(post.image)"
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
            v-if="currentPage > 1"
            :to="pageLink(currentPage - 1)"
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
              :class="{ 'blog-pagination__number--active': page === currentPage }"
              :aria-current="page === currentPage ? 'page' : undefined"
            >
              {{ page }}
            </NuxtLink>
          </div>

          <NuxtLink
            v-if="currentPage < totalPages"
            :to="pageLink(currentPage + 1)"
            class="blog-pagination__btn"
            aria-label="Halaman berikutnya"
          >
            Berikutnya
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
          </NuxtLink>
        </nav>

        <div v-if="!featured && !restAll.length" class="blog-empty">
          <p>Belum ada artikel yang dipublikasikan. Nantikan update kami!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { seoConfig, withSiteUrl } from '~~/seo.config'
import { resolveBlogImage } from '~/utils/blog'

interface BlogEntry {
  title: string
  description: string
  date: string
  image?: string
  category?: string
  stem?: string | null
}

const props = withDefaults(defineProps<{
  pageNumber?: number
}>(), {
  pageNumber: 1,
})

const currentPage = computed(() => Math.max(1, Math.floor(props.pageNumber)))
const pageSize = 10

const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

const featured = computed(() => posts.value?.[0] ?? null)
const restAll = computed(() => posts.value?.slice(1) ?? [])

const totalPages = computed(() => {
  if (!restAll.value.length) {
    return 1
  }

  return Math.ceil(restAll.value.length / pageSize)
})

if (currentPage.value > totalPages.value && totalPages.value > 0) {
  throw createError({ statusCode: 404, statusMessage: 'Halaman blog tidak ditemukan' })
}

const paginatedRest = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return restAll.value.slice(start, start + pageSize)
})

const pageNumbers = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  const min = Math.max(1, current - 2)
  const max = Math.min(total, min + 4)
  const adjustedMin = Math.max(1, max - 4)
  const pages: number[] = []

  for (let page = adjustedMin; page <= max; page += 1) {
    pages.push(page)
  }

  return pages
})

const pageTitle = computed(() =>
  currentPage.value === 1
    ? 'Blog - Tips Bisnis Sabun Curah'
    : `Blog Halaman ${currentPage.value} - Tips Bisnis Sabun Curah`
)

const pageDescription = computed(() =>
  currentPage.value === 1
    ? 'Baca artikel edukasi dan inspirasi bisnis dari Cleanique Mart. Tips memulai usaha produk pembersih, strategi marketing, dan cara memaksimalkan margin keuntungan.'
    : `Halaman ${currentPage.value} dari arsip blog Cleanique Mart yang berisi insight bisnis sabun curah, strategi pemasaran, dan edukasi kemitraan.`
)

const canonicalPath = computed(() =>
  currentPage.value === 1 ? '/blog' : `/blog/page/${currentPage.value}`
)

usePageSeo({
  title: pageTitle,
  description: pageDescription,
  path: canonicalPath,
  keywords: 'blog Cleanique Mart, tips bisnis sabun curah, peluang usaha sabun curah, edukasi mitra sabun, artikel Cleanique Mart',
  ogComponent: 'Default',
  ogProps: {
    title: currentPage.value === 1 ? 'Blog Cleanique Mart' : `Blog Cleanique Mart - Halaman ${currentPage.value}`,
    description: pageDescription.value,
    tagline: seoConfig.tagline,
    eyebrow: 'Blog Cleanique Mart',
    logoUrl: withSiteUrl(seoConfig.logoPath),
    companyLogoUrl: withSiteUrl(seoConfig.companyLogoPath),
  },
})

useSchemaOrg([
  defineWebPage({
    name: pageTitle.value,
    description: pageDescription.value,
    url: withSiteUrl(canonicalPath.value),
    inLanguage: seoConfig.language,
  }),
  defineBreadcrumb({
    itemListElement: currentPage.value === 1
      ? [
          { name: 'Beranda', item: '/' },
          { name: 'Blog', item: '/blog' },
        ]
      : [
          { name: 'Beranda', item: '/' },
          { name: 'Blog', item: '/blog' },
          { name: `Halaman ${currentPage.value}`, item: canonicalPath.value },
        ],
  }),
])

function postLink(post: BlogEntry) {
  const slug = post.stem?.replace('blog/', '')
  return slug ? `/blog/${slug}` : '/blog'
}

function pageLink(page: number) {
  return page <= 1 ? '/blog' : `/blog/page/${page}`
}

function formatDate(raw?: string) {
  if (!raw) {
    return ''
  }

  return new Date(raw).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

useScrollReveal('.blog-list .reveal', 0.08)
</script>

<style scoped>
.blog-list {
  background: var(--color-surface);
}

.blog-featured {
  margin-bottom: var(--space-16);
}

.blog-featured__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
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
  aspect-ratio: 16 / 9;
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
  padding: var(--space-8);
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  align-items: start;
  gap: var(--space-3);
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
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-featured__body .blog-readmore {
  margin-top: var(--space-2);
}

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
  aspect-ratio: 16 / 9;
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

.blog-empty {
  text-align: center;
  padding: var(--space-24) 0;
  color: var(--color-text-light);
  font-size: 1.05rem;
}

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

@media (max-width: 960px) {
  .blog-featured__inner {
    grid-template-columns: 1fr;
  }

  .blog-featured__img-wrap {
    aspect-ratio: 16 / 8;
  }

  .blog-featured__body {
    padding: var(--space-8);
  }

  .blog-featured__desc {
    -webkit-line-clamp: 4;
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
