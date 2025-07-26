import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from 'next';

const withMDX = createMDX();

const config: NextConfig = {
	reactStrictMode: true,

	// PostHog rewrites
	async rewrites() {
		return [
			{
				source: "/ingest/static/:path*",
				destination: "https://eu-assets.i.posthog.com/static/:path*",
			},
			{
				source: "/ingest/:path*",
				destination: "https://eu.i.posthog.com/:path*",
			},
			{
				source: "/ingest/flags",
				destination: "https://eu.i.posthog.com/flags",
			},
		];
	},

	// This is required to support PostHog trailing slash API requests
	skipTrailingSlashRedirect: true,
};

export default withMDX(config);
