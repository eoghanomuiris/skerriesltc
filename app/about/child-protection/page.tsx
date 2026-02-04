export default function ChildProtectionPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Child Protection
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Safeguarding the well-being of all our members
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Skerries LTC is fully committed to safeguarding the well-being of its members.
              Every member of the club must at all times show respect and understanding for the
              rights, safety and welfare of fellow members and conduct themselves in a manner
              that reflects these principles and, as the membership is specific to under 18's,
              the guidelines contained in the "Code of Ethics and Good Practice in Children's Sport in Ireland".
            </p>

            {/* Child Protection Officers */}
            <div className="bg-[#F5F5F5] rounded-lg p-8 my-8">
              <h2 className="text-2xl font-bold text-[#006D3B] mb-4">Child Protection Officers</h2>
              <p className="mb-4">
                The Club has two Child Protection Officers. Please contact them if you have any queries or concerns in relation to child protection issues.
              </p>
              <p className="text-sm text-gray-600 mb-6">
                If the concern is about the Children's Officer, please report to the Club Captain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#006D3B] mb-2">Berna Furlong</h3>
                  <p className="text-gray-600">Child Protection Officer</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#006D3B] mb-2">Aidan McGivern</h3>
                  <p className="text-gray-600">Child Protection Officer</p>
                </div>
              </div>
            </div>

            {/* Policy Documents */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#006D3B] mb-6">Child Safeguarding Policy Documents</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#006D3B] mb-4">Club Documents</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.skerriesltc.org/wp-content/uploads/2020/12/SLTC_Child-Safeguarding-Statement.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#006D3B] hover:text-[#B7D433] font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      SLTC Child Safeguarding Statement
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.skerriesltc.org/wp-content/uploads/2020/12/SLTC_Child-Welfare-Risk-Assessment.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#006D3B] hover:text-[#B7D433] font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      SLTC Child Welfare Risk Assessment
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.skerriesltc.org/wp-content/uploads/2016/03/Code-of-Conduct-All-Members.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#006D3B] hover:text-[#B7D433] font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Code of Conduct – All Members
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#006D3B] mb-4 mt-8">Tennis Ireland Safeguarding Documents</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.skerriesltc.org/wp-content/uploads/2020/12/Safeguarding-Policy-Updated-June-2019.doc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#006D3B] hover:text-[#B7D433] font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Tennis Ireland Safeguarding Policy – Updated June 2019
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#006D3B] mb-4 mt-8">External Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="http://www.irishsportscouncil.ie/Participation/Code_of_Ethics/Code_of_Ethics_Manual/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#006D3B] hover:text-[#B7D433] font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Code of Ethics and Good Practice in Children's Sport in Ireland
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="font-semibold text-gray-800 mb-2">Contact Information</p>
              <p className="text-gray-700">
                If you have any concerns regarding child protection or safeguarding, please contact one of our Child Protection Officers immediately.
                You can also contact the club through our general contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
