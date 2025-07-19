// components/PricingSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import { ArrowRight, Check, Zap, Crown } from 'lucide-react';
import { PricingTier } from '@/lib/types'; // Import the type

const PricingSection = () => {
  const [emailVolume, setEmailVolume] = useState(5000);

  // Calculate price for pro plan (free for first 100 emails, then $0.001 per email)
  const calculatePrice = (volume: number) => {
    if (volume <= 100) return 0;
    return Math.round((volume - 100) * 0.001 * 100) / 100; // Round to 2 decimal places
  };

  const proPrice = calculatePrice(emailVolume);

  const pricingPlans: (PricingTier & { isFree?: boolean; price: number })[] = [
    {
      name: 'Free',
      subtitle: 'Perfect for getting started',
      price: 0,
      description: 'Get started with essential email features',
      icon: Zap,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderGradient: 'from-blue-400 to-cyan-400',
      features: [
        '100 emails/month',
        'Basic analytics',
        'Email support',
        'API access',
        'Template library',
      ],
      highlight: false,
      badge: 'Free Forever',
      isFree: true,
    },
    {
      name: 'Pro',
      subtitle: 'Scale as you grow',
      price: proPrice,
      description: 'Pay only for what you use',
      icon: Crown,
      gradient: 'from-indigo-500/20 to-purple-500/20',
      borderGradient: 'from-indigo-400 to-purple-400',
      features: [
        'First 100 emails free',
        '$0.001 per additional email',
        'Advanced analytics',
        'Priority support',
        'Custom domains',
        'Webhooks',
        'Team collaboration',
        'A/B testing',
      ],
      highlight: true,
      badge: 'Most Popular',
      isFree: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-br from-black via-indigo-950/20 to-black py-32 text-white"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.05] to-rose-500/[0.08]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '400% 400%',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl leading-relaxed text-white/60 text-xl">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">
              Calculate Your Costs
            </h3>
            <div className="space-y-6">
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Monthly Email Volume:{' '}
                  <NumberFlow
                    value={emailVolume}
                    format={{ notation: 'compact' }}
                    className="font-bold text-white"
                  />
                </label>
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={emailVolume}
                  onChange={(e) => setEmailVolume(Number(e.target.value))}
                  className="slider h-2 w-full appearance-none cursor-pointer rounded-lg bg-gray-700"
                />
                <div className="mt-2 flex justify-between text-xs text-gray-400">
                  <span>100</span>
                  <span>50K</span>
                  <span>100K</span>
                </div>
              </div>
              <div className="rounded-xl bg-white/5 p-4 text-center">
                <div className="mb-1 text-sm text-gray-300">Monthly Cost</div>
                <div className="text-3xl font-bold text-white">
                  $
                  <NumberFlow
                    value={proPrice}
                    format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                  />
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  {emailVolume <= 100
                    ? 'Free tier'
                    : `$${((emailVolume - 100) * 0.001).toFixed(3)} per extra email`}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-20 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`relative h-full overflow-hidden rounded-3xl border p-8 backdrop-blur-xl ${
                  plan.highlight
                    ? 'border-indigo-400/50 bg-gradient-to-br from-white/[0.12] to-white/[0.04]'
                    : 'border-white/[0.15] bg-gradient-to-br from-white/[0.08] to-white/[0.02]'
                }`}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {plan.badge && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1 text-xs font-medium text-white">
                    {plan.badge}
                  </div>
                )}

                <div className="relative z-10">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br ${plan.gradient}`}
                  >
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <p className="mb-4 text-sm text-white/60">
                    {plan.subtitle}
                  </p>
                  <p className="mb-6 text-white/80">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      {plan.isFree ? (
                        <span className="text-4xl font-bold text-white">
                          Free
                        </span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-white">
                            $
                            <NumberFlow
                              value={plan.price}
                              format={{
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }}
                            />
                          </span>
                          <span className="text-white/60">/month</span>
                        </>
                      )}
                    </div>
                    {!plan.isFree && (
                      <div className="text-sm text-gray-400">
                        Based on{' '}
                        <NumberFlow
                          value={emailVolume}
                          format={{ notation: 'compact' }}
                        />{' '}
                        emails/month
                      </div>
                    )}
                  </div>

                  <div className="mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 py-1.5"
                      >
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-green-400/30 bg-green-500/20">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span className="text-sm text-white/80">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full rounded-xl py-4 px-6 font-medium transition-all ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-white/[0.15] bg-white/[0.08] text-white hover:border-white/[0.25] hover:bg-white/[0.12]'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;