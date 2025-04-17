import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    // Blog posts
    posts: defineCollection({
      type: "page",
      source: "posts/*.md",
      schema: z.object({
        tags: z.array(z.string()),
        createdOn: z.date(),
        updatedOn: z.date(),
        isDraft: z.boolean().optional().default(false)
      })
    }),

    // Author's information
    author: defineCollection({
      type: "data",
      source: "author.yml",
      schema: z.object({
        fullName: z.string(),
        caption: z.string(),
        personal: z.array(
          z.object({
            label: z.string(),
            value: z.string()
          })
        ),
        skills: z.array(
          z.object({
            category: z.string(),
            items: z.array(z.string())
          })
        ),
        contact: z.array(
          z.object({
            name: z.string(),
            type: z.enum(["email", "social"]),
            url: z.string().url()
          })
        )
      })
    }),

    // Intro content
    intro: defineCollection({
      type: "page",
      source: "intro.md"
    })
  }
});
