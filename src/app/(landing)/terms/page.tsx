import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, type LegalSectionData } from "@/components/legal/LegalPage";

const LAST_UPDATED = "July 11, 2026";

export const metadata: Metadata = {
  title: "Terms of Service | SendinCraft",
  description:
    "The terms that govern your use of SendinCraft, the transactional and marketing email platform operated by RDP Datacenter.",
  openGraph: {
    title: "Terms of Service | SendinCraft",
    description: "The terms that govern your use of SendinCraft.",
    type: "website",
    url: "https://sendincraft.com/terms",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | SendinCraft",
    description: "The terms that govern your use of SendinCraft.",
  },
};

const sections: LegalSectionData[] = [
  {
    id: "agreement",
    title: "1. Agreement",
    content: (
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the SendinCraft website, API, SMTP
        relay, and dashboard (together, the &quot;Service&quot;), operated by RDP Datacenter
        (&quot;SendinCraft&quot;, &quot;we&quot;, &quot;us&quot;). By creating an account or using the Service, you
        agree to these Terms. If you do not agree, do not use the Service.
      </p>
    ),
  },
  {
    id: "the-service",
    title: "2. The Service",
    content: (
      <p>
        SendinCraft lets you send transactional and permission-based email through the platform, manage contacts, and
        track delivery events. Email is transmitted using Amazon SES and other infrastructure providers.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "3. Accounts and eligibility",
    content: (
      <LegalList>
        <li>You must provide accurate account information and keep your credentials secure.</li>
        <li>You are responsible for all activity that occurs under your account.</li>
        <li>You must be at least 18 years old, or the age of majority in your jurisdiction, to use the Service.</li>
      </LegalList>
    ),
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable use and anti-spam",
    content: (
      <p>
        Your use of the Service is subject to our{" "}
        <Link href="/acceptable-use">Acceptable Use &amp; Anti-Spam Policy</Link>, which is incorporated into these
        Terms. In particular, you may only send email to recipients who have given you permission to contact them, and
        you must comply with all applicable email and data-protection laws (including, as applicable, CAN-SPAM, GDPR,
        and India&apos;s Digital Personal Data Protection Act).
      </p>
    ),
  },
  {
    id: "responsibilities",
    title: "5. Your responsibilities and content",
    content: (
      <LegalList>
        <li>
          You represent that you have the necessary rights and consent to send to your recipients and to upload their
          data to the Service.
        </li>
        <li>
          You are solely responsible for the content of the emails you send and for compliance with applicable laws.
        </li>
        <li>You must not send unsolicited bulk email, use purchased or scraped lists, or send prohibited content.</li>
      </LegalList>
    ),
  },
  {
    id: "deliverability",
    title: "6. Deliverability controls, suspension, and termination",
    content: (
      <>
        <p>
          To protect recipients and the sending reputation of the platform, we operate automated deliverability
          controls. We monitor bounce and complaint rates and may warn you, throttle sending, or automatically pause
          sending for an account or project that exceeds safe thresholds until rates recover. Addresses that hard-bounce
          or generate complaints are added to a suppression list and blocked from future sends.
        </p>
        <p>
          We may suspend or terminate accounts that violate these Terms or the Acceptable Use &amp; Anti-Spam Policy,
          that pose a risk to platform reputation or security, or as required by law or by our infrastructure providers.
          We may act immediately in cases of spam, abuse, or fraud.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    title: "7. Fees",
    content: (
      <p>
        Access to certain features may require a paid plan. Fees, billing cycles, and any usage limits will be
        presented before purchase. During any beta or waitlist period, features and pricing may change.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "8. Disclaimers",
    content: (
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether
        express or implied, including fitness for a particular purpose and non-infringement. We do not warrant that
        the Service will be uninterrupted, error-free, or that every message will be delivered.
      </p>
    ),
  },
  {
    id: "liability",
    title: "9. Limitation of liability",
    content: (
      <p>
        To the maximum extent permitted by law, SendinCraft and RDP Datacenter will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, or data,
        arising from your use of the Service.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "10. Indemnification",
    content: (
      <p>
        You agree to indemnify and hold harmless SendinCraft and RDP Datacenter from any claims, damages, or expenses
        arising out of your use of the Service, your content, or your violation of these Terms or applicable law,
        including claims arising from email you send.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "11. Governing law",
    content: (
      <p>
        These Terms are governed by the laws of India, without regard to conflict-of-law principles. The competent
        courts of India will have exclusive jurisdiction over any disputes, unless otherwise required by applicable
        law.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes",
    content: (
      <p>
        We may update these Terms from time to time. Material changes will be reflected by updating the &quot;Last
        updated&quot; date above. Your continued use of the Service after changes take effect constitutes acceptance.
      </p>
    ),
  },
  {
    id: "contact",
    title: "13. Contact",
    content: (
      <p>
        Questions about these Terms? Contact{" "}
        <Link href="mailto:hello@sendincraft.com">hello@sendincraft.com</Link>.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      slug="terms"
      title="Terms of Service"
      description="Please read these terms carefully. By using SendinCraft you agree to them."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}
