export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  category: 'tournament' | 'social' | 'training' | 'meeting';
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Club Social Tennis',
    description: 'Weekly social tennis sessions for all members. Come along and enjoy friendly games.',
    date: '2026-02-08',
    time: '10:00 AM - 12:00 PM',
    location: 'Skerries Community Centre Courts',
    category: 'social',
  },
  {
    id: '2',
    title: 'Junior Coaching Sessions',
    description: 'Supervised coaching for junior members aged 7-16.',
    date: '2026-02-08',
    time: '2:00 PM - 4:00 PM',
    location: 'Skerries Community Centre Courts',
    category: 'training',
  },
  {
    id: '3',
    title: 'Committee Meeting',
    description: 'Monthly committee meeting. All members welcome to attend.',
    date: '2026-02-15',
    time: '7:00 PM',
    location: 'Clubhouse',
    category: 'meeting',
  },
];
