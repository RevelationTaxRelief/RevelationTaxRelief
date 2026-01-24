"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">
          Last updated: January 24, 2025
        </p>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <div className="space-y-8 text-muted-foreground">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the Revelation Tax Relief website and services ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Revelation Tax Relief's Service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the Service</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transmitting the materials over a network or broadcasting the materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
            <p>
              The materials on Revelation Tax Relief's Service are provided on an 'as is' basis. Revelation Tax Relief makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
            <p>
              In no event shall Revelation Tax Relief or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Revelation Tax Relief's Service, even if Revelation Tax Relief or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Revelation Tax Relief's Service could include technical, typographical, or photographic errors. Revelation Tax Relief does not warrant that any of the materials on its Service are accurate, complete, or current. Revelation Tax Relief may make changes to the materials contained on its Service at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
            <p>
              Revelation Tax Relief has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Revelation Tax Relief of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
            <p>
              Revelation Tax Relief may revise these terms of service for its Service at any time without notice. By using this Service, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
            <p>
              The materials appearing on Revelation Tax Relief's Service are governed by and construed in accordance with the laws of the United States of America, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Service Limitations</h2>
            <p className="mb-4">
              Revelation Tax Relief provides tax relief guidance and information services. The following limitations apply:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We are not attorneys and do not provide legal advice</li>
              <li>We are not CPAs and do not provide accounting services</li>
              <li>Results are not guaranteed and vary based on individual circumstances</li>
              <li>IRS decisions are subject to their own rules and discretion</li>
              <li>Past results do not guarantee future outcomes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account information and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
              <p className="font-medium text-foreground">Revelation Tax Relief</p>
              <p>Email: legal@revelationtaxrelief.com</p>
              <p>Phone: 1-800-TAX-HELP</p>
              <p>Address: 100 Financial Plaza, New York, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-primary/5 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-3">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            By using our service, you agree to these terms and our Privacy Policy.
          </p>
          <Button asChild>
            <Link href="/get-started">Start Free Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
