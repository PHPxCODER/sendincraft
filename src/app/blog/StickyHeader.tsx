'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface StickyHeaderProps {
  title: string;
  className?: string;
}

export default function StickyHeader({ title, className = '' }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm transition-all duration-200 border-b",
      isScrolled ? "border-border/50 shadow-sm" : "border-transparent",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
          <h2 className={cn(
            "text-lg font-medium transition-opacity duration-200 line-clamp-1 max-w-md mx-2",
            isScrolled ? "opacity-100" : "opacity-0"
          )}>
            {title}
          </h2>
        </div>
      </div>
    </header>
  );
}