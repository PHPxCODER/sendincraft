/* eslint-disable @next/next/no-img-element */
"use client"
import NumberFlow from '@number-flow/react';
import { PurpleThickCheck, ThickCheck } from '../icons/icons';
import { cn } from '@/lib/utils';
import { useState } from 'react';

// Usage-based INR pricing: ₹0.05/email for the first 50k a month, ₹0.04/email after.
const TIER_THRESHOLD = 50_000;
const TIER_1_RATE = 0.05;
const TIER_2_RATE = 0.04;

function estimateMonthlyCost(volume: number) {
  if (volume <= TIER_THRESHOLD) return volume * TIER_1_RATE;
  return TIER_THRESHOLD * TIER_1_RATE + (volume - TIER_THRESHOLD) * TIER_2_RATE;
}

const VOLUME_PRESETS = [
  { label: '10K', value: 10_000 },
  { label: '50K', value: 50_000 },
  { label: '100K', value: 100_000 },
  { label: '250K', value: 250_000 },
];

const INR = { style: 'currency', currency: 'INR', maximumFractionDigits: 0 } as const;

const PRICING_CONSTANTS = {
  FREE_FEATURES: [
    '100 emails per month',
    'Transactional Email API & SMTP relay',
    'Delivery events & webhooks',
    'Automatic bounce & complaint suppression',
  ],
  PRO_FEATURES: [
    'Everything in Free',
    'Pay only for what you send',
    'Unlimited verified sending domains',
    'Full analytics & delivery history',
    'One-click unsubscribe (RFC 8058)',
  ],
  ENTERPRISE_FEATURES: [
    'Everything in Pro',
    'Committed-volume pricing',
    'Dedicated sending IP',
    'DKIM, SPF & DMARC setup support',
    'Priority support & onboarding',
    'Custom rate limits and SLA',
  ],
  CARD_STYLES: {
    base: 'relative flex-1 min-w-[280px] max-w-[384px] min-h-[630px] flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-[#2D2D2D] bg-zinc-900/50 p-5',
    header: 'inline-flex items-center justify-start gap-2.5 rounded-lg p-2',
    headerFree: 'bg-[#422F10]',
    headerPro: 'bg-[#B183FF]',
    divider: 'h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-white/10',
  },
} as const;

interface FeatureItemProps {
  text: string;
  isPro?: boolean;
}

const FeatureItem = ({ text, isPro }: FeatureItemProps) => (
  <div className="inline-flex items-center justify-start gap-2.5">
    <div className="flex h-5 w-5 items-start justify-start gap-3 rounded-[125px] bg-white/10 p-[5px]">
      {isPro ? (
        <PurpleThickCheck className="relative left-[1px] top-[1px]" />
      ) : (
        <ThickCheck className="relative left-[1px] top-[1px]" />
      )}
    </div>
    <div className="justify-center text-sm font-normal leading-normal text-white lg:text-base">
      {text}
    </div>
  </div>
);

