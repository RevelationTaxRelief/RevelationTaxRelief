"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Heart, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Revelation Tax Relief
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Professional tax consultation and resolution support grounded in regulatory awareness, ethical standards, and documented process management.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Foundation</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Revelation Tax Relief was established to provide structured, professional tax consultation and resolution support grounded in regulatory awareness, ethical standards, and documented process management. Our firm operates with the understanding that tax matters involve complex administrative systems governed by law, internal agency procedures, and discretionary review.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                For this reason, we prioritize preparation, accuracy, and transparency over outcome-based claims or marketing-driven representations. Our role is to assist clients in navigating these systems responsibly by providing informed guidance, procedural support, and organized communication aligned with applicable federal and state frameworks.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-lg border border-border bg-secondary/30 p-6">
                <p className="text-sm font-bold text-primary mb-2 uppercase">Core Principle</p>
                <p className="text-foreground font-semibold">Integrity of Process</p>
                <p className="text-xs text-muted-foreground mt-2">Documented evaluation and compliance-based recommendations</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-6">
                <p className="text-sm font-bold text-primary mb-2 uppercase">Core Principle</p>
                <p className="text-foreground font-semibold">Transparency of Scope</p>
                <p className="text-xs text-muted-foreground mt-2">Clear, written service agreements</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-6">
                <p className="text-sm font-bold text-primary mb-2 uppercase">Core Principle</p>
                <p className="text-foreground font-semibold">Client Education</p>
                <p className="text-xs text-muted-foreground mt-2">Informed decision-making through guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Our Professional Philosophy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe effective tax consultation is built on three core principles
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Integrity of Process",
                description: "Every engagement begins with a documented review of available information and compliance status. Recommendations are made only after relevant records, financial data, and agency documentation have been evaluated.",
              },
              {
                icon: Target,
                title: "Transparency of Scope",
                description: "Services are clearly defined in writing and limited to the responsibilities outlined in each engagement agreement. We avoid broad or implied commitments and focus on delivering only what is appropriate.",
              },
              {
                icon: Users,
                title: "Client Education",
                description: "We place strong emphasis on helping clients understand their administrative rights, obligations, and available procedural options. Informed clients are better equipped to make responsible decisions.",
              },
            ].map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-lg border border-border bg-background p-8 text-center hover:border-primary/50 transition-colors"
                >
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Why Choose Revelation Tax Relief?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              title: "Financial & Compliance Review",
              description: "Reviewing financial and compliance information to establish accurate assessment of client status.",
            },
            {
              title: "Administrative Pathway Evaluation",
              description: "Evaluating administrative pathways available under applicable federal and state guidelines.",
            },
            {
              title: "Documentation Preparation",
              description: "Preparing and organizing documentation for submission to relevant agencies.",
            },
            {
              title: "Structured Communication",
              description: "Assisting with structured communication and case coordination within established procedures.",
            },
            {
              title: "Status Monitoring",
              description: "Monitoring administrative status and procedural requirements throughout engagement.",
            },
            {
              title: "Case-by-Case Service",
              description: "Handling each engagement individually based on specific facts, documentation, and regulatory requirements
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Expertise */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-16">
            Our Areas of Expertise
          </h2>
Operational Standards
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Regulatory Compliance",
                description: "Operating under established federal and state tax guidelines and ethical marketing standards.",
              },
              {
                title: "Data Security",
                description: "Administrative, technical, and procedural safeguards designed to protect client information from unauthorized access.",
              },
              {
                title: "Accurate Recordkeeping",
                description: "Maintaining clear documentation of service scope, communications, and client authorizations.",
              },
              {
                title: "Communication Protocols",
                description: "Authorized communication aligned with applicable agency procedures and regulatory requirements.",
              },
              {
                title: "Quality Control",
                description: "Standardized internal procedures and periodic reviews to ensure consistency and reliability.",
              },
              {
                title: "Professional Oversight",
                description: "Continuous operational supervision designed to maintain service quality at every stage of delivery
              <div
                key={area.title}
                className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-16">
          What Our Members Say
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              quote: "I appreciated their transparent approach and honest communication throughout the entire process.",
              author: "Jennifer K.",
              role: "Client since 2025",
            },
            {
              quote: "They took the time to explain all my options clearly without any pressure. That honesty meant a lot.",
          Our Commitment
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              quote: "Revelation Tax Relief is an independent firm providing professional tax consultation and resolution support. We are not affiliated with, endorsed by, or acting on behalf of any government agency.",
              label: "Independence",
            },
            {
              quote: "Our commitment is to provide structured, ethical, and transparent tax consultation and resolution support. We focus on preparation, documentation, and procedural alignment.",
              label: "Service Promise",
            },
            {
              quote: "Final determinations, approvals, and administrative outcomes are always made solely by the applicable tax authority. We provide professional support within established regulatory frameworks.",
              label: "Clarity",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-card p-8"
            >
              <p className="text-muted-foreground italic mb-6">
                "{item.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm uppercase tracking-wide">{item.label
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with a team committed to transparency, ethics, and professional guidance in resolving your tax situation.
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
Getting Started With Us
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Prospective clients may request an initial consultation to discuss their situation and provide preliminary information for review. Engagement is established only after a written agreement defining service scope and responsibilities is executed.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/get-started">
              Start Your Consultation