import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, type LegalSectionData } from "@/components/legal/LegalPage";

const LAST_UPDATED = "July 11, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | SendinCraft",
  description:
    "How SendinCraft, operated by RDP Datacenter, collects, uses, and protects personal data — including the contact and recipient data our customers send through the platform.",
  openGraph: {
    title: "Privacy Policy | SendinCraft",
    description:
      "How SendinCraft collects, uses, and protects personal data, including recipient data processed on behalf of our customers.",
    type: "website",
    url: "https://sendincraft.com/privacy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | SendinCraft",
    description:
      "How SendinCraft collects, uses, and protects personal data, including recipient data processed on behalf of our customers.",
  },
};

const sections: LegalSectionData[] = [
  {
    id: "who-we-are",
    title: "1. Who we are",
    content: (
      <>
        <p>
          SendinCraft (&quot;SendinCraft&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a transactional and
          email-delivery platform operated by RDP Datacenter. This Privacy Policy applies to our website at
          sendincraft.com and to the SendinCraft application, API, and SMTP relay (together, the &quot;Service&quot;).
        </p>
        <p>
          For any privacy questions, contact us at{" "}
          <Link href="mailto:privacy@sendincraft.com">privacy@sendincraft.com</Link>.
        </p>
      </>
    ),
  },
  {
    id: "two-roles",
    title: "2. The two roles we play",
    content: (
      <>
        <p>Our handling of personal data falls into two categories:</p>
        <LegalList>
          <li>
            <strong>As a controller</strong> — for the data of our account holders (our customers), such as your name,
            email address, login credentials, billing details, and how you use the Service.
          </li>
          <li>
            <strong>As a processor</strong> — for the contact and recipient data our customers upload or send through the
            Service (for example, the email addresses and custom fields of the customer&apos;s own contacts). We process
            this data only on our customers&apos; instructions, to deliver email and provide the Service.
          </li>
        </LegalList>
        <p>
          Where we act as a processor, the customer is the controller and is responsible for having a lawful basis and
          appropriate consent to send email to their recipients, as required by our{" "}
          <Link href="/acceptable-use">Acceptable Use &amp; Anti-Spam Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "3. Data we collect",
    content: (
      <LegalList>
        <li>
          <strong>Account data:</strong> name, email address, password (hashed), organization details, and
          authentication metadata.
        </li>
        <li>
          <strong>Billing data:</strong> plan, transactions, and identifiers provided by our payment processor. We do
          not store full card numbers.
        </li>
        <li>
          <strong>Contact &amp; recipient data (processed for customers):</strong> recipient email addresses,
          names, and any custom fields a customer chooses to store or send.
        </li>
        <li>
          <strong>Email content &amp; metadata:</strong> the messages sent through the Service and delivery events such
          as sends, deliveries, opens, clicks, bounces, and complaints.
        </li>
        <li>
          <strong>Technical data:</strong> IP address, device and browser information, and server logs used for
          security, abuse prevention, and diagnostics.
        </li>
        <li>
          <strong>Cookies &amp; analytics:</strong> limited cookies and analytics to operate and improve the website
          and dashboard.
        </li>
      </LegalList>
    ),
  },
  {
    id: "how-we-use-data",
    title: "4. How we use data",
    content: (
      <LegalList>
        <li>To provide, operate, and secure the Service and deliver email on our customers&apos; behalf.</li>
        <li>To monitor deliverability and enforce sending reputation (bounce and complaint handling).</li>
        <li>To prevent, detect, and investigate abuse, spam, fraud, and security incidents.</li>
        <li>To process billing and provide customer support.</li>
        <li>To comply with legal obligations and enforce our agreements.</li>
      </LegalList>
    ),
  },
  {
    id: "email-delivery",
    title: "5. Email delivery, bounces, and suppression",
    content: (
      <p>
        To protect recipients and sender reputation, we maintain a suppression list. Email addresses that generate a
        hard bounce or a spam complaint are automatically suppressed and blocked from future sends across the
        platform. We also process one-click unsubscribe requests (RFC 8058) and honor opt-outs. These mechanisms
        necessarily involve processing recipient email addresses and delivery events.
      </p>
    ),
  },
  {
    id: "sub-processors",
    title: "6. Sub-processors and sharing",
    content: (
      <>
        <p>We do not sell personal data. We share data only with:</p>
        <LegalList>
          <li>
            <strong>Infrastructure and email-delivery providers</strong>, including Amazon Web Services (Amazon SES),
            which we use to transmit email and host the Service.
          </li>
          <li>
            <strong>Payment and analytics providers</strong> strictly to operate billing and improve the Service.
          </li>
          <li>
            <strong>Authorities or third parties</strong> where required by law, or to protect the rights, safety, and
            security of our users and the Service.
          </li>
        </LegalList>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "7. International transfers",
    content: (
      <p>
        Our providers, including AWS, may process data in multiple regions. Where data is transferred across borders,
        we rely on appropriate safeguards as required by applicable law.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "8. Data retention",
    content: (
      <p>
        We retain account and sending data for as long as an account is active and as needed to provide the Service,
        comply with legal obligations, resolve disputes, and enforce agreements. Suppression-list entries may be
        retained to prevent re-sending to addresses that previously bounced or complained.
      </p>
    ),
  },
  {
    id: "security",
    title: "9. Security",
    content: (
      <p>
        We use industry-standard safeguards, including encryption of data in transit, access controls, and monitoring.
        No method of transmission or storage is completely secure, but we work to protect personal data against
        unauthorized access, alteration, and disclosure.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "10. Your rights and choices",
    content: (
      <>
        <p>
          Depending on your location, you may have rights to access, correct, delete, or restrict processing of your
          personal data, and to object to certain processing.
        </p>
        <LegalList>
          <li>
            <strong>Account holders:</strong> contact{" "}
            <Link href="mailto:privacy@sendincraft.com">privacy@sendincraft.com</Link> to exercise these rights.
          </li>
          <li>
            <strong>Recipients:</strong> if you received an email sent through SendinCraft and wish to opt out or have
            your data removed, use the unsubscribe link in the message or contact the sender directly. You may also
            contact us and we will route your request to the responsible customer.
          </li>
        </LegalList>
      </>
    ),
  },
  {
    id: "children",
    title: "11. Children",
    content: <p>The Service is not directed to children and is not intended for anyone under the age of 16.</p>,
  },
  {
    id: "changes",
    title: "12. Changes to this policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Material changes will be reflected by updating the
        &quot;Last updated&quot; date above and, where appropriate, by additional notice.
      </p>
    ),
  },
  {
    id: "contact",
    title: "13. Contact us",
    content: (
      <p>
        RDP Datacenter — operator of SendinCraft
        <br />
        Privacy: <Link href="mailto:privacy@sendincraft.com">privacy@sendincraft.com</Link>
        <br />
        General: <Link href="mailto:hello@sendincraft.com">hello@sendincraft.com</Link>
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      slug="privacy"
      title="Privacy Policy"
      description="This policy explains what personal data we handle, why we handle it, and the rights available to you."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}
