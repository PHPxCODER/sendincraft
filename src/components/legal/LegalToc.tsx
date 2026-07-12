'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TocItem {
  id: string;
  title: string;
}

/**
 * Table-of-contents navigator with active-section tracking via
 * IntersectionObserver (no scroll listeners). Anchors are plain links so
 * deep-linking and keyboard navigation work; smooth scroll comes from the
 * global `scroll-behavior: smooth` on <html>.
 *
 * `variant="mobile"` renders a collapsible "On this page" disclosure;
 * `variant="sidebar"` renders a sticky rail for large viewports.
 */
export function LegalToc({
  items,
  variant = 'sidebar',
}: {
  items: TocItem[];
  variant?: 'sidebar' | 'mobile';
}) {
  const [active, setActive] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-112px 0px -66% 0px', threshold: 0 },
    );

    const observed = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    observed.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  const list = (
    <ol className="space-y-0.5">
      {items.map((item, i) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                'group flex items-baseline gap-3 rounded-md px-2 py-1.5 text-sm transition-colors',
                isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <span
                className={cn(
                  'w-5 shrink-0 text-[11px] font-medium tabular-nums transition-colors',
                  isActive ? 'text-foreground' : 'text-muted-foreground/50',
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative leading-snug">
                {item.title}
                <span
                  className={cn(
                    'absolute -left-2 top-1/2 h-4 w-px -translate-y-1/2 rounded-full bg-foreground transition-opacity',
                    isActive ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (variant === 'mobile') {
    return (
      <details className="group rounded-xl border border-border bg-muted/30 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-foreground">
          On this page
          <svg
            className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>
        <nav aria-label="On this page" className="px-2 pb-3">
          {list}
        </nav>
      </details>
    );
  }

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
        On this page
      </p>
      {list}
    </nav>
  );
}
