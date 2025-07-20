import type { Metadata } from "next";
import NotFoundPage from "@/components/NotFound";

export const metadata: Metadata = {
  title: "Page Not Found | SendinCraft",
  description: "The page you're looking for doesn't exist. Get back to SendinCraft - the most reliable transactional email service.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Page Not Found | SendinCraft",
    description: "The page you're looking for doesn't exist. Get back to SendinCraft - the most reliable transactional email service.",
    type: "website",
    url: "https://sendincraft.com/404",
  },
  twitter: {
    card: "summary",
    title: "Page Not Found | SendinCraft",
    description: "The page you're looking for doesn't exist. Get back to SendinCraft - the most reliable transactional email service.",
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}