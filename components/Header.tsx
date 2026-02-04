'use client';

import Link from 'next/link';
import { useState } from 'react';
import TennisBall from './TennisBall';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navLinks = [
    { href: '/membership', label: 'Membership' },
    { href: '/coaching', label: 'Coaching' },
    { href: '/competitions', label: 'Competitions' },
    { href: '/club-nights', label: 'Club Nights' },
    { href: '/news', label: 'News' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const aboutLinks = [
    { href: '/committee', label: 'Committee' },
    { href: '/about/club-constitution', label: 'Club Constitution' },
    { href: '/about/child-protection', label: 'Child Protection' },
    { href: '/about/court-etiquette', label: 'Court Etiquette' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <TennisBall />
              <span className="text-2xl font-bold text-[#006D3B]">
                Skerries LTC
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#F5F5F5] hover:text-[#006D3B] transition-colors flex items-center">
                  About
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutDropdownOpen && (
                  <div className="absolute left-0 mt-0 pt-2 w-56 z-50">
                    <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {aboutLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F5F5] hover:text-[#006D3B]"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#F5F5F5] hover:text-[#006D3B] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.myacebook.net/mobile/user_login"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#006D3B] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005a2f] transition-colors"
              >
                AceBooks
              </a>
              <Link
                href="/membership"
                className="rounded-md bg-[#B7D433] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a0bd2d] transition-colors whitespace-nowrap"
              >
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-[#F5F5F5] hover:text-[#006D3B] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#006D3B]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-white border-t">
            {/* About Section in Mobile */}
            <div className="border-b border-gray-200 pb-2 mb-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                About
              </div>
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 pl-6 text-base font-medium text-gray-700 hover:bg-[#F5F5F5] hover:text-[#006D3B] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-[#F5F5F5] hover:text-[#006D3B] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.myacebook.net/mobile/user_login"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md bg-[#006D3B] px-3 py-2 text-base font-semibold text-white hover:bg-[#005a2f] text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              AceBooks
            </a>
            <Link
              href="/membership"
              className="block rounded-md bg-[#B7D433] px-3 py-2 text-base font-semibold text-white hover:bg-[#a0bd2d] text-center transition-colors whitespace-nowrap"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
