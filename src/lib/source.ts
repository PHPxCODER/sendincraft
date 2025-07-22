import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { docsfr, blogPosts } from "../../.source";

export const source = loader({
	baseUrl: "/docs",
	source: docsfr.toFumadocsSource(),
});

export const blog = loader({
	baseUrl: '/blog',
	source: createMDXSource(blogPosts),
  });