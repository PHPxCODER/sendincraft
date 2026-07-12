import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, type LegalSectionData } from "@/components/legal/LegalPage";

const LAST_UPDATED = "July 11, 2026";

export const metadata: Metadata = {
  title: "Acceptable Use & Anti-Spam Policy | SendinCraft",
  description:
    "SendinCraft is a permission-based email platform. This policy prohibits unsolicited email, requires recipient consent, and explains how we enforce bounce, complaint, and suppression controls.",
  openGraph: {
    title: "Acceptable Use & Anti-Spam Policy | SendinCraft",
    description:
      "Permission-based sending only. How SendinCraft prohibits spam and enforces bounce, complaint, and suppression controls.",
    type: "website",
    url: "https://sendincraft.com/acceptable-use",
  },
  twitter: {
    card: "summary",
    title: "Acceptable Use & Anti-Spam Policy | SendinCraft",
    description:
      "Permission-based sending only. How SendinCraft prohibits spam and enforces bounce, complaint, and suppression controls.",
  },
};

const sections: LegalSectionData[] = [
  {
    id: "permission",
    title: "1. Permission is required",
    content: (
      <p>
        You may only send email through SendinCraft to recipients who have given you clear permission to contact them —
        for example, by signing up for your product, creating an account, making a purchase, or explicitly opting in
        to your list. You must be able to demonstrate, on request, how and when each recipient granted permission.
      </p>
    ),
  },
  {
    id: "prohibited-sources",
    title: "2. Prohibited sources of recipients",
    content: (
      <>
        <p>You must never send to addresses obtained from:</p>
        <LegalList>
          <li>Purchased, rented, leased, or otherwise acquired third-party lists.</li>
          <li>Scraped, harvested, or crawled addresses from websites or public sources.</li>
          <li>Any source where the recipient did not knowingly provide their address to you.</li>
        </LegalList>
      </>
    ),
  },
  {
    id: "prohibited-content",
    title: "3. Prohibited content and behavior",
    content: (
      <LegalList>
        <li>Unsolicited bulk email (spam) of any kind.</li>
        <li>Deceptive, forged, or misleading headers, sender names, subject lines, or routing information.</li>
        <li>Phishing, malware, spyware, or any attempt to obtain credentials or funds fraudulently.</li>
        <li>Content that is illegal, hateful, harassing, or that infringes intellectual property rights.</li>
        <li>
          Sending to role or distribution addresses, or repeatedly sending to addresses that have unsubscribed,
          hard-bounced, or complained.
        </li>
      </LegalList>
    ),
  },
  {
    id: "required-practices",
    title: "4. Required practices",
    content: (
      <LegalList>
        <li>Use accurate &quot;From&quot; and &quot;Reply-To&quot; information that identifies you as the sender.</li>
        <li>
          Include a functional unsubscribe mechanism in marketing email and honor opt-out requests promptly. We add a
          one-click unsubscribe header (RFC 8058) where an unsubscribe link is present.
        </li>
        <li>Maintain accurate list hygiene and remove disengaged or invalid recipients.</li>
        <li>Comply with all applicable laws, including CAN-SPAM, GDPR, CASL, and India&apos;s DPDP Act, as relevant.</li>
      </LegalList>
    ),
  },
  {
    id: "enforcement",
    title: "5. How we enforce this policy",
    content: (
      <>
        <p>
          SendinCraft actively protects recipients and the sending reputation of the platform. Our automated controls
          include:
        </p>
        <LegalList>
          <li>
            <strong>Global suppression list:</strong> any address that hard-bounces or files a spam complaint is
            automatically suppressed and blocked from future sends across the entire platform.
          </li>
          <li>
            <strong>Pre-send filtering:</strong> every message is checked against the suppression list before it is sent,
            and suppressed recipients are skipped.
          </li>
          <li>
            <strong>Rolling rate monitoring:</strong> we continuously compute bounce and complaint rates per account and
            may warn, throttle, or <strong>automatically pause sending</strong> when rates exceed safe thresholds (for
            example, bounce rates above 5% or complaint rates above 0.1%). Paused sending cannot resume until rates
            recover.
          </li>
          <li>
            <strong>Feedback loops:</strong> we process bounce and complaint notifications from our email provider in real
            time.
          </li>
        </LegalList>
      </>
    ),
  },
  {
    id: "consequences",
    title: "6. Consequences of violations",
    content: (
      <p>
        Violations of this policy may result in throttling, suspension, or termination of your account, with or
        without notice, and we may report unlawful activity to the appropriate authorities. We may take immediate
        action where sending threatens recipients or the reputation of the platform or its infrastructure providers.
      </p>
    ),
  },
  {
    id: "reporting-abuse",
    title: "7. Reporting abuse",
    content: (
      <p>
        If you received unwanted email sent through SendinCraft, or you believe a sender is violating this policy,
        please report it to <Link href="mailto:abuse@sendincraft.com">abuse@sendincraft.com</Link>. We investigate all
        reports.
      </p>
    ),
  },
  {
    id: "provider-policies",
    title: "8. Provider policies",
    content: (
      <p>
        Because we deliver email through Amazon SES and other providers, your use of SendinCraft must also comply with
        those providers&apos; acceptable use policies. This policy supplements, and does not replace, our{" "}
        <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
];

export default function AcceptableUsePage() {
  return (
    <LegalPage
      slug="acceptable-use"
      title="Acceptable Use & Anti-Spam Policy"
      description="SendinCraft is strictly a permission-based email platform. Sending unsolicited email is prohibited."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}
