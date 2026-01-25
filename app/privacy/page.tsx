"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">
          Last updated: January 2026
        </p>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <div className="space-y-8 text-muted-foreground prose prose-invert max-w-none">
          <div>
            <p>
              Revelation Tax Relief ("Company," "we," "us," or "our") is committed to protecting the privacy, confidentiality, and integrity of information provided by visitors, prospective clients, and engaged clients ("you" or "your"). This Privacy Policy describes how information is collected, used, maintained, and safeguarded in connection with our website and professional services.
            </p>
            <p>
              This policy reflects our administrative, technical, and procedural approach to information stewardship in a regulated professional services environment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Scope of This Policy</h2>
            <p>
              This Privacy Policy applies to information collected through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our website and online forms</li>
              <li>Direct communications, including email, phone, and written correspondence</li>
              <li>Engagement-related documentation and disclosures</li>
              <li>Authorized third-party service providers acting on our behalf</li>
            </ul>
            <p className="mt-4">
              This policy does not apply to websites, platforms, or services operated by third parties that may be linked from our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <p>
              We may collect information that is voluntarily provided or lawfully obtained in connection with inquiries or professional services. This may include:
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Personal and Contact Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, mailing address, email address, and telephone number</li>
              <li>Business name and business contact details (if applicable)</li>
            </ul>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Case-Related and Administrative Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tax-related documentation and correspondence</li>
              <li>Financial summaries and compliance information</li>
              <li>Filing history and procedural records</li>
              <li>Authorization forms and disclosures</li>
            </ul>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Technical and Website Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Internet Protocol (IP) address</li>
              <li>Browser type and device information</li>
              <li>Access dates, pages viewed, and referral sources</li>
            </ul>
            <p className="mt-4">
              Information is collected only to the extent necessary to support communication, engagement evaluation, and service delivery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">How Information Is Used</h2>
            <p>
              Information may be used for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responding to inquiries and requests for consultation</li>
              <li>Evaluating engagement suitability and defining service scope</li>
              <li>Preparing, organizing, and submitting authorized documentation</li>
              <li>Coordinating procedural communication with tax authorities or service providers</li>
              <li>Maintaining internal records and case documentation</li>
              <li>Supporting website functionality and operational security</li>
              <li>Complying with applicable legal, regulatory, or administrative requirements</li>
            </ul>
            <p className="mt-4">
              We do not use personal information for outcome-based marketing, unsolicited commercial communications, or representations outside the scope of professional services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Lawful Basis for Processing</h2>
            <p>
              Information is processed based on one or more of the following grounds, as applicable:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your consent</li>
              <li>Performance of a requested service or engagement</li>
              <li>Compliance with legal or regulatory obligations</li>
              <li>Legitimate operational interests related to documentation, security, and service administration</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
            <p>
              We do not sell or rent personal information.
            </p>
            <p>
              Information may be shared only under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With authorized personnel and service providers directly involved in case preparation or administrative coordination</li>
              <li>With tax authorities or government agencies, when authorized by you or required by applicable procedures</li>
              <li>When required to comply with legal obligations, court orders, or regulatory requests</li>
              <li>To protect the rights, security, or integrity of the Company, our clients, or our systems</li>
            </ul>
            <p className="mt-4">
              All third-party service providers are required to maintain appropriate confidentiality and data protection standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Security and Safeguards</h2>
            <p>
              We implement administrative, technical, and physical safeguards designed to protect information from unauthorized access, disclosure, alteration, or misuse. These measures may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access controls and authorization protocols</li>
              <li>Secure data storage and transmission methods</li>
              <li>Internal documentation and retention procedures</li>
              <li>Periodic internal review of information handling practices</li>
            </ul>
            <p className="mt-4">
              While we take reasonable steps to protect information, no system can be guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
            <p>
              Information is retained only for as long as necessary to fulfill the purposes outlined in this policy, comply with regulatory or legal obligations, and support internal documentation and recordkeeping standards.
            </p>
            <p>
              Retention periods may vary based on the nature of the engagement, applicable laws, and administrative requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights and Choices</h2>
            <p>
              Depending on your jurisdiction, you may have certain rights regarding your personal information, which may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Requesting access to information we maintain about you</li>
              <li>Requesting correction of inaccurate or incomplete information</li>
              <li>Requesting limitations on certain uses or disclosures</li>
              <li>Requesting deletion of information, subject to legal and regulatory retention obligations</li>
            </ul>
            <p className="mt-4">
              Requests may be submitted using the contact information provided below. Verification of identity may be required before processing requests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Website Technologies</h2>
            <p>
              Our website may use cookies or similar technologies to support functionality, security, and general analytics. These tools help us understand how visitors interact with our website and improve user experience.
            </p>
            <p>
              You may adjust browser settings to manage or restrict cookies; however, certain website features may be affected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of external platforms. Users are encouraged to review the privacy policies of any third-party sites they visit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
            <p>
              Our services and website are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in legal requirements, operational practices, or service structure. Updates will be posted on this page with a revised effective date.
            </p>
            <p>
              Continued use of our website or services after an update constitutes acknowledgment of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Independence Disclosure</h2>
            <p>
              Revelation Tax Relief is an independent tax consultation and resolution support firm. We are not affiliated with, endorsed by, or acting on behalf of any government agency.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
            <p>
              For questions regarding this Privacy Policy or our information handling practices, you may contact us through the communication channels provided on our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Acknowledgment</h2>
            <p>
              By using our website or engaging our services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of information as described herein.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-primary/5 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-3">Ready to Protect Your Data?</h3>
          <p className="text-muted-foreground mb-6">
            Our secure platform protects your sensitive financial information with military-grade encryption.
          </p>
          <Button asChild>
            <Link href="/get-started">Start Free Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
