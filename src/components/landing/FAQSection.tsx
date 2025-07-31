'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/lib/types';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How quickly can I integrate SendinCraft?',
      answer:
        'Most developers integrate SendinCraft in under 30 minutes. Our RESTful API and comprehensive SDKs for Node.js, Python, PHP, and Ruby make integration straightforward. Check our quick-start guides for step-by-step instructions.',
    },
    {
      question: "What's your email delivery rate and infrastructure?",
      answer:
        'We maintain a 99.9% delivery rate powered by AWS SES infrastructure. Our global network ensures reliable delivery with sub-second response times and automatic bounce handling.',
    },
    {
      question: 'Do you offer a free tier for developers?',
      answer:
        'Yes! Our free tier includes 100 emails per month with full access to our API, webhooks, and analytics. Perfect for development, testing, and small projects.',
    },
    {
      question: 'What SDKs and programming languages do you support?',
      answer:
        'We provide official SDKs for Node.js, Python, PHP, Ruby, Go, and .NET. We also have community-maintained libraries for other languages. All SDKs include TypeScript support and comprehensive documentation.',
    },
    {
      question: 'How do webhooks work and what events can I track?',
      answer:
        'Our webhooks provide real-time notifications for delivery, bounce, complaint, and open events. Configure webhook endpoints in your dashboard and receive JSON payloads with detailed event data for automated processing.',
    },
    {
      question: 'What kind of support do you provide to developers?',
      answer:
        'We offer comprehensive documentation, code examples, and email support for all plans. Our developer community and detailed API reference help you solve integration challenges quickly.',
    },
  ];

  return (
    <section id="faq" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Everything you need to know about integrating SendinCraft.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/20"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold text-foreground text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Still have questions?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Our developer support team is here to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-12 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-sm">
                Contact Support
              </button>
              <button className="h-12 rounded-lg border border-border bg-background/50 backdrop-blur-sm px-8 text-base font-medium text-foreground hover:bg-muted/50 transition-colors duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
  
}
export default FAQSection;