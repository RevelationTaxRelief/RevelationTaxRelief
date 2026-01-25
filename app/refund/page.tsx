"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          [ REFUND POLICY ]
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
              This Refund Policy governs requests for refunds in connection with services provided by Revelation Tax Relief ("Company," "we," "us," or "our"). This policy is intended to establish a clear, fair, and professionally administered framework for handling service-related concerns while protecting the integrity of our processes and compliance obligations.
            </p>
            <p>
              By engaging our services, you ("Client," "you," or "your") acknowledge that you have read, understood, and agree to the terms outlined below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ SERVICE-BASED ENGAGEMENT MODEL ]</h2>
            <p>
              Revelation Tax Relief provides professional tax consultation and resolution support services that are customized on a case-by-case basis. Services involve administrative preparation, documentation review, procedural coordination, and authorized communication.
            </p>
            <p>
              Because services are tailored to each engagement and may begin immediately upon authorization, refund eligibility is evaluated individually and is not automatic or guaranteed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ NO STANDARDIZED REFUND ENTITLEMENT ]</h2>
            <p>
              Revelation Tax Relief does not maintain a universal or standardized refund schedule. Each request is reviewed based on the specific scope of services authorized, work performed, documentation prepared, and procedural actions taken.
            </p>
            <p>
              Refund determinations, if any, are made solely at the Company's discretion and in accordance with the terms of the executed service agreement and applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ ELIGIBILITY FOR REVIEW ]</h2>
            <p>
              A refund request may be considered only if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The request is submitted in writing through the Company's designated communication channels</li>
              <li>The request clearly identifies the engagement and the nature of the concern</li>
              <li>The request is submitted within a reasonable period following the conclusion or termination of the engagement</li>
            </ul>
            <p className="mt-4">
              Submission of a request does not imply acceptance or approval.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ NON-REFUNDABLE SERVICES ]</h2>
            <p>
              Certain services may be considered non-refundable, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Administrative preparation and documentation services</li>
              <li>Case evaluation and information review</li>
              <li>Authorized communication and coordination with third parties or tax authorities</li>
              <li>Work performed in reliance on client authorization or submitted materials</li>
            </ul>
            <p className="mt-4">
              These services involve time, professional resources, and procedural actions that cannot be reversed once performed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ CLIENT RESPONSIBILITIES AND ACCURACY ]</h2>
            <p>
              Clients are responsible for providing accurate, complete, and timely information. Refund requests based on errors, omissions, or misrepresentations in client-supplied information may be denied.
            </p>
            <p>
              The Company is not responsible for adverse outcomes, delays, or limitations resulting from incomplete, inaccurate, or outdated information provided by the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ REVIEW AND DETERMINATION PROCESS ]</h2>
            <p>
              All refund requests are subject to an internal review process, which may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verification of the service scope and authorization</li>
              <li>Review of documentation prepared and actions taken</li>
              <li>Assessment of procedural steps completed</li>
              <li>Evaluation of compliance with the executed agreement and this policy</li>
            </ul>
            <p className="mt-4">
              The Company may request additional information to complete the review.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ FRAUD AND CHARGEBACK PREVENTION ]</h2>
            <p>
              To protect against unauthorized disputes and fraudulent activity:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients agree to submit concerns directly to the Company before initiating any external dispute or chargeback</li>
              <li>Unauthorized chargebacks or misrepresentations may be considered a breach of the Terms of Service</li>
              <li>The Company reserves the right to provide documentation, service records, and authorization evidence to financial institutions or payment processors in response to disputes</li>
            </ul>
            <p className="mt-4">
              The Company may decline refund consideration where there is evidence of misuse, misrepresentation, or unauthorized payment activity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ PAYMENT PROVIDER COMPLIANCE ]</h2>
            <p>
              Refunds, if approved, are processed in accordance with the rules and requirements of the applicable payment provider or financial institution. Processing timelines and methods are subject to third-party procedures beyond the Company's control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ TERMINATION OF SERVICES ]</h2>
            <p>
              Termination of an engagement does not automatically entitle a client to a refund. Refund consideration, if any, is based on the scope of services authorized and the work performed up to the date of termination.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ LIMITATION OF OBLIGATION ]</h2>
            <p>
              Nothing in this policy obligates Revelation Tax Relief to issue a refund. All determinations are discretionary and based on documented review and compliance with applicable agreements and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ POLICY UPDATES ]</h2>
            <p>
              This Refund Policy may be updated periodically to reflect changes in legal requirements, regulatory standards, or internal procedures. The most current version will be posted on our website with a revised effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ INDEPENDENCE DISCLOSURE ]</h2>
            <p>
              Revelation Tax Relief is an independent tax consultation and resolution support firm. We are not affiliated with, endorsed by, or acting on behalf of any government agency. All determinations and administrative outcomes are made solely by the applicable tax authority.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ CONTACT INFORMATION ]</h2>
            <p>
              Refund requests and policy-related inquiries must be submitted using the communication channels provided on our website. Requests submitted through unauthorized or third-party channels may not be reviewed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">[ ACKNOWLEDGMENT ]</h2>
            <p>
              By engaging our services, you acknowledge that you have read, understood, and agree to this Refund Policy and its terms.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-primary/5 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-3">[ PROFESSIONAL TAX RELIEF SERVICE ]</h3>
          <p className="text-muted-foreground mb-6">
            Clear and fair refund policies designed to protect both our clients and the integrity of our professional services.
          </p>
          <Button asChild>
            <Link href="/get-started">Start Free Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
