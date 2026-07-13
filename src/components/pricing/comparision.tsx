/* eslint-disable @next/next/no-img-element */
import { Plus, PurpleThickCheck, ThickCheck } from '../icons/icons';

export default function Comparision() {
  return (
    <div className="relative mx-auto mt-20 hidden max-w-[1200px] flex-col items-center justify-center md:flex">
      <Plus className="absolute left-[-5px] top-[-6px] mb-4 h-3 w-3 fill-white" />
      <Plus className="absolute bottom-[-21px] left-[-5px] mb-4 h-3 w-3 fill-white" />
      <Plus className="absolute right-[-5px] top-[-6px] mb-4 h-3 w-3 fill-white" />
      <Plus className="absolute bottom-[-21px] right-[-5px] mb-4 h-3 w-3 fill-white" />
      <div className="inline-flex items-start justify-start self-stretch border border-white/5">
        <div className="inline-flex flex-1 flex-col items-start justify-start">
          <div className="flex h-52 flex-col items-start justify-start gap-2 self-stretch border-b border-white/5 p-8">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="justify-center text-lg font-semibold leading-7 text-white">
                Compare Features
              </div>
            </div>
            <p className="text-sm text-white/70">See what you get in each of our plans</p>
          </div>
          <div className="flex flex-col items-start justify-start self-stretch pb-6">
            <div className="inline-flex h-16 items-center justify-start gap-[5px] self-stretch px-8">
              <div className="justify-center text-lg leading-normal text-white">Feature</div>
              <div className="relative top-[5px] h-5 w-5">
                <p className="relative flex h-3 w-3 items-center justify-center rounded-full bg-white/50 text-[11px] font-medium text-black">
                  ?
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="flex flex-col items-start justify-center gap-1 self-stretch px-8 py-[15.5px]">
                <div className="inline-flex h-6 items-center justify-start self-stretch">
                  <div className="justify-center text-sm leading-tight text-white/70">
                    Transactional API & SMTP{' '}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-1 self-stretch px-8 py-[15.5px]">
                <div className="inline-flex h-6 items-center justify-start self-stretch">
                  <div className="justify-center text-sm leading-tight text-white/70">
                    Delivery events & webhooks{' '}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-1 self-stretch px-8 py-[15.5px]">
                <div className="inline-flex h-6 items-center justify-start self-stretch">
                  <div className="justify-center text-sm leading-tight text-white/70">
                    Real-time analytics{' '}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-1 self-stretch px-8 py-[15.5px]">
                <div className="inline-flex h-6 items-center justify-start self-stretch">
                  <div className="justify-center text-sm leading-tight text-white/70">
                    Automatic suppression{' '}
                  </div>
                </div>
              </div>
              <div className="flex h-14 flex-col items-start justify-center gap-1 self-stretch px-8">
                <div className="inline-flex h-6 items-center justify-start self-stretch">
                  <div className="justify-center text-sm leading-tight text-white/70">
                    Dedicated sending IP{' '}
                  </div>
                </div>
              </div>
              <div className="flex h-14 flex-col items-start justify-center gap-1 self-stretch px-8">
                <div className="inline-flex h-6 items-center justify-start self-stretch">
                  <div className="justify-center text-sm leading-tight text-white/70">
                    Priority support{' '}
                  </div>
                </div>
              </div>
              <div className="flex h-14 flex-col items-start justify-center gap-1 self-stretch px-8">
                <div className="inline-flex h-6 items-center justify-start self-stretch">
                  <div className="justify-center text-sm leading-tight text-white/70">
                    Custom rate limits{' '}
                  </div>
                </div>
              </div>
              <div className="flex h-14 flex-col items-start justify-center gap-1 self-stretch px-8">
                <div className="inline-flex h-6 items-center justify-start self-stretch">
                  <div className="justify-center text-sm leading-tight text-white/70">Price</div>
                </div>
              </div>
              <div className="flex h-14 flex-col items-start justify-center gap-1 self-stretch px-8">
                <div className="inline-flex h-6 items-center justify-start self-stretch">
                  <div className="justify-center text-sm leading-tight text-white/70">
                    Best for{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-1 flex-col items-center justify-start">
          <div className="flex flex-col items-start justify-start gap-14 self-stretch border-b border-l border-r border-white/5 bg-[#121212] px-8 py-[23.5px]">
            <div className="flex flex-col items-start justify-start gap-5 self-stretch">
              <div className="flex flex-col items-start justify-center gap-3 self-stretch">
                <div className="inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-yellow-950 p-2">
                  <div className="relative h-6 w-6 overflow-hidden">
                    <img
                      src="/lock.svg"
                      alt="lock"
                      className="h-full w-full"
                      height={24}
                      width={24}
                    />
                  </div>
                </div>
                <div className="justify-center text-2xl font-semibold leading-loose text-white">
                  Free Plan
                </div>
              </div>
              <button
                className="inline-flex h-[40px] items-center justify-center gap-2.5 self-stretch overflow-hidden rounded-lg bg-gradient-to-l from-white/0 to-white/10 p-[3.5px] outline outline-1 outline-offset-[-1px] outline-white/10"
              >
                <div className="flex items-center justify-center">
                  <div className="justify-start text-center text-base font-semibold leading-none text-white/80">
                    Join the waitlist
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start self-stretch pb-6">
            <div className="inline-flex h-16 items-center justify-start gap-[5px] self-stretch px-4" />
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-white/20 p-1.5">
                    <ThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-white">
                    Included
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-white/20 p-1.5">
                    <ThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-white">
                    Included
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-white/20 p-1.5">
                    <ThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-white">
                    Basic
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-white/20 p-1.5">
                    <ThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-white">
                    Included
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="relative h-6 w-6">
                  <div className="absolute left-[4.80px] top-[12px] h-3.5 w-0 origin-top-left -rotate-90 outline outline-2 outline-offset-[-1px] outline-white/50" />
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="relative h-6 w-6">
                  <div className="absolute left-[4.80px] top-[12px] h-3.5 w-0 origin-top-left -rotate-90 outline outline-2 outline-offset-[-1px] outline-white/50" />
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="relative h-6 w-6">
                  <div className="absolute left-[4.80px] top-[12px] h-3.5 w-0 origin-top-left -rotate-90 outline outline-2 outline-offset-[-1px] outline-white/50" />
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-white/20 p-1.5">
                    <ThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-white">
                    ₹0
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-white/20 p-1.5">
                    <ThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-white">
                    Testing & low volume
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-1 flex-col items-center justify-start">
          <div className="flex flex-col items-start justify-start gap-14 self-stretch border-b border-white/5 bg-[#121212] px-8 py-[23.5px]">
            <div className="flex flex-col items-start justify-start gap-5 self-stretch">
              <div className="flex flex-col items-start justify-center gap-3 self-stretch">
                <div className="inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-[#3F2776] p-2">
                  <div className="relative h-6 w-6 overflow-hidden">
                    <img
                      src="purple-zap.svg"
                      alt="purple-zap"
                      className="h-full w-full"
                      height={24}
                      width={24}
                    />
                  </div>
                </div>
                <div className="justify-center text-2xl font-semibold leading-loose text-white">
                  Pro
                </div>
              </div>
              <button

                className="inline-flex h-[40px] items-center justify-center gap-2.5 self-stretch overflow-hidden rounded-lg bg-gradient-to-l from-white/0 to-white/10 p-[3.5px] outline outline-1 outline-offset-[-1px] outline-white/10"
              >
                <div className="flex items-center justify-center">
                  <div className="justify-start text-center text-base font-semibold leading-none text-white/80">
                    Join the waitlist
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start self-stretch pb-6">
            <div className="inline-flex h-16 items-center justify-start gap-[5px] self-stretch px-4" />
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-violet-400/20 p-1.5">
                    <PurpleThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-violet-400">
                    Included
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-violet-400/20 p-1.5">
                    <PurpleThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-violet-400">
                    Included
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-violet-400/20 p-1.5">
                    <PurpleThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-violet-400">
                    Full history
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-violet-400/20 p-1.5">
                    <PurpleThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-violet-400">
                    Included
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-violet-400/20 p-1.5">
                    <PurpleThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-violet-400">
                    Included
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-violet-400/20 p-1.5">
                    <PurpleThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-violet-400">
                    Included
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-violet-400/20 p-1.5">
                    <PurpleThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-violet-400">
                    Included
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-violet-400/20 p-1.5">
                    <PurpleThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-violet-400">
                    ₹0.05 / email
                  </div>
                </div>
              </div>
              <div className="inline-flex h-14 items-center justify-start gap-2 self-stretch px-8">
                <div className="flex items-center justify-start gap-3">
                  <div className="flex h-6 w-6 items-start justify-start gap-4 rounded-full bg-violet-400/20 p-1.5">
                    <PurpleThickCheck className="h-3 w-3" />
                  </div>
                  <div className="justify-center text-base font-normal leading-normal text-violet-400">
                    Production apps at scale
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
