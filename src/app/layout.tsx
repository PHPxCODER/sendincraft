import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
