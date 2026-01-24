"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Form Card */}
        <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">Member Login</h1>
            <p className="text-muted-foreground mt-2">
              Access your tax relief case and documents
            </p>
          </div>

          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  id="email"
                  className="w-full pl-12 pr-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full pl-12 pr-12 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20 cursor-pointer"
                  defaultChecked
                />
                <span className="text-sm text-muted-foreground">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-primary hover:text-primary/90">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11">
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">or</span>
            </div>
          </div>

          {/* Alternative CTAs */}
          <div className="space-y-3">
            <Button asChild variant="outline" className="w-full">
              <Link href="/get-started">Start Free Assessment</Link>
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/get-started" className="text-primary hover:text-primary/90 font-medium">
                Create one
              </Link>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 rounded-lg border border-border/50 bg-secondary/20 p-4 text-center">
          <p className="text-xs text-muted-foreground mb-2">
            🔒 Your information is protected with 256-bit encryption
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>SSL Secured</span>
            <span>•</span>
            <span>HIPAA Compliant</span>
            <span>•</span>
            <span>Data Private</span>
          </div>
        </div>

        {/* Help Links */}
        <div className="mt-6 flex flex-col gap-2 text-center text-sm">
          <Link href="/resources" className="text-muted-foreground hover:text-foreground">
            Need help? View our resources
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground">
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  )
}
