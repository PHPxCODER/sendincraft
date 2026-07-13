'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, BarChart3, Shield, Zap, Mail, GitBranch } from 'lucide-react';
import { AdditionalFeature } from '@/lib/types';

const FeaturesSection = () => {
  const features: AdditionalFeature[] = [
    {
      icon: Code,
      title: 'Developer-First API',
      description:
        'RESTful API with comprehensive SDKs for Node.js, Python, PHP, Ruby, and more. Get started in minutes.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Sub-second email delivery with 99.9% uptime powered by AWS SES infrastructure.',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description:
        'Track deliverability, opens, clicks, bounces with detailed insights and webhook notifications.',
    },
    {
      icon: Shield,
      title: 'Authenticated & Secure',
      description:
        'DKIM, SPF, and DMARC authentication with TLS encryption in transit for every message you send.',
    },
    {
      icon: Mail,
      title: 'Smart Templates',
      description:
        'Responsive email templates with dynamic content, so your transactional mail looks right everywhere.',
    },
    {
      icon: GitBranch,
      title: 'Easy Integration',
      description:
        'Drop-in integration with popular frameworks and platforms. Works with your existing stack.',
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-raleway text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to send email
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful building blocks for developers and growing teams, without the operational overhead.
            </p>
          </motion.div>
        </div>

        {/* One cohesive module with hairline separators, not floating cards */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-card p-8 transition-colors duration-300 hover:bg-muted/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-foreground">
                <feature.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-raleway text-lg font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/waitlist"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
          <Link
            href="/docs"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-8 text-base font-medium text-foreground transition-colors duration-200 hover:bg-muted/50"
          >
            Read the docs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
