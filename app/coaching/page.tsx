import { coaches } from '@/lib/data/coaches';
import Link from 'next/link';

export default function CoachingPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Coaching
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Professional tennis coaching for all ages and abilities
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#006D3B] mb-6">
            Expert Coaching Team
          </h2>
          <p className="text-lg text-gray-700">
            Our qualified coaches offer professional instruction for players of all ages and skill levels. 
            Whether you're just starting out or looking to refine your game, our team can help you achieve 
            your tennis goals.
          </p>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#006D3B] mb-12 text-center">
            Our Coaches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach) => (
              <div key={coach.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#006D3B] to-[#B7D433]"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#006D3B] mb-2">{coach.name}</h3>
                  <p className="text-[#B7D433] font-semibold mb-3">{coach.level}</p>
                  <p className="text-gray-600 mb-4">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${coach.phone.replace(/\s/g, '')}`} className="hover:text-[#006D3B]">
                      {coach.phone}
                    </a>
                  </p>
                  {coach.specialties && (
                    <div className="space-y-1">
                      {coach.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-block text-xs bg-[#F5F5F5] text-gray-700 px-2 py-1 rounded mr-1 mb-1"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#006D3B] mb-12 text-center">
            Coaching Programmes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Junior Coaching */}
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <div className="text-[#006D3B] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#006D3B] mb-4">Junior Coaching</h3>
              <p className="text-gray-700 mb-4">
                For players aged 7-18, we offer structured coaching programmes designed to develop 
                skills, technique, and a love for the game.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Saturday afternoon sessions
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Teenage Night (Wednesdays 6-7pm)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Monthly tournaments
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Easter & summer camps
                </li>
              </ul>
            </div>

            {/* Adult Coaching */}
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <div className="text-[#006D3B] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#006D3B] mb-4">Adult Coaching</h3>
              <p className="text-gray-700 mb-4">
                Coaching for adults of all abilities, from complete beginners to competitive 
                players looking to improve their game.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Beginner classes
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Intermediate development
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Advanced training
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Private lessons available
                </li>
              </ul>
            </div>

            {/* Group Sessions */}
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <div className="text-[#006D3B] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#006D3B] mb-4">Group Sessions</h3>
              <p className="text-gray-700 mb-4">
                Fun and social group coaching sessions that combine skill development with the 
                enjoyment of playing with others.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Small group sizes
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Matched by ability
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Social atmosphere
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#B7D433] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cost-effective option
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#006D3B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Tennis Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact our coaches directly to discuss coaching options and book your first session.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#B7D433] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#a0bd2d] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
