"use client"

import { Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="header fixed top-0 w-full z-[600] left-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between navbar-custom">
            {/* Logo */}
            <Link href="/" className="navbar-brand flex items-center">
              <img src="/logo.svg" alt="Solutions by stc" className="brand h-8 w-auto" />
            </Link>

            {/* Navigation */}
            <div className="collapse navbar-collapse hidden lg:flex">
              <ul className="navbar-nav mx-auto flex items-center space-x-0">
                <li className="nav-item">
                  <button 
                    type="button" 
                    className="nav-link font-weight-500 flex items-center gap-1 px-6 py-4 text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <span>Domains</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </li>
                <li className="nav-item">
                  <Link href="/features" className="nav-link font-weight-500 px-6 py-4 text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/pricing" className="nav-link font-weight-500 px-6 py-4 text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/additional-services" className="nav-link font-weight-500 px-6 py-4 text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    Additional Services
                  </Link>
                </li>
                <li className="nav-item">
                  <button 
                    type="button" 
                    className="nav-link font-weight-500 flex items-center gap-1 px-6 py-4 text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <span>Support</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </li>
              </ul>
              
              {/* Language Switch for Desktop */}
              <button className="switch-lang-btn hidden xl:flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-300">
                <Globe className="w-4 h-4" />
                <span>العربية</span>
              </button>
            </div>

            {/* User Area */}
            <div className="user-area flex items-center space-x-2">
              {/* Language Switch for Mobile/Tablet */}
              <button className="switch-lang-btn xl:hidden flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-300">
                <span>العربية</span>
                <Globe className="w-4 h-4" />
              </button>
              
              <button 
                type="button" 
                className="btn btn-secondary-link mx-2 login px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                Login
              </button>
              
              <Link 
                href="/register" 
                className="btn btn-outline-primary register px-6 py-2 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-md font-medium transition-all duration-300"
              >
                Register
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button type="button" className="navbar-toggler lg:hidden ml-2">
                <span className="navbar-toggler-icon">
                  <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                  <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                  <div className="w-6 h-0.5 bg-gray-600"></div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
