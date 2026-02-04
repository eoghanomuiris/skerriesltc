'use client';

import { useState } from 'react';

// Placeholder gallery images
const galleryImages = [
  { id: 1, title: 'Court View 1', category: 'facilities' },
  { id: 2, title: 'Court View 2', category: 'facilities' },
  { id: 3, title: 'Tournament Action', category: 'events' },
  { id: 4, title: 'Junior Coaching', category: 'coaching' },
  { id: 5, title: 'Social Event', category: 'events' },
  { id: 6, title: 'Club House', category: 'facilities' },
  { id: 7, title: 'Players in Action', category: 'action' },
  { id: 8, title: 'Awards Ceremony', category: 'events' },
  { id: 9, title: 'Courts at Sunset', category: 'facilities' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'events', label: 'Events' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'action', label: 'Action Shots' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-white">
            Photos from our courts, events, and community
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#006D3B] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square bg-gradient-to-br from-[#006D3B] to-[#B7D433] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImage(image.id)}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder Note */}
          <div className="mt-12 bg-[#F5F5F5] rounded-lg p-8 text-center">
            <p className="text-gray-700 mb-4">
              These are placeholder images. Real photos from the club will be added soon.
            </p>
            <p className="text-gray-600">
              For more photos, visit our{' '}
              <a
                href="https://www.facebook.com/SkerriesLawnTennisClub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#006D3B] hover:text-[#B7D433] font-semibold"
              >
                Facebook page
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Simple Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-square bg-gradient-to-br from-[#006D3B] to-[#B7D433] rounded-lg"></div>
          </div>
        </div>
      )}
    </div>
  );
}
