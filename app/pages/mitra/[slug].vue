<template>
  <div>
    <PageHero
      :title="partner?.title ?? 'Mitra Cleanique Mart'"
      :subtitle="partner?.description"
      badge="Mitra Cleanique Mart"
      :breadcrumb-label="partner?.title"
    />

    <section class="partner-detail section">
      <div class="container">
        <NuxtLink to="/mitra" class="partner-detail__back reveal">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
          Kembali ke daftar mitra
        </NuxtLink>

        <div class="partner-detail__layout">
          <main class="partner-detail__main">
            <div class="partner-detail__hero glass-card reveal">
              <div class="partner-detail__hero-media">
                <NuxtImg
                  :src="partner?.image"
                  :alt="partner?.imageAlt"
                  width="1200"
                  height="760"
                  class="partner-detail__hero-image"
                  loading="eager"
                />
              </div>

              <div class="partner-detail__hero-body">
                <div class="partner-detail__eyebrow">{{ partner?.location }}</div>
                <h1 class="partner-detail__title">{{ partner?.title }}</h1>
                <p class="partner-detail__lead">{{ partner?.description }}</p>

                <div class="partner-detail__actions">
                  <a
                    :href="whatsAppHref"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary"
                  >
                    Hubungi via WhatsApp
                  </a>
                  <a
                    :href="partner?.sourceUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-blue"
                  >
                    Lihat Halaman Asli
                  </a>
                </div>
              </div>
            </div>

            <div class="partner-detail__meta-grid">
              <article class="partner-info-card glass-card reveal reveal-delay-1">
                <div class="partner-info-card__label">Alamat</div>
                <h2 class="partner-info-card__title">Lokasi Mitra</h2>
                <p class="partner-info-card__body">{{ partner?.address }}</p>
              </article>

              <article class="partner-info-card glass-card reveal reveal-delay-2">
                <div class="partner-info-card__label">Kontak</div>
                <h2 class="partner-info-card__title">Nomor WhatsApp</h2>
                <a
                  :href="whatsAppHref"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="partner-info-card__link"
                >
                  {{ partner?.phone }}
                </a>
              </article>

              <article class="partner-info-card glass-card reveal reveal-delay-3">
                <div class="partner-info-card__label">Kanal Belanja</div>
                <h2 class="partner-info-card__title">Marketplace</h2>
                <div class="partner-info-card__chips">
                  <span
                    v-for="market in partner?.marketplaces ?? []"
                    :key="market"
                    class="partner-info-card__chip"
                  >
                    {{ market }}
                  </span>
                </div>
              </article>
            </div>

            <div class="partner-detail__content glass-card reveal reveal-delay-2">
              <ContentRenderer v-if="currentPartner" :value="currentPartner" />
            </div>
          </main>

          <aside class="partner-detail__aside">
            <div class="partner-cta glass-card reveal">
              <div class="partner-cta__label">Butuh Konsultasi Cepat?</div>
              <h2 class="partner-cta__title">Tim kami siap bantu pilih paket dan produk yang sesuai kebutuhan Anda.</h2>
              <p class="partner-cta__body">Cocok untuk rumah tangga, usaha laundry, depot sabun, hingga toko isi ulang.</p>
              <a
                :href="whatsAppHref"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary partner-cta__button"
              >
                Chat Mitra Ini
              </a>
            </div>

            <div v-if="relatedPartners.length" class="partner-related glass-card reveal reveal-delay-1">
              <h2 class="partner-related__title">Mitra Lainnya</h2>
              <div class="partner-related__list">
                <NuxtLink
                  v-for="item in relatedPartners"
                  :key="item.path ?? item.stem"
                  :to="getPartnerLink(item)"
                  class="partner-related__item"
                >
                  <NuxtImg
                    :src="item.image"
                    :alt="item.imageAlt"
                    width="88"
                    height="88"
                    class="partner-related__image"
                    loading="lazy"
                  />
                  <div>
                    <div class="partner-related__location">{{ item.location }}</div>
                    <p class="partner-related__name">{{ item.title }}</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: partner } = await useAsyncData(`mitra-${slug}`, () =>
  queryCollection('mitra')
    .path(`/mitra/${slug}`)
    .first()
)

