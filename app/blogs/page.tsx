import { AnimatedHeader } from "@/components/animated-header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogs = [
  {
    id: 1,
    title: "What is a Domain Name and How Does It Work?",
    excerpt:
      "In today's digital age, almost everything starts with a website. Whether you're building an online store, creating a personal portfolio, or launching a business, your journey begins with a domain name.",
    image: "/DNS_Solutions_by_stc/blog1.png",
    date: "December 15, 2024",
    author: "Solutions by stc Team",
  },
  {
    id: 2,
    title: "How to Register a Saudi Domain Name with Solutions by stc",
    excerpt:
      "If you're ready to build your digital presence in Saudi Arabia, registering a Saudi domain name is one of the first steps. Solutions by stc makes the process simple.",
    image: "/DNS_Solutions_by_stc/blog2.png",
    date: "December 10, 2024",
    author: "Solutions by stc Team",
  },
  {
    id: 3,
    title: "Eligibility Criteria for Saudi Domains",
    excerpt:
      "2LD or 3LD Domain names may be registered within the Saudi Latin ccTLD according to specific eligibility requirements for each domain extension.",
    image: "/DNS_Solutions_by_stc/blog3.png",
    date: "December 5, 2024",
    author: "Solutions by stc Team",
  },
  {
    id: 4,
    title: "Common Reasons Saudi Domain Registrations Get Rejected",
    excerpt:
      "Understanding the most frequent causes of rejection can save you time, effort, and missed opportunities when registering your Saudi domain.",
    image: "/DNS_Solutions_by_stc/blog4.png",
    date: "November 28, 2024",
    author: "Solutions by stc Team",
  },
  {
    id: 5,
    title: "Understanding the Role of SaudiNIC and CST in Domain Registration",
    excerpt:
      "Learn about the key entities that play vital roles in .sa domain registration and their impact on domain management in Saudi Arabia.",
    image: "/DNS_Solutions_by_stc/blog5.png",
    date: "November 20, 2024",
    author: "Solutions by stc Team",
  },
  {
    id: 6,
    title: "How to Link Your Domain to a Website or Hosting Provider in Saudi Arabia",
    excerpt:
      "A comprehensive guide to linking your .sa domain to a website or hosting provider for establishing your online presence in Saudi Arabia.",
    image: "/DNS_Solutions_by_stc/blog6.png",
    date: "November 15, 2024",
    author: "Solutions by stc Team",
  },
  {
    id: 7,
    title: "How to Secure Your Domain Name from Hijacking and Abuse",
    excerpt:
      "Your domain name is one of your most valuable digital assets. Learn the 11 best practices to protect your domain from hijacking and misuse.",
    image: "/DNS_Solutions_by_stc/blog7.png",
    date: "November 10, 2024",
    author: "Solutions by stc Team",
  },
  {
    id: 8,
    title: "How to Choose the Best Domain Name for Your Business",
    excerpt:
      "Your domain name is your digital identity. Learn how to choose the right domain name that builds trust, improves SEO, and grows your business online.",
    image: "/DNS_Solutions_by_stc/blog8.png",
    date: "November 5, 2024",
    author: "Solutions by stc Team",
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />

      {/* Hero Section - Consistent styling */}
      <div className="hero-gradient">
        <div className="back-button-container">
          <BackButton href="/knowledge-base" text="Back to Knowledge Base" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="page-title">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Domain Management Blog</h1>
            <p className="text-xl text-gray-600 mb-8">Stay updated with the latest insights, tips, and expert advice</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Discover industry trends, best practices, and regulatory updates for domain management in Saudi Arabia
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} className="group">
              <article className="blog-card">
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image || "/DNS_Solutions_by_stc/placeholder.svg"}
                    alt={blog.title}
                    className="blog-image group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                  <div className="flex items-center font-medium group-hover:opacity-80" style={{ color: "#4f018c" }}>
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
