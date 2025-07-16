/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Check, 
  Zap, 
  Crown, 
  Shield, 
  Brain,
  Send,
  BarChart3,
  Gauge,
  Code,
  Database,
  Headphones,
  ChevronDown,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

// Types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface PricingTier {
  name: string;
  subtitle: string;
  price: { monthly: number; yearly: number };
  description: string;
  icon: typeof Zap;
  gradient: string;
  borderGradient: string;
  features: string[];
  highlight: boolean;
  badge: string | null;
  ariaLabel?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AdditionalFeature {
  icon: typeof Brain;
  title: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FAQ {
  question: string;
  answer: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

// Navigation Component
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto flex items-center justify-between px-4 py-4 mt-6">
      <div className="flex items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
          <Send className="h-4 w-4" />
        </div>
        <span className="ml-2 text-xl font-bold text-white">SendinCraft</span>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <div className="flex items-center space-x-6">
          <a href="#features" className="text-sm text-gray-300 hover:text-white">Features</a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white">Pricing</a>
          <a href="#testimonials" className="text-sm text-gray-300 hover:text-white">Testimonials</a>
          <a href="#faq" className="text-sm text-gray-300 hover:text-white">FAQ</a>
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
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col p-4 bg-black/95 md:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <Send className="h-4 w-4" />
                </div>
                <span className="ml-2 text-xl font-bold text-white">SendinCraft</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-6">
              <a href="#features" className="text-lg text-white">Features</a>
              <a href="#pricing" className="text-lg text-white">Pricing</a>
              <a href="#testimonials" className="text-lg text-white">Testimonials</a>
              <a href="#faq" className="text-lg text-white">FAQ</a>
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

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0">
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600"></div>
        <div className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">
            Developer-First Email Platform
          </span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div>

        <div className="container mx-auto mt-12 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Transactional Emails That Actually Deliver
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Built for developers who demand reliability. Send transactional emails with unmatched delivery rates and developer experience.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
              Start Free Trial
            </button>
            <button className="h-12 rounded-full border border-gray-600 px-8 text-base font-medium text-white hover:bg-white/10">
              View Documentation
            </button>
          </div>

          <div className="relative mx-auto my-20 w-full max-w-6xl">
            <div className="absolute inset-0 rounded shadow-lg bg-white blur-[10rem] opacity-20" />
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-left text-sm text-green-400 font-mono">
                <div>curl -X POST https://api.sendincraft.com/v1/send \</div>
                <div className="ml-4">-H &quot;Authorization: Bearer YOUR_API_KEY&quot; \</div>
                <div className="ml-4">-H &quot;Content-Type: application/json&quot; \</div>
                <div className="ml-4">-d &apos;{`{`}</div>
                <div className="ml-8">&quot;to&quot;: &quot;hello@sendincraft.com&quot;,</div>
                <div className="ml-8">&quot;subject&quot;: &quot;Welcome to our Platform&quot;,</div>
                <div className="ml-8">&quot;html&quot;: &quot;&lt;h1&gt;Welcome!&lt;/h1&gt;&quot;</div>
                <div className="ml-4">{`}`}&apos;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Proof Section
const ProofSection = () => {
  const stats = [
    { value: "99.9%", label: "Delivery Rate" },
    { value: "50ms", label: "Average Response Time" },
    { value: "10M+", label: "Emails Sent Monthly" },
    { value: "500+", label: "Happy Developers" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Developers Worldwide</h2>
          <p className="text-gray-400">Join thousands of developers who rely on SendinCraft</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Code,
      title: "Developer-First API",
      description: "Simple, intuitive API that gets you sending emails in minutes, not hours."
    },
    {
      icon: Gauge,
      title: "Lightning Fast",
      description: "Sub-second email delivery with our optimized infrastructure."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track opens, clicks, bounces, and more with detailed analytics."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption and data protection."
    },
    {
      icon: Database,
      title: "Reliable Infrastructure",
      description: "Built on enterprise-grade infrastructure with 99.9% uptime SLA."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help when you need it with our dedicated developer support team."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Everything You Need to Send Emails</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed for modern developers and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const [emailVolume, setEmailVolume] = useState(5000);
  
  // Calculate price for pro plan (free for first 100 emails, then $0.001 per email)
  const calculatePrice = (volume: number) => {
    if (volume <= 100) return 0;
    return Math.round((volume - 100) * 0.001 * 100) / 100; // Round to 2 decimal places
  };

  const proPrice = calculatePrice(emailVolume);

  const pricingPlans = [
    {
      name: "Free",
      subtitle: "Perfect for getting started",
      price: 0,
      description: "Get started with essential email features",
      icon: Zap,
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-400 to-cyan-400",
      features: [
        "100 emails/month",
        "Basic analytics",
        "Email support",
        "API access",
        "Template library"
      ],
      highlight: false,
      badge: "Free Forever",
      isFree: true
    },
    {
      name: "Pro",
      subtitle: "Scale as you grow",
      price: proPrice,
      description: "Pay only for what you use",
      icon: Crown,
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderGradient: "from-indigo-400 to-purple-400",
      features: [
        "First 100 emails free",
        "$0.001 per additional email",
        "Advanced analytics",
        "Priority support",
        "Custom domains",
        "Webhooks",
        "Team collaboration",
        "A/B testing"
      ],
      highlight: true,
      badge: "Most Popular",
      isFree: false
    }
  ];

  return (
    <section id="pricing" className="relative py-32 bg-gradient-to-br from-black via-indigo-950/20 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.05] to-rose-500/[0.08]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300">
              Pricing
            </span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>


        </motion.div>

        <div className="mb-12">
          <div className="max-w-2xl mx-auto p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Calculate Your Costs</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Monthly Email Volume: <NumberFlow value={emailVolume} format={{ notation: 'compact' }} className="text-white font-bold" />
                </label>
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={emailVolume}
                  onChange={(e) => setEmailVolume(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>100</span>
                  <span>50K</span>
                  <span>100K</span>
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-300 mb-1">Monthly Cost</div>
                <div className="text-3xl font-bold text-white">
                  $<NumberFlow value={proPrice} format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }} />
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {emailVolume <= 100 ? 'Free tier' : `$${((emailVolume - 100) * 0.001).toFixed(3)} per extra email`}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`relative h-full p-8 rounded-3xl border backdrop-blur-xl overflow-hidden ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-white/[0.12] to-white/[0.04] border-indigo-400/50'
                    : 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/[0.15]'
                }`}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {plan.badge && (
                  <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    {plan.badge}
                  </div>
                )}

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} border border-white/20 flex items-center justify-center mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{plan.subtitle}</p>
                  <p className="text-white/80 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      {plan.isFree ? (
                        <span className="text-4xl font-bold text-white">Free</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-white">
                            $<NumberFlow value={plan.price} format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }} />
                          </span>
                          <span className="text-white/60">/month</span>
                        </>
                      )}
                    </div>
                    {!plan.isFree && (
                      <div className="text-sm text-gray-400">
                        Based on <NumberFlow value={emailVolume} format={{ notation: 'compact' }} /> emails/month
                      </div>
                    )}
                  </div>

                  <div className="mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 py-1.5">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-4 px-6 rounded-xl font-medium transition-all ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white'
                        : 'bg-white/[0.08] border border-white/[0.15] text-white hover:bg-white/[0.12] hover:border-white/[0.25]'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
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

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      company: "TechFlow",
      content: "SendinCraft's API is incredibly intuitive. We migrated from our previous provider in just 30 minutes and saw immediate improvements in delivery rates.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content: "The developer experience is unmatched. Real-time analytics and webhooks make it easy to track and optimize our email campaigns.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "GrowthCorp",
      content: "99.9% delivery rate isn't just a promise - it's what we actually see. Our user engagement has increased significantly since switching.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Developers Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I start sending emails?",
      answer: "You can start sending emails within minutes. Simply sign up, verify your domain, and use our API or dashboard to send your first email."
    },
    {
      question: "What's your email delivery rate?",
      answer: "We maintain a 99.9% delivery rate through our optimized infrastructure, reputation management, and direct relationships with major email providers."
    },
    {
      question: "Do you offer a free tier?",
      answer: "Yes! Our Starter plan includes 1,000 free emails per month with all essential features. Perfect for testing and small projects."
    },
    {
      question: "Can I use my own domain?",
      answer: "Absolutely. You can send emails from your own domain with proper DNS configuration. We provide step-by-step guides for domain setup."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-white font-semibold">{faq.question}</span>
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
                    animate={{ height: "auto", opacity: 1 }}
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

// Footer Component
const FooterComponent = () => {
  const footerLinks = [
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
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <Send className="h-4 w-4" />
            </div>
            <span className="ml-2 text-xl font-bold text-white">SendinCraft</span>
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
                      className="inline-flex items-center transition-all duration-300 text-gray-400 hover:text-white"
                    >
                      {'icon' in link && link.icon && <link.icon className="me-1 size-4" />}
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
          className="text-center text-xs text-muted-foreground/70 font-inter whitespace-nowrap px-4"
        >
          Crafted with{" "}
          <span
            className="inline-block text-red-500"
            style={{
              animation: "smoothPulse 1.5s ease-in-out infinite",
            }}
          >
            ❤
          </span>
          {" "}by{" "}
          <a
            href="https://rdpdatacenter.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 font-medium hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
          >
            RDP Datacenter
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const SendinCraftLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ProofSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterComponent />
    </div>
  );
};

export default SendinCraftLanding;
