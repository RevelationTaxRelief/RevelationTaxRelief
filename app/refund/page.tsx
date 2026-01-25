"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Refund Policy
        </h1>
        <p className="text-muted-foreground">
          Last updated: January 24, 2025
        </p>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <div className="space-y-8 text-muted-foreground">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-primary mb-2">30-Day Service Review Period</h3>
            <p>
              We're committed to transparent service delivery. If you're unsatisfied with our service within 30 days of purchase, please contact us to discuss your concerns.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Service Review and Refund</h2>
            <p>
              If you're unsatisfied with our service quality, we encourage you to contact us within 30 days. We'll evaluate your concerns to determine if a refund is appropriate:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your review request is made within 30 days of your initial purchase</li>
              <li>You can document specific service quality concerns</li>
              <li>You are requesting the review in good faith</li>
              <li>You have not violated our Terms of Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Request a Service Review</h2>
            <p>
              If you're unsatisfied with our service, please contact us as soon as possible:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Contact our support team at support@revelationtaxrelief.com</li>
              <li>Provide your account information and order number</li>
              <li>Explain your service concerns</li>
              <li>Our team will review your concerns within 5 business days</li>
            </ol>
            <p className="mt-4">
              If a refund is approved, it will be processed within 7-10 business days to your original payment method.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">What's Not Refundable</h2>
            <p>
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>IRS filing fees and government charges</li>
              <li>Third-party service provider costs</li>
              <li>Purchases made more than 30 days ago</li>
              <li>Refund requests after case resolution has been achieved</li>
              <li>Services for accounts in violation of our Terms of Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Partial Refunds</h2>
            <p>
              In certain circumstances, we may offer a partial refund if you've received partial services or have a legitimate concern about your experience. Each situation is evaluated individually.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Payment Plan Refunds</h2>
            <p>
              If you're on a payment plan and request a refund:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Refunds are calculated based on services received</li>
              <li>Future payments may be canceled upon approval</li>
              <li>Previously paid amounts within the 30-day window will be refunded</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Free Assessment Refund</h2>
            <p>
              The initial free assessment has no refund requirements, as it's complimentary. If you proceed to paid services, the 30-day refund period begins from the date of your paid service purchase.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Service Commitment</h2>
            <p>
              We are committed to providing professional, ethical, and transparent service. If you have any concerns about our service, please reach out to our team immediately so we can address them.
            </p>
            <p className="mt-4">
              We stand behind our service and maintain the highest standards of professional conduct.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
            <p>
              If there's a dispute regarding a refund request, please contact our support team:
            </p>
            <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
              <p className="font-medium text-foreground">Customer Support</p>
              <p>Email: support@revelationtaxrelief.com</p>
              <p>Phone: 1-800-TAX-HELP</p>
              <p>Hours: Monday-Friday 9AM-6PM EST, Saturday 10AM-4PM EST</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Policy Changes</h2>
            <p>
              We reserve the right to modify this refund policy at any time. Changes will be posted on this page and will take effect immediately. Your continued use of our service after policy changes constitutes your acceptance of the new policy.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Refund FAQ</h2>
          
          {[
            {
              q: "Can I request a review if my case is still being processed?",
              a: "Yes, if your request is within 30 days of purchase, you can request a service review to discuss any concerns you may have.",
            },
            {
              q: "How long does it take to get a decision on my review request?",
              a: "Once you contact us, our team will review your concerns within 5 business days and provide a response.",
            },
            {
              q: "Do I need to return any materials or documents?",
              a: "No, you can keep all resources and materials you've received. We'll address your service concerns directly.",
            },
            {
              q: "What if I want to request a review after 30 days?",
              a: "Service reviews are available within 30 days of purchase. After 30 days, we can discuss alternative solutions or service improvements for future support.",
            },
            {
              q: "Will you provide a refund if the IRS denies my request?",
              a: "We provide refunds based on our service quality, not IRS decisions. The IRS makes independent determinations on relief requests. Our refunds are contingent on service delivery issues, not case outcomes.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-3">{item.q}</h3>
              <p className="text-muted-foreground text-sm">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-primary/5 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-3">Professional Tax Relief Service</h3>
          <p className="text-muted-foreground mb-6">
            Work with us for professional, ethical guidance on your tax situation with a commitment to transparent service.
          </p>
          <Button asChild>
            <Link href="/get-started">Start Free Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
