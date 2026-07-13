'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const ProofSection = () => {
  // Real, verifiable capabilities instead of fabricated usage metrics.
  const facts = [
    { value: 'AWS SES', label: 'Delivery infrastructure' },
    { value: 'DKIM, SPF, DMARC', label: 'Authenticated sending' },
    { value: 'RFC 8058', label: 'One-click unsubscribe' },
    { value: 'Automatic', label: 'Bounce & complaint suppression' },
  ];

  return (
    <>
      {/* Intentional dark band (fixed, does not invert) */}
      <section className="bg-zinc-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-raleway mb-4 text-3xl font-bold">
              Serious about the inbox
            </h2>
            <p className="text-zinc-400">
              The infrastructure and standards SendinCraft is built on.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-2 text-2xl font-bold sm:text-3xl">
                  {fact.value}
                </div>
                <div className="text-sm text-zinc-400">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-Based Velocity Section */}
      <section className="bg-zinc-950 py-16 overflow-hidden">
        <div className="relative flex w-full flex-col items-center justify-center">
          <VelocityScroll 
            className="text-white text-4xl md:text-6xl font-bold"
            defaultVelocity={1}
          >
            Powerful Email API • Fast Delivery • Developer-Friendly • Reliable Infrastructure • Transactional Emails • Marketing Campaigns • Open-Source Platform • 
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-950"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-950"></div>
        </div>
      </section>
    </>
  );
};

export default ProofSection;