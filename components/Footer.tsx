import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#006D3B] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Skerries Lawn Tennis Club
            </h3>
            <p className="text-sm text-gray-200">
              Your community tennis club in Skerries, Co. Dublin. Offering coaching, 
              leagues, and social tennis for all ages and abilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-200 hover:text-[#B7D433] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sm text-gray-200 hover:text-[#B7D433] transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-sm text-gray-200 hover:text-[#B7D433] transition-colors">
                  Coaching
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-gray-200 hover:text-[#B7D433] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-200 hover:text-[#B7D433] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-gray-200 space-y-2">
              <p>Skerries Community Centre</p>
              <p>Dublin Road, Skerries</p>
              <p>Co. Dublin, Ireland</p>
              <p className="mt-4">
                <a href="tel:018490888" className="hover:text-[#B7D433] transition-colors">
                  01 849 0888
                </a>
              </p>
              <p>
                <a href="mailto:ask@skerriestennis.com" className="hover:text-[#B7D433] transition-colors">
                  ask@skerriestennis.com
                </a>
              </p>
              <p className="mt-4">
                <a
                  href="https://www.facebook.com/SkerriesLawnTennisClub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-[#B7D433] transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow us on Facebook
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-[#008a4a] pt-8 text-center text-sm text-gray-200">
          <p>&copy; {new Date().getFullYear()} Skerries Lawn Tennis Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
