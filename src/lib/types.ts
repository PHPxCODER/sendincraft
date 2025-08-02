// types.ts
import { LucideIcon } from 'lucide-react';

export interface PricingTier {
  name: string;
  subtitle: string;
  // Make price flexible: either a single number or an object with monthly/yearly
  price: number | { monthly: number; yearly: number };
  description: string;
  icon: LucideIcon; // Use LucideIcon for type
  gradient: string;
  borderGradient: string;
  features: string[];
  highlight: boolean;
  badge: string | null;
  ariaLabel?: string;
}

export interface AdditionalFeature {
  icon: LucideIcon; // Use LucideIcon for type
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface FooterLink {
  title: string;
  href: string;
  icon?: LucideIcon; // Optional icon for social links
  external?: boolean;
}

export interface FooterSection {
  label: string;
  links: FooterLink[];
}