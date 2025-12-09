import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content", // 使用標準的 content type
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional().nullable(),
  }),
});

export const collections = { news };
