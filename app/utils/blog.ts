import { seoConfig } from '~~/seo.config'

const availableBlogCoverImages = new Set([
  '/blog/biang-karbol-wangi-sereh-pinus-cemara-5-liter/cover.webp',
])

export function resolveBlogImage(image?: string | null) {
  if (image && availableBlogCoverImages.has(image)) {
    return image
  }

  return seoConfig.logoPath
}
