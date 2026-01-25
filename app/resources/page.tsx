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
                category: "Services & Scope",
                questions: [
                  {
                    q: "What services does Revelation Tax Relief provide?",
                    a: "Revelation Tax Relief provides professional tax consultation and resolution support services. Our work focuses on reviewing financial and compliance information, evaluating available administrative options under applicable tax authority guidelines, preparing documentation, and assisting with structured communication and case coordination. Services are tailored to the specific facts, records, and regulatory requirements of each individual or business engagement.",
                  },
                  {
                    q: "Are your services standardized or customized?",
                    a: "All services are customized. Each engagement is evaluated individually based on documentation, financial information, compliance history, and regulatory considerations. There is no universal approach that applies to every case. Service scope is defined in writing and limited to what is appropriate for the specific circumstances presented.",
                  },
                  {
                    q: "How is service scope defined?",
                    a: "Service scope is defined in a written agreement that outlines the specific tasks and responsibilities associated with each engagement. Only the services listed in the agreement are included. Additional services, if needed, require separate authorization.",
                  },
                  {
                    q: "What is required from clients to begin working with your firm?",
                    a: "Clients are required to provide accurate, complete, and truthful information, including financial records, tax filings, and relevant correspondence from tax authorities. This information is essential for proper evaluation and preparation. Incomplete or inaccurate information may limit available administrative options or delay case progression.",
                  },
                  {
                    q: "Do you work with both individuals and businesses?",
                    a: "Yes. Our services are available to both individual taxpayers and business entities. Each engagement is evaluated independently and handled according to the specific regulatory and documentation requirements that apply.",
                  },
                  {
                    q: "Do you provide legal or accounting advice?",
                    a: "Revelation Tax Relief provides tax consultation and resolution support services. We do not provide legal advice unless explicitly stated in a written agreement. When necessary, clients may be advised to consult with licensed legal or accounting professionals for matters that fall outside the scope of our services.",
                  },
                  {
                    q: "Are all clients accepted for service?",
                    a: "Not all cases are suitable for engagement. Acceptance is based on an initial review of available documentation, compliance status, and the firm's ability to provide services within regulatory and ethical guidelines. We reserve the right to decline engagements that fall outside our service model.",
                  },
                ],
              },
              {
                category: "Process & Outcomes",
                questions: [
                  {
                    q: "Does Revelation Tax Relief guarantee any specific outcome?",
                    a: "No. Revelation Tax Relief does not guarantee results, acceptance of applications, timing, or determinations by any tax authority. All outcomes are governed by applicable laws, internal agency policies, and discretionary review by federal or state agencies. Our role is to provide professional support, preparation, and representation within established regulatory frameworks.",
                  },
                  {
                    q: "How does the consultation process work?",
                    a: "The consultation process begins with an initial information review to understand the client's tax profile, compliance status, and documentation history. This may include transcript review, financial disclosures, and verification of filing status. Based on this information, we identify potential administrative pathways that may be available under current guidelines. Recommendations are made only after a documented assessment is completed.",
                  },
                  {
                    q: "How long does the process typically take?",
                    a: "Timelines vary significantly based on the complexity of the case, responsiveness of agencies, completeness of documentation, and regulatory processing standards. Because determinations are made by tax authorities, time-frames cannot be predicted or guaranteed.",
                  },
                  {
                    q: "What happens if a client's situation changes during the engagement?",
                    a: "If a client's financial, compliance, or documentation status changes, the case may need to be re-evaluated. Updated information can affect eligibility for certain administrative options and may require modifications to the service scope or strategy.",
                  },
                  {
                    q: "What role does the client play throughout the process?",
                    a: "Clients remain actively involved throughout the engagement. They are responsible for providing timely information, reviewing documentation, and approving submissions. Informed client participation is essential to maintaining accuracy and compliance.",
                  },
                  {
                    q: "What should clients understand before engaging your services?",
                    a: "Clients should understand that tax resolution is an administrative and regulatory process governed by law and agency discretion. Our firm provides professional support, preparation, and coordination, but final determinations are always made by the applicable tax authority.",
                  },
                ],
              },
              {
                category: "Communication & Compliance",
                questions: [
                  {
                    q: "How do you communicate with tax authorities?",
                    a: "When authorized, we assist with structured communication and case coordination in accordance with applicable agency procedures. This may include submitting documentation, responding to requests for information, and monitoring administrative status. All communications are documented and maintained as part of the case record.",
                  },
                  {
                    q: "What if a tax authority requests additional information?",
                    a: "If additional information is requested, we coordinate with the client to gather and prepare the necessary documentation. Responses are submitted in accordance with agency procedures and within applicable time-frames when possible.",
                  },
                  {
                    q: "How do you document your work?",
                    a: "All services, communications, and submissions are documented and retained as part of the case record. This ensures transparency, continuity, and internal quality control throughout the engagement lifecycle.",
                  },
                  {
                    q: "How do you ensure compliance with regulations and ethical standards?",
                    a: "Our firm operates under established federal and state guidelines, internal compliance procedures, and ethical marketing standards. We maintain documentation of service scope, communications, and client authorizations to ensure transparency and accountability throughout the engagement.",
                  },
                  {
                    q: "How do you protect client information?",
                    a: "We implement administrative, technical, and procedural safeguards designed to protect sensitive information from unauthorized access, disclosure, or misuse. Access to client records is limited to authorized personnel and service providers directly involved in case preparation and communication. Information is only shared when necessary to fulfill documented service obligations.",
                  },
                  {
                    q: "How do you maintain service quality and consistency?",
                    a: "We utilize standardized internal procedures, documentation protocols, and periodic internal reviews to maintain consistent service quality across engagements. This approach supports regulatory compliance and operational reliability.",
                  },
                ],
              },
              {
                category: "Getting Started & Support",
                questions: [
                  {
                    q: "How can prospective clients get started?",
                    a: "Prospective clients may request an initial consultation to discuss their situation and provide preliminary information for review. Engagement is only established after a written agreement defining scope and responsibilities is executed.",
                  },
                  {
                    q: "How do you handle service disputes or concerns?",
                    a: "Clients are encouraged to contact our firm directly with any questions or concerns regarding services. We maintain internal review processes to address issues related to scope, documentation, or service delivery in a professional and structured manner.",
                  },
                  {
                    q: "Where can clients find your policies and disclosures?",
                    a: "Our Terms of Service and Privacy Policy are available on our website and outline our service framework, client responsibilities, data protection practices, and operational standards.",
                  },
                  {
                    q: "Is your firm affiliated with any government agency?",
                    a: "No. Revelation Tax Relief is an independent tax consultation and resolution support firm. We are not affiliated with, endorsed by, or acting on behalf of any government agency.",
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
