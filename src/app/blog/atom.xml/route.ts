import { Feed } from 'feed';
import { blog } from '@/lib/source';
import { NextResponse } from 'next/server';

export const revalidate = false;

const baseUrl = 'https://sendincraft.com';

export function GET() {
  const feed = new Feed({
    title: 'SendinCraft Blog - Email Development Insights',
    id: `${baseUrl}/blog`,
    link: `${baseUrl}/blog`,
    description: 'Latest insights, best practices, and tutorials for transactional email development.',
    language: 'en',
    image: `${baseUrl}/og-blog.jpg`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: 'All rights reserved 2025, SendinCraft',
    author: {
      name: 'SendinCraft Team',
      email: 'hello@sendincraft.com',
      link: baseUrl,
    },
  });

  const posts = blog.getPages().sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  for (const page of posts) {
    feed.addItem({
      id: `${baseUrl}${page.url}`,
      title: page.data.title,
      description: page.data.description || `Read ${page.data.title} by ${page.data.author} on the SendinCraft blog.`,
      link: `${baseUrl}${page.url}`,
      date: new Date(page.data.date),
      author: [
        {
          name: page.data.author,
          email: 'hello@sendincraft.com',
        },
      ],
    });
  }

  return new NextResponse(feed.atom1(), {
    headers: {
      'Content-Type': 'application/atom+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
