import type { Metadata } from "next";
import { RootProvider } from 'fumadocs-ui/provider';
import { Plus_Jakarta_Sans, Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import TopLoader from "@/components/TopLoaderWrapper";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: 'swap',
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SendinCraft - Developer-First Transactional Email Service",
  description: "The most reliable and developer-friendly transactional email service. Send emails with lightning-fast delivery, powerful APIs, and 99.9% uptime. Join the waitlist for early access.",
  keywords: ["transactional email", "email API", "developer tools", "email service", "SMTP", "email delivery"],
  authors: [{ name: "SendinCraft Team" }],
  creator: "SendinCraft",
  publisher: "SendinCraft",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sendincraft.com",
    title: "SendinCraft - Developer-First Transactional Email Service",
    description: "The most reliable and developer-friendly transactional email service. Send emails with lightning-fast delivery, powerful APIs, and 99.9% uptime.",
    siteName: "SendinCraft",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SendinCraft - Developer-First Email Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SendinCraft - Developer-First Transactional Email Service",
    description: "The most reliable and developer-friendly transactional email service. Send emails with lightning-fast delivery, powerful APIs, and 99.9% uptime.",
    images: ["/og-image.jpg"],
    creator: "@sendincraft",
  },
  metadataBase: new URL("https://sendincraft.com"),
  alternates: {
    canonical: "/",
    types: {
      'application/rss+xml': [
        {
          title: 'SendinCraft Blog - Email Development Insights',
          url: 'https://sendincraft.com/blog/rss.xml',
        },
      ],
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://sendincraft.com/#organization",
      "name": "SendinCraft",
      "url": "https://sendincraft.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sendincraft.com/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "Developer-first transactional email service with 99.9% uptime and lightning-fast delivery.",
      "email": "hello@sendincraft.com",
      "foundingDate": "2024",
      "founder": {
        "@type": "Organization",
        "name": "RDP Datacenter",
        "url": "https://rdpdatacenter.in"
      },
      "sameAs": [
        "https://twitter.com/sendincraft",
        "https://github.com/sendincraft"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@sendincraft.com",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    },
    // Website
    {
      "@type": "WebSite",
      "@id": "https://sendincraft.com/#website",
      "url": "https://sendincraft.com",
      "name": "SendinCraft",
      "description": "The most reliable and developer-friendly transactional email service. Send emails with lightning-fast delivery, powerful APIs, and 99.9% uptime.",
      "publisher": {
        "@id": "https://sendincraft.com/#organization"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://sendincraft.com/blog?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    // Software Application
    {
      "@type": "SoftwareApplication",
      "@id": "https://sendincraft.com/#software",
      "name": "SendinCraft",
      "description": "Developer-first transactional email service with powerful APIs, real-time analytics, and 99.9% uptime guarantee.",
      "url": "https://sendincraft.com",
      "applicationCategory": "Email Service",
      "operatingSystem": "Web-based",
      "provider": {
        "@id": "https://sendincraft.com/#organization"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "description": "Get started with 100 free emails per month",
          "price": "0",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "0",
            "priceCurrency": "USD",
            "billingIncrement": "monthly"
          }
        },
        {
          "@type": "Offer",
          "name": "Pro Plan",
          "description": "Pay-as-you-go pricing starting at $0.001 per email",
          "price": "0.001",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "0.001",
            "priceCurrency": "USD",
            "unitCode": "email"
          }
        }
      ],
      "featureList": [
        "Transactional Email API",
        "Real-time Analytics",
        "99.9% Uptime",
        "AWS SES Integration",
        "Webhook Support",
        "Email Templates",
        "Domain Authentication",
        "Bounce Handling"
      ]
    },
    // Service
    {
      "@type": "Service",
      "@id": "https://sendincraft.com/#service",
      "name": "Transactional Email Service",
      "description": "Reliable transactional email delivery service for developers and businesses.",
      "provider": {
        "@id": "https://sendincraft.com/#organization"
      },
      "serviceType": "Email Service",
      "areaServed": "Worldwide",
      "audience": {
        "@type": "Audience",
        "audienceType": "Developers, Businesses, SaaS Companies"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SendinCraft Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Free Plan",
            "description": "100 emails per month, perfect for testing",
            "price": "0",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Pro Plan",
            "description": "Pay-per-use pricing for production applications",
            "price": "0.001",
            "priceCurrency": "USD"
          }
        ]
      }
    },
    // FAQ
    {
      "@type": "FAQPage",
      "@id": "https://sendincraft.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can I start sending emails?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can start sending emails within minutes. Simply sign up, verify your domain, and use our API or dashboard to send your first email."
          }
        },
        {
          "@type": "Question",
          "name": "What's your email delivery rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain a 99.9% delivery rate through our optimized infrastructure, reputation management, and direct relationships with major email providers."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer a free tier?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our Free plan includes 100 free emails per month with all essential features. Perfect for testing and small projects."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my own domain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. You can send emails from your own domain with proper DNS configuration. We provide step-by-step guides for domain setup."
          }
        }
      ]
    },
    // BreadcrumbList for main pages
    {
      "@type": "BreadcrumbList",
      "@id": "https://sendincraft.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sendincraft.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://sendincraft.com/about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pricing",
          "item": "https://sendincraft.com/pricing"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Blog",
          "item": "https://sendinraft.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Documentation",
          "item": "https://sendincraft.com/docs"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${raleway.variable} font-plus-jakarta-sans antialiased`}
      >
        <RootProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopLoader>
              {children}
            </TopLoader>
          </ThemeProvider>
        </RootProvider>
      </body>
    </html>
  );
}
