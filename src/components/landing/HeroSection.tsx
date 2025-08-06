import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Terminal from './Terminal';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { Variants, Transition } from 'framer-motion';
import BeamsBackground from "@/components/ui/beams-background";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(12px)',
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 1.5,
    } as Transition,
  },
};

const HeroSection = () => {
  return (
    <BeamsBackground 
      intensity="medium" 
      staticOnMobile={true} //default is true, set to false for dynamic beams
      className="relative min-h-screen overflow-hidden pt-20"
    >
      <div className="relative z-10">
        <AnimatedGroup variants={{ item: itemVariants }}>
          <Link href="/waitlist" className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-muted/30 dark:bg-muted/20 backdrop-blur-sm border border-border/50 px-4 py-2 hover:bg-muted/50 transition-colors duration-200">
            <TextEffect
              as="span"
              className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors duration-200"
              preset="fade"
            >
              Developer-First Email Platform
            </TextEffect>
            <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <div className="container mx-auto mt-12 px-4 text-center">
            {/* Main heading optimized for SendinCraft */}
            <TextEffect
              as="h1"
              className="font-raleway mx-auto max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
              preset="blur"
              per="word"
            >
              Transactional Emails That Actually Deliver
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 0.6,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 1,
                    } as Transition,
                  },
                },
              }}
            >
              <p className="mx-auto mt-6 max-w-2xl text-lg font-normal text-muted-foreground">
                Built for developers who demand reliability. Send transactional
                emails with unmatched delivery rates, powerful APIs, and lightning-fast performance.
              </p>
            </AnimatedGroup>

            {/* CTA Buttons Section */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                item: itemVariants,
              }}
              className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              {/* Primary CTA - Main conversion goal */}
              <button className="h-12 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-sm">
                Start Free Trial
              </button>
              
              {/* Secondary CTA - Alternative action */}
              <button className="h-12 rounded-lg border border-border bg-background/50 backdrop-blur-sm px-8 text-base font-medium text-foreground hover:bg-muted/50 transition-colors duration-200">
                View Documentation
              </button>
            </AnimatedGroup>
          </div>

          {/* Terminal Demo with proper background */}
          <AnimatedGroup
            variants={{ item: itemVariants }}
            className="relative mx-auto my-20 w-full max-w-6xl"
          >
            <div className="absolute inset-0 rounded-lg bg-primary/5 dark:bg-primary/10 opacity-20 shadow-lg blur-[10rem]" />
            <Terminal />
          </AnimatedGroup>
        </AnimatedGroup>
      </div>
    </BeamsBackground>
  );
};

export default HeroSection;