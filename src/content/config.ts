import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['Politics', 'Design', 'Technology', 'Personal']),
    image: z.string().optional(),
    imageOptional: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = {
  blog,
};