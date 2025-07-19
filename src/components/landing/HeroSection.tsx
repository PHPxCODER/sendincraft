import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navigation from './Navigation';
import Terminal from './Terminal';
import { AnimatedGroup } from '@/components/ui/animated-group'; // Import AnimatedGroup
import { TextEffect } from '@/components/ui/text-effect'; // Import TextEffect
import { Variants, Transition } from 'framer-motion';

// Define the transition variants similar to the reference
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
    } as Transition, // Explicitly cast to Transition
  },
};

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute -right-60 -top-10 z-0 flex flex-col items-end blur-xl">
        <div className="z-1 h-[10rem] w-[60rem] rounded-full bg-gradient-to-b from-purple-600 to-sky-600 blur-[6rem]"></div>
        <div className="z-1 h-[10rem] w-[90rem] rounded-full bg-gradient-to-b from-pink-900 to-yellow-400 blur-[6rem]"></div>
        <div className="z-1 h-[10rem] w-[60rem] rounded-full bg-gradient-to-b from-yellow-600 to-sky-500 blur-[6rem]"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Apply AnimatedGroup to the entire block of elements that should animate together */}
        <AnimatedGroup variants={{ item: itemVariants }}>
          <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            {/* Apply TextEffect to the text inside the announcement */}
            <TextEffect
              as="span"
              className="text-sm font-medium text-white"
              preset="fade" // Or 'slide', 'blur', etc.
            >
              Developer-First Email Platform
            </TextEffect>
            <ArrowRight className="h-4 w-4 text-white" />
          </div>

          <div className="container mx-auto mt-12 px-4 text-center">
            {/* Apply TextEffect to the main heading */}
            <TextEffect
              as="h1"
              className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
              preset="blur" // Use the 'blur' preset for the heading
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
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                Built for developers who demand reliability. Send transactional
                emails with unmatched delivery rates and developer experience.
              </p>
            </AnimatedGroup>

            {/* Apply AnimatedGroup to the buttons */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75, // Adjust delay for buttons
                    },
                  },
                },
                item: itemVariants, // Use the defined itemVariants
              }}
              className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              {/* Each button will be a child of AnimatedGroup and inherit the item animation */}
              <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                Start Free Trial
              </button>
              <button className="h-12 rounded-full border border-gray-600 px-8 text-base font-medium text-white hover:bg-white/10">
                View Documentation
              </button>
            </AnimatedGroup>
          </div>

          {/* Terminal component wrapped in AnimatedGroup */}
          <AnimatedGroup
            variants={{ item: itemVariants }}
            className="relative mx-auto my-20 w-full max-w-6xl"
          >
            <div className="absolute inset-0 rounded bg-white opacity-20 shadow-lg blur-[10rem]" />
            <Terminal />
          </AnimatedGroup>
        </AnimatedGroup>
      </div>
    </div>
  );
};

export default HeroSection;