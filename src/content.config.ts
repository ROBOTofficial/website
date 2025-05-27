import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const pattern = "**/*.{md,mdx}";

export const collections = {
	articles: defineCollection({
		loader: glob({ base: "./src/content/articles", pattern }),
		schema: z.object({
			title: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date(),
			url: z.string().optional(),
			draft: z.boolean().optional().default(false),
			tags: z.string().array().optional().default([]),
			image: z.string().optional()
		})
	}),
	specs: defineCollection({
		loader: glob({ base: "./src/content/specs", pattern }),
		schema: z.object({
			title: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date()
		})
	})
};
