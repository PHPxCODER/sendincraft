// import { ProBanner } from "@/components/ProBanner";
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default async function LandingLayout({
  children,
}: LandingLayoutProps) {
  return (
    <>
      {/* <ProBanner /> */}
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}