"use client"

import { Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AnimatedHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100 navbar-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Solutions by stc" className="h-8 w-auto" />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="nav-item flex items-center space-x-1">
              <span>Domains</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link href="/features" className="nav-item">
              Features
            </Link>
            <Link href="/pricing" className="nav-item">
              Pricing
            </Link>
            <Link href="/cloud-applications" className="nav-item">
              Cloud Applications
            </Link>
            <Link href="/knowledge-base" className="nav-item nav-item-active">
              Knowledge Base
            </Link>
            <div className="nav-item flex items-center space-x-1">
              <span>Support</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-purple-600">
              <Globe className="w-4 h-4 mr-2" />
              العربية
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700">
              Login
            </Button>
            <Button
              size="sm"
              className="text-white border-2 rounded-md px-4 py-2 font-medium"
              style={{
                backgroundColor: "transparent",
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
