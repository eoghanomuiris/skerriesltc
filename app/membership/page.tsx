export default function MembershipPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Membership
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Join Skerries Lawn Tennis Club today
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h2 className="text-xl font-bold text-yellow-800 mb-2">Important Notice</h2>
              <p className="text-yellow-700">
                As of March 2025, membership is currently closed. The committee will review 
                membership status at a later date. Please check back or contact us for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#006D3B] mb-12 text-center">
            Membership Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Adult Single */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#006D3B] hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#006D3B] mb-2">Adult Single</h3>
              <div className="text-4xl font-bold text-[#B7D433] mb-4">€160</div>
              <p className="text-gray-600 mb-4">Per year</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full court access
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  League participation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Social events
                </li>
              </ul>
            </div>

            {/* Junior */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#006D3B] hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#006D3B] mb-2">Junior</h3>
              <div className="text-4xl font-bold text-[#B7D433] mb-4">€85</div>
              <p className="text-gray-600 mb-4">Per year</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ages 7-18
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Supervised sessions
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Coaching programmes
                </li>
              </ul>
            </div>

            {/* Student */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#006D3B] hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#006D3B] mb-2">Student</h3>
              <div className="text-4xl font-bold text-[#B7D433] mb-4">€80</div>
              <p className="text-gray-600 mb-4">Per year</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Over 18 years old
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full-time education
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full member benefits
                </li>
              </ul>
            </div>

            {/* Family */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#006D3B] hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#006D3B] mb-2">Family</h3>
              <div className="text-4xl font-bold text-[#B7D433] mb-4">€270</div>
              <p className="text-gray-600 mb-4">Per year</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  2 adults + children
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Best value option
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  All member benefits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Inquiry */}
      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#006D3B] mb-6">
            Interested in Joining?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            For membership inquiries and updates on when membership reopens, please contact us.
          </p>
          <a
            href="mailto:ask@skerriestennis.com"
            className="inline-block bg-[#B7D433] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#a0bd2d] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
