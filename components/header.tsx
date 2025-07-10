"use client"

import { Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <div className="flex items-center justify-between w-full navbar-custom">
            {/* Logo */}
            <Link href="/" className="navbar-brand">
              <img src="/logo.svg" alt="Solutions by stc" className="brand" />
            </Link>

            {/* Navigation */}
            <div className="collapse navbar-collapse hidden lg:flex">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <button 
                    type="button" 
                    className="nav-link font-weight-500"
                    onClick={() => handleDropdownToggle('domains')}
                  >
                    <span>Domains <ChevronDown className="inline w-4 h-4 ml-1" /></span>
                  </button>
                  {activeDropdown === 'domains' && (
                    <div className="dropdown-menu">
                      <Link href="/domains" className="dropdown-item">Domain Registration</Link>
                      <Link href="/transfer" className="dropdown-item">Domain Transfer</Link>
                      <Link href="/management" className="dropdown-item">Domain Management</Link>
                    </div>
                  )}
                </li>
                <li className="nav-item">
                  <Link href="/features" className="nav-link font-weight-500">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/pricing" className="nav-link font-weight-500">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/additional-services" className="nav-link font-weight-500">
                    Additional Services
                  </Link>
                </li>
                <li className="nav-item">
                  <button 
                    type="button" 
                    className="nav-link font-weight-500"
                    onClick={() => handleDropdownToggle('support')}
                  >
                    <span>Support <ChevronDown className="inline w-4 h-4 ml-1" /></span>
                  </button>
                  {activeDropdown === 'support' && (
                    <div className="dropdown-menu">
                      <Link href="/faqs" className="dropdown-item">FAQs</Link>
                      <Link href="/user-guide" className="dropdown-item">User Guide</Link>
                      <Link href="/knowledge-base" className="dropdown-item">Knowledge Base</Link>
                      <Link href="/blogs" className="dropdown-item">Blog</Link>
                    </div>
                  )}
                </li>
              </ul>
              
              {/* Language Switch for Desktop */}
              <button className="switch-lang-btn hidden xl:flex">
                <Globe className="icon icon-globe w-4 h-4" />
                <span>العربية</span>
              </button>
            </div>

            {/* User Area */}
            <div className="user-area">
              {/* Language Switch for Mobile/Tablet */}
              <button className="switch-lang-btn xl:hidden">
                <span>العربية</span>
                <Globe className="icon-globe w-4 h-4" />
              </button>
              
              <button 
                type="button" 
                className="btn btn-secondary-link mx-2 login"
              >
                Login
              </button>
              
              <Link 
                href="https://cloud.bluvalt.com/#/register" 
                className="btn btn-outline-primary register"
              >
                Register
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button type="button" className="navbar-toggler lg:hidden">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
