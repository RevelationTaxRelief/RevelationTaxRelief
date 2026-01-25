"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Lock, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Resolve Your IRS Tax Debt Today
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our transparent platform provides professional tax debt resolution guidance, expert support, and complete documentation assistance. We operate with integrity and full transparency throughout the process.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button asChild size="lg" className="gap-2">
              <Link href="/get-started">
                Start Free Review <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 text-center">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">256-Bit Encryption</h3>
              <p className="text-sm text-muted-foreground">Your documents are always secure</p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <Lock className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">SSL Secured</h3>
              <p className="text-sm text-muted-foreground">Industry-standard protection</p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Expert Support</h3>
              <p className="text-sm text-muted-foreground">Guidance from tax professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive tools designed for transparent tax debt resolution
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Case Tracking",
              description: "Monitor your IRS case status in real-time with detailed updates"
            },
            {
              title: "Document Vault",
              description: "Secure cloud storage for all your tax documents and communications"
            },
            {
              title: "Expert Guidance",
              description: "Access professional resources and guidance throughout your journey"
            },
            {
              title: "Wage Garnishment Relief",
              description: "Solutions for stopping wage garnishments and levies"
            },
            {
              title: "Tax Lien Support",
              description: "Strategies to address and resolve tax liens"
            },
            {
              title: "Back Taxes Resolution",
              description: "Comprehensive tools for resolving accumulated back tax debt"
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to Resolve Your Tax Debt?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start your free IRS tax debt assessment and take the first step toward financial peace.
          </p>
          <Button asChild size="lg" className="mt-8 gap-2">
            <Link href="/get-started">
              Get Started Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}