import { source } from '@/lib/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getGithubLastEdit } from 'fumadocs-core/server';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const slugPath = params.slug && params.slug.length > 0
    ? params.slug.join('/')
    : 'index';

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const lastModified = await getGithubLastEdit({
    owner: 'PHPxCODER',
    repo: 'sendincraft',
    path: `content/docs/${slugPath}.mdx`,
    token: process.env.GIT_TOKEN ? `Bearer ${process.env.GIT_TOKEN}` : undefined,
  });

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}
      tableOfContent={{
        style: 'clerk',
      }}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
        {lastModified && (
          <div className="not-prose mt-2 pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Last updated {formatDate(lastModified)}</span>
            </div>
            <Button variant="ghost" size="sm" className="gap-2 w-fit" asChild>
              <Link href={`https://github.com/PHPxCODER/sendincraft/edit/main/content/docs/${slugPath}.mdx`} target="_blank" rel="noopener noreferrer">
                Edit on GitHub
                <ArrowRight className="w-3 h-3" />
              </Link>
            </Button>
          </div>
        )}
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}