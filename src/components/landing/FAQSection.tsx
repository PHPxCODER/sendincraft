'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/lib/types'; // Import the type

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How quickly can I start sending emails?',
      answer:
        'You can start sending emails within minutes. Simply sign up, verify your domain, and use our API or dashboard to send your first email.',
    },
    {
      question: "What's your email delivery rate?",
      answer:
        'We maintain a 99.9% delivery rate through our optimized infrastructure, reputation management, and direct relationships with major email providers.',
    },
    {
      question: 'Do you offer a free tier?',
      answer:
        'Yes! Our Starter plan includes 1,000 free emails per month with all essential features. Perfect for testing and small projects.',
    },
    {
      question: 'Can I use my own domain?',
      answer:
        'Absolutely. You can send emails from your own domain with proper DNS configuration. We provide step-by-step guides for domain setup.',
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'We offer email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers.',
    },
  ];

  return (
    <section id="faq" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;