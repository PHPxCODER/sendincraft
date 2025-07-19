'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto mt-6 flex items-center justify-between px-4 py-4">
      <div className="flex items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
          <Send className="h-4 w-4" />
        </div>
        <span className="ml-2 text-xl font-bold text-white">SendinCraft</span>
      </div>

      <div className="hidden items-center space-x-6 md:flex">
        <div className="flex items-center space-x-6">
          <a
            href="#features"
            className="text-sm text-gray-300 hover:text-white"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm text-gray-300 hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-sm text-gray-300 hover:text-white"
          >
            Testimonials
          </a>
          <a href="#faq" className="text-sm text-gray-300 hover:text-white">
            FAQ
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
            Get Started
          </button>
        </div>
      </div>

      <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="sr-only">Toggle menu</span>
        {mobileMenuOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 p-4 md:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <Send className="h-4 w-4" />
                </div>
                <span className="ml-2 text-xl font-bold text-white">
                  SendinCraft
                </span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-6">
              <a href="#features" className="text-lg text-white">
                Features
              </a>
              <a href="#pricing" className="text-lg text-white">
                Pricing
              </a>
              <a href="#testimonials" className="text-lg text-white">
                Testimonials
              </a>
              <a href="#faq" className="text-lg text-white">
                FAQ
              </a>
              <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;