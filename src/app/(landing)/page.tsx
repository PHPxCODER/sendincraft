import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import Platforms from '@/components/platforms';
import ProofSection from '@/components/landing/ProofSection';
import LogoList from '@/components/landing/logo-list';
import FeaturesSection from '@/components/landing/FeaturesSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/landing/FAQSection';
import BeamsBackground from "@/components/ui/beams-background";

const SendinCraftLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with BeamsBackground */}
      <BeamsBackground 
        intensity="medium" 
        staticOnMobile={true}
        className="bg-gradient-to-br from-background via-background to-muted/20"
      >
      {/* Hero Section with proper background theming */}
      <div className="min-h-screen pt-20 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        <HeroSection />
      </div>
      </BeamsBackground>
      
      {/* Developer Platforms Section */}
      <div className="bg-background border-t border-border/50">
        <Platforms />
      </div>
      
      {/* Trust Indicators */}
      <div className="bg-gradient-to-b from-background to-muted/10">
        <LogoList
          className="border-b border-border/30"
          title="Trusted by developers from the world's leading organizations"
        />
      </div>
      
      {/* Social Proof and Stats */}
      <div className="bg-muted/5">
        <ProofSection />
      </div>
      
      {/* Features Section - Developer focused */}
      <div className="bg-gradient-to-br from-muted/5 via-background to-muted/10">
        <FeaturesSection />
      </div>
      
      {/* Testimonials from developers */}
      <div className="bg-gradient-to-br from-muted/10 via-background to-muted/5">
        <TestimonialsSection />
      </div>
      
      {/* FAQ Section */}
      <div className="bg-background">
        <FAQSection />
      </div>
      
      {/* Footer */}
      <div className="bg-gradient-to-t from-muted/20 to-background border-t border-border/30">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default SendinCraftLanding;