import { newsPosts } from '@/lib/data/news';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            News & Updates
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Stay updated with the latest news from Skerries LTC
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - News Cards (2/3 width) */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-[#006D3B] mb-6">Recent Updates</h2>
              {newsPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-32 bg-gradient-to-br from-[#006D3B] to-[#B7D433]"></div>
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
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                    <p className="text-gray-700 text-sm">{post.content}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Column - Facebook Feed (1/3 width) */}
            <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-2xl font-bold text-[#006D3B] mb-6">Facebook Feed</h2>
              <div className="flex justify-center lg:justify-start">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSkerriesLawnTennisClub%2F&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="500"
                  height="800"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-lg shadow-lg max-w-full"
                ></iframe>
              </div>
              <div className="mt-6 text-center lg:text-left">
                <a
                  href="https://www.facebook.com/SkerriesLawnTennisClub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#1877f2] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#166fe5] transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Visit Our Facebook Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
