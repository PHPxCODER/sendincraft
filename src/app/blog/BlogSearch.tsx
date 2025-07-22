'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, X, Calendar, User, ArrowRight } from 'lucide-react';
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
  featuredPostUrl?: string;
}

export default function BlogSearch({ posts, featuredPostUrl }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique authors and years for filtering
  const { authors, years } = useMemo(() => {
    const authorsSet = new Set<string>();
    const yearsSet = new Set<string>();

    posts.forEach(post => {
      authorsSet.add(post.data.author);
      const year = new Date(post.data.date).getFullYear().toString();
      yearsSet.add(year);
    });

    return {
      authors: Array.from(authorsSet).sort(),
      years: Array.from(yearsSet).sort((a, b) => parseInt(b) - parseInt(a))
    };
  }, [posts]);

  // Filter posts based on search and filters
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.data.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.data.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesAuthor = selectedAuthor === '' || post.data.author === selectedAuthor;
      
      const matchesYear = selectedYear === '' || 
        new Date(post.data.date).getFullYear().toString() === selectedYear;

      return matchesSearch && matchesAuthor && matchesYear;
    });
  }, [posts, searchQuery, selectedAuthor, selectedYear]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedAuthor('');
    setSelectedYear('');
  };

  const hasActiveFilters = searchQuery || selectedAuthor || selectedYear;

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-card border border-border/50 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Toggle */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
                {[searchQuery, selectedAuthor, selectedYear].filter(Boolean).length}
              </Badge>
            )}
          </Button>
        </div>

        {/* Expandable Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Author Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Author</label>
                <select
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">All Authors</option>
                  {authors.map(author => (
                    <option key={author} value={author}>{author}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  disabled={!hasActiveFilters}
                  className="w-full gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchQuery}
                <button onClick={() => setSearchQuery('')}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            {selectedAuthor && (
              <Badge variant="secondary" className="gap-1">
                <User className="w-3 h-3" />
                {selectedAuthor}
                <button onClick={() => setSelectedAuthor('')}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            {selectedYear && (
              <Badge variant="secondary" className="gap-1">
                <Calendar className="w-3 h-3" />
                {selectedYear}
                <button onClick={() => setSelectedYear('')}>
                  <X className="w-3 h-3" />
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
            ? `Showing all ${posts.length} articles`
            : `Showing ${filteredPosts.length} of ${posts.length} articles`
          }
        </p>
        
        {filteredPosts.length !== posts.length && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Show all articles
          </Button>
        )}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link key={post.url} href={post.url} className="group">
            <article className="h-full bg-card border border-border/50 rounded-xl overflow-hidden hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                {/* Post Meta */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.data.author}</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <time dateTime={post.data.date}>
                    {formatDate(new Date(post.data.date))}
                  </time>
                </div>
                
                {/* Featured Badge */}
                {featuredPostUrl && post.url === featuredPostUrl && (
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 mb-3">
                    Featured
                  </div>
                )}
                
                {/* Post Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.data.title}
                </h3>
                
                {/* Post Description */}
                {post.data.description && (
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.data.description}
                  </p>
                )}
                
                {/* Read More Link */}
                <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all duration-300 mt-auto">
                  <span>Read more</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search criteria or clearing filters
          </p>
          <Button onClick={clearFilters}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}