import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const extensions = ["md", "mdx", "webp", "png", "jpg"];

export const collections = {
	articles: defineCollection({
		loader: glob({ base: "./src/content/articles", pattern: `**/*.{${extensions.join(",")}}` }),
		schema: z.object({
			title: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date()
		})
	}),
	specs: defineCollection({
		loader: glob({ base: "./src/content/spec", pattern: `**/*.{${extensions.join(",")}}` }),
		schema: z.object({
			title: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date()
		})
	})
};
