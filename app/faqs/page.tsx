"use client"

import { useState } from "react"
import { AnimatedHeader } from "@/components/animated-header"
import { CategorySelector } from "@/components/category-selector"
import { FAQList } from "@/components/faq-list"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Search } from "lucide-react"
import { getImagePath } from "@/lib/assets"

const faqData = {
  registration: [
    {
      question: "How to register a Saudi domain?",
      answer:
        "To register a Saudi domain, you need to apply through an accredited registrar like Solutions by stc. Check the availability of the required domain name, and apply for acquiring it through the portal.",
    },
    {
      question: "What is a domain name?",
      answer:
        'A domain name is a unique, human-readable web address used to identify and access websites on the internet such as "example.com".',
    },
    {
      question: "Why do I need to register a domain name?",
      answer:
        "Registering a domain name helps establish your online identity, makes your site easier to find, and adds credibility to your brand or personal presence online. Without it there is no online business.",
    },
    {
      question: "How to write a Saudi domain name under (.sa)?",
      answer:
        "A Saudi domain name typically ends with .sa or a second-level extension like .com.sa, .org.sa, or .edu.sa, depending on the nature of the organization. The name should contain only letters (a–z), numbers (0–9), or hyphens (-), and each part of the domain must be between 2 to 63 characters. Make sure the chosen extension matches your organization type.",
    },
    {
      question: "What is the difference between (.sa) and (.com)?",
      answer:
        "The .sa domain is a country code top-level domain (ccTLD) reserved for Saudi Arabia and requires meeting local eligibility rules. In contrast, .com is a generic top-level domain (gTLD) available for general use worldwide with fewer restrictions. The policies and administration of the (.sa) domain name are set and managed by SaudiNIC in CST. While gTLDs are managed by ICANN.",
    },
    {
      question: "Do I need to have a website (ready or hosted) to register a domain name?",
      answer:
        "No, you do not need to have a website ready to register a domain name. You can reserve the domain first and set up your website later.",
    },
    {
      question: "How long is a registered Saudi domain name valid for?",
      answer:
        "A Saudi domain name is typically valid between (1 year and 10 years) and must be renewed before the expiry date to maintain ownership and active use.",
    },
    {
      question: "What type of domain name should I apply for?",
      answer:
        "You should choose a domain extension that fits your organization type and purpose. For example, use .com.sa for commercial businesses, .org.sa for nonprofit organizations, .edu.sa for universities or colleges, and .sch.sa for schools. So it depends on the nature of your organization. (Check Eligibility conditions for registration, in supporting documents section).",
    },
    {
      question: "Why is my domain name request showing as rejected?",
      answer:
        "You can click on the domain details to view the feedback provided after the review. One common reason for rejection is that the domain name does not clearly relate to the registrant's information. For more details, visit: https://help.nic.sa/en/registrant-domain-relationship-criteria",
    },
    {
      question: "Can a non-Saudi entity register a domain name under the .sa Top-Level Domain?",
      answer:
        "Yes, a non-Saudi entity can register a .sa domain if it meets certain conditions. The applicant must either have a physical presence in Saudi Arabia, hold a valid Saudi national ID (for individuals), be licensed or registered by a relevant authority in Saudi Arabia, or own a trademark or trade name that is officially registered in the country.",
    },
    {
      question: "Can I register my personal name?",
      answer:
        "Individuals can register personal names under the domains (pub.sa, .sa, or .السعودية) following these rules: personal names may be first or family names (e.g., Ahmad, Ali, or Alfulani). The chosen name must be followed by at least one numerical digit (e.g., ahmad7.pub.sa, alfulani01.sa, أحمد7.السعودية). It is also allowed to combine two or more names together without using numerical digits (e.g., ahmadalfulani.pub.sa, أحمد-الفلاني.السعودية). Examples of acceptable registrations include ahmad7.pub.sa, alfulani01.sa, أحمد7.السعودية, ahmadalfulani.pub.sa, and أحمد-الفلاني.السعودية. Examples that are not allowed include أحمد.السعودية, الفلاني.السعودية, ahmad.sa, and alfulani.sa.",
    },
    {
      question: "How long does it take to register a new domain name?",
      answer: "It takes usually 1 to 3 business days to register a new domain name.",
    },
    {
      question: "Can I check if a domain name is available?",
      answer: "Yes, you can check if a domain name is available using the search engine on the domains portal.",
    },
    {
      question: "What is SSL?",
      answer:
        "SSL (Secure Sockets Layer) is a security protocol that encrypts data exchanged between a user's browser and a website server. It ensures information like passwords, credit card details, and personal data remain private and secure during transmission.",
    },
    {
      question: "Do I need SSL with the domain?",
      answer:
        "While not mandatory for domain registration, having an SSL certificate is strongly recommended. It secures the connection between your website and its visitors, builds trust, and is essential for e-commerce, login pages, and SEO ranking.",
    },
    {
      question: "What is web hosting?",
      answer:
        "Web hosting is a service that allows you to store your website's files and make them accessible on the internet. It provides the server space and resources needed for your website to function and be viewed by visitors.",
    },
    {
      question: "Can I link my domain to external web hosting?",
      answer:
        "Yes, you can connect your domain to any external hosting provider by updating the DNS records or name servers accordingly.",
    },
    {
      question: "Web Hosting vs. Domain Hosting",
      answer:
        "Domain hosting refers to the service that manages and maintains your domain name (like example.com), while web hosting provides the server space and technology needed to store and display your website's content online. In short, domain hosting gives your website an address, and web hosting gives it a place to live. Both services work together to make your website accessible on the internet.",
    },
  ],
  billing: [
    {
      question: "How can I renew my domain?",
      answer: "You can renew the domain from your dashboard and enable auto-renewal.",
    },
    {
      question: "How to restore an expired domain?",
      answer:
        "Check the payment information of your account and make sure it is up to date. Expired domain names can be restored within the first 30 days after expiration. For more information on how to restore, please refer to the user guide in the supporting documents section.",
    },
    {
      question: "How can I pay my invoices?",
      answer:
        "You can pay through Visa, MasterCard and Mada. After any purchase, please check your digital agreement signing date from your account dashboard in Bluvalt, as on that day of the purchase month we will send you the due invoices and deduct the amount from the added payment card.",
    },
    {
      question: "What type of payment cards do you support?",
      answer: "We support Visa, Mada, and MasterCard payment cards.",
    },
    {
      question: "What is the auto-renewal feature?",
      answer:
        "In auto-renewal, your domain name will be automatically renewed every year without any further action required from your side. Just enough money should be available to be deducted from the balance.",
    },
    {
      question: "How can I disable the automatic renewal of the domain name?",
      answer:
        "The administrative contact can click the link in the emails we send before the domain name renewal to prevent the domain from being renewed.",
    },
    {
      question: "Why do premium domain names cost more?",
      answer:
        "Premium domain names cost more due to their increased demand, improved brand recognition, and greater potential to increase website traffic.",
    },
  ],
  dns: [
    {
      question: "What is DNS?",
      answer:
        "The Internet Domain Name System (DNS) is a set of distributed databases containing IP addresses and their corresponding domain names. Each domain name is mapped to a particular numeric address. DNS, with servers located all over the Internet, performs the translation back and forth between names and numbers.",
    },
    {
      question: "Do you provide DNS hosting?",
      answer: "Yes, DNS hosting is provided as part of the domain name service with 2 servers for redundancy.",
    },
    {
      question: "Who should be the administrative contact?",
      answer:
        "The administrative contact should be a person who can speak on behalf of the Applicant, and he should be from the organization requesting the domain name. He/she should be located in KSA. He/she should be able to contact Solutions by stc and change any information for the registered domain name.",
    },
    {
      question: "How can I transfer my domain name to a new registrar?",
      answer:
        "Use Transfer Domain Ownership service. Note that the domain name must be within Solutions by stc before the transfer, which can be done within Domain Ownership Transfer service.",
    },
    {
      question: "Can I delete a registered domain name?",
      answer:
        "Yes, a registered domain name can be deleted by submitting a deletion request through your account but note that deletion is permanent and the domain will become available for others to register right away.",
    },
    {
      question: "How to add or update name servers?",
      answer:
        "You can add or update name servers by logging into your domain management portal and editing the name server settings for your domain. You can check the user guide in the supporting documents section, for more information on how to add or update domain name servers.",
    },
    {
      question: "How to link my domain name with my email?",
      answer:
        "To link your domain name with your email, you need to add the appropriate MX records in your DNS settings, which are typically provided by your email service provider. Once email service provider shares with you the DNS records, you can then add it to your cloud DNS service to complete the process of integrating your domain name with your email.",
    },
  ],
  support: [
    {
      question: "What should I do if my domain is not resolving?",
      answer:
        "Check that your DNS records are correctly configured and that the domain is pointing to the right name servers. You may also contact support or raise a ticket if the issue persists.",
    },
    {
      question: "Why is my domain showing a suspension or inactive status?",
      answer:
        "Your domain may be suspended due to missed renewal, policy violation, or incorrect information. Log into your account to check for any alerts or pending actions.",
    },
    {
      question: "How can I get technical help?",
      answer:
        "You can reach our support team by phone, email, or by submitting a support ticket through the azer digital care portal.",
    },
    {
      question: "Can I update registrant details after domain registration?",
      answer:
        "Yes, you can update registrant contact information through your account dashboard, though ownership changes require a formal transfer process.",
    },
  ],
}

