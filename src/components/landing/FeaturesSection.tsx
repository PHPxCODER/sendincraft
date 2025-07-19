'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Gauge, BarChart3, Shield, Database, Headphones } from 'lucide-react';
import { AdditionalFeature } from '@/lib/types'; // Import the type

const FeaturesSection = () => {
  const features: AdditionalFeature[] = [ // Use the imported type
    {
      icon: Code,
      title: 'Developer-First API',
      description:
        'Simple, intuitive API that gets you sending emails in minutes, not hours.',
    },
    {
      icon: Gauge,
      title: 'Lightning Fast',
      description: 'Sub-second email delivery with our optimized infrastructure.',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description:
        'Track opens, clicks, bounces, and more with detailed analytics.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOC 2 compliant with end-to-end encryption and data protection.',
    },
    {
      icon: Database,
      title: 'Reliable Infrastructure',
      description:
        'Built on enterprise-grade infrastructure with 99.9% uptime SLA.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description:
        'Get help when you need it with our dedicated developer support team.',
    },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-br from-black via-gray-900 to-black py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Everything You Need to Send Emails
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Powerful features designed for modern developers and growing
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="mb-4 h-12 w-12 text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;