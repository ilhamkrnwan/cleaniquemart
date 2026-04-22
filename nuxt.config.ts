// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/content',
  ],

  // Nuxt SEO - Site Config
  site: {
    url: 'https://cleaniquemart.com',
    name: 'CleaniqueMart',
    description: 'Peluang bisnis sabun curah premium dari Cleanique Lab. Bergabung sebagai mitra dan raih omzet tinggi tanpa pengalaman bisnis sekalipun.',
    defaultLocale: 'id',
    indexable: true,
  },

  // Robots
  robots: {
    blockAiBots: true,
    disallow: [],
  },

  // OG Image
  ogImage: {
    enabled: false,
  },

  // Nuxt Fonts
  fonts: {
    families: [
      { name: 'Nunito', provider: 'google', weights: [400, 600, 700, 800] },
      { name: 'DM Sans', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  // Nuxt Image
  image: {
    quality: 85,
    format: ['webp'],
  },

  // CSS
  css: ['~/assets/css/main.css'],
})
