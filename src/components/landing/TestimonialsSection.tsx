/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '@/lib/types'; // Import the type

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      company: 'TechFlow',
      content:
        "SendinCraft's API is incredibly intuitive. We migrated from our previous provider in just 30 minutes and saw immediate improvements in delivery rates.",
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      content:
        'The developer experience is unmatched. Real-time analytics and webhooks make it easy to track and optimize our email campaigns.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager',
      company: 'GrowthCorp',
      content:
        '99.9% delivery rate isn\'t just a promise - it\'s what we actually see. Our user engagement has increased significantly since switching.',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-black via-gray-900 to-black py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            What Developers Say
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4 flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="italic text-gray-300">
                &quot;{testimonial.content}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;