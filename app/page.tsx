import Link from 'next/link';
import { newsPosts } from '@/lib/data/news';

export default function HomePage() {
  const latestNews = newsPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-cover bg-bottom flex items-center justify-center" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Welcome to Skerries Lawn Tennis Club
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Your Community Tennis Club in Skerries, Co. Dublin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-block bg-[#B7D433] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#a0bd2d] transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#006D3B] px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006D3B] mb-6">
            Welcome to Our Club
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Skerries Lawn Tennis Club is a friendly, community-focused tennis club located at 
            Skerries Community Centre. We offer tennis for all ages and abilities, from complete 
            beginners to competitive players.
          </p>
          <p className="text-lg text-gray-700">
            Our club provides social tennis, league play, coaching programs, and regular tournaments 
            in a welcoming and inclusive environment.
          </p>
        </div>
      </section>

      {/* Quick Links Cards */}
      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006D3B] mb-12 text-center">
            Explore Our Club
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Membership Card */}
            <Link href="/membership" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-xl transition-shadow">
                <div className="text-[#006D3B] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#006D3B] mb-2 group-hover:text-[#B7D433] transition-colors">
                  Membership
                </h3>
                <p className="text-gray-600">
                  Join our club and enjoy access to courts, coaching, and social events.
                </p>
              </div>
            </Link>

            {/* Coaching Card */}
            <Link href="/coaching" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-xl transition-shadow">
                <div className="text-[#006D3B] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#006D3B] mb-2 group-hover:text-[#B7D433] transition-colors">
                  Coaching
                </h3>
                <p className="text-gray-600">
                  Professional coaching for all ages and abilities from qualified instructors.
                </p>
              </div>
            </Link>

            {/* Club Nights Card */}
            <Link href="/club-nights" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-xl transition-shadow">
                <div className="text-[#006D3B] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#006D3B] mb-2 group-hover:text-[#B7D433] transition-colors">
                  Club Nights
                </h3>
                <p className="text-gray-600">
                  Regular club activities for members throughout the week.
                </p>
              </div>
            </Link>

            {/* Contact Card */}
            <Link href="/contact" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-xl transition-shadow">
                <div className="text-[#006D3B] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#006D3B] mb-2 group-hover:text-[#B7D433] transition-colors">
                  Get in Touch
                </h3>
                <p className="text-gray-600">
                  Contact us for membership inquiries, coaching, or general information.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006D3B]">
              Latest News
            </h2>
            <Link
              href="/news"
              className="text-[#006D3B] hover:text-[#B7D433] font-semibold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#006D3B] to-[#B7D433]"></div>
                <div className="p-6">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-IE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="text-xl font-bold text-[#006D3B] mt-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/news/${post.id}`}
                    className="text-[#006D3B] hover:text-[#B7D433] font-semibold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#006D3B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Skerries LTC?
          </h2>
          <p className="text-xl text-white mb-8">
            Become part of our vibrant tennis community today.
          </p>
          <Link
            href="/membership"
            className="inline-block bg-[#B7D433] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#a0bd2d] transition-colors"
          >
            View Membership Options
          </Link>
        </div>
      </section>
    </div>
  );
}
