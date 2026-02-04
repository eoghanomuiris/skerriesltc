export default function ClubConstitutionPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Club Constitution
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            The governing rules and structure of Skerries LTC
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The club constitution sets out the rules, objectives, and governance structure of Skerries Lawn Tennis Club.
              It covers membership criteria, committee structure, annual general meetings, and the club's operational procedures.
            </p>

            <div className="bg-[#F5F5F5] rounded-lg p-8 my-8">
              <h2 className="text-2xl font-bold text-[#006D3B] mb-4">Download Constitution</h2>
              <p className="mb-6">
                You can download the current club constitution using the link below:
              </p>
              <a
                href="https://www.skerriesltc.org/wp-content/uploads/2016/10/Constitution-Skerries-LTC.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#006D3B] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#005a2f] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Constitution (PDF)
              </a>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#006D3B] mb-4">Key Areas Covered</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Club name, objectives and affiliation</li>
                <li>Membership categories and fees</li>
                <li>Committee composition and elections</li>
                <li>Annual General Meeting procedures</li>
                <li>Financial management and accounts</li>
                <li>Amendments to the constitution</li>
                <li>Dissolution procedures</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-gray-700">
                For any questions regarding the club constitution, please contact the club secretary or any member of the committee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
