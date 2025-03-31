import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: "page",
      source: "posts/*.md",
      schema: z.object({
        tags: z.array(z.string()),
        createdOn: z.date(),
        updatedOn: z.date(),
      }),
    }),
  },
});
