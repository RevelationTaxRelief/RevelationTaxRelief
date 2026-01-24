"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, BarChart3, Lock, Users, FileText, Zap, Shield } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Powerful Features for Tax Relief
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to resolve your IRS tax debt and achieve financial peace, all in one secure platform.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="space-y-20">
          {[
            {
              title: "Case Tracking Dashboard",
              description: "Monitor your IRS case status in real-time with detailed updates and milestones.",
              features: [
                "Real-time status updates",
                "IRS communication logs",
                "Document submission tracking",
                "Timeline visualization",
                "Status notifications",
              ],
              icon: BarChart3,
              image: "📊",
            },
            {
              title: "Secure Document Vault",
              description: "Store, organize, and manage all your tax documents and communications in one safe place.",
              features: [
                "Cloud storage with encryption",
                "Automatic organization",
                "Version history",
                "Easy sharing",
                "Search functionality",
              ],
              icon: FileText,
              image: "🔐",
            },
            {
              title: "Expert Guidance Library",
              description: "Access comprehensive resources, guides, and expert advice for your tax situation.",
              features: [
                "Tax relief educational content",
                "IRS program explanations",
                "Step-by-step guides",
                "FAQ database",
                "Expert video tutorials",
              ],
              icon: Users,
              image: "📚",
            },
            {
              title: "Payment Plan Calculator",
              description: "Calculate potential payment plans and see how different options could work for you.",
              features: [
                "Multiple scenario analysis",
                "Interest calculations",
                "Timeline projections",
                "Affordability assessment",
                "Instant estimates",
              ],
              icon: Zap,
              image: "💰",
            },
            {
              title: "Security & Privacy",
              description: "Your information is protected with military-grade encryption and strict privacy policies.",
              features: [
                "256-bit SSL encryption",
                "HIPAA-level security",
                "Regular security audits",
                "No data sharing",
                "Compliance certified",
              ],
              icon: Lock,
              image: "🛡️",
            },
            {
              title: "Professional Support",
              description: "Get help from our team of experienced tax professionals when you need it most.",
              features: [
                "Email support",
                "Phone consultation",
                "Live chat assistance",
                "Expert document review",
                "Personalized guidance",
              ],
              icon: Shield,
              image: "👥",
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0
            return (
              <div key={feature.title} className="rounded-lg border border-border bg-card p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-8">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`flex items-center justify-center p-12 bg-secondary/20 rounded-lg ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="text-8xl">{feature.image}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tax Solutions Grid */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Specialized Solutions for Every Situation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide targeted solutions for different types of tax debt
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Wage Garnishment Relief",
                description: "Stop IRS wage garnishments and protect your paycheck.",
                solutions: ["Levy release", "Payroll protection", "Immediate relief", "Legal compliance"],
              },
              {
                title: "Tax Lien Resolution",
                description: "Remove tax liens and improve your credit score.",
                solutions: ["Lien withdrawal", "Credit repair", "Property protection", "Asset recovery"],
              },
              {
                title: "Back Taxes Resolution",
                description: "Resolve unpaid taxes from previous years.",
                solutions: ["Consolidated strategy", "Payment plans", "Penalty reduction", "Clean slate"],
              },
              {
                title: "Offer in Compromise",
                description: "Settle your debt for less than the full amount owed.",
                solutions: ["Debt reduction", "Negotiation support", "Expert preparation", "IRS navigation"],
              },
              {
                title: "Payment Plans",
                description: "Manage your debt with flexible, manageable payment options.",
                solutions: ["Custom terms", "Interest management", "Affordable payments", "Financial relief"],
              },
              {
                title: "Currently Not Collectible",
                description: "Pause collections during financial hardship.",
                solutions: ["Temporary relief", "Legal protection", "Financial breathing room", "Future options"],
              },
            ].map((solution) => (
              <div
                key={solution.title}
                className="rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.solutions.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Compare Our Solutions
          </h2>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-secondary border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Solution</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Best For</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Timeline</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                {
                  solution: "Payment Plan",
                  bestFor: "Stable income, structured debt",
                  timeline: "30-60 days",
                  savings: "Penalty reduction",
                },
                {
                  solution: "Offer in Compromise",
                  bestFor: "Significant hardship, large debt",
                  timeline: "60-120 days",
                  savings: "Up to 70%+ reduction",
                },
                {
                  solution: "Currently Not Collectible",
                  bestFor: "Financial hardship, short-term relief",
                  timeline: "Immediate",
                  savings: "Payment pause",
                },
                {
                  solution: "Wage Garnishment Release",
                  bestFor: "Active garnishment situation",
                  timeline: "7-14 days",
                  savings: "Full paycheck recovery",
                },
                {
                  solution: "Tax Lien Removal",
                  bestFor: "Credit improvement, asset protection",
                  timeline: "30-90 days",
                  savings: "Credit score improvement",
                },
              ].map((row) => (
                <tr key={row.solution} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{row.solution}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{row.bestFor}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{row.timeline}</td>
                  <td className="px-6 py-4 text-sm text-primary font-medium">{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Find Your Perfect Solution
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take our free assessment to discover which solution is right for your tax situation.
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
