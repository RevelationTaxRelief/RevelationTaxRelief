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
            <h3 className="text-lg font-semibold text-primary mb-2">30-Day Money-Back Guarantee</h3>
            <p>
              We're confident you'll be satisfied with our service. If you're not, we'll refund your money within 30 days, no questions asked.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Refund Eligibility</h2>
            <p>
              You may request a full refund of your service fees if you meet the following conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your refund request is made within 30 days of your initial purchase</li>
              <li>You have not received resolution of your case through our service</li>
              <li>You are requesting the refund in good faith</li>
              <li>You have not violated our Terms of Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Request a Refund</h2>
            <p>
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Contact our support team at refunds@revelationtaxrelief.com</li>
              <li>Provide your account information and order number</li>
              <li>Explain why you're requesting a refund</li>
              <li>Our team will review and process your request within 5 business days</li>
            </ol>
            <p className="mt-4">
              Approved refunds will be processed within 7-10 business days to your original payment method.
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Satisfaction Guarantee</h2>
            <p>
              Your satisfaction is our priority. If you have any concerns about our service, please reach out to our team immediately. We may be able to address your concerns or provide a refund depending on the circumstances.
            </p>
            <p className="mt-4">
              We stand behind our service and believe in our ability to help resolve your IRS tax debt.
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
              q: "Can I get a refund if my case is still being processed?",
              a: "Yes, if your request is within 30 days of purchase and you haven't received case resolution, you're eligible for our money-back guarantee.",
            },
            {
              q: "How long does it take to receive a refund?",
              a: "Once approved, refunds are processed within 7-10 business days to your original payment method.",
            },
            {
              q: "Do I need to return any materials or documents?",
              a: "No, you can keep all resources and materials you've received. We'll simply refund your service fees.",
            },
            {
              q: "What if I want a refund after 30 days?",
              a: "Refunds are only available within 30 days of purchase. After 30 days, we can discuss alternative solutions or credit toward future services.",
            },
            {
              q: "Can I get a refund if the IRS denies my request?",
              a: "Refunds are available based on our service performance, not IRS decisions. The IRS makes final determinations on relief requests independent of our services.",
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
          <h3 className="text-lg font-semibold text-foreground mb-3">Risk-Free Tax Relief</h3>
          <p className="text-muted-foreground mb-6">
            Try our service with complete confidence. 30-day money-back guarantee with no questions asked.
          </p>
          <Button asChild>
            <Link href="/get-started">Start Free Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
