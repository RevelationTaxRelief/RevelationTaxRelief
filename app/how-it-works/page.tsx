"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Lock, BarChart3, Users, Shield } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Process
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Revelation Tax Relief follows a structured, documentation-driven process designed to support clients through administrative tax matters in a professional, compliant, and transparent manner.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-lg border border-border bg-card/50 p-8 mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Each engagement is evaluated individually, and all services are performed within the framework of applicable federal and state guidelines. Our role is to assist with preparation, coordination, and procedural support; all determinations and outcomes remain under the authority of the appropriate tax agencies.
          </p>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="space-y-12">
          {[
            {
              number: "1",
              title: "Initial Inquiry and Information Intake",
              description: "The process begins with an initial inquiry, during which prospective clients are invited to provide preliminary information regarding their tax situation. This stage focuses on understanding the general scope of the matter, identifying relevant tax periods, and confirming the availability of basic documentation.",
              icon: FileText,
              details: [
                "Preliminary information review",
                "Scope assessment",
                "Documentation verification",
                "Completeness check",
              ],
              additionalNote: "No recommendations are made until sufficient records and disclosures are available to support an informed assessment.",
            },
            {
              number: "2",
              title: "Preliminary Review and Case Assessment",
              description: "Following intake, available information is evaluated to determine the administrative pathways that may be applicable under current regulatory guidelines.",
              icon: BarChart3,
              details: [
                "Filing and compliance status review",
                "Financial disclosures examination",
                "Verification of correspondence",
                "Agency standards identification",
              ],
              additionalNote: "This stage is intended to establish a working profile of the case, not to predict outcomes or agency determinations.",
            },
            {
              number: "3",
              title: "Engagement Authorization and Scope Definition",
              description: "If the matter is suitable for engagement, a written agreement is prepared outlining the scope of services, responsibilities, and applicable disclosures.",
              icon: FileText,
              details: [
                "Written agreement preparation",
                "Scope clarification",
                "Responsibility definition",
                "Disclosure documentation",
              ],
              additionalNote: "This step ensures clarity, transparency, and mutual understanding before any formal case coordination or documentation preparation begins.",
            },
            {
              number: "4",
              title: "Documentation Collection and Organization",
              description: "Once authorized, relevant records and materials are gathered and organized in accordance with agency requirements.",
              icon: Lock,
              details: [
                "Financial statements collection",
                "Tax filings organization",
                "Agency correspondence review",
                "Authorization forms gathering",
              ],
              additionalNote: "Documentation is reviewed for consistency and completeness to support accurate submission and communication.",
            },
            {
              number: "5",
              title: "Procedural Preparation and Administrative Coordination",
              description: "Based on the defined scope, we assist with preparing administrative materials and coordinating procedural steps.",
              icon: Users,
              details: [
                "Submission package preparation",
                "Agency communication support",
                "Procedural timeline tracking",
                "Information request responses",
              ],
              additionalNote: "All actions are documented as part of the case record.",
            },
            {
              number: "6",
              title: "Ongoing Review and Case Monitoring",
              description: "Tax matters often require ongoing attention. As agency responses or additional requests are received, the case is reviewed and updated accordingly.",
              icon: Shield,
              details: [
                "Continuous case monitoring",
                "Client notification system",
                "Additional information requests",
                "Status update tracking",
              ],
              additionalNote: "This stage continues until the defined service scope has been fulfilled or the engagement concludes under the terms of the agreement.",
            },
          ].map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 text-primary">
                      <span className="text-2xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Step {step.number}: {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                    {step.additionalNote && (
                      <p className="text-sm text-muted-foreground italic border-l-2 border-primary/50 pl-4 py-2">
                        {step.additionalNote}
                      </p>
                    )}
                  </div>
                </div>
                {step.number !== "6" && (
                  <div className="absolute left-10 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Client Responsibilities Section */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
            Client Responsibilities
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Clients play an active role throughout the process. Responsibilities include:
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Accurate Information",
                description: "Providing accurate, complete, and timely information throughout the engagement.",
              },
              {
                title: "Material Review",
                description: "Reviewing prepared materials and submissions for accuracy and completeness.",
              },
              {
                title: "Authorizations",
                description: "Authorizing communications and filings on your behalf with tax authorities.",
              },
              {
                title: "Status Updates",
                description: "Notifying us of changes in financial or compliance status promptly.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-background p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic mt-8 border-l-2 border-primary/50 pl-4 py-2">
            Active client participation supports accuracy and procedural alignment.
          </p>
        </div>
      </section>

      {/* Compliance and Security Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Information Handling and Security
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All client information is managed using administrative and technical safeguards designed to protect confidentiality and data integrity. Access is limited to authorized personnel and service providers involved in the engagement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Information is shared only as necessary to fulfill documented service obligations or regulatory requirements.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Compliance and Regulatory Alignment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our processes are designed to align with applicable tax authority guidelines and ethical service standards. We maintain internal procedures to support:
            </p>
            <ul className="space-y-3">
              {[
                "Clear documentation of service scope",
                "Authorized communication protocols",
                "Record retention and case tracking",
                "Periodic internal review for quality and consistency",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Model Section */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Case-by-Case Service Model
          </h2>
          <div className="rounded-lg border border-border bg-card p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every engagement is evaluated independently. Timelines, procedural steps, and available administrative options depend on individual circumstances, documentation quality, and agency discretion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For this reason, services are not standardized or outcome-based. Our role is to provide structured support and preparation within established regulatory frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Completion and Closure Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Completion and Engagement Closure
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              An engagement is considered complete when the defined scope of services has been fulfilled or when the agreement is concluded in accordance with its terms. All records are maintained in accordance with internal retention policies and applicable regulations.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card/50 p-8">
            <p className="text-muted-foreground leading-relaxed italic">
              Clients are encouraged to retain copies of relevant documentation for their records and future reference.
            </p>
          </div>
        </div>
      </section>

      {/* Important Disclosures */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Important Disclosures
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Independent Firm",
                description: "Revelation Tax Relief is an independent tax consultation and resolution support firm. We are not affiliated with, endorsed by, or acting on behalf of any government agency.",
              },
              {
                title: "Agency Authority",
                description: "All determinations, approvals, and administrative outcomes are made solely by the applicable tax authority.",
              },
              {
                title: "Legal and Professional Advice",
                description: "We do not provide legal advice unless explicitly stated in a written agreement. When appropriate, clients may be advised to consult with licensed legal or accounting professionals.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started CTA Section */}
      <section className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Getting Started
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Prospective clients may request an initial consultation to begin the information intake and review process. A formal engagement is established only after a written agreement defining scope, responsibilities, and disclosures has been executed.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/get-started">
              Start Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
