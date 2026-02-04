# Skerries Lawn Tennis Club Website

A modern, mobile-friendly static website for Skerries Lawn Tennis Club built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design

- **Colors**: Tennis court green (#006D3B), lime accent (#B7D433), white backgrounds
- **Fonts**: Montserrat (headings), Open Sans (body text)
- **Mobile-first**: Fully responsive design optimized for all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📝 Updating Content

Content is stored in TypeScript files in the `lib/data/` directory. To update content, edit these files:

### News Posts (`lib/data/news.ts`)

Add or edit news items:

```typescript
{
  id: '4',
  title: 'Your News Title',
  excerpt: 'Short preview text',
  content: 'Full content of the news post',
  date: '2026-02-10',  // YYYY-MM-DD format
  image: '/images/placeholders/news-4.jpg',
}
```

### Events (`lib/data/events.ts`)

Add or edit events:

```typescript
{
  id: '4',
  title: 'Event Name',
  description: 'Event description',
  date: '2026-03-15',
  time: '2:00 PM - 4:00 PM',  // Optional
  location: 'Skerries Community Centre Courts',
  category: 'tournament',  // tournament | social | training | meeting
}
```

### Coaches (`lib/data/coaches.ts`)

Update coach information:

```typescript
{
  id: '5',
  name: 'Coach Name',
  level: 'Level 2 Coach',
  phone: '087 1234567',
  image: '/images/placeholders/coach-5.jpg',
  specialties: ['Beginners', 'Intermediate'],
}
```

### Committee Members (`lib/data/committee.ts`)

Update committee roster:

```typescript
{
  id: '10',
  name: 'Member Name',
  position: 'Position Title',
  email: 'email@skerriestennis.com',  // Optional
}
```

## 📸 Adding Images

1. Add images to `/public/images/` directory
2. Reference them in code as `/images/your-image.jpg`
3. For best performance, use WebP format
4. Recommended sizes:
   - Hero images: 1920x600px
   - News cards: 800x600px
   - Coach photos: 400x400px

## 🔧 Page Structure

- **Homepage** (`app/page.tsx`) - Main landing page
- **About** (`app/about/page.tsx`) - Club information
- **Membership** (`app/membership/page.tsx`) - Membership types and pricing
- **Coaching** (`app/coaching/page.tsx`) - Coach profiles and programs
- **Events** (`app/events/page.tsx`) - Upcoming events
- **News** (`app/news/page.tsx`) - Latest news and updates
- **Gallery** (`app/gallery/page.tsx`) - Photo gallery
- **Committee** (`app/committee/page.tsx`) - Committee members
- **Contact** (`app/contact/page.tsx`) - Contact form and information

## 🎯 Deployment

### Deploy to Vercel (Recommended - Free)

1. Push code to GitHub
2. Connect repository to Vercel at [vercel.com](https://vercel.com)
3. Vercel will automatically deploy on every push

### Manual Deployment

```bash
# Build the site
npm run build

# The output will be in the .next folder
# Deploy this to any Node.js hosting provider
```

## 📱 Mobile Responsive

All pages are mobile-responsive with breakpoints:
- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+

## 🎨 Customizing Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary-green: #006D3B;
  --accent-lime: #B7D433;
  --background-white: #FFFFFF;
  --background-light: #F5F5F5;
  --text-dark: #2C2C2C;
  --text-gray: #666666;
}
```

## 📧 Contact Form

The contact form currently shows an alert. To make it functional:

1. Sign up for [Web3Forms](https://web3forms.com/) (free)
2. Get your access key
3. Update the form in `app/contact/page.tsx`

## 🔮 Future Enhancements

When ready to add a CMS:

1. Content structure is already set up for easy migration
2. Data files can be replaced with API calls
3. Recommended CMS: Payload, Sanity, or Tina

## 🐛 Common Issues

**Build errors after updating content:**
- Check that all required fields are filled in data files
- Ensure dates are in YYYY-MM-DD format
- Verify no trailing commas in arrays

**Images not loading:**
- Images must be in `/public/images/` directory
- Reference as `/images/filename.jpg` (not `/public/images/`)

## 📞 Support

For questions about the website:
- Email: ask@skerriestennis.com
- Facebook: [Skerries Lawn Tennis Club](https://www.facebook.com/SkerriesLawnTennisClub/)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Montserrat, Open Sans)
- **Deployment**: Vercel (recommended)

## 📄 License

© 2026 Skerries Lawn Tennis Club. All rights reserved.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
