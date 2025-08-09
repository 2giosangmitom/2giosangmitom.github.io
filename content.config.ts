import { z, defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        createdOn: z.date(),
        updatedOn: z.date(),
        tags: z.array(z.string())
      })
    }),
    author: defineCollection({
      type: 'page',
      source: 'author/*.md'
    })
  }
});
