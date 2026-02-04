export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Skerries LTC
          </h1>
          <p className="text-xl text-white">
            Your community tennis club in the heart of Skerries
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#006D3B] mb-6">
            Welcome to Skerries Lawn Tennis Club
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Skerries Lawn Tennis Club is a vibrant, community-focused tennis club based at 
              Skerries Community Centre in Co. Dublin. We pride ourselves on being a welcoming 
              and inclusive club that caters to tennis players of all ages and abilities.
            </p>
            <p>
              Whether you're a complete beginner looking to try tennis for the first time, or 
              an experienced player seeking competitive matches, our club offers something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#006D3B] mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#006D3B] mb-3">Social Tennis</h3>
              <p className="text-gray-600">
                Enjoy friendly matches and social sessions with fellow members in a relaxed 
                and welcoming environment.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#006D3B] mb-3">League Play</h3>
              <p className="text-gray-600">
                Compete in local leagues and represent Skerries LTC in external competitions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#006D3B] mb-3">Coaching Programmes</h3>
              <p className="text-gray-600">
                Professional coaching for adults, juniors, and families from our qualified 
                coaching team.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#006D3B] mb-3">Tournaments & Events</h3>
              <p className="text-gray-600">
                Regular internal tournaments, social events, and fundraising activities 
                throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#006D3B] mb-8 text-center">
            Where We Are
          </h2>
          <div className="bg-[#F5F5F5] rounded-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#006D3B] mb-4">Skerries Community Centre</h3>
              <address className="not-italic text-gray-700">
                <p>Dublin Road</p>
                <p>Skerries</p>
                <p>Co. Dublin, Ireland</p>
                <p className="mt-4">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:018490888" className="text-[#006D3B] hover:text-[#B7D433]">
                    01 849 0888
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:ask@skerriestennis.com" className="text-[#006D3B] hover:text-[#B7D433]">
                    ask@skerriestennis.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
