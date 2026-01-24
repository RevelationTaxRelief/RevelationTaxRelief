"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, FileText, Clock } from "lucide-react"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Start Your Free IRS Tax Review
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get a personalized assessment of your tax debt situation in just a few minutes. Our experts will review your case and provide recommended solutions.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            How to Get Started
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple process to assess and resolve your tax debt
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {[
            {
              step: "1",
              title: "Complete Assessment",
              description: "Answer a few questions about your tax situation, IRS debt amount, and contact information.",
              icon: FileText,
            },
            {
              step: "2",
              title: "Expert Review",
              description: "Our tax professionals review your case and identify the best resolution options for your situation.",
              icon: Shield,
            },
            {
              step: "3",
              title: "Get Solutions",
              description: "Receive personalized recommendations and start your journey toward resolving your tax debt.",
              icon: CheckCircle,
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary mb-6 mx-auto">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Average Review Time", value: "5 minutes" },
              { label: "Success Rate", value: "98%" },
              { label: "Members Helped", value: "3,800+" },
              { label: "Years of Experience", value: "20+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-8 md:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Begin Your Free Assessment
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="(555) 555-5555"
                required
              />
            </div>

            <div>
              <label htmlFor="debtAmount" className="block text-sm font-medium text-foreground mb-2">
                Estimated IRS Debt Amount *
              </label>
              <select
                id="debtAmount"
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              >
                <option value="">Select a range</option>
                <option value="5k">Less than $5,000</option>
                <option value="5-10k">$5,000 - $10,000</option>
                <option value="10-25k">$10,000 - $25,000</option>
                <option value="25-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="debtType" className="block text-sm font-medium text-foreground mb-2">
                Type of Tax Issue *
              </label>
              <select
                id="debtType"
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              >
                <option value="">Select an issue</option>
                <option value="wage-garnishment">Wage Garnishment</option>
                <option value="tax-lien">Tax Lien</option>
                <option value="back-taxes">Back Taxes</option>
                <option value="irs-notice">IRS Notice/Collections</option>
                <option value="other">Other</option>
              </select>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base gap-2">
              Get Free Assessment <ArrowRight className="h-4 w-4" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Your information is secure and confidential. We never sell your data.
            </p>
          </form>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why Choose Revelation Tax Relief?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Secure & Confidential",
                description: "256-bit encryption protects all your personal and financial information.",
              },
              {
                title: "Expert Support",
                description: "Our team has over 20 years of experience in tax resolution.",
              },
              {
                title: "No Hidden Fees",
                description: "Transparent pricing with no surprise charges or hidden costs.",
              },
              {
                title: "Fast Results",
                description: "See potential relief options in as little as 5 minutes.",
              },
              {
                title: "All Situations",
                description: "We help with wage garnishments, liens, back taxes, and more.",
              },
              {
                title: "24/7 Access",
                description: "Monitor your case and access resources anytime, anywhere.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of Americans who've found relief from their tax debt.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/features">
              Explore Our Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
