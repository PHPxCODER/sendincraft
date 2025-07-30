import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import Platforms from '@/components/platforms';
import ProofSection from '@/components/landing/ProofSection';
import LogoList from '@/components/landing/logo-list';
import FeaturesSection from '@/components/landing/FeaturesSection';
import PricingSection from '@/components/landing/PricingSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/landing/FAQSection';
import Footer from '@/components/landing/Footer';

const SendinCraftLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation is already part of HeroSection */}
      <HeroSection />
      <Platforms />
      <LogoList
        className="border-smooth border-b"
        title="Loved by developers from the world's leading organizations"
      />
      <ProofSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default SendinCraftLanding;