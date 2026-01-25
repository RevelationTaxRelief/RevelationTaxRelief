"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions? Our expert team is here to help. Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {[
            {
              icon: Mail,
              title: "Email",
              content: "charles@revelationtaxrelief.com",
              subtext: "Response within 24 hours",
            },
            {
              icon: Phone,
              title: "Phone",
              content: "(949) 993-7311",
              subtext: "Available 9AM-9PM EST",
            },
            {
              icon: MapPin,
              title: "Address",
              content: "California, USA",
              subtext: "",
            },
            {
              icon: Clock,
              title: "Hours",
              content: "Monday - Friday 9AM-6PM",
              subtext: "Saturday 10AM-4PM EST",
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 transition-colors"
              >
                <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground font-medium">{item.content}</p>
                <p className="text-sm text-muted-foreground">{item.subtext}</p>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="(555) 555-5555"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="assessment">Free Assessment</option>
                  <option value="pricing">Pricing Question</option>
                  <option value="features">Features & Services</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 gap-2">
                Send Message <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">We're Here to Help</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
                <p className="text-muted-foreground">
                  We typically respond to emails within 24 hours. For urgent matters, call us directly.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-2">Tax Assessment</h3>
                <p className="text-muted-foreground">
                  Ready to get started? Take our free assessment to understand your options.
                </p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <Link href="/get-started">Start Free Assessment</Link>
                </Button>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-2">Common Questions</h3>
                <p className="text-muted-foreground mb-4">
                  Check out our resources page for FAQs and educational guides.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/resources">View Resources</Link>
                </Button>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-6">
                <h3 className="font-semibold text-foreground mb-2">24/7 Account Access</h3>
                <p className="text-muted-foreground">
                  Already a member? Access your account anytime to check case status and upload documents.
                </p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <Link href="/login">Member Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How quickly will you respond to my inquiry?",
                a: "We aim to respond within 24 business hours. For urgent matters, please call us directly.",
              },
              {
                q: "Is there a cost for consultation?",
                a: "No, initial consultations and assessments are completely free, with no obligation.",
              },
              {
                q: "What information do I need to provide?",
                a: "For an assessment, we'll need basic information about your tax debt, income, and financial situation.",
              },
              {
                q: "Can you represent me to the IRS?",
                a: "Yes, our team can communicate with the IRS on your behalf as part of our service.",
              },
              {
                q: "What if I'm unable to afford your services?",
                a: "We offer payment plans and various service levels to fit different budgets. We also believe the free assessment is valuable regardless.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Take Action?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with a free assessment or contact us directly. We're here to help you resolve your IRS tax debt.
          </p>
          <Button asChild size="lg">
            <Link href="/get-started">Start Free Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
