import Link from 'next/link';
import { Metadata } from 'next';
import { blog } from '@/lib/source';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import BlogSearch from './BlogSearch';

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
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  const posts = blog.getPages();

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });

  // Get the featured post (most recent)
  const featuredPost = sortedPosts[0];

  // Serialize posts for client component - extract only the data we need
  const serializedPosts = sortedPosts.map(post => ({
    url: post.url,
    data: {
      title: post.data.title,
      description: post.data.description || undefined,
      author: post.data.author,
      date: new Date(post.data.date).toISOString(), // Convert to string
    }
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Email Development
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent block">
                Insights & Best Practices
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover the latest insights, tutorials, and best practices for building reliable 
              transactional email systems. From security to deliverability, we cover it all.
            </p>
            
            {/* Blog Stats */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>{posts.length} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Updated Weekly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Featured Article
                </div>
              </div>
              
              <Link href={featuredPost.url} className="group block">
                <article className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl">
                  {/* Featured Post Content */}
                  <div className="p-8 sm:p-12">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{featuredPost.data.author}</span>
                        </div>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={featuredPost.data.date.toString()}>
                            {formatDate(new Date(featuredPost.data.date))}
                          </time>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {featuredPost.data.title}
                    </h2>
                    
                    {featuredPost.data.description && (
                      <p className="text-lg text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                        {featuredPost.data.description}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Read full article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </article>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* All Posts with Search */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {featuredPost ? 'All Articles' : 'Latest Articles'}
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our complete collection of insights and tutorials
              </p>
            </div>

            {/* All Posts with Search - Now self-contained */}
            <BlogSearch 
              posts={serializedPosts} 
              featuredPostUrl={featuredPost?.url}
            />
          </div>
        </div>
      </section>

      {/* Empty State */}
      {posts.length === 0 && (
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <Calendar className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">No posts yet</h2>
              <p className="text-muted-foreground">
                We&apos;re working on bringing you amazing content. Check back soon!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-purple-600 p-8 sm:p-12 text-center">
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Stay Updated with Email Best Practices
                </h2>
                <p className="text-primary-foreground/80 mb-6 text-lg max-w-2xl mx-auto">
                  Get the latest tutorials, security updates, and industry insights delivered to your inbox.
                </p>
                <Link 
                  href="/#waitlist" 
                  className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Join Our Newsletter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}