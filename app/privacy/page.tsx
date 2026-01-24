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
          Last updated: January 24, 2025
        </p>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <div className="space-y-8 text-muted-foreground prose prose-invert max-w-none">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p>
              Revelation Tax Relief ("we", "us", "our", or "Company") operates the RevelationTaxRelief.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
            <p>
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Types of Data Collected:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Financial information (income, debt amounts, tax filing status)</li>
              <li>Tax documents and IRS notices</li>
              <li>Usage data and device information</li>
              <li>Communication records with our support team</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Use of Data</h2>
            <p>
              Revelation Tax Relief uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information regarding usage</li>
              <li>To monitor the effectiveness of our Service</li>
              <li>To provide you with news, special offers, and general information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            <p>
              We implement the following security measures:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>256-bit SSL encryption for all data in transit</li>
              <li>HIPAA-compliant storage for sensitive information</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and authentication protocols</li>
              <li>Encrypted backups and disaster recovery procedures</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
              <p className="font-medium text-foreground">Revelation Tax Relief</p>
              <p>Email: privacy@revelationtaxrelief.com</p>
              <p>Phone: 1-800-TAX-HELP</p>
              <p>Address: 100 Financial Plaza, New York, NY 10001</p>
            </div>
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
