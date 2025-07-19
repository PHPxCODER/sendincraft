import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import ProofSection from '@/components/landing/ProofSection';
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