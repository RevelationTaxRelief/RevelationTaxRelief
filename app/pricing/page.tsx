"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Flexible Engagement Options
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the engagement model that fits your needs. Transparent pricing, no surprises, and support at every step.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              name: "Free Consultation",
              price: "Free",
              description: "Get started with your free tax assessment",
              features: [
                "Free IRS tax review",
                "Personalized assessment",
                "Solution recommendations",
                "No credit card required",
                "5-minute process",
                "Confidential analysis",
              ],
              cta: "Start Free Assessment",
              ctaHref: "/get-started",
              highlighted: false,
            },
            {
              name: "Milestone-Based Engagement",
              price: "Case by Case",
              period: "per milestone",
              description: "Clients pay for defined administrative and consulting service phases",
              features: [
                "Defined service phases",
                "Billing at milestone completion",
                "Documented service terms",
                "Fees independent of outcomes",
                "No regulatory timeline dependencies",
                "Transparent cost structure",
              ],
              cta: "Request Consultation",
              ctaHref: "/get-started",
              highlighted: true,
            },
            {
              name: "Subscription-Based Administrative Access",
              price: "Monthly",
              period: "optional access",
              description: "Optional monthly access for continued administrative oversight, document monitoring, and workflow tracking",
              features: [
                "Ongoing administrative oversight",
                "Document monitoring",
                "Workflow tracking",
                "Monthly billing",
                "Flexible cancellation",
                "Priority support access",
              ],
              cta: "Subscribe Now",
              ctaHref: "/get-started",
              highlighted: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-8 relative flex flex-col ${
                plan.highlighted
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20 scale-105"
                  : "border-border bg-card hover:border-primary/50 transition-colors"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                )}
              </div>
              <Button
                asChild
                className={`mb-8 w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-primary/20 text-primary hover:bg-primary/30"
                }`}
              >
                <Link href={plan.ctaHref}>{plan.cta}</Link>
              </Button>
              <ul className="space-y-3 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="border-t border-border bg-card/50"></section>
      {/* What's Included */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              All Plans Include
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "256-Bit Encryption",
                description: "Military-grade security for your data",
              },
              {
                title: "Secure Document Vault",
                description: "Cloud storage for all your documents",
              },
              {
                title: "Case Tracking",
                description: "Monitor progress in real-time",
              },
              {
                title: "Expert Resources",
                description: "Access educational content and guides",
              },
              {
                title: "Confidential Process",
                description: "Your privacy is always protected",
              },
              {
                title: "No Hidden Fees",
                description: "Transparent pricing, always",
              },
              {
                title: "Flexible Payment",
                description: "Multiple payment options available",
              },
              {
                title: "Expert Support",
                description: "Help from tax professionals",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              question: "Is the initial consultation still free?",
              answer: "Yes, the initial consultation is completely free. You'll get a personalized assessment with no obligation.",
            },
            {
              question: "How does the Milestone-Based Engagement work?",
              answer: "Milestone-Based Engagement involves paying for defined administrative and consulting service phases. Billing occurs upon completion or activation of documented service milestones, and fees are independent of outcomes or regulatory timelines.",
            },
            {
              question: "What are the fees for Milestone-Based Engagement?",
              answer: "Fees for Milestone-Based Engagement are determined on a case-by-case basis, based on the services rendered. There are no specific numbers; pricing is transparent and agreed upon upfront.",
            },
            {
              question: "What is the Subscription-Based Administrative Access?",
              answer: "Subscription-Based Administrative Access is an optional monthly service providing continued administrative oversight, document monitoring, and workflow tracking.",
            },
            {
              question: "How much does the subscription cost?",
              answer: "The subscription cost is determined on a case-by-case basis. Contact us for a personalized quote.",
            },
            {
              question: "Can I cancel the subscription anytime?",
              answer: "Yes, you can cancel the subscription at any time with flexible cancellation terms.",
            },
          ].map((item) => (
            <div key={item.question} className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-3">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Our Commitment to Transparency
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-12">
              {[
                { stat: "100%", label: "Transparent Pricing" },
                { stat: "0", label: "Hidden Fees" },
                { stat: "24/7", label: "Support Available" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-3xl font-bold text-primary">{item.stat}</p>
                  <p className="mt-2 text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with a free assessment and discover your path to tax relief.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/get-started">
              Start Free Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
