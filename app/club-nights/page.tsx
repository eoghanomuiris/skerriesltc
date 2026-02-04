export default function ClubNightsPage() {
  const clubNights = [
    {
      id: 1,
      title: 'Ladies Morning',
      day: 'Saturday',
      time: 'from 10am',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Mens Night',
      day: 'Thursday',
      time: 'from 6pm',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Mixed Club Night',
      day: 'Friday',
      time: 'from 6pm',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Junior Afternoon',
      day: 'Sunday',
      time: 'from 12pm',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Club Nights
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Regular club activities for members
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            We have a series of regular club activities for members throughout the week.
          </p>
        </div>
      </section>

      {/* Club Nights Cards */}
      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clubNights.map((night) => (
              <article
                key={night.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#006D3B] mb-6">
                    {night.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-[#006D3B] mb-4">
                    {night.title}
                  </h2>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-lg text-gray-700">
                      <svg className="w-6 h-6 mr-3 text-[#B7D433]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">{night.day}</span>
                    </div>
                    <div className="flex items-center justify-center text-lg text-gray-700">
                      <svg className="w-6 h-6 mr-3 text-[#B7D433]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{night.time}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 mb-4">
            All club nights are for members only. For more information about membership and how to join our regular sessions,
            please contact us or visit our membership page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/membership"
              className="inline-block bg-[#B7D433] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#a0bd2d] transition-colors"
            >
              View Membership
            </a>
            <a
              href="/contact"
              className="inline-block bg-[#006D3B] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#005a2f] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
