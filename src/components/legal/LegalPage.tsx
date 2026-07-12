import type { ReactNode } from 'react';
import Link from 'next/link';
import { Clock, Hash } from 'lucide-react';
import { ReadingProgress } from './ReadingProgress';
import { LegalToc } from './LegalToc';

export interface LegalSectionData {
  id: string;
  title: string;
  content: ReactNode;
}

type LegalSlug = 'privacy' | 'terms' | 'acceptable-use';

const POLICIES: { slug: LegalSlug; label: string; href: string }[] = [
  { slug: 'privacy', label: 'Privacy', href: '/privacy' },
  { slug: 'terms', label: 'Terms', href: '/terms' },
  { slug: 'acceptable-use', label: 'Acceptable Use', href: '/acceptable-use' },
];

interface LegalPageProps {
  slug: LegalSlug;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSectionData[];
}

export function LegalPage({ slug, title, description, lastUpdated, sections }: LegalPageProps) {
  const tocItems = sections.map(({ id, title }) => ({ id, title }));

  return (
    <div id="top" className="relative bg-background">
      <ReadingProgress />

      {/* Document header */}
      <header className="relative overflow-hidden border-b border-border/60">
        {/* Faint token-driven dot grid + soft glow, theme-aware, non-interactive */}
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
            <span className="text-foreground">Legal</span>
          </nav>

          <h1 className="font-raleway text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Clock className="h-3.5 w-3.5" strokeWidth={2} />
              Updated {lastUpdated}
            </span>
            <span aria-hidden className="mx-1 hidden h-4 w-px bg-border sm:block" />
            {POLICIES.map((policy) =>
              policy.slug === slug ? (
                <span
                  key={policy.slug}
                  aria-current="page"
                  className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background"
                >
                  {policy.label}
                </span>
              ) : (
                <Link
                  key={policy.slug}
                  href={policy.href}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {policy.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </header>

      {/* Body: sticky ToC rail + document */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-14 px-6 py-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:py-16">
        <aside className="lg:sticky lg:top-24 lg:h-fit lg:pt-2">
          <LegalToc items={tocItems} variant="sidebar" />
        </aside>

        <div className="min-w-0">
          <div className="mb-8 lg:hidden">
            <LegalToc items={tocItems} variant="mobile" />
          </div>

          <div className="max-w-[68ch]">
            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-t border-border/60 py-10 first:border-t-0 first:pt-0"
              >
                <div className="group mb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-[11px] font-semibold tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-raleway text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {section.title}
                  </h2>
                  <a
                    href={`#${section.id}`}
                    aria-label={`Link to ${section.title}`}
                    className="text-muted-foreground opacity-0 transition-opacity hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
                  >
                    <Hash className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
                <div className="space-y-4 text-[15px] leading-7 text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-foreground/30 [&_a]:underline-offset-4 [&_a]:transition-colors [&_strong]:font-semibold [&_strong]:text-foreground hover:[&_a]:decoration-foreground">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Document footer: related policies + back to top */}
          <div className="mt-14 flex max-w-[68ch] flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">Last updated {lastUpdated}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <span className="text-muted-foreground/70">Related</span>
              {POLICIES.filter((p) => p.slug !== slug).map((policy) => (
                <Link
                  key={policy.slug}
                  href={policy.href}
                  className="font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {policy.label}
                </Link>
              ))}
              <a href="#top" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 space-y-2.5 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-1 [&>li]:before:top-[0.7em] [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-foreground/40 [&>li]:before:content-['']">
      {children}
    </ul>
  );
}
