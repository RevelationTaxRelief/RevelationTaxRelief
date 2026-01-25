"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, HelpCircle, BookOpen, Download } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tax Relief Resources & Guides
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive guides, FAQs, and educational content to help you understand tax relief options and navigate your resolution journey.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: HelpCircle,
              title: "Frequently Asked Questions",
              description: "Get answers to common tax relief questions",
              href: "#faqs",
            },
            {
              icon: BookOpen,
              title: "Learning Center",
              description: "Educational guides on IRS programs",
              href: "#guides",
            },
            {
              icon: Download,
              title: "Downloadable Guides",
              description: "Free PDFs and reference materials",
              href: "#downloads",
            },
            {
              icon: FileText,
              title: "Case Studies",
              description: "Real examples of how our solutions are applied",
              href: "#case-studies",
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.title}
                href={item.href}
                className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors cursor-pointer"
              >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </a>
            )
          })}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="border-t border-border bg-card/50" id="faqs">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                category: "General",
                questions: [
                  {
                    q: "What is IRS tax debt?",
                    a: "IRS tax debt is the amount of unpaid federal income taxes, penalties, and interest owed to the Internal Revenue Service.",
                  },
                  {
                    q: "How much tax debt do I need before seeking help?",
                    a: "There's no minimum. Whether you owe $1,000 or $100,000+, we can help you develop a resolution strategy.",
                  },
                  {
                    q: "How long does it take to resolve tax debt?",
                    a: "The timeline varies based on your situation and chosen solution. Most cases are resolved within 30-120 days.",
                  },
                ],
              },
              {
                category: "Tax Relief Solutions",
                questions: [
                  {
                    q: "What is an Offer in Compromise?",
                    a: "An Offer in Compromise is an IRS program that allows you to settle your tax debt for less than the full amount owed.",
                  },
                  {
                    q: "What is a payment plan?",
                    a: "A payment plan allows you to pay your IRS debt over time with fixed monthly payments instead of in a lump sum.",
                  },
                  {
                    q: "What is Currently Not Collectible?",
                    a: "This status temporarily stops collection efforts due to financial hardship, giving you time to improve your situation.",
                  },
                ],
              },
              {
                category: "Security & Privacy",
                questions: [
                  {
                    q: "Is my information secure?",
                    a: "Yes, we use 256-bit SSL encryption and follow HIPAA-level security standards to protect all your data.",
                  },
                  {
                    q: "Will you share my information?",
                    a: "No, we never sell or share your personal information. Your privacy is always protected.",
                  },
                  {
                    q: "How is my data stored?",
                    a: "All data is encrypted and stored on secure, HIPAA-compliant servers with automatic backups.",
                  },
                ],
              },
            ].map((section) => (
              <div key={section.category}>
                <h3 className="text-lg font-semibold text-foreground mb-6 pt-6 border-t border-border first:border-0">
                  {section.category}
                </h3>
                <div className="space-y-4 pl-4">
                  {section.questions.map((item) => (
                    <div key={item.q}>
                      <h4 className="font-semibold text-foreground mb-2">{item.q}</h4>
                      <p className="text-muted-foreground text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Center */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="guides">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Learning Center
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Master the basics of tax relief with our comprehensive guides
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              title: "Understanding Your IRS Notice",
              description: "Learn how to read and respond to IRS notices and what they mean for your situation.",
              topics: ["Notice CP-90", "Payment notices", "Collection notices"],
            },
            {
              title: "Tax Relief Programs Explained",
              description: "Deep dive into each IRS relief program and how they work.",
              topics: ["Payment plans", "Offer in Compromise", "Hardship relief"],
            },
            {
              title: "Wage Garnishment Guide",
              description: "Everything you need to know about wage garnishments and how to stop them.",
              topics: ["How garnishment works", "Legal rights", "Relief options"],
            },
            {
              title: "Tax Lien Explained",
              description: "Understanding tax liens and strategies to remove them.",
              topics: ["What is a lien", "Impact on credit", "Removal options"],
            },
            {
              title: "Back Taxes Resolution",
              description: "Strategies for resolving multiple years of unpaid taxes.",
              topics: ["Filing backfiled returns", "Payment options", "Penalty relief"],
            },
            {
              title: "Financial Hardship Support",
              description: "Resources and programs for those facing financial difficulties.",
              topics: ["Hardship status", "Relief programs", "Support resources"],
            },
          ].map((guide) => (
            <div
              key={guide.title}
              className="rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {guide.title}
              </h3>
              <p className="text-muted-foreground mb-6">{guide.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {guide.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm">
                  Learn
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="border-t border-border bg-secondary/30" id="downloads">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Free Downloadable Guides
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Download these PDFs to learn more about tax relief
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Complete Tax Relief Guide",
                description: "Everything you need to know about resolving IRS tax debt.",
                size: "2.4 MB",
                pages: "28 pages",
              },
              {
                title: "IRS Forms & Documents Checklist",
                description: "Essential documents needed for your tax relief application.",
                size: "1.2 MB",
                pages: "8 pages",
              },
              {
                title: "Payment Plan Calculator",
                description: "Worksheet to help you understand payment plan options.",
                size: "800 KB",
                pages: "4 pages",
              },
              {
                title: "Financial Hardship Worksheet",
                description: "Document your financial situation for IRS review.",
                size: "1.5 MB",
                pages: "6 pages",
              },
              {
                title: "Wage Garnishment Action Plan",
                description: "Step-by-step guide to stopping wage garnishments.",
                size: "1.1 MB",
                pages: "12 pages",
              },
              {
                title: "Tax Lien Removal Guide",
                description: "Strategies and timelines for removing tax liens.",
                size: "1.3 MB",
                pages: "10 pages",
              },
            ].map((guide) => (
              <div
                key={guide.title}
                className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{guide.size}</span>
                    <span>{guide.pages}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-4 flex-shrink-0">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="case-studies">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Example Cases
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Scenarios showing how different solutions are applied
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: "John M.",
              situation: "Wage Garnishment",
              debt: "$18,500",
              solution: "Payment Plan + Garnishment Release",
              result: "Applied for garnishment release, structured payment plan negotiated",
              time: "Processed in 14 days",
            },
            {
              name: "Sarah T.",
              situation: "Tax Lien",
              debt: "$32,000",
              solution: "Offer in Compromise",
              result: "Offer submission prepared and presented to IRS for consideration",
              time: "Processed in 90 days",
            },
            {
              name: "Michael R.",
              situation: "Back Taxes",
              debt: "$45,000",
              solution: "Payment Plan + Hardship Status",
              result: "Hardship status applied, payment arrangement terms negotiated",
              time: "Processed in 60 days",
            },
          ].map((story) => (
            <div
              key={story.name}
              className="rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{story.name}</h3>
              <div className="space-y-3 mb-6 text-sm">
                <div>
                  <p className="text-muted-foreground">Situation</p>
                  <p className="text-foreground font-medium">{story.situation}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Initial Debt</p>
                  <p className="text-foreground font-medium">{story.debt}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Solution</p>
                  <p className="text-foreground font-medium">{story.solution}</p>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-primary text-sm font-semibold mb-2">Result</p>
                <p className="text-foreground text-sm mb-2">{story.result}</p>
                <p className="text-muted-foreground text-xs">{story.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert team is here to help. Contact us with any questions about tax relief.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="gap-2">
              <Link href="/get-started">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