if (!partner.value) {
  throw createError({ statusCode: 404, statusMessage: 'Mitra tidak ditemukan' })
}

const { data: related } = await useAsyncData(`mitra-related-${slug}`, () =>
  queryCollection('mitra')
    .order('order', 'ASC')
    .all()
    .then((items) => items.filter((item) => item.path !== partner.value?.path).slice(0, 3))
)

const relatedPartners = computed(() => related.value ?? [])

function stripHeadingIdsFromBody(body: Record<string, any> | null | undefined) {
  if (!body || typeof body !== 'object') {
    return body
  }

  const clonedBody = structuredClone(body)

  if (!Array.isArray(clonedBody.value)) {
    return clonedBody
  }

  clonedBody.value = clonedBody.value.map((node: any) => {
    if (!Array.isArray(node) || typeof node[0] !== 'string') {
      return node
    }

    if (!/^h[1-6]$/.test(node[0])) {
      return node
    }

    const nextNode = [...node]
    const props = nextNode[1]

    if (props && typeof props === 'object' && !Array.isArray(props)) {
      const { id, ...restProps } = props
      nextNode[1] = restProps
    }

    return nextNode
  })

  return clonedBody
}

const currentPartner = computed<Record<string, any> | null>(() => {
  if (!partner.value) {
    return null
  }

  return {
    ...partner.value,
    body: stripHeadingIdsFromBody(partner.value.body),
  }
})

function normalizePhoneNumber(phone?: string) {
  const digits = phone?.replace(/\D/g, '') ?? ''

  if (!digits) {
    return '6287885590088'
  }

  if (digits.startsWith('62')) {
    return digits
  }

  if (digits.startsWith('0')) {
    return `62${digits.slice(1)}`
  }

  return digits
}

function getPartnerLink(item: { path?: string | null; stem?: string | null }) {
  if (item.path) {
    return item.path
  }

  const itemSlug = item.stem?.replace('mitra/', '')
  return itemSlug ? `/mitra/${itemSlug}` : '/mitra'
}

const whatsAppHref = computed(() => {
  const phone = normalizePhoneNumber(partner.value?.phone)
  const text = encodeURIComponent(`Halo ${partner.value?.title}, saya ingin tanya produk dan kemitraan Cleanique Mart.`)
  return `https://wa.me/${phone}?text=${text}`
})

useSeoMeta({
  title: `${partner.value.title} - Mitra Cleanique Mart`,
  description: partner.value.description,
  ogTitle: partner.value.title,
  ogDescription: partner.value.description,
  ogImage: partner.value.image,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useScrollReveal()
</script>

<style scoped>
.partner-detail {
  background: linear-gradient(180deg, var(--color-surface) 0%, #ffffff 100%);
}

.partner-detail__back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-primary);
}

.partner-detail__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: var(--space-8);
  align-items: start;
}

.partner-detail__main {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.partner-detail__hero {
  overflow: hidden;
  border: 1px solid rgba(21, 101, 192, 0.08);
}

.partner-detail__hero-media {
  aspect-ratio: 16 / 8.5;
  overflow: hidden;
  background: var(--color-sky);
}

.partner-detail__hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.partner-detail__hero-body {
  padding: var(--space-8);
}

.partner-detail__eyebrow {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 var(--space-3);
  border-radius: var(--radius-full);
  background: rgba(21, 101, 192, 0.08);
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.partner-detail__title {
  font-size: clamp(1.8rem, 3.6vw, 2.8rem);
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-bottom: var(--space-3);
}

.partner-detail__lead {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text-light);
}

.partner-detail__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

.partner-detail__meta-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}

.partner-info-card {
  padding: var(--space-6);
  border: 1px solid rgba(21, 101, 192, 0.08);
}

