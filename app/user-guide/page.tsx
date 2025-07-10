"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import {
  PlusCircle,
  BookIcon as AddressBook,
  Settings,
  ArrowLeftRight,
  RotateCcw,
  CreditCard,
  Info,
  AlertTriangle,
} from "lucide-react"

const guideTopics = [
  {
    id: "register",
    title: "Register New Domain",
    icon: <PlusCircle className="w-5 h-5" />,
    description: "Follow these comprehensive steps to register a new Saudi domain name through Solutions by stc.",
    color: "#4f018c",
  },
  {
    id: "contacts",
    title: "Contacts",
    icon: <AddressBook className="w-5 h-5" />,
    description: "Learn how to manage and update contact information for your domain names.",
    color: "#00c48c",
  },
  {
    id: "actions",
    title: "Domain Actions",
    icon: <Settings className="w-5 h-5" />,
    description: "Explore various actions you can perform on your domain names including DNS management.",
    color: "#ff375e",
  },
  {
    id: "transfer",
    title: "Domain Transfer",
    icon: <ArrowLeftRight className="w-5 h-5" />,
    description: "Learn how to transfer your domain name to or from Solutions by stc.",
    color: "#4f018c",
  },
  {
    id: "restore",
    title: "Domain Restore",
    icon: <RotateCcw className="w-5 h-5" />,
    description: "Restore expired domain names within the grace period.",
    color: "#00c48c",
  },
  {
    id: "payment",
    title: "Update Payment Information",
    icon: <CreditCard className="w-5 h-5" />,
    description: "Keep your payment information up-to-date for uninterrupted domain services.",
    color: "#ff375e",
  },
]

