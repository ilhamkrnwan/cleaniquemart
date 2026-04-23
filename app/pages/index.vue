<template>
  <div>
    <HomeHero />
    <HomeOpportunity />
    <HomeStats />
    <HomeWhyUs />
    <HomeProducts />
    <HomeHowToJoin />
    <HomeTestimonials />
    <HomeCTA />
  </div>
</template>

<script setup lang="ts">
import { seoConfig, withSiteUrl } from '~~/seo.config'

usePageSeo({
  title: 'Peluang Bisnis Sabun Curah Premium',
  description: 'Bergabung sebagai mitra Cleanique Mart dan mulai bisnis sabun curah premium. 50+ mitra aktif, produk Halal MUI, dukungan penuh, modal terjangkau. Konsultasi gratis sekarang.',
  path: '/',
  keywords: 'sabun curah, bisnis sabun, mitra sabun, peluang usaha, cleanique mart, sabun curah premium, deterjen curah, modal kecil bisnis',
  ogComponent: 'Default',
  ogProps: {
    title: 'Cleanique Mart',
    description: 'Peluang bisnis sabun curah premium dengan dukungan kemitraan, produk legal, dan sistem usaha yang siap dijalankan.',
    tagline: seoConfig.tagline,
    eyebrow: 'Homepage',
    logoUrl: withSiteUrl(seoConfig.logoPath),
    companyLogoUrl: withSiteUrl(seoConfig.companyLogoPath),
  },
})

useSchemaOrg([
  defineWebPage({
    name: 'Cleanique Mart',
    description: 'Peluang bisnis sabun curah premium dengan dukungan kemitraan, produk legal, dan sistem usaha yang siap dijalankan.',
    url: withSiteUrl('/'),
    inLanguage: seoConfig.language,
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Beranda', item: '/' },
    ],
  }),
])
</script>
