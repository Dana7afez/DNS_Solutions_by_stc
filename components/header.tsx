"use client"

import { Globe, ChevronDown, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between w-full navbar-custom">
            {/* Logo */}
            <Link href="/" className="navbar-brand" onClick={closeMobileMenu}>
              <img 
                src="/DNS_Solutions_by_stc/logo.svg" 
                alt="Solutions by stc" 
                className="brand"
              />
            </Link>

            {/* Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="navbar-nav">
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
                  <Link href="/knowledge-base" className="nav-link font-weight-500">
                    Knowledge Base
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
                      <Link href="/blogs" className="dropdown-item">Blog</Link>
                      <Link href="/contact" className="dropdown-item">Contact Support</Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>

            {/* User Area */}
            <div className="user-area">
              {/* Language Switch */}
              <button className="switch-lang-btn">
                <span>العربية</span>
                <Globe className="icon-globe w-4 h-4" />
              </button>
              
              <Link 
                href="/login" 
                className="btn btn-secondary-link login"
              >
                Login
              </Link>
              
              <Link 
                href="/register" 
                className="btn btn-outline-primary register"
              >
                Register
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button 
                type="button" 
                className="navbar-toggler lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <ul className="navbar-nav space-y-2">
                <li className="nav-item">
                  <button 
                    type="button" 
                    className="nav-link font-weight-500 w-full text-left"
                    onClick={() => handleDropdownToggle('domains')}
                  >
                    <span>Domains <ChevronDown className="inline w-4 h-4 ml-1" /></span>
                  </button>
                  {activeDropdown === 'domains' && (
                    <div className="pl-4 mt-2 space-y-1">
                      <Link href="/domains" className="dropdown-item block" onClick={closeMobileMenu}>Domain Registration</Link>
                      <Link href="/transfer" className="dropdown-item block" onClick={closeMobileMenu}>Domain Transfer</Link>
                      <Link href="/management" className="dropdown-item block" onClick={closeMobileMenu}>Domain Management</Link>
                    </div>
                  )}
                </li>
                <li className="nav-item">
                  <Link href="/features" className="nav-link font-weight-500 block" onClick={closeMobileMenu}>
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/pricing" className="nav-link font-weight-500 block" onClick={closeMobileMenu}>
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/additional-services" className="nav-link font-weight-500 block" onClick={closeMobileMenu}>
                    Additional Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/knowledge-base" className="nav-link font-weight-500 block" onClick={closeMobileMenu}>
                    Knowledge Base
                  </Link>
                </li>
                <li className="nav-item">
                  <button 
                    type="button" 
                    className="nav-link font-weight-500 w-full text-left"
                    onClick={() => handleDropdownToggle('support')}
                  >
                    <span>Support <ChevronDown className="inline w-4 h-4 ml-1" /></span>
                  </button>
                  {activeDropdown === 'support' && (
                    <div className="pl-4 mt-2 space-y-1">
                      <Link href="/faqs" className="dropdown-item block" onClick={closeMobileMenu}>FAQs</Link>
                      <Link href="/user-guide" className="dropdown-item block" onClick={closeMobileMenu}>User Guide</Link>
                      <Link href="/blogs" className="dropdown-item block" onClick={closeMobileMenu}>Blog</Link>
                      <Link href="/contact" className="dropdown-item block" onClick={closeMobileMenu}>Contact Support</Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