const categoryNames = {
  registration: "Domain Registration",
  billing: "Renewal & Billing",
  dns: "DNS Management",
  support: "Technical Support & Troubleshooting",
}

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState("registration")

  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />

      {/* Hero Section - Consistent styling */}
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-left">
            <BackButton href="/knowledge-base" text="Back to Knowledge Base" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-900">
              <div className="page-title">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Find answers to the most common questions about Saudi domain registration and management
                </p>
              </div>

              {/* Enhanced Search Bar with better UX */}
              <div className="search-container">
                <Search className="search-icon w-6 h-6" />
                <input type="text" placeholder="Type your question here to search..." className="search-input" />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                💡 Try searching for "domain registration", "payment", or "DNS"
              </p>
            </div>

            <div className="hidden lg:block">
              <img src="/DNS_Solutions_by_stc/faq-illustration.png" alt="FAQ Illustration" className="faq-illustration" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose a Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a category below to view related questions and answers. Each category contains the most frequently
            asked questions for that topic.
          </p>
        </div>

        <CategorySelector selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        {/* FAQ List */}
        <div className="mt-12">
          <FAQList
            faqs={faqData[selectedCategory as keyof typeof faqData]}
            categoryName={categoryNames[selectedCategory as keyof typeof categoryNames]}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
