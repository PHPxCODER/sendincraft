'use client';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BlogBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function BlogBreadcrumb({ items }: BlogBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
            <Home className="w-3.5 h-3.5 mr-1" />
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground mx-1" />
          <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground mx-1" />
            {item.href ? (
              <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}