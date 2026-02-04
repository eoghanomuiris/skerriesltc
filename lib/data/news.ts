export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
}

// Placeholder news posts - will be replaced with actual Facebook posts
export const newsPosts: NewsPost[] = [
  {
    id: '1',
    title: 'Welcome to Our New Website',
    excerpt: 'We are excited to launch our new website for Skerries Lawn Tennis Club.',
    content: 'Stay tuned for updates, news, and information about our club activities, coaching programs, and upcoming events.',
    date: '2026-02-04',
    image: '/images/placeholders/news-1.jpg',
  },
  {
    id: '2',
    title: 'Spring Season Starting Soon',
    excerpt: 'Get ready for our spring tennis season with new programs and activities.',
    content: 'Join us for an exciting spring season with coaching programs for all ages and abilities. Contact us for more information.',
    date: '2026-02-01',
    image: '/images/placeholders/news-2.jpg',
  },
  {
    id: '3',
    title: 'Junior Programs Now Open',
    excerpt: 'Enrollments now open for our junior tennis programs.',
    content: 'We welcome juniors from age 7 with supervised sessions and professional coaching. Contact our coaches for more details.',
    date: '2026-01-28',
    image: '/images/placeholders/news-3.jpg',
  },
];
