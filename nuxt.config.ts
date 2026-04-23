import { existsSync, lstatSync, mkdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { seoConfig, withSiteUrl } from './seo.config'

const payloadCachePath = resolve('.nuxt/cache/nuxt/payload')
const mdcOptimizeDepsPrefix = '@nuxtjs/mdc > '

if (existsSync(payloadCachePath) && lstatSync(payloadCachePath).isFile()) {
  rmSync(payloadCachePath, { force: true })
}

rmSync(payloadCachePath, { recursive: true, force: true })
mkdirSync(payloadCachePath, { recursive: true })

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  hooks: {
    'vite:extendConfig'(config) {
      const include = config.optimizeDeps?.include

      if (!include?.length) {
        return
      }

      config.optimizeDeps!.include = include.filter(
        dependency => !dependency.startsWith(mdcOptimizeDepsPrefix),
      )
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/content',
  ],

  // Nuxt SEO - Site Config
  site: {
    url: seoConfig.siteUrl,
    name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    defaultLocale: 'id',
    indexable: true,
    trailingSlash: false,
  },

  // Robots
  robots: {
    blockAiBots: true,
    disallow: [],
  },

  // OG Image
  ogImage: {
    enabled: true,
    zeroRuntime: true,
    defaults: {
      component: 'OgImageDefault',
      renderer: 'satori',
      width: 1200,
      height: 630,
    },
  },

  // Schema.org
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: seoConfig.siteName,
      alternateName: seoConfig.brandName,
      description: seoConfig.defaultDescription,
      slogan: seoConfig.tagline,
      url: seoConfig.siteUrl,
      logo: withSiteUrl(seoConfig.logoPath),
      image: withSiteUrl(seoConfig.companyLogoPath),
      email: seoConfig.email,
      telephone: seoConfig.phoneE164,
      sameAs: [seoConfig.instagramUrl],
    },
  },

  // Nuxt Fonts
  fonts: {
    global: true,
    families: [
      { name: 'Outfit', provider: 'google', weights: [400, 500, 600, 700, 800] },
      { name: 'DM Sans', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  // Nuxt Image
  image: {
    quality: 85,
    format: ['webp'],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/robots.txt', '/sitemap.xml'],
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/products': { prerender: true },
    '/blog/**': { prerender: true },
    '/mitra/**': { prerender: true },
  },

  // CSS
  css: ['~/assets/css/main.css'],
})
