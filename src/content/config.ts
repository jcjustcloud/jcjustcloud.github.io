import { defineCollection, z } from 'astro:content';

const iotCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    board: z.enum(['Arduino Uno', 'ESP32 v1', 'ESP32 S3']),
    status: z.enum(['active', 'wip', 'completed']),
    tags: z.array(z.string()),
    github: z.string().url(),
    date: z.coerce.date(),
    cover: z.string()
  })
});

const promptingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['basic', 'intermediate', 'advanced']),
    date: z.coerce.date()
  })
});

export const collections = {
  iot: iotCollection,
  prompting: promptingCollection
};
