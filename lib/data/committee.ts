export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  email?: string;
}

export const committee: CommitteeMember[] = [
  {
    id: '1',
    name: 'Damian Evans',
    position: 'President',
  },
  {
    id: '2',
    name: 'Ciara Conlon',
    position: 'Vice President',
  },
  {
    id: '3',
    name: 'Claire Twomey',
    position: 'Secretary',
    email: 'ask@skerriestennis.com',
  },
  {
    id: '4',
    name: 'TBC',
    position: 'Treasurer',
    email: 'treasurer@skerriestennis.com',
  },
  {
    id: '5',
    name: 'Ciara Kingsnorth',
    position: 'Ladies Captain',
    email: 'ladiescaptain@skerriestennis.com',
  },
  {
    id: '6',
    name: 'Harmail Sandhu',
    position: 'Mens Captain',
    email: 'menscaptain@skerriestennis.com',
  },
  {
    id: '7',
    name: 'Aiden McGivern',
    position: 'Children\'s Officer',
    email: 'juniors@skerriestennis.com',
  },
  {
    id: '8',
    name: 'Berna Furlong',
    position: 'Children\'s Officer',
    email: 'juniors@skerriestennis.com',
  },
  {
    id: '9',
    name: 'Committee Members',
    position: 'Alena Thiesmeyer, Deborah Wiseman, Maria Petina, Neil McDonald, Hugh Connell',
  },
];
