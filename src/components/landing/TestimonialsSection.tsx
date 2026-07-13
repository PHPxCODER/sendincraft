'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Gauge, Eye } from 'lucide-react';

// Pre-launch: no real customer testimonials yet. Instead of fabricating quotes,
// this section states the product's real, enforceable commitments.
const principles = [
  {
    icon: ShieldCheck,
    title: 'Permission-first',
    description:
      'You send only to recipients who opted in. We enforce it, which is what keeps your sender reputation clean.',
  },
  {
    icon: Gauge,
    title: 'Deliverability by default',
    description:
      'Automatic bounce and complaint suppression, plus rate monitoring that pauses risky sends before they cause damage.',
  },
  {
    icon: Eye,
    title: 'Transparent by design',
    description:
      'Clear delivery events, one-click unsubscribe, and no dark patterns. What you send is what recipients receive.',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="principles" className="relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-raleway text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built to keep your email trusted
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              SendinCraft is designed around a simple idea: protect the inbox, and your deliverability
              takes care of itself.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-card md:grid-cols-3 md:divide-x md:divide-y-0">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-foreground">
                <principle.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-raleway text-lg font-semibold tracking-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
