'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/60 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
    <div className="h-14">
      <div className="container mx-auto flex items-center justify-between px-4 h-full">
        <Link href="/" className="flex items-center group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm group-hover:bg-primary/90 transition-colors duration-200">
            <Send className="h-4 w-4" />
          </div>
          <span className="ml-2 text-xl font-bold text-foreground">SendinCraft</span>
        </Link>

        <div className="hidden items-center space-x-6 md:flex">
          <div className="flex items-center space-x-6">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/changelog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Changelog
            </Link>
            <Link 
              href="/blog" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              href="/docs" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Docs
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/waitlist">
              <button className="h-10 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
        </div>
      </div>

      {/* Gradient line - only show when scrolled */}
      {isScrolled && (
        <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
      )}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border shadow-lg md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                <Link 
                  href="#features" 
                  className="flex items-center px-3 py-3 text-base font-medium text-foreground hover:bg-muted/50 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="/pricing" 
                  className="flex items-center px-3 py-3 text-base font-medium text-foreground hover:bg-muted/50 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/changelog" 
                  className="flex items-center px-3 py-3 text-base font-medium text-foreground hover:bg-muted/50 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Changelog
                </Link>
                <Link 
                  href="/blog" 
                  className="flex items-center px-3 py-3 text-base font-medium text-foreground hover:bg-muted/50 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/docs" 
                  className="flex items-center px-3 py-3 text-base font-medium text-foreground hover:bg-muted/50 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Docs
                </Link>
                <div className="pt-3 mt-2 border-t border-border/50">
                  <Link href="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full h-12 rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-md">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;