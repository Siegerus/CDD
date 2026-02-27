import { v4 as uuidv4 } from 'uuid';
import { Offer } from '../types/types';

export const offers: Offer[] = [
  {
    id: uuidv4(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
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
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },

  {
    id: uuidv4(),
    title: 'Wood and stone place',
    type: 'apartment',
    price: 420,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },

  {
    id: uuidv4(),
    title: 'Wood and stone place',
    type: 'apartment',
    price: 80,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },

  {
    id: uuidv4(),
    title: 'Wood and stone place',
    type: 'apartment',
    price: 90,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },

  {
    id: uuidv4(),
    title: 'Wood and stone place',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.828610000000006,
      longitude: 2.360499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },

  {
    id: uuidv4(),
    title: 'Wood and stone place',
    type: 'apartment',
    price: 110,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.89581231232315666,
      longitude: 2.33045466323,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },

  {
    id: uuidv4(),
    title: 'Wood and stone place',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.838610000000006,
      longitude: 2.310499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },

  {
    id: uuidv4(),
    title: 'Wood and stone place',
    type: 'apartment',
    price: 220,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.818610000000006,
      longitude: 2.310499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },

  {
    id: uuidv4(),
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.851610000000006,
      longitude: 2.339499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },
  {
    id: uuidv4(),
    title: 'Wood and stone place',
    type: 'apartment',
    price: 80,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },
  {
    id: uuidv4(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 51.37454,
        longitude: 3.97976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },
  {
    id: uuidv4(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 51.37454,
        longitude: 3.97976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },
  {
    id: uuidv4(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 51.37454,
        longitude: 3.97976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    images: ['img/apartment-01.jpg'],
    isActive: false,
  },
];
