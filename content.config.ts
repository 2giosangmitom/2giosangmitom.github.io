import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional()
      })
    }),
    about: defineCollection({
      type: 'page',
      source: 'author/about.md',
      schema: z.object({})
    })
  }
});
