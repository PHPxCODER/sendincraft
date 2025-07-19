'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Twitter, Linkedin, Github } from 'lucide-react';
import { FooterSection } from '@/lib/types'; // Import the type

const Footer = () => {
  const footerLinks: FooterSection[] = [
    {
      label: 'Product',
      links: [
        { title: 'Features', href: '#features' },
        { title: 'Pricing', href: '#pricing' },
        { title: 'Documentation', href: '/docs' },
        { title: 'API Reference', href: '/api' },
      ],
    },
    {
      label: 'Company',
      links: [
        { title: 'About Us', href: '/about' },
        { title: 'Blog', href: '/blog' },
        { title: 'Careers', href: '/careers' },
        { title: 'Contact', href: '/contact' },
      ],
    },
    {
      label: 'Support',
      links: [
        { title: 'Help Center', href: '/help' },
        { title: 'Status', href: '/status' },
        { title: 'Privacy Policy', href: '/privacy' },
        { title: 'Terms of Service', href: '/terms' },
      ],
    },
    {
      label: 'Social',
      links: [
        { title: 'Twitter', href: '#', icon: Twitter },
        { title: 'LinkedIn', href: '#', icon: Linkedin },
        { title: 'GitHub', href: '#', icon: Github },
      ],
    },
  ];

  return (
    <footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute left-1/2 right-1/2 top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <Send className="h-4 w-4" />
            </div>
            <span className="ml-2 text-xl font-bold text-white">
              SendinCraft
            </span>
          </div>
          <p className="text-muted-foreground mt-8 text-sm md:mt-0">
            © {new Date().getFullYear()} SendinCraft. All rights reserved.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section) => (
            <div key={section.label} className="mb-10 md:mb-0">
              <h3 className="text-xs text-white">{section.label}</h3>
              <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="inline-flex items-center text-gray-400 transition-all duration-300 hover:text-white"
                    >
                      {'icon' in link && link.icon && (
                        <link.icon className="me-1 size-4" />
                      )}
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Branding with animation - Fixed positioning */}
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="whitespace-nowrap px-4 text-center text-xs font-inter text-muted-foreground/70"
        >
          Crafted with{' '}
          <span
            className="inline-block text-red-500"
            style={{
              animation: 'smoothPulse 1.5s ease-in-out infinite',
            }}
          >
            ❤
          </span>{' '}
          by{' '}
          <a
            href="https://rdpdatacenter.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary/80 transition-colors duration-200 hover:text-primary"
          >
            RDP Datacenter
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;