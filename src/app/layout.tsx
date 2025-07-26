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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${raleway.variable} font-plus-jakarta-sans antialiased`}
      ><RootProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          ><TopLoader>
            {children}
          </TopLoader>
          </ThemeProvider>
        </RootProvider>
      </body>
    </html>
  );
}
