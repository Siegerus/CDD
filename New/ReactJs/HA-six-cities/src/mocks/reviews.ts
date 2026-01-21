import { v4 as uuidv4 } from 'uuid';
import { Review } from '../types';

export const reviewItems: Review[] = [
  {
    id: uuidv4(),
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Max',
      avatarUrl: '../../markup/img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
];
