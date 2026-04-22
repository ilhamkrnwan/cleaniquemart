<template>
  <div>
    <!-- Back nav -->
    <div ref="postBackBarRef" class="post-back-bar" :style="{ top: `${navbarOffset}px` }">
      <div class="container">
        <NuxtLink to="/blog" class="post-back-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
          Kembali ke Blog
        </NuxtLink>
      </div>
    </div>

    <article class="post-article">
      <div class="container">
        <div class="post-layout">

          <!-- Main Content -->
          <main class="post-main">
            <!-- Header -->
            <header class="post-header">
              <div class="post-meta">
                <span class="blog-cat">{{ post?.category }}</span>
                <span class="blog-dot">·</span>
                <time :datetime="post?.date">{{ formatDate(post?.date) }}</time>
              </div>

              <h1 class="post-title">{{ post?.title }}</h1>
              <p class="post-lead">{{ post?.description }}</p>

              <!-- Hero Image -->
              <div class="post-hero-img">
                <NuxtImg
                  :src="post?.image ?? '/blog/default.webp'"
                  :alt="post?.title"
                  width="840"
                  height="460"
                  class="post-hero-img__img"
                  loading="eager"
                />
              </div>
            </header>

            <!-- Body -->
              <div class="post-body">
                <ContentRenderer :value="sanitizedPost" />
            </div>

            <!-- Post Footer -->
            <footer class="post-footer">
              <div class="post-footer__share">
                <span>Bagikan artikel ini:</span>
                <a
                  :href="`https://wa.me/?text=${encodeURIComponent((post?.title ?? '') + ' — ' + siteUrl + '/blog/' + slug)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="share-btn share-btn--wa"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 4.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11.9a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.24z"/></svg>
                  WhatsApp
                </a>
              </div>
            </footer>
          </main>

          <!-- Sidebar -->
          <aside class="post-sidebar" :style="{ top: `calc(${navbarOffset}px + ${postBackBarHeight}px + var(--space-6))` }">
            <!-- CTA Card -->
            <div class="sidebar-cta">
                <NuxtImg
                  src="/cleanique-mart-logo-outline-scaled.webp"
                  alt="Logo CleaniqueMart"
                  fit="contain"
                  width="200"
                  height="70"
                  class="sidebar-cta__logo"
                  loading="lazy"
                />
              <h3 class="sidebar-cta__title">Tertarik Jadi Mitra?</h3>
              <p class="sidebar-cta__body">Mulai bisnis sabun curah Anda bersama CleaniqueMart. Konsultasi pertama 100% gratis!</p>
              <a
                href="https://wa.me/6287885590088?text=Halo%2C%20saya%20ingin%20konsultasi%20menjadi%20mitra%20CleaniqueMart"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary sidebar-cta__btn"
              >
                Konsultasi Sekarang
              </a>
            </div>

            <!-- Related Posts -->
            <div v-if="related.length" class="sidebar-related">
              <h4 class="sidebar-related__title">Artikel Lainnya</h4>
              <ul class="sidebar-related__list">
                <li v-for="rel in related" :key="rel.stem">
                  <NuxtLink :to="`/blog/${rel.stem?.replace('blog/', '')}`" class="related-item">
                    <div class="related-item__img-wrap">
                      <NuxtImg
                        :src="rel.image ?? '/blog/default.webp'"
                        :alt="rel.title"
                        class="related-item__img"
                        width="80"
                        height="80"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p class="related-item__title">{{ rel.title }}</p>
                      <time class="related-item__date">{{ formatDate(rel.date) }}</time>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const siteUrl = 'https://cleaniquemart.com'
const navbarOffset = ref(72)
const postBackBarHeight = ref(48)
const postBackBarRef = ref<HTMLElement | null>(null)

// Fetch current post
const { data: post } = await useAsyncData(`post-${slug}`, () =>
  queryCollection('blog').path(`/blog/${slug}`).first()
)

// Related posts (exclude current)
const { data: related } = await useAsyncData(`related-${slug}`, () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .limit(3)
    .all()
    .then((posts) => posts.filter((p) => p.stem !== `blog/${slug}`).slice(0, 3))
)

// 404 if post not found
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artikel tidak ditemukan' })
}

function sanitizeHeadingPrefix(text: string) {
  return text
    .replace(/^\s*#{1,6}\s+/, '')
    .replace(/^\s*#(?=\d)/, '')
}

function sanitizeNode(node: any, parentTag = ''): any {
  if (Array.isArray(node)) {
    return node.map((item) => sanitizeNode(item, parentTag))
  }

  if (!node || typeof node !== 'object') {
    return node
  }

  const cloned = { ...node }
  const currentTag = typeof cloned.tag === 'string' ? cloned.tag : parentTag

  if (typeof cloned.value === 'string' && ['p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(parentTag)) {
    cloned.value = sanitizeHeadingPrefix(cloned.value)
  }

  if (cloned.children) {
    cloned.children = sanitizeNode(cloned.children, currentTag)
  }

  return cloned
}

const sanitizedPost = computed(() => {
  if (!post.value) {
    return null
  }

  const cloned = structuredClone(post.value) as any
  if (cloned.body) {
    cloned.body = sanitizeNode(cloned.body)
  }

  return cloned
})

function updateStickyOffsets() {
  const navbarInner = document.querySelector('.navbar .navbar__inner') as HTMLElement | null
  navbarOffset.value = navbarInner?.offsetHeight ?? 72
  postBackBarHeight.value = postBackBarRef.value?.offsetHeight ?? 48
}

onMounted(() => {
  updateStickyOffsets()
  window.addEventListener('scroll', updateStickyOffsets, { passive: true })
  window.addEventListener('resize', updateStickyOffsets)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateStickyOffsets)
  window.removeEventListener('resize', updateStickyOffsets)
})

// SEO
useSeoMeta({
  title: `${post.value?.title ?? 'Artikel'} — Blog CleaniqueMart`,
  description: post.value?.description,
  ogTitle: post.value?.title,
  ogDescription: post.value?.description,
  ogImage: post.value?.image ?? '/cleanique-mart-logo-scaled.webp',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})

function formatDate(raw?: string) {
  if (!raw) return ''
  return new Date(raw).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>

<style scoped>
/* ── Back Bar ── */
.post-back-bar {
  background: var(--color-white);
  border-bottom: 1px solid rgba(21, 101, 192, 0.08);
  padding: var(--space-3) 0;
  position: sticky;
  top: 72px;
  z-index: var(--z-sticky);
}

.post-back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--color-primary);
  transition: gap var(--transition-fast), color var(--transition-fast);
}

.post-back-link:hover {
  gap: var(--space-1);
  color: var(--color-primary-dark);
}

/* ── Article wrapper ── */
.post-article {
  background: var(--color-surface);
  padding: var(--space-16) 0 var(--space-24);
}

.post-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--space-12);
  align-items: start;
}