export default function PricingCard() {
  const [volume, setVolume] = useState(50_000);
  const monthlyEstimate = Math.round(estimateMonthlyCost(volume));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative z-20 mb-8 flex items-center justify-center">
        <p className="text-sm text-white/70">Pay only for what you send. No monthly minimums.</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-stretch">
        {/* Free */}
        <div className={PRICING_CONSTANTS.CARD_STYLES.base}>
          <div className="absolute inset-0 z-0 h-full w-full overflow-hidden"></div>

          <div className="relative z-10 flex flex-col items-start justify-start gap-5 self-stretch">
            <div className="flex flex-col items-start justify-start gap-4 self-stretch">
              <div
                className={cn(
                  PRICING_CONSTANTS.CARD_STYLES.header,
                  PRICING_CONSTANTS.CARD_STYLES.headerFree,
                )}
              >
                <div className="relative h-6 w-6">
                  <img
                    src="lock.svg"
                    alt="lock"
                    height={24}
                    width={24}
                    className="relative left-0 h-6 w-6"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                <div className="inline-flex items-end justify-start gap-1 self-stretch">
                  <div className="justify-center text-4xl font-semibold leading-10 text-white">
                    <NumberFlow value={0} format={INR} locales="en-IN" />
                  </div>
                  <div className="flex items-center justify-center gap-2.5 pb-0.5">
                    <div className="justify-center text-sm font-medium leading-tight text-white/40">
                      /month
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  <div className="justify-center self-stretch text-sm font-normal leading-normal text-white opacity-70 lg:text-base">
                    Start with 100 emails a month, ideal for testing and side projects.
                  </div>
                </div>
              </div>
            </div>
            <div className={PRICING_CONSTANTS.CARD_STYLES.divider}></div>
            <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
              {PRICING_CONSTANTS.FREE_FEATURES.map((feature) => (
                <FeatureItem key={feature} text={feature} />
              ))}
            </div>
          </div>
          <button
            onClick={() => (window.location.href = '/waitlist')}
            className="z-30 mt-auto inline-flex h-10 items-center justify-center gap-2.5 self-stretch overflow-hidden rounded-lg bg-[#2D2D2D] p-3 shadow shadow-black/30 outline outline-1 outline-offset-[-1px] outline-[#434343]"
          >
            <div className="flex items-center justify-center gap-2.5 px-1">
              <div className="justify-start text-center font-semibold leading-none text-[#D5D5D5]">
                Join the waitlist
              </div>
            </div>
          </button>
        </div>

        {/* Pro (usage-based) */}
        <div className={cn(PRICING_CONSTANTS.CARD_STYLES.base)}>
          <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
            <img
              src="/pricing-gradient.png"
              alt=""
              className="absolute -right-0 -top-52 h-auto w-full"
              height={535}
              width={535}
              loading="eager"
            />
          </div>

          <div className="absolute inset-x-0 -top-14 h-56 overflow-hidden">
            <div className="absolute inset-0 bg-white/10 mix-blend-overlay blur-[100px]" />
            <img
              className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
              src="/small-pixel.png"
              alt="background effect"
            />
          </div>
          <div className="relative z-10 flex flex-col items-start justify-start gap-5 self-stretch">
            <div className="flex flex-col items-start justify-start gap-4 self-stretch">
              <div
                className={cn(
                  PRICING_CONSTANTS.CARD_STYLES.header,
                  PRICING_CONSTANTS.CARD_STYLES.headerPro,
                )}
              >
                <div className="relative h-6 w-6">
                  <img height={24} width={24} src="zap.svg" alt="Pro" />
                </div>
              </div>

              <div className="flex flex-col items-start justify-start gap-3 self-stretch">
                <div className="inline-flex items-end justify-start gap-1 self-stretch">
                  <div className="justify-center text-4xl font-semibold leading-10 text-white">
                    <NumberFlow value={monthlyEstimate} format={INR} locales="en-IN" />
                  </div>
                  <div className="flex items-center justify-center gap-2.5 pb-0.5">
                    <div className="justify-center text-sm font-medium leading-tight text-white/40">
                      /month est.
                    </div>
                  </div>
                </div>
                <div className="justify-center self-stretch text-sm font-normal leading-normal text-white opacity-70 lg:text-base">
                  ₹0.05 per email, ₹0.04 after 50K a month. Billed only for what you send.
                </div>

                {/* Volume estimator drives the price above via NumberFlow */}
                <div className="self-stretch">
                  <div className="mb-1.5 text-xs font-medium text-white/50">Estimate for emails / month</div>
                  <div className="flex flex-wrap gap-1.5">
                    {VOLUME_PRESETS.map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => setVolume(preset.value)}
                        className={cn(
                          'rounded-md px-2.5 py-1 text-xs font-medium tabular-nums transition-colors',
                          volume === preset.value
                            ? 'bg-white text-black'
                            : 'bg-white/10 text-white/70 hover:bg-white/20',
                        )}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={PRICING_CONSTANTS.CARD_STYLES.divider}></div>
            <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
              {PRICING_CONSTANTS.PRO_FEATURES.map((feature) => (
                <FeatureItem key={feature} text={feature} isPro />
              ))}
            </div>
          </div>
          <button
            onClick={() => (window.location.href = '/waitlist')}
            className="z-30 mt-auto inline-flex h-10 cursor-pointer items-center justify-center gap-2.5 self-stretch overflow-hidden rounded-lg bg-white p-3 outline outline-1 outline-offset-[-1px]"
          >
            <div className="flex items-center justify-center gap-2.5 px-1">
              <div className="justify-start text-center font-semibold leading-none text-black">
                Join the waitlist
              </div>
            </div>
          </button>
        </div>

        {/* Enterprise */}
        <div className={PRICING_CONSTANTS.CARD_STYLES.base}>
          <div className="absolute inset-0 z-0 h-full w-full overflow-hidden"></div>
          <div className="relative z-10 flex flex-col items-start justify-start gap-5 self-stretch">
            <div className="flex flex-col items-start justify-start gap-4 self-stretch">
              <div
                className={cn(
                  PRICING_CONSTANTS.CARD_STYLES.header,
                  PRICING_CONSTANTS.CARD_STYLES.headerFree,
                  'bg-[#B183FF]/60',
                )}
              >
                <div className="relative h-6 w-6">
                  <img height={40} width={40} src="mail-pixel.svg" alt="enterprise" />
                </div>
              </div>

              <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                <div className="inline-flex items-end justify-start gap-1 self-stretch">
                  <div className="justify-center text-4xl font-semibold leading-10 text-white">
                    Custom
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                  <div className="justify-center self-stretch text-sm font-normal leading-normal text-white opacity-70 lg:text-base">
                    Committed-volume pricing for teams sending at scale.
                  </div>
                </div>
              </div>
            </div>
            <div className={PRICING_CONSTANTS.CARD_STYLES.divider}></div>
            <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
              {PRICING_CONSTANTS.ENTERPRISE_FEATURES.map((feature) => (
                <FeatureItem key={feature} text={feature} isPro />
              ))}
            </div>
          </div>
          <button
            className="z-30 mt-auto inline-flex h-10 items-center justify-center gap-2.5 self-stretch overflow-hidden rounded-lg bg-[#2D2D2D] p-3 shadow shadow-black/30 outline outline-1 outline-offset-[-1px] outline-[#434343]"
            onClick={() => (window.location.href = 'mailto:hello@sendincraft.com')}
          >
            <div className="flex items-center justify-center gap-2.5 px-1">
              <div className="justify-start text-center font-semibold leading-none text-[#D5D5D5]">
                Contact sales
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
