'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal, X, Calendar, User, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

interface BlogPost {
  url: string;
  data: {
    title: string;
    description?: string;
    author: string;
    date: string; // Always string for serialization
  };
}

interface BlogSearchProps {
  posts: BlogPost[];
}

function PostMeta({ author, date }: { author: string; date: string }) {
  return (
    <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <User className="h-3.5 w-3.5" strokeWidth={2} />
        {author}
      </span>
      <span aria-hidden className="h-1 w-1 rounded-full bg-muted-foreground/40" />
      <time dateTime={date}>{formatDate(new Date(date))}</time>
    </div>
  );
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique authors and years for filtering
  const { authors, years } = useMemo(() => {
    const authorsSet = new Set<string>();
    const yearsSet = new Set<string>();

    posts.forEach((post) => {
      authorsSet.add(post.data.author);
      yearsSet.add(new Date(post.data.date).getFullYear().toString());
    });

    return {
      authors: Array.from(authorsSet).sort(),
      years: Array.from(yearsSet).sort((a, b) => parseInt(b) - parseInt(a)),
    };
  }, [posts]);

  // Filter posts based on search and filters
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.data.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.data.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesAuthor = selectedAuthor === '' || post.data.author === selectedAuthor;

      const matchesYear =
        selectedYear === '' || new Date(post.data.date).getFullYear().toString() === selectedYear;

      return matchesSearch && matchesAuthor && matchesYear;
    });
  }, [posts, searchQuery, selectedAuthor, selectedYear]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedAuthor('');
    setSelectedYear('');
  };

  const hasActiveFilters = Boolean(searchQuery || selectedAuthor || selectedYear);
  const activeFilterCount = [searchQuery, selectedAuthor, selectedYear].filter(Boolean).length;

  const [lead, ...rest] = filteredPosts;

  return (
    <div className="space-y-8">
      {/* Search and Filter Bar */}
      <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              strokeWidth={2}
            />
            <Input
              type="text"
              placeholder="Search articles by title, topic, or author"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 pl-10"
              aria-label="Search articles"
            />
          </div>

          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="h-11 gap-2"
            aria-expanded={showFilters}
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={2} />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-0.5 px-1.5 py-0.5 text-xs tabular-nums">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Expandable Filters */}
        {showFilters && (
          <div className="mt-4 grid grid-cols-1 gap-4 border-t border-border/60 pt-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label htmlFor="filter-author" className="mb-2 block text-sm font-medium text-foreground">
                Author
              </label>
              <select
                id="filter-author"
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">All authors</option>
                {authors.map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="filter-year" className="mb-2 block text-sm font-medium text-foreground">
                Year
              </label>
              <select
                id="filter-year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">All years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={clearFilters}
                disabled={!hasActiveFilters}
                className="h-10 w-full gap-2"
              >
                <X className="h-4 w-4" strokeWidth={2} />
                Clear filters
              </Button>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchQuery}
                <button onClick={() => setSearchQuery('')} aria-label="Clear search">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedAuthor && (
              <Badge variant="secondary" className="gap-1">
                <User className="h-3 w-3" />
                {selectedAuthor}
                <button onClick={() => setSelectedAuthor('')} aria-label="Clear author filter">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedYear && (
              <Badge variant="secondary" className="gap-1">
                <Calendar className="h-3 w-3" />
                {selectedYear}
                <button onClick={() => setSelectedYear('')} aria-label="Clear year filter">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredPosts.length === posts.length
            ? `${posts.length} ${posts.length === 1 ? 'article' : 'articles'}`
            : `${filteredPosts.length} of ${posts.length} articles`}
        </p>

        {filteredPosts.length !== posts.length && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Show all
          </Button>
        )}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-16 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
            <Search className="h-6 w-6 text-muted-foreground" strokeWidth={2} />
          </div>
          <h3 className="mb-1.5 font-raleway text-lg font-semibold text-foreground">No articles found</h3>
          <p className="mx-auto mb-5 max-w-sm text-sm text-muted-foreground">
            Nothing matches your search. Try a different term or clear the filters.
          </p>
          <Button onClick={clearFilters} variant="outline">
            Clear all filters
          </Button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Lead article (newest / top result) */}
          {lead && (
            <Link href={lead.url} className="group block">
              <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-foreground/25 sm:p-10">
                {/* subtle token-driven texture, echoes the page header */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_120%_at_100%_0%,black,transparent_70%)]"
                />
                <div className="relative">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-foreground px-2.5 py-1 text-[11px] font-medium text-background">
                      Latest
                    </span>
                    <PostMeta author={lead.data.author} date={lead.data.date} />
                  </div>

                  <h3 className="max-w-3xl font-raleway text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-foreground sm:text-3xl lg:text-4xl">
                    {lead.data.title}
                  </h3>

                  {lead.data.description && (
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground line-clamp-2">
                      {lead.data.description}
                    </p>
                  )}

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    <span>Read article</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Remaining articles */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link key={post.url} href={post.url} className="group">
                  <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25">
                    <PostMeta author={post.data.author} date={post.data.date} />

                    <h3 className="mt-4 font-raleway text-lg font-semibold leading-snug tracking-tight text-foreground underline-offset-4 decoration-foreground/30 group-hover:underline line-clamp-2">
                      {post.data.title}
                    </h3>

                    {post.data.description && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.data.description}
                      </p>
                    )}

                    <div className="mt-5 inline-flex items-center gap-2 pt-1 text-sm font-medium text-foreground">
                      <span>Read more</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
