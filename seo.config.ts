export const seoConfig = {
  siteName: 'Cleanique Mart',
  brandName: 'CleaniqueMart',
  companyName: 'PT Indotech Berkah Abadi',
  siteUrl: 'https://cleaniquemart.vercel.app',
  siteLocale: 'id_ID',
  language: 'id-ID',
  defaultAuthor: 'Tim CleaniqueMart',
  tagline: 'Peluang Bisnis 2026',
  defaultTitle: 'Peluang Bisnis Sabun Curah Premium',
  defaultDescription: 'Peluang bisnis sabun curah premium dari Cleanique Lab. Bergabung sebagai mitra Cleanique Mart dan raih omzet tinggi tanpa pengalaman bisnis sekalipun.',
  logoPath: '/cleanique-mart-logo-scaled.webp',
  companyLogoPath: '/indotech-full-1536x438.webp',
  instagramUrl: 'https://www.instagram.com/cleaniquemart/',
  whatsappUrl: 'https://wa.me/6287885590088',
  email: 'orchidbrand@gmail.com',
  phoneDisplay: '0878-8559-0088',
  phoneE164: '+6287885590088',
  address: {
    streetAddress: 'Jongke Tengah No.30, Sendangadi, Kec. Mlati',
    addressLocality: 'Sleman',
    addressRegion: 'Daerah Istimewa Yogyakarta',
    postalCode: '55285',
    addressCountry: 'ID',
  },
} as const

export function withSiteUrl(path?: string | null) {
  if (!path) {
    return ''
  }

  if (/^https?:\/\//i.test(path)) {
    return path
  }

  return `${seoConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildSeoTitle(title?: string | null) {
  if (!title) {
    return seoConfig.siteName
  }

  return title === seoConfig.siteName ? title : `${title} | ${seoConfig.siteName}`
}
