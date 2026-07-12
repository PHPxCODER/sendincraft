import Link from 'next/link';
import { Metadata } from 'next';
import { blog } from '@/lib/source';
import { Clock, ArrowRight, Rss, FileText } from 'lucide-react';
import BlogSearch from '@/components/blog/BlogSearch';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Blog | SendinCraft - Email Development Insights & Best Practices',
  description: 'Discover the latest insights, best practices, and tutorials for transactional email development. Learn about SPF, DKIM, DMARC, email security, and more.',
  keywords: [
    'email development',
    'transactional emails',
    'SPF DKIM DMARC',
    'email security',
    'email marketing',
    'email deliverability',
    'AWS SES',
    'email API',
    'SendinCraft tutorials'
  ],
  openGraph: {
    title: 'Blog | SendinCraft - Email Development Insights',
    description: 'Discover the latest insights, best practices, and tutorials for transactional email development.',
    type: 'website',
    url: 'https://sendincraft.com/blog',
    siteName: 'SendinCraft',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'SendinCraft Blog - Email Development Insights',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | SendinCraft - Email Development Insights',
    description: 'Discover the latest insights, best practices, and tutorials for transactional email development.',
    images: ['/og-blog.jpg'],
  },
  alternates: {
    canonical: '/blog',
    types: {
      'application/rss+xml': [
        {
          title: 'SendinCraft Blog - Email Development Insights',
          url: 'https://sendincraft.com/blog/rss.xml',
        },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  const posts = blog.getPages();

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });

  // Serialize posts for the client component - only the data we need
  const serializedPosts = sortedPosts.map((post) => ({
    url: post.url,
    data: {
      title: post.data.title,
      description: post.data.description || undefined,
      author: post.data.author,
      date: new Date(post.data.date).toISOString(),
    },
  }));

  return (
    <>
      {/* RSS Discovery Meta Tag */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="SendinCraft Blog RSS"
        href="https://sendincraft.com/blog/rss.xml"
      />

      <Navigation />

      <main className="bg-background">
        {/* Header */}
        <header className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_90%_at_50%_-10%,black,transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-56 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-foreground/[0.04] blur-3xl"
          />

          <div className="mx-auto max-w-6xl px-6 pb-14 pt-24 sm:pt-28">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <span aria-hidden className="text-muted-foreground/40">
                /
              </span>
              <span className="text-foreground">Blog</span>
            </nav>

            <h1 className="max-w-3xl font-raleway text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Email development, from the source
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Practical guides on deliverability, authentication, and building transactional email that
              actually reaches the inbox.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                <FileText className="h-3.5 w-3.5" strokeWidth={2} />
                {posts.length} {posts.length === 1 ? 'article' : 'articles'}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                Updated weekly
              </span>
              <Link
                href="/blog/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Rss className="h-3.5 w-3.5" strokeWidth={2} />
                RSS
              </Link>
            </div>
          </div>
        </header>

        {/* Articles */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          {posts.length > 0 ? (
            <BlogSearch posts={serializedPosts} />
          ) : (
            <div className="rounded-2xl border border-dashed border-border py-20 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <FileText className="h-7 w-7 text-muted-foreground" strokeWidth={2} />
              </div>
              <h2 className="mb-2 font-raleway text-2xl font-semibold text-foreground">No posts yet</h2>
              <p className="mx-auto max-w-md text-muted-foreground">
                We&apos;re working on bringing you in-depth email engineering guides. Check back soon.
              </p>
            </div>
          )}
        </section>

        {/* Subscribe CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-2xl bg-foreground px-8 py-12 text-background sm:px-12 sm:py-16">
            {/* Grid lines, fading outward */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(color-mix(in oklab, var(--background) 7%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--background) 7%, transparent) 1px, transparent 1px)',
                backgroundSize: '46px 46px',
                maskImage: 'radial-gradient(ellipse 85% 120% at 90% 0%, black, transparent 72%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 120% at 90% 0%, black, transparent 72%)',
              }}
            />
            {/* Radial spotlight from the top-right */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 55% 80% at 100% 0%, color-mix(in oklab, var(--background) 12%, transparent), transparent 60%)',
              }}
            />
            {/* Soft glow for depth */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-background/[0.06] blur-3xl"
            />
            <div className="relative max-w-xl">
              <h2 className="font-raleway text-2xl font-bold tracking-tight sm:text-3xl">
                Ship email that reaches the inbox
              </h2>
              <p className="mt-3 max-w-lg text-background/70">
                Get new guides on deliverability, security, and email infrastructure as we publish them, and
                early access to the platform.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/waitlist"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-background px-6 text-sm font-semibold text-foreground transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Join the waitlist
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/blog/rss.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-background/25 px-6 text-sm font-medium text-background transition-colors duration-200 hover:bg-background/10"
                >
                  <Rss className="h-4 w-4" strokeWidth={2} />
                  RSS feed
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