/* ── Header ── */
.post-header {
  margin-bottom: var(--space-10);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.blog-cat {
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-primary);
  background: rgba(21, 101, 192, 0.08);
  padding: 2px var(--space-2);
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.blog-dot {
  color: var(--color-text-light);
}

time {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.post-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: var(--color-primary-dark);
  line-height: 1.2;
  margin-bottom: var(--space-4);
}

.post-lead {
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--color-text-light);
  margin-bottom: var(--space-8);
}

.post-hero-img {
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 16/8;
  background: var(--color-sky);
}

.post-hero-img__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ── Body: Prose styling ── */
.post-body {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-12);
  border: 1px solid rgba(21, 101, 192, 0.06);
  box-shadow: var(--shadow-sm);
}

/* Apply prose styles to rendered content */
.post-body :deep(h1),
.post-body :deep(h2),
.post-body :deep(h3),
.post-body :deep(h4) {
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--color-primary-dark);
  line-height: 1.3;
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}

.post-body :deep(h1) { font-size: 2rem; }
.post-body :deep(h2) {
  font-size: 1.5rem;
  padding-bottom: 0;
  border-bottom: none;
}
.post-body :deep(h3) { font-size: 1.2rem; color: var(--color-primary); }

.post-body :deep(h1 a),
.post-body :deep(h2 a),
.post-body :deep(h3 a),
.post-body :deep(h4 a) {
  color: inherit;
  text-decoration: none;
  font-weight: inherit;
}

.post-body :deep(p) {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--color-text-light);
  margin-bottom: var(--space-4);
}

.post-body :deep(a) {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.post-body :deep(a:hover) {
  color: var(--color-accent);
}

.post-body :deep(ul),
.post-body :deep(ol) {
  padding-left: var(--space-6);
  margin-bottom: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.post-body :deep(li) {
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

.post-body :deep(blockquote) {
  border-left: 4px solid var(--color-primary);
  background: rgba(21, 101, 192, 0.04);
  padding: var(--space-4) var(--space-6);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin: var(--space-6) 0;
}

.post-body :deep(blockquote p) {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--color-primary-dark);
  margin-bottom: 0;
}

.post-body :deep(code) {
  background: rgba(21, 101, 192, 0.06);
  color: var(--color-primary-dark);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  font-family: monospace;
}

.post-body :deep(pre) {
  background: var(--color-primary-dark);
  padding: var(--space-6);
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: var(--space-6) 0;
}

.post-body :deep(pre code) {
  background: none;
  color: #e3f2fd;
  font-size: 0.95rem;
}

.post-body :deep(strong) {
  font-weight: 700;
  color: var(--color-primary-dark);
}

/* ── Post Footer ── */
.post-footer {
  margin-top: var(--space-10);
  padding-top: var(--space-6);
  border-top: 1px solid rgba(21, 101, 192, 0.1);
}

.post-footer__share {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-weight: 600;
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.875rem;
  transition: all var(--transition-fast);
  border: 2px solid transparent;
}

.share-btn--wa {
  background: #25D366;
  color: white;
}

.share-btn--wa:hover {
  background: #1ebe59;
  transform: translateY(-2px);
}

/* ── Sidebar ── */
.post-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  position: sticky;
  top: calc(72px + 48px + var(--space-6));
}

.sidebar-cta {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-8) var(--space-6);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  box-shadow: var(--shadow-blue);
}

.sidebar-cta__logo {
  width: min(180px, 92%);
  height: auto;
  object-fit: contain;
}

.sidebar-cta__title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--color-white);
}

.sidebar-cta__body {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.sidebar-cta__btn {
  width: 100%;
  justify-content: center;
  margin-top: var(--space-2);
}

.sidebar-related {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(21, 101, 192, 0.08);
  padding: var(--space-5);
  box-shadow: var(--shadow-sm);
}

.sidebar-related__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1rem;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid rgba(21, 101, 192, 0.08);
}

.sidebar-related__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.related-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  transition: transform var(--transition-fast);
}

.related-item:hover {
  transform: translateX(4px);
}

.related-item__img-wrap {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--color-sky);
  flex-shrink: 0;
}

.related-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.related-item__title {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 4px;
}

.related-item__date {
  font-size: 0.75rem;
  color: var(--color-text-light);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .post-layout {
    grid-template-columns: 1fr;
  }

  .post-sidebar {
    position: static;
  }
}

@media (max-width: 640px) {
  .post-body {
    padding: var(--space-6);
  }

  .post-article {
    padding: var(--space-8) 0 var(--space-16);
  }
}
</style>
