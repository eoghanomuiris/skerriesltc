export default function CompetitionsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Competitions
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            View upcoming tournaments and competition schedules
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-8">
              View all upcoming tournaments, competition schedules, and results through our tournament management system.
            </p>
            
            <a
              href="https://ti.tournamentsoftware.com/association/group/74006382-F98C-4821-8672-BB206B75EDEA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#006D3B] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#005a2f] transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Competition Calendar
            </a>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006D3B] mb-3">Tournament Schedule</h3>
              <p className="text-gray-700">
                Check the calendar for upcoming tournaments, registration deadlines, and event details.
              </p>
            </div>
            
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006D3B] mb-3">Results & Rankings</h3>
              <p className="text-gray-700">
                View results from recent competitions and current player rankings in various categories.
              </p>
            </div>
            
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006D3B] mb-3">Entry Information</h3>
              <p className="text-gray-700">
                Find information about how to enter competitions, eligibility requirements, and fees.
              </p>
            </div>
            
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006D3B] mb-3">Competition Rules</h3>
              <p className="text-gray-700">
                Review tournament formats, match rules, and competition regulations before entering.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-gray-700">
              For any questions about competitions or tournament entries, please <a href="/contact" className="text-[#006D3B] font-semibold hover:text-[#B7D433]">contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
