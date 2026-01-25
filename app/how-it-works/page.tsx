"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Users, Shield, TrendingUp } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            How Revelation Tax Relief Works
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our proven process has helped thousands of Americans resolve their IRS tax debt and regain financial peace.
          </p>
        </div>
      </section>

      {/* Main Process */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="space-y-12">
          {[
            {
              number: "1",
              title: "Secure Assessment",
              description: "You provide information about your tax situation, IRS debt, and financial circumstances through our secure platform. All data is encrypted and protected.",
              icon: Shield,
              details: [
                "Simple online form",
                "Takes 5-10 minutes",
                "256-bit encryption",
                "Completely confidential",
              ],
            },
            {
              number: "2",
              title: "Expert Analysis",
              description: "Our team of tax professionals reviews your case and identifies the best resolution strategy for your specific situation.",
              icon: FileText,
              details: [
                "Personalized review",
                "Multiple solutions evaluated",
                "Expert recommendations",
                "Clear action plan",
              ],
            },
            {
              number: "3",
              title: "Solution Recommendation",
              description: "We present you with tailored options including payment plans, settlement negotiations, or other applicable relief programs.",
              icon: TrendingUp,
              details: [
                "IRS Payment Plans",
                "Offer in Compromise",
                "Currently Not Collectible",
                "Other relief options",
              ],
            },
            {
              number: "4",
              title: "Implementation & Support",
              description: "Our team handles the paperwork and communications with the IRS on your behalf while you monitor progress through your account.",
              icon: Users,
              details: [
                "Document preparation",
                "IRS communication",
                "Real-time tracking",
                "Expert guidance",
              ],
            },
            {
              number: "5",
              title: "Resolution & Peace of Mind",
              description: "Once your case is resolved, we help you maintain compliance and avoid future tax debt issues.",
              icon: CheckCircle,
              details: [
                "Case resolution",
                "Ongoing support",
                "Compliance guidance",
                "Long-term assistance",
              ],
            },
          ].map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 text-primary">
                      <Icon className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Step {step.number}: {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {step.number !== "5" && (
                  <div className="absolute left-10 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Available Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We tailor solutions to your specific tax situation
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "IRS Payment Plans",
                description: "Spread your tax payments over time with manageable monthly installments.",
                benefits: ["Flexible terms", "Low interest", "Professional negotiation", "Easy setup"],
              },
              {
                title: "Offer in Compromise",
                description: "Explore settlement options for your tax debt situation.",
                benefits: ["Potential relief", "Professional guidance", "Expert negotiation", "Clear process"],
              },
              {
                title: "Currently Not Collectible",
                description: "Temporarily pause collections if financial hardship prevents payment.",
                benefits: ["Payment pause", "Preserve finances", "Legal protection", "Future relief"],
              },
              {
                title: "Wage Garnishment Relief",
                description: "Stop wage garnishments and protect your income.",
                benefits: ["Garnishment stop", "Full paycheck", "Fast action", "Legal compliance"],
              },
              {
                title: "Tax Lien Resolution",
                description: "Remove or reduce tax liens on your property.",
                benefits: ["Lien removal", "Credit repair", "Asset protection", "Peace of mind"],
              },
              {
                title: "Back Taxes Resolution",
                description: "Resolve accumulated unpaid taxes from previous years.",
                benefits: ["Complete resolution", "Clean slate", "Future compliance", "Expert guidance"],
              },
            ].map((solution) => (
              <div
                key={solution.title}
                className="rounded-lg border border-border bg-background p-8 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Expected Timeline
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From assessment to resolution, here's what to expect
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { phase: "Assessment", time: "Day 1-2", description: "Submit your information" },
            { phase: "Review", time: "Day 3-5", description: "Expert analysis & options" },
            { phase: "Implementation", time: "Week 1-2", description: "IRS paperwork prepared" },
            { phase: "Resolution", time: "30-90 days", description: "Case resolution complete" },
          ].map((item) => (
            <div key={item.phase} className="text-center">
              <div className="rounded-lg border border-border bg-card p-6 mb-4">
                <p className="text-sm font-semibold text-primary mb-2">{item.time}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.phase}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why Our Process Works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Knowledge",
                description: "20+ years of experience with IRS tax codes and resolution strategies.",
              },
              {
                title: "Personalized Solutions",
                description: "Every case is unique. We tailor solutions to your circumstances.",
              },
              {
                title: "Secure Platform",
                description: "Military-grade encryption protects your sensitive financial information.",
              },
              {
                title: "Transparent Process",
                description: "Know exactly what to expect at every step of your journey.",
              },
              {
                title: "Dedicated Support",
                description: "Our team is available to answer questions and provide guidance.",
              },
              {
                title: "Ethical Approach",
                description: "We maintain integrity and transparency in all client interactions.",
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward resolving your IRS tax debt. Get your free assessment today.
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
