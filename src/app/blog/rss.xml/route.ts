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
    description: 'Latest insights, best practices, and tutorials for transactional email development. Learn about SPF, DKIM, DMARC, email security, and more.',
    language: 'en',
    image: `${baseUrl}/og-blog.jpg`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: 'All rights reserved 2025, SendinCraft',
    generator: 'SendinCraft Blog',
    feedLinks: {
      rss2: `${baseUrl}/blog/rss.xml`,
      json: `${baseUrl}/blog/feed.json`,
      atom: `${baseUrl}/blog/atom.xml`,
    },
    author: {
      name: 'SendinCraft Team',
      email: 'hello@sendincraft.com',
      link: baseUrl,
    },
  });

  // Get all blog posts and sort by date (newest first)
  const posts = blog.getPages().sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  // Add each post to the feed
  for (const page of posts) {
    feed.addItem({
      id: `${baseUrl}${page.url}`,
      title: page.data.title,
      description: page.data.description || `Read ${page.data.title} by ${page.data.author} on the SendinCraft blog.`,
      link: `${baseUrl}${page.url}`,
      date: new Date(page.data.date),
      published: new Date(page.data.date),
      author: [
        {
          name: page.data.author,
          email: 'hello@sendincraft.com',
          link: baseUrl,
        },
      ],
      category: [
        {
          name: 'Email Development',
          domain: baseUrl,
        },
        {
          name: 'Transactional Email',
          domain: baseUrl,
        },
      ],
    });
  }

  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}