.partner-info-card__label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.partner-info-card__title {
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: var(--space-2);
}

.partner-info-card__body,
.partner-info-card__link {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

.partner-info-card__link {
  font-weight: 700;
  color: var(--color-primary-dark);
}

.partner-info-card__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.partner-info-card__chip {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 var(--space-3);
  border-radius: var(--radius-full);
  background: rgba(67, 160, 71, 0.1);
  color: var(--color-accent-dark);
  font-size: 0.85rem;
  font-weight: 700;
}

.partner-detail__content {
  padding: var(--space-8);
  border: 1px solid rgba(21, 101, 192, 0.08);
}

.partner-detail__content :deep(h1),
.partner-detail__content :deep(h2) {
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--color-primary-dark);
  line-height: 1.3;
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}

.partner-detail__content :deep(h3),
.partner-detail__content :deep(h4) {
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--color-primary-dark);
  line-height: 1.3;
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}

.partner-detail__content :deep(h1) { font-size: 1.8rem; }
.partner-detail__content :deep(h2) { font-size: 1.35rem; }
.partner-detail__content :deep(h3) {
  font-size: 1.15rem;
  color: var(--color-primary);
}
.partner-detail__content :deep(h4) { font-size: 1.05rem; }

.partner-detail__content :deep(h1 a),
.partner-detail__content :deep(h2 a),
.partner-detail__content :deep(h3 a),
.partner-detail__content :deep(h4 a) {
  color: inherit;
  text-decoration: none;
  font-weight: inherit;
}

.partner-detail__content :deep(.header-anchor),
.partner-detail__content :deep(a[aria-hidden="true"][href^="#"]) {
  display: none;
}

.partner-detail__content :deep(p) {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--color-text-light);
  margin-bottom: var(--space-4);
}

.partner-detail__content :deep(a) {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.partner-detail__content :deep(a:hover) {
  color: var(--color-accent);
}

.partner-detail__content :deep(ul),
.partner-detail__content :deep(ol) {
  padding-left: var(--space-6);
  margin-bottom: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.partner-detail__content :deep(li) {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

.partner-detail__content :deep(blockquote) {
  border-left: 4px solid var(--color-primary);
  background: rgba(21, 101, 192, 0.04);
  padding: var(--space-4) var(--space-6);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin: var(--space-6) 0;
}

.partner-detail__content :deep(blockquote p) {
  font-size: 1rem;
  font-style: italic;
  color: var(--color-primary-dark);
  margin-bottom: 0;
}

.partner-detail__content :deep(strong) {
  font-weight: 700;
  color: var(--color-primary-dark);
}

.partner-detail__aside {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  position: sticky;
  top: calc(72px + var(--space-6));
}

.partner-cta,
.partner-related {
  padding: var(--space-6);
  border: 1px solid rgba(21, 101, 192, 0.08);
}

.partner-cta {
  background: linear-gradient(135deg, rgba(21, 101, 192, 0.08), rgba(67, 160, 71, 0.08));
}

.partner-cta__label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-3);
}

.partner-cta__title {
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.4;
  margin-bottom: var(--space-3);
}

.partner-cta__body {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: var(--space-5);
}

.partner-cta__button {
  width: 100%;
  justify-content: center;
}

.partner-related__title {
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.partner-related__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.partner-related__item {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: var(--space-3);
  align-items: center;
}

.partner-related__image {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-md);
  object-fit: cover;
}

.partner-related__location {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.partner-related__name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  line-height: 1.45;
}

@media (max-width: 1100px) {
  .partner-detail__layout {
    grid-template-columns: 1fr;
  }

  .partner-detail__aside {
    position: static;
  }
}

@media (max-width: 820px) {
  .partner-detail__meta-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .partner-detail__hero-body,
  .partner-detail__content,
  .partner-cta,
  .partner-related,
  .partner-info-card {
    padding: var(--space-5);
  }

  .partner-detail__actions {
    flex-direction: column;
  }

  .partner-detail__actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
