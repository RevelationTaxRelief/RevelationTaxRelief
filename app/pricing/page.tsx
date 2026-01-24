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
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            No hidden fees. No surprises. Choose the plan that works for you and get started today.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              name: "Assessment",
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
              name: "Professional",
              price: "$297",
              period: "one-time",
              description: "Complete tax relief support and guidance",
              features: [
                "Everything in Assessment, plus:",
                "Full case consultation",
                "Expert tax analysis",
                "Document preparation",
                "IRS communication support",
                "Payment plan setup",
                "Ongoing email support",
              ],
              cta: "Get Professional Help",
              ctaHref: "/get-started",
              highlighted: true,
            },
            {
              name: "Premium",
              price: "$597",
              period: "one-time",
              description: "Full resolution with white-glove service",
              features: [
                "Everything in Professional, plus:",
                "Dedicated case manager",
                "Full IRS representation",
                "Offer in Compromise support",
                "Wage garnishment release",
                "Tax lien negotiation",
                "24/7 priority support",
              ],
              cta: "Choose Premium",
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
                    Most Popular
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
              question: "Is there a monthly subscription?",
              answer: "No, our pricing is a one-time fee. You pay once and have lifetime access to your account and case files.",
            },
            {
              question: "Can I upgrade my plan?",
              answer: "Yes, you can upgrade at any time. We'll only charge you the difference between what you've paid and the new plan price.",
            },
            {
              question: "What if I'm not satisfied?",
              answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service. No questions asked.",
            },
            {
              question: "Are there additional costs?",
              answer: "No hidden fees. The price you see is the price you pay. Some solutions may require IRS filing fees, which are clearly disclosed upfront.",
            },
            {
              question: "Do you offer payment plans?",
              answer: "Yes, we offer payment plans for our Professional and Premium plans. Contact us to discuss options.",
            },
            {
              question: "What does the assessment cost?",
              answer: "The initial assessment is completely free. You'll get personalized recommendations with no obligation.",
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
              Trusted by Thousands
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-12">
              {[
                { stat: "3,800+", label: "Members Helped" },
                { stat: "98%", label: "Success Rate" },
                { stat: "$50M+", label: "Debt Resolved" },
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
