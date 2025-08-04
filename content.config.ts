import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        createdAt: z.date(),
        updatedAt: z.date().optional(),
        tags: z.array(z.string())
      })
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects.yaml',
      schema: z.object({
        projects: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            gitRepo: z.string().url().optional(),
            liveDemo: z.string().optional(),
            technologies: z.array(z.string()),
            images: z.array(z.string()).optional(),
            featured: z.boolean().default(false)
          })
        )
      })
    })
  }
});
