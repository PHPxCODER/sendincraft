import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import SocialShare from '../SocialShare';
import StickyHeader from '../StickyHeader';
import BlogBreadcrumb from '../BlogBreadcrumb';

// Utility function to estimate reading time
function estimateReadingTime(content: string): number {
  // Average reading speed is about 200-250 words per minute
  const wordsPerMinute = 225;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) {
    return {
      title: 'Post Not Found | SendinCraft Blog',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const { title, description, date, author } = page.data;
  const publishedDate = new Date(date).toISOString();
  const url = `https://sendincraft.com/blog/${params.slug}`;

  // Determine reading time
  const readingTime = estimateReadingTime(
    page.data.title + ' ' + (page.data.description || '')
  );

  // Construct OG image URL
  const ogImageUrl = new URL('/api/og', 'https://sendincraft.com');
  ogImageUrl.searchParams.set('title', title);
  ogImageUrl.searchParams.set('author', author);
  ogImageUrl.searchParams.set('readTime', readingTime.toString());

  return {
    title: `${title} | SendinCraft Blog`,
    description: description || `Read ${title} by ${author} on the SendinCraft blog.`,
    openGraph: {
      title: `${title} | SendinCraft Blog`,
      description: description || `Read ${title} by ${author} on the SendinCraft blog.`,
      type: 'article',
      url,
      siteName: 'SendinCraft',
      publishedTime: publishedDate,
      authors: [author],
      images: [{
        url: ogImageUrl.toString(),
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | SendinCraft Blog`,
      description: description || `Read ${title} by ${author} on the SendinCraft blog.`,
      images: [ogImageUrl.toString()],
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  const { title, description, date, author } = page.data;
  const Mdx = page.data.body;
  
  // Estimate reading time
  const readingTime = estimateReadingTime(
    page.data.title + ' ' + (page.data.description || '')
  );

  // Get other posts for recommendations
  const allPosts = blog.getPages();
  const otherPosts = allPosts
    .filter(post => post.url !== page.url)
    .slice(0, 3);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            author: {
              '@type': 'Person',
              name: author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'SendinCraft',
              logo: {
                '@type': 'ImageObject',
                url: 'https://sendincraft.com/logo.png',
              },
            },
            datePublished: new Date(date).toISOString(),
            dateModified: new Date(date).toISOString(),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://sendincraft.com/blog/${params.slug}`,
            },
            image: `https://sendincraft.com/og-blog-${params.slug}.jpg`,
            url: `https://sendincraft.com/blog/${params.slug}`,
          }),
        }}
      />

      {/* MagicUI Scroll Progress - positioned below sticky header */}
      <ScrollProgress className="top-[73px]" />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/10">
        {/* Sticky Header - Client Component */}
        <StickyHeader title={title} />

        {/* Breadcrumb */}
        <section className="py-4 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <BlogBreadcrumb 
                items={[
                  { label: title }
                ]} 
              />
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{author}</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={date.toString()}>
                    {formatDate(new Date(date))}
                  </time>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
              
              {/* Article Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {title}
              </h1>
              
              {/* Article Description */}
              {description && (
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {description}
                </p>
              )}
              
              {/* Social Share - Client Component */}
              <SocialShare 
                title={title} 
                className="pt-6 border-t border-border/50" 
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Table of Contents - Sidebar */}
                <aside className="lg:col-span-1 order-2 lg:order-1">
                  <div className="lg:sticky lg:top-24">
                    <InlineTOC items={page.data.toc} defaultOpen />
                  </div>
                </aside>
                
                {/* Main Content */}
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <div className="prose prose-lg dark:prose-invert max-w-none break-words overflow-wrap-anywhere prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:break-all prose-pre:bg-muted prose-pre:border prose-pre:overflow-x-auto prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg">
                    <Mdx components={defaultMdxComponents} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <section className="py-12 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border/50 rounded-xl p-4 sm:p-8">
                <div className="flex items-start gap-3 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-xl flex-shrink-0">
                    {author.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Written by {author}</h3>
                    <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                      Expert in email development and transactional email systems. Passionate about helping developers build reliable email infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                        <Link href="/blog">More Articles</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Related Articles</h2>
                  <p className="text-muted-foreground">Continue your email development journey</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherPosts.map((post) => (
                    <Link key={post.url} href={post.url} className="group">
                      <article className="bg-card border border-border/50 rounded-xl p-6 h-full hover:border-border transition-all duration-300 hover:shadow-lg">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <span>{post.data.author}</span>
                            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                            <time dateTime={post.data.date.toString()}>
                              {formatDate(new Date(post.data.date))}
                            </time>
                          </div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {post.data.title}
                          </h3>
                          {post.data.description && (
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {post.data.description}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all duration-300">
                          <span>Read article</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-16 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Enjoyed this article?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join our newsletter to get the latest email development insights, tutorials, and best practices delivered to your inbox.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#waitlist">
                    Subscribe to Newsletter
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}