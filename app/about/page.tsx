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
            Dedicated to helping Americans resolve their IRS tax debt with integrity, expertise, and compassion.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At Revelation Tax Relief, we believe that tax debt shouldn't define your financial future. Our mission is to provide secure, professional, and compassionate tax debt resolution services to Americans from all backgrounds.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded in 2025, we combine over 20 years of collective tax expertise with modern technology to create a streamlined, transparent process for resolving IRS debt. We're committed to helping our members regain financial peace and build a brighter future.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every member we help represents a victory against financial stress and uncertainty. We take that responsibility seriously.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-lg border border-border bg-secondary/30 p-6">
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-foreground font-semibold mb-1">Transparent Process</p>
                <p className="text-sm text-muted-foreground">Full disclosure always</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-6">
                <p className="text-4xl font-bold text-primary mb-2">20+</p>
                <p className="text-foreground font-semibold mb-1">Years of Experience</p>
                <p className="text-sm text-muted-foreground">Professional expertise</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-6">
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-foreground font-semibold mb-1">Support Access</p>
                <p className="text-sm text-muted-foreground">Always available</p>
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
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Heart,
                title: "Integrity",
                description: "We operate with complete transparency and honest communication.",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We deliver the highest quality service and expert guidance.",
              },
              {
                icon: Users,
                title: "Compassion",
                description: "We understand the stress of tax debt and treat clients with care.",
              },
              {
                icon: CheckCircle,
                title: "Accountability",
                description: "We maintain ethical standards and transparent communication with every client.",
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
              title: "Expert Team",
              description: "Our tax professionals bring decades of combined experience in IRS resolution strategies.",
            },
            {
              title: "Secure Platform",
              description: "Military-grade encryption and HIPAA-level security protect all your information.",
            },
            {
              title: "Transparent Pricing",
              description: "No hidden fees. You know exactly what you're paying for, upfront.",
            },
            {
              title: "Ethical Standards",
              description: "We maintain the highest ethical standards and transparent practices in all interactions.",
            },
            {
              title: "Personalized Solutions",
              description: "We develop customized resolution strategies tailored to your specific situation.",
            },
            {
              title: "24/7 Support",
              description: "Access your account and get support whenever you need it, day or night.",
            },
          ].map((item) => (
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "IRS Payment Plans",
                description: "Setting up manageable installment agreements with the IRS.",
              },
              {
                title: "Offer in Compromise",
                description: "Negotiating settlement of tax debt for less than owed.",
              },
              {
                title: "Wage Garnishment Relief",
                description: "Stopping and releasing wage garnishment orders.",
              },
              {
                title: "Tax Lien Resolution",
                description: "Removing or reducing federal tax liens on property.",
              },
              {
                title: "Currently Not Collectible Status",
                description: "Obtaining temporary relief during financial hardship.",
              },
              {
                title: "Back Tax Resolution",
                description: "Resolving multiple years of unpaid federal taxes.",
              },
              {
                title: "Innocent Spouse Relief",
                description: "Defending spouses from joint liability for tax debt.",
              },
              {
                title: "Professional Guidance",
                description: "Expert consultation on penalties, interest, and resolution options.",
              },
              {
                title: "IRS Appeals",
                description: "Representing clients in IRS appeals and disputes.",
              },
            ].map((area) => (
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
              author: "David M.",
              role: "Client since 2025",
            },
            {
              quote: "The professional guidance and ethical approach made this much easier than I expected.",
              author: "Maria S.",
              role: "Client since 2025",
            },
          ].map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-lg border border-border bg-card p-8"
            >
              <p className="text-muted-foreground italic mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Join Our Community
          </h2>
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
