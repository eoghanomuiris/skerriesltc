export interface Coach {
  id: string;
  name: string;
  level: string;
  phone: string;
  image?: string;
  specialties?: string[];
}

export const coaches: Coach[] = [
  {
    id: '1',
    name: 'Jim Dolan',
    level: 'Level 3 Coach',
    phone: '086 276365',
    image: '/images/placeholders/coach-1.jpg',
    specialties: ['Director of Coaching', 'Junior Development', 'Advanced Players'],
  },
  {
    id: '2',
    name: 'Neil McDonald',
    level: 'Level 2 Coach',
    phone: '087 6874502',
    image: '/images/placeholders/coach-2.jpg',
    specialties: ['Adult Coaching', 'Beginners', 'Intermediate Players'],
  },
  {
    id: '3',
    name: 'Alastair Kay',
    level: 'Level 1 Coach',
    phone: '087 4132822',
    image: '/images/placeholders/coach-3.jpg',
    specialties: ['Junior Programs', 'Group Sessions'],
  },
  {
    id: '4',
    name: 'Matthew Dowd',
    level: 'Level 1 Coach',
    phone: '089 4365849',
    image: '/images/placeholders/coach-4.jpg',
    specialties: ['Beginners', 'Social Tennis'],
  },
];
