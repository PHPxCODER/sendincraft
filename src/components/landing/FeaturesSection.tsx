'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart3, Shield, Zap, Mail, GitBranch } from 'lucide-react';
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
      title: 'Enterprise Security',
      description:
        'DKIM/SPF authentication, TLS encryption, and SOC 2 compliance for maximum security.',
    },
    {
      icon: Mail,
      title: 'Smart Templates',
      description:
        'Beautiful, responsive email templates with dynamic content and A/B testing capabilities.',
    },
    {
      icon: GitBranch,
      title: 'Easy Integration',
      description:
        'Seamless integration with popular frameworks and platforms. Works with your existing stack.',
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/5 via-background to-muted/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Everything You Need to Send Emails
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Powerful features designed for modern developers and growing
              businesses.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:border-border/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="h-12 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-sm">
              Start Building Today
            </button>
            <button className="h-12 rounded-lg border border-border bg-background/50 backdrop-blur-sm px-8 text-base font-medium text-foreground hover:bg-muted/50 transition-colors duration-200">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;