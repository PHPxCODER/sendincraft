import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Mail,
  Globe,
  Building2,
  Code2,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | SendinCraft - Developer-First Email Service",
  description: "Learn about SendinCraft, a SaaS product developed by RDP Datacenter. We provide reliable transactional email services for modern developers.",
  openGraph: {
    title: "About | SendinCraft - Developer-First Email Service",
    description: "Learn about SendinCraft, a SaaS product developed by RDP Datacenter. We provide reliable transactional email services for modern developers.",
    type: "website",
    url: "https://sendincraft.com/about",
  },
  twitter: {
    card: "summary",
    title: "About | SendinCraft - Developer-First Email Service",
    description: "Learn about SendinCraft, a SaaS product developed by RDP Datacenter. We provide reliable transactional email services for modern developers.",
  },
};

const reasons = [
  {
    icon: Code2,
    title: "Developer-first",
    description: "A clean REST API and SDKs, with documentation written for people who ship.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable infrastructure",
    description: "Built on AWS SES with authenticated sending and automatic bounce and complaint handling.",
  },
  {
    icon: Headphones,
    title: "Backed by a team",
    description: "Maintained by RDP Datacenter, with real experience running cloud and email infrastructure.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_90%_at_50%_-10%,black,transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-56 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-foreground/[0.04] blur-3xl"
        />

        <div className="mx-auto max-w-6xl px-6 pb-14 pt-24 sm:pt-28">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span aria-hidden className="text-muted-foreground/40">
              /
            </span>
            <span className="text-foreground">About</span>
          </nav>

          <h1 className="max-w-3xl font-raleway text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            About SendinCraft
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A transactional email platform for developers, built and operated by RDP Datacenter.
          </p>
        </div>
      </header>

      {/* Two info panels */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
              <Mail className="h-5 w-5" strokeWidth={2} />
            </div>
            <h2 className="font-raleway text-xl font-semibold tracking-tight text-foreground">
              What is SendinCraft?
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              SendinCraft is a platform for sending transactional and permission-based email through a
              simple API and SMTP relay. It handles delivery, tracking, and list hygiene so you can focus
              on your product.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Email is transmitted over AWS SES with domain authentication, delivery events, and automatic
              suppression of addresses that bounce or complain.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
              <Building2 className="h-5 w-5" strokeWidth={2} />
            </div>
            <h2 className="font-raleway text-xl font-semibold tracking-tight text-foreground">
              Developed by RDP Datacenter
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              SendinCraft is developed and maintained by RDP Datacenter, a team working across cloud
              infrastructure, APIs, and scalable systems.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That background shapes how SendinCraft is built: predictable delivery, sensible defaults,
              and controls that protect your sending reputation.
            </p>
            <Button variant="outline" size="sm" className="mt-6" asChild>
              <Link
                href="https://rdpdatacenter.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                Visit RDP Datacenter
                <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why choose - divided columns, not floating cards */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <h2 className="font-raleway text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why teams choose SendinCraft
          </h2>
          <div className="mt-10 grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {reasons.map((reason) => (
              <div key={reason.title} className="px-0 py-6 md:px-8 md:py-0 md:first:pl-0">
                <reason.icon className="h-6 w-6 text-foreground" strokeWidth={1.75} />
                <h3 className="mt-4 font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-border bg-muted/30 p-8 sm:p-10">
          <h2 className="font-raleway text-2xl font-semibold tracking-tight text-foreground">Get in touch</h2>
          <p className="mt-2 max-w-lg text-muted-foreground">
            Questions about SendinCraft, support, or partnerships? We read every message.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="gap-2">
              <Link href="mailto:hello@sendincraft.com">
                <Mail className="h-4 w-4" />
                Email the team
              </Link>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link href="https://rdpdatacenter.in" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
                Contact RDP Datacenter
                <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
