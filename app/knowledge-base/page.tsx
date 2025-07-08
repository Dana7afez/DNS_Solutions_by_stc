import { AnimatedHeader } from "@/components/animated-header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { BookOpen, HelpCircle, FileText } from "lucide-react"

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />

      {/* Hero Section - Consistent styling */}
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-title">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Knowledge Base</h1>
            <p className="text-xl text-gray-600 mb-8">Explore Insights, Tips, and Updates</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Stay up to date with the latest in domain management and digital identity
            </p>
          </div>
        </div>
      </div>

      {/* Knowledge Base Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQs Section */}
          <Link href="/faqs" className="group">
            <div className="category-card border-2 border-gray-200 p-8 h-full">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#4f018c15" }}
              >
                <HelpCircle className="w-8 h-8" style={{ color: "#4f018c" }} />
              </div>
              <div className="knowledge-card-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h3>
                <p className="text-gray-600 mb-6">
                  Find answers to the most common questions about Saudi domain registration, stc Solutions services, and
                  technical requirements.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Domain registration requirements</li>
                  <li>• Technical support queries</li>
                  <li>• Billing and payment questions</li>
                  <li>• Compliance and regulations</li>
                </ul>
              </div>
              <div className="text-center">
                <div
                  className="inline-flex items-center px-6 py-3 text-white rounded-lg font-medium group-hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#4f018c" }}
                >
                  Browse FAQ
                </div>
              </div>
            </div>
          </Link>

          {/* User Guide Section */}
          <Link href="/user-guide" className="group">
            <div className="category-card border-2 border-gray-200 p-8 h-full">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#00c48c15" }}
              >
                <BookOpen className="w-8 h-8" style={{ color: "#00c48c" }} />
              </div>
              <div className="knowledge-card-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">User Guide</h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step instructions and comprehensive guides to help you navigate domain registration and
                  management processes.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Domain registration walkthrough</li>
                  <li>• DNS configuration guide</li>
                  <li>• Account management tips</li>
                  <li>• Best practices</li>
                </ul>
              </div>
              <div className="text-center">
                <div
                  className="inline-flex items-center px-6 py-3 text-white rounded-lg font-medium group-hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#00c48c" }}
                >
                  Read Guide
                </div>
              </div>
            </div>
          </Link>

          {/* Blogs Section */}
          <Link href="/blogs" className="group">
            <div className="category-card border-2 border-gray-200 p-8 h-full">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#ff375e15" }}
              >
                <FileText className="w-8 h-8" style={{ color: "#ff375e" }} />
              </div>
              <div className="knowledge-card-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blogs</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with the latest news, insights, and expert advice on domain management and digital
                  presence in Saudi Arabia.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Industry insights and trends</li>
                  <li>• Expert tips and strategies</li>
                  <li>• Case studies and success stories</li>
                  <li>• Regulatory updates</li>
                </ul>
              </div>
              <div className="text-center">
                <div
                  className="inline-flex items-center px-6 py-3 text-white rounded-lg font-medium group-hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#ff375e" }}
                >
                  Read Blogs
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
