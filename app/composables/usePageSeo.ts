import { buildSeoTitle, seoConfig, withSiteUrl } from '~~/seo.config'
import type { ComputedRef, Ref } from 'vue'

type SeoValue = string | number | boolean | null | undefined

type SeoInput<T extends SeoValue = string | undefined> = T | Ref<T> | ComputedRef<T> | (() => T)

interface PageSeoOptions {
  title?: SeoInput<string | undefined>
  description?: SeoInput<string | undefined>
  path?: SeoInput<string | undefined>
  image?: SeoInput<string | undefined>
  type?: SeoInput<'website' | 'article' | undefined>
  keywords?: SeoInput<string | undefined>
  author?: SeoInput<string | undefined>
  publishedTime?: SeoInput<string | undefined>
  modifiedTime?: SeoInput<string | undefined>
  noindex?: SeoInput<boolean | undefined>
  ogComponent?: string | false
  ogProps?: Record<string, unknown>
}

export function usePageSeo(options: PageSeoOptions) {
  const title = computed(() => {
    const value = toValue(options.title)
    return value?.trim() || seoConfig.siteName
  })

  const description = computed(() => {
    const value = toValue(options.description)
    return value?.trim() || seoConfig.defaultDescription
  })

  const canonical = computed(() => {
    const value = toValue(options.path)
    return value ? withSiteUrl(value) : undefined
  })

  const author = computed(() => {
    const value = toValue(options.author)
    return value?.trim() || seoConfig.defaultAuthor
  })

  const keywords = computed(() => {
    const value = toValue(options.keywords)
    return value?.trim() || undefined
  })

  const type = computed(() => toValue(options.type) || 'website')
  const noindex = computed(() => Boolean(toValue(options.noindex)))
  const image = computed(() => {
    const value = toValue(options.image)
    return value ? withSiteUrl(value) : undefined
  })
  const publishedTime = computed(() => toValue(options.publishedTime) || undefined)
  const modifiedTime = computed(() => toValue(options.modifiedTime) || undefined)

  if (options.ogComponent) {
    defineOgImage(options.ogComponent, options.ogProps ?? {})
  }

  useSeoMeta({
    title: () => buildSeoTitle(title.value),
    description: () => description.value,
    ogTitle: () => title.value,
    ogDescription: () => description.value,
    ogType: () => type.value,
    ogSiteName: seoConfig.siteName,
    ogLocale: seoConfig.siteLocale,
    twitterCard: 'summary_large_image',
    twitterTitle: () => title.value,
    twitterDescription: () => description.value,
    robots: () => (noindex.value ? 'noindex, nofollow' : 'index, follow'),
    keywords: () => keywords.value,
  })

  useHead(() => {
    const meta = [
      { name: 'author', content: author.value, key: 'author' },
      { name: 'theme-color', content: '#0a2553', key: 'theme-color' },
    ]

    if (canonical.value) {
      meta.push({ property: 'og:url', content: canonical.value, key: 'og:url' })
    }

    if (!options.ogComponent && image.value) {
      meta.push(
        { property: 'og:image', content: image.value, key: 'og:image' },
        { name: 'twitter:image', content: image.value, key: 'twitter:image' },
      )
    }

    if (type.value === 'article') {
      meta.push({ property: 'article:author', content: author.value, key: 'article:author' })

      if (publishedTime.value) {
        meta.push({ property: 'article:published_time', content: publishedTime.value, key: 'article:published_time' })
      }

      if (modifiedTime.value) {
        meta.push({ property: 'article:modified_time', content: modifiedTime.value, key: 'article:modified_time' })
      }
    }

    return {
      htmlAttrs: {
        lang: seoConfig.language,
      },
      link: canonical.value
        ? [{ rel: 'canonical', href: canonical.value, key: 'canonical' }]
        : [],
      meta,
    }
  })

  return {
    author,
    canonical,
    image,
    title,
    description,
  }
}
