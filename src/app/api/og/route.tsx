import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Decode and parse parameters
    const title = decodeURIComponent(searchParams.get('title') || 'Blog Post Title');
    const author = decodeURIComponent(searchParams.get('author') || 'SendinCraft Team');
    const readingTime = searchParams.get('readTime') || '5';

    // Load background image
    const backgroundImage = await fetch(
      new URL('https://sendincraft.com/og-blog.jpg', import.meta.url)
    ).then(res => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            position: 'relative',
            backgroundImage: `url(data:image/jpeg;base64,${Buffer.from(backgroundImage).toString('base64')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          }}
        >
          {/* Semi-transparent overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          />
          
          {/* Content Container */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '80px',
              width: '100%',
              height: '100%',
            }}
          >
            {/* Title */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 700,
                lineHeight: 1.2,
                maxWidth: '80%',
                marginBottom: '40px',
                wordBreak: 'break-word',
              }}
            >
              {title}
            </h1>
            
            {/* Author and Reading Time */}
            <div
              style={{
                fontSize: '36px',
                opacity: 0.8,
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <span>{author}</span>
              <span style={{ opacity: 0.6 }}>•</span>
              <span>{readingTime} min read</span>
            </div>
            
            {/* SendinCraft Watermark */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '80px',
                fontSize: '36px',
                fontWeight: 700,
                opacity: 0.6,
              }}
            >
              SendinCraft
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('OG Image Generation Error:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}