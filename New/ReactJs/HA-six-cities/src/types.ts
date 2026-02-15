import store from './store';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  images: string[];
  isActive: boolean;
};

export type Review = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export type NavItemType = {
  id: string;
  city: string;
  isActive: boolean;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type IntendetDate = {
  monthName: string;
  year: number;
  fullDate: string;
};

export type SortField = {
  field: 'rating' | 'price' | 'title';
  reverse: boolean;
  initial: boolean;
};

export type OptionItem = {
  id: string;
  title: string;
  isActive: boolean;
  sortField: 'rating' | 'price' | 'title';
  reverse: boolean;
  initial: boolean;
};

// export type PostComment = {
//   rating: string;
//   review: string;
// };

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
