/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '@/lib/types';

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      role: 'Senior Backend Developer',
      company: 'TechFlow',
      content:
        "SendinCraft's API is incredibly intuitive. We migrated from our previous provider in just 30 minutes and saw immediate improvements in delivery rates. The webhook system is rock solid.",
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      content:
        'The developer experience is unmatched. Real-time analytics, comprehensive SDKs, and excellent documentation. Our email deliverability increased from 85% to 99.2%.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Emily Watson',
      role: 'Full Stack Developer',
      company: 'GrowthCorp',
      content:
        'Finally, an email service built for developers. The REST API is clean, the SDKs are well-maintained, and the bounce handling is automatic. Worth every penny.',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden"
    >
      {/* Background with proper theming */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Loved by Developers Worldwide
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Join thousands of developers who trust SendinCraft for their transactional emails.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:border-border/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="mb-6 flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full border-2 border-border"
                />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              {/* Subtle accent border */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Social proof numbers */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Delivery Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50ms</div>
            <div className="text-sm text-muted-foreground">Average Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10M+</div>
            <div className="text-sm text-muted-foreground">Emails/Month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Happy Developers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;