import { defineCollection, z } from '@nuxt/content'

export const collections = {
  blog: defineCollection({
    type: 'page',
    source: 'blog/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      image: z.string().optional(),
      ogImage: z.string().optional(),
      category: z.string().optional(),
      author: z.string().optional(),
      updatedAt: z.string().optional(),
      tags: z.array(z.string()).optional(),
      canonical: z.string().optional(),
      noindex: z.boolean().optional(),
    }),
  }),
  mitra: defineCollection({
    type: 'page',
    source: 'mitra/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      location: z.string(),
      address: z.string(),
      phone: z.string(),
      image: z.string(),
      imageAlt: z.string(),
      sourceUrl: z.string(),
      order: z.number(),
      marketplaces: z.array(z.string()),
      ogImage: z.string().optional(),
      canonical: z.string().optional(),
      updatedAt: z.string().optional(),
      noindex: z.boolean().optional(),
    }),
  }),
}