export default function UserGuidePage() {
  const [activeSection, setActiveSection] = useState("register")
  const activeTopic = guideTopics.find((topic) => topic.id === activeSection)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Consistent styling */}
      <div className="hero-gradient">
        <div className="hero-back-button">
          <BackButton href="/knowledge-base" text="Back to Knowledge Base" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="page-title">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">User Guide</h1>
            <p className="text-xl text-gray-600 mb-8">
              Step-by-step instructions for domain registration and management
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Comprehensive guides to help you navigate domain registration and management processes with Solutions by
              stc
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Guide Topics</h2>
              <nav className="space-y-2">
                {guideTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setActiveSection(topic.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all flex items-center space-x-3 ${
                      activeSection === topic.id ? "text-white shadow-lg" : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={activeSection === topic.id ? { backgroundColor: topic.color } : {}}
                  >
                    {topic.icon}
                    <span className="font-medium text-sm">{topic.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {activeSection === "register" && (
                <div className="p-8">
                  <div className="mb-8">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Register New Domain</h1>
                      <p className="text-gray-600 mt-2">
                        Follow these comprehensive steps to register a new Saudi domain name through Solutions by stc.
                        Ensure you have all required documents and payment information ready before starting the
                        process.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          1
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Log in or Register</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Visit the Saudi domain portal and create an account or log in if you already have one. Ensure
                        your account is properly set up before proceeding with domain registration.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step1.1.png" alt="Step 1 - Login or Register" />
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          2
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Check if the Saudi Domain Exists</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Use the domain search functionality to verify that your desired Saudi domain name is available
                        for registration. Consider alternative names if your first choice is already taken.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step1.2.png" alt="Step 2 - Check Domain Availability" />
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          3
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Activate Your Payment Account through Bluvalt Portal
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        After attempting to register, log in to the marketplace and access the Bluvalt portal. Activate
                        your account and add your credit card information to enable payment processing for domain
                        registration and renewal services.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step1.3.png" alt="Step 3 - Activate Payment Account" />
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          4
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Select the Duration and Auto Renewal Feature
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Choose your subscription period: minimum is 1 year and maximum is 10 years. Enable auto-renewal
                        to automatically renew your subscription. Note: The duration for renewing is 2 weeks; failing to
                        pay or renew the service will result in deactivation of the Saudi domain.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step1.4.png" alt="Step 4 - Select Duration and Auto Renewal" />
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          5
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Fill Out the New Saudi Domain Form</h3>
                      </div>
                      <p className="text-gray-700 mb-4">Provide the following essential details:</p>
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Entity name and contact information</li>
                        <li>National ID or commercial registration</li>
                        <li>Relationship between domain and applicant</li>
                        <li>Select administrative, technical, and billing contacts</li>
                        <li>DNS settings (if not set, domain will be inactive)</li>
                        <li>All other requirements depend on your entity type</li>
                      </ul>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step1.5.png" alt="Step 5 - Fill Out Registration Form" />
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          6
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          Connect to Nafath for Required Documents
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Verify your identity. Connect through the Nafath system to provide the necessary documentation
                        for verification.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step1.6.png" alt="Step 6 - Nafath Verification" />
                      </div>
                    </div>

                    {/* Step 7 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          7
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Create Contacts</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        There are three types of contacts: Administrative, Technical, and Billing. These could be 3
                        individuals from your company or just one person handling all roles. Click "here to fill in the
                        contacts information" and verify the email and phone number of each contact.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step1.7.png" alt="Step 7 - Create Contacts" />
                      </div>
                    </div>

                    {/* Step 8 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          8
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">DNS Servers Choice</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Solutions by STC provides two DNS servers by default without charge. You can replace them with
                        your DNS server of choice or purchase another dedicated DNS hosting from Bluvalt in the Cloud
                        Applications section.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step1.8.png" alt="Step 8 - DNS Servers Choice" />
                      </div>
                    </div>

                    {/* Step 9 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          9
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Submit the Request</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        After filling the form and uploading documents, click submit. You will be billed for the domain
                        registration in the Bluvalt portal. Ensure all information is accurate before final submission.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step1.9.png" alt="Step 9 - Submit Request" />
                      </div>
                    </div>

                    {/* Important Information */}
                    <div
                      className="rounded-lg p-6"
                      style={{ backgroundColor: "#4f018c15", borderColor: "#4f018c", borderWidth: "1px" }}
                    >
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 mt-0.5" style={{ color: "#4f018c" }} />
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: "#4f018c" }}>
                            Important Information
                          </h4>
                          <p style={{ color: "#4f018c" }}>
                            Domain registration approval typically takes 1-3 business days. You will receive email
                            notifications about the status of your application. Ensure your payment account is properly
                            activated in Bluvalt to avoid any delays.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Critical Reminders */}
                    <div
                      className="rounded-lg p-6"
                      style={{ backgroundColor: "#ff375e15", borderColor: "#ff375e", borderWidth: "1px" }}
                    >
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 mt-0.5" style={{ color: "#ff375e" }} />
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: "#ff375e" }}>
                            Critical Reminders
                          </h4>
                          <ul style={{ color: "#ff375e" }} className="space-y-1">
                            <li>• Minimum subscription period is 1 year, maximum is 10 years</li>
                            <li>
                              • Auto-renewal duration is 2 weeks - failure to renew results in domain deactivation
                            </li>
                            <li>• DNS settings must be configured or the domain will remain inactive</li>
                            <li>• All contact emails and phone numbers must be verified</li>
                            <li>• Payment account must be activated in Bluvalt before registration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "contacts" && (
                <div className="p-8">
                  <div className="mb-8">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
                      <p className="text-gray-600 mt-2">
                        Learn how to manage and update contact information for your domain names. Proper contact
                        management is crucial for domain security and compliance.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#00c48c" }}
                        >
                          1
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Access Contact Management</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Log into your STC Solutions account and navigate to the domain management section. Select the
                        domain you want to manage contacts for. Dashboard &gt; Domain &gt; Domain Details &gt;
                        Coordinators Info.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step2.1.png" alt="Step 1 - Access Contact Management" />
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#00c48c" }}
                        >
                          2
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">View Current Contacts</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Review the current contact information including registrant, administrative, technical, and
                        billing contacts for your domain.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step2.2.png" alt="Step 2 - View Current Contacts" />
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#00c48c" }}
                        >
                          3
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Update Contact Information</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Click on "Edit Contacts" and update the necessary information. Ensure all contact details are
                        accurate and up-to-date.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step2.3.png" alt="Step 3 - Update Contact Information" />
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#00c48c" }}
                        >
                          4
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Verify Contact Changes</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        After making changes, verify the updated information is correct. Some changes may require email
                        verification.
                      </p>
                    </div>

                    {/* Contact Types */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="rounded-lg p-6" style={{ backgroundColor: "#4f018c15" }}>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#4f018c" }}></div>
                          <span>Registrant Contact</span>
                        </h4>
                        <p className="text-gray-600 text-sm">Primary domain owner</p>
                        <p className="text-gray-600 text-sm">Must be Saudi resident</p>
                      </div>
                      <div className="rounded-lg p-6" style={{ backgroundColor: "#00c48c15" }}>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#00c48c" }}></div>
                          <span>Technical Contact</span>
                        </h4>
                        <p className="text-gray-600 text-sm">DNS management</p>
                        <p className="text-gray-600 text-sm">Technical issues</p>
                      </div>
                      <div className="rounded-lg p-6" style={{ backgroundColor: "#ff375e15" }}>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#ff375e" }}></div>
                          <span>Administrative Contact</span>
                        </h4>
                        <p className="text-gray-600 text-sm">Domain administration</p>
                        <p className="text-gray-600 text-sm">Policy decisions</p>
                      </div>
                      <div className="rounded-lg p-6" style={{ backgroundColor: "#4f018c15" }}>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#4f018c" }}></div>
                          <span>Billing Contact</span>
                        </h4>
                        <p className="text-gray-600 text-sm">Payment matters</p>
                        <p className="text-gray-600 text-sm">Renewal notifications</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Domain Actions */}
              {activeSection === "actions" && (
                <div className="p-8">
                  <div className="mb-8">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Domain Actions</h1>
                      <p className="text-gray-600 mt-2">
                        Explore various actions you can perform on your domain names including DNS management, security
                        settings, and domain configuration.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="step-circle" style={{ backgroundColor: "#ff375e" }}>
                          1
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Edit Name Server</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        To edit your domain's name server, go to: Dashboard &gt; Domain Details &gt; DNS Management &gt;
                        Name Server. Here you can update the name server records for your domain.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step3.1.png" alt="Step 1 - Edit Name Server" />
                      </div>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step3.2.png" alt="Step 1 - Edit Name Server continued" />
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="step-circle" style={{ backgroundColor: "#ff375e" }}>
                          2
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">DNS Management</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Configure DNS records including A records, CNAME records, MX records, and TXT records. Set up
                        proper DNS routing for your domain.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step3.3.png" alt="Step 2 - DNS Management" />
                      </div>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step3.3.b.png" alt="Step 2 - DNS Management continued" />
                      </div>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step3.3.c.png" alt="Step 2 - DNS Management final" />
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="step-circle" style={{ backgroundColor: "#ff375e" }}>
                          3
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Security Settings</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Enable DNSSEC, configure domain locking, and set up two-factor authentication for enhanced
                        domain security.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step3.4.png" alt="Step 3 - Security Settings" />
                      </div>

                      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Fields on the Page:</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>
                            <strong>Key Tag:</strong> This is a short, unsigned integer that serves as an identifier for
                            a specific DNSKEY record. It's used to quickly reference a particular key in a zone.
                          </li>
                          <li>
                            <strong>alg (Algorithm):</strong> This specifies the cryptographic algorithm used to
                            generate the digital signature for the DNSSEC record (e.g., RSA/SHA-256, ECDSA P-256).
                          </li>
                          <li>
                            <strong>Digest Type:</strong> This indicates the type of cryptographic hash function used to
                            create the digest of the DNSKEY record (e.g., SHA-256, SHA-384).
                          </li>
                          <li>
                            <strong>Digest:</strong> This is the cryptographic hash (fingerprint) of the DNSKEY record.
                            It's used by the parent zone to verify the authenticity of the child zone's key.
                          </li>
                        </ul>
                      </div>

                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step3.4.b.png" alt="Step 3 - Security Settings continued" />
                      </div>
                    </div>

                    {/* Security Warning */}
                    <div
                      className="rounded-lg p-6"
                      style={{ backgroundColor: "#ff375e15", borderColor: "#ff375e", borderWidth: "1px" }}
                    >
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 mt-0.5" style={{ color: "#ff375e" }} />
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: "#ff375e" }}>
                            Security Warning
                          </h4>
                          <p style={{ color: "#ff375e" }}>
                            Always verify DNS changes before applying them. Incorrect DNS configuration can make your
                            website inaccessible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "transfer" && (
                <div className="p-8">
                  <div className="mb-8">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Domain Transfer</h1>
                      <p className="text-gray-600 mt-2">
                        Learn how to transfer your domain name to or from Solutions by STC. Follow proper procedures to
                        ensure smooth domain transfers.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          1
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Prepare for Transfer Out</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Ensure your domain is unlocked and obtain the transfer authorization code (EPP code) from your
                        current registrar. Also ensure that 60 days have passed to transfer out.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step4.1.png" alt="Step 1 - Prepare for Transfer Out" />
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          2
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Initiate Transfer In Request</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Submit a transfer request through the STC Solutions portal. Provide the domain name and
                        authorization code.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step4.2.png" alt="Step 2 - Initiate Transfer In Request" />
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          3
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Approve Transfer</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Approve the transfer request through the email notification sent to the administrative contact
                        email address.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#4f018c" }}
                        >
                          4
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Monitor Transfer Status</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Track the transfer progress through your account dashboard. Transfers typically complete within
                        1-3 business days.
                      </p>
                    </div>

                    {/* Transfer Requirements */}
                    <div
                      className="rounded-lg p-6"
                      style={{ backgroundColor: "#4f018c15", borderColor: "#4f018c", borderWidth: "1px" }}
                    >
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 mt-0.5" style={{ color: "#4f018c" }} />
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: "#4f018c" }}>
                            Transfer Requirements
                          </h4>
                          <p style={{ color: "#4f018c" }}>
                            Domain must be at least 60 days old and not within 60 days of registration or previous
                            transfer. All outstanding fees must be paid.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "restore" && (
                <div className="p-8">
                  <div className="mb-8">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Domain Restore</h1>
                      <p className="text-gray-600 mt-2">
                        Restore expired domain names within the grace period. Understand the restoration process and
                        associated costs.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#00c48c" }}
                        >
                          1
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Check Domain Status</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Verify that your domain is in the grace period (14 days after expiration) and eligible for
                        restoration.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#00c48c" }}
                        >
                          2
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Submit Restoration Request</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Access the domain restoration section in your account and submit a restoration request for the
                        expired domain.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#00c48c" }}
                        >
                          3
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Pay Restoration Fee</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Pay the required restoration fee, which is typically higher than regular renewal fees due to
                        administrative costs.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#00c48c" }}
                        >
                          4
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Wait for Processing</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Restoration requests are processed within 24-48 hours. You will receive confirmation once the
                        domain is restored.
                      </p>
                    </div>

                    {/* Important Notice */}
                    <div
                      className="rounded-lg p-6"
                      style={{ backgroundColor: "#ff375e15", borderColor: "#ff375e", borderWidth: "1px" }}
                    >
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 mt-0.5" style={{ color: "#ff375e" }} />
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: "#ff375e" }}>
                            Important Notice
                          </h4>
                          <p style={{ color: "#ff375e" }}>
                            Domain restoration is only possible during the grace period. After this period, the domain
                            may be deleted and become available for registration by others.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "payment" && (
                <div className="p-8">
                  <div className="mb-8">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Update Payment Information</h1>
                      <p className="text-gray-600 mt-2">
                        Keep your payment information up-to-date to ensure uninterrupted domain services and automatic
                        renewals. Follow these steps to activate and manage your payment account through Bluvalt Portal.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#ff375e" }}
                        >
                          1
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Log in to Marketplace and Bluvalt</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        After attempting to register a domain, log in to the marketplace and then log in to the Bluvalt
                        portal using your credentials.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step6.1.png" alt="Step 1 - Log in to Marketplace and Bluvalt" />
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#ff375e" }}
                        >
                          2
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Activate Your Bluvalt Account</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        If this is your first time, activate your Bluvalt account as prompted. This step is required
                        before you can add payment methods or complete domain registration.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step6.2.png" alt="Step 2 - Activate Your Bluvalt Account" />
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#ff375e" }}
                        >
                          3
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Add Your Credit Card</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Enter your credit card details in the Bluvalt portal to enable payments for domain registration,
                        renewals, and other services. Ensure your card is valid and has sufficient funds.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step6.3.png" alt="Step 3 - Add Your Credit Card" />
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#ff375e" }}
                        >
                          4
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">View Current Payment Methods</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Review your currently stored payment methods including credit cards, debit cards, and bank
                        account information in the Bluvalt portal.
                      </p>
                      <div className="step-image">
                        <img src="/DNS_Solutions_by_stc/step6.4.png" alt="Step 4 - View Current Payment Methods" />
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#ff375e" }}
                        >
                          5
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Set Default Payment Method</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Choose your preferred payment method as the default for automatic renewals and new purchases.
                      </p>
                    </div>

                    {/* Step 6 */}
                    <div className="guide-step">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: "#ff375e" }}
                        >
                          6
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Remove Old Payment Methods</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Remove outdated or unused payment methods to keep your account secure and organized.
                      </p>
                    </div>

                    {/* Payment Security */}
                    <div
                      className="rounded-lg p-6"
                      style={{ backgroundColor: "#00c48c15", borderColor: "#00c48c", borderWidth: "1px" }}
                    >
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 mt-0.5" style={{ color: "#00c48c" }} />
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: "#00c48c" }}>
                            Payment Security
                          </h4>
                          <p style={{ color: "#00c48c" }}>
                            All payment information is encrypted and stored securely. STC Solutions complies with
                            international payment security standards.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
