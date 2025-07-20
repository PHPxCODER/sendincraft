'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const ProofSection = () => {
  const stats = [
    { value: '99.9%', label: 'Delivery Rate' },
    { value: '50ms', label: 'Average Response Time' },
    { value: '10M+', label: 'Emails Sent Monthly' },
    { value: '500+', label: 'Happy Developers' },
  ];

  return (
    <>
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-raleway mb-4 text-3xl font-bold text-white">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-gray-400">
              Join thousands of developers who rely on SendinCraft
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-2 text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-Based Velocity Section */}
      <section className="bg-black py-16 overflow-hidden">
        <div className="relative flex w-full flex-col items-center justify-center">
          <VelocityScroll 
            className="text-white text-4xl md:text-6xl font-bold"
            defaultVelocity={1}
          >
            Powerful Email API • Fast Delivery • Developer-Friendly • Reliable Infrastructure • Transactional Emails • Marketing Campaigns • Open-Source Platform • 
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
      </section>
    </>
  );
};

export default ProofSection;