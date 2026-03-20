import { v4 as uuidv4 } from 'uuid';
import { Offer } from '../../types/types';

export const makeFakeOffer = (): Offer => ({
  id: uuidv4(),
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Paris',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 16,
  },
  isFavorite: false,
  isPremium: true,
  rating: 2,
  images: ['https://url-to-image'],
  isActive: false,
});
