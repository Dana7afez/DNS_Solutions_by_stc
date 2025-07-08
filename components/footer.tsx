import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="footer-section py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-12">We would love to hear from you</p>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Call Center */}
            <div className="text-center">
              <p className="text-gray-500 mb-2">Call center</p>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-gray-700" />
                <span className="text-xl font-semibold text-gray-900">8001241300</span>
              </div>
            </div>

            {/* Email */}
            <div className="text-center">
              <p className="text-gray-500 mb-2">Email us at</p>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-gray-700" />
                <span className="text-lg font-medium text-gray-900">DNR-Support@solutions.com.sa</span>
              </div>
            </div>

            {/* Support Ticket */}
            <div className="text-center">
              <p className="text-gray-500 mb-2">Support ticket</p>
              <div className="flex items-center justify-center space-x-3">
                <img src="/azer-logo.png" alt="Azer Digital Care" className="h-8" />
                <div>
                  <div className="text-sm font-medium text-gray-900">azer</div>
                  <div className="text-xs text-gray-500">Digital Care</div>
                  <div className="text-xs text-red-500">Open a ticket</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-400">© 2025 solutions by stc</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
