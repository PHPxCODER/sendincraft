import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Mail, Globe, Building } from "lucide-react";

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent block">
                SendinCraft
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A powerful SaaS solution for transactional email delivery, 
              designed and developed with modern developers in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* About SendinCraft */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    What is SendinCraft?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    SendinCraft is a comprehensive Software as a Service (SaaS) platform 
                    that provides reliable transactional email delivery services. We focus 
                    on offering developers a seamless experience with powerful APIs, 
                    excellent deliverability, and robust infrastructure.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Built with modern web technologies and powered by AWS SES, 
                    SendinCraft ensures your emails reach their destination with 
                    99.9% uptime and lightning-fast delivery speeds.
                  </p>
                </CardContent>
              </Card>

              {/* About RDP Datacenter */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Developed by RDP Datacenter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    SendinCraft is proudly developed and maintained by RDP Datacenter, 
                    a technology company specializing in innovative software solutions 
                    and infrastructure services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With expertise in cloud technologies, API development, and scalable 
                    systems, RDP Datacenter brings years of experience to ensure 
                    SendinCraft meets the highest standards of reliability and performance.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link 
                      href="https://rdpdatacenter.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      Visit RDP Datacenter
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <Card className="bg-gradient-to-br from-primary/5 to-purple-600/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Get in Touch</CardTitle>
                <p className="text-muted-foreground">
                  Have questions about SendinCraft or need support? We&apos;d love to hear from you.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                  <Button asChild className="gap-2">
                    <Link href="mailto:hello@sendincraft.com">
                      <Mail className="w-4 h-4" />
                      Email SendinCraft
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="gap-2">
                    <Link 
                      href="https://rdpdatacenter.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-4 h-4" />
                      Contact RDP Datacenter
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  For technical support, partnership inquiries, or general questions about our services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Why Choose SendinCraft?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Developer-First</h3>
                <p className="text-sm text-muted-foreground">
                  Built by developers, for developers. Simple APIs and excellent documentation.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Reliable Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Powered by AWS SES with 99.9% uptime and global delivery network.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Backed by RDP Datacenter&apos;s expertise in cloud technologies and scalable systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}