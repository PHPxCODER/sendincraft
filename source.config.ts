import { defineCollections, defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod"

export const docsfr = defineDocs({
	dir: "content/docs",
});

export default defineConfig({
	lastModifiedTime: "git",
	mdxOptions: {
		providerImportSource: "@/../mdx-components",
	},
});

export const { docs, meta } = defineDocs({
	dir: "content/changelog",
	docs: {
	  schema: frontmatterSchema.extend({
		date: z.string(),
		tags: z.array(z.string()).optional(),
		version: z.string().optional(),
	  }),
	},
  })

  export const blogPosts = defineCollections({
	type: 'doc',
	dir: 'content/blog',
	// add required frontmatter properties
	schema: frontmatterSchema.extend({
	  author: z.string(),
	  date: z.string().date().or(z.date()),
	}),
  });
  