import { v4 as uuidv4 } from 'uuid';

export const OFFERS_COUNT = 111;

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  Page404: '*',
} as const;

export enum AuthState {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknow = 'Unknow',
}

export const NAV_ITEMS = [
  { id: uuidv4(), city: 'Paris', isActive: true },
  { id: uuidv4(), city: 'Cologne', isActive: false },
  { id: uuidv4(), city: 'Brussels', isActive: false },
  { id: uuidv4(), city: 'Amsterdam', isActive: false },
  { id: uuidv4(), city: 'Hamburg', isActive: false },
  { id: uuidv4(), city: 'Dusseldorf', isActive: false },
];

export const TEST = [
  { k: 'value', k2: 'value' },
  { k: 'value', k2: 'value' },
  { k: 'value', k2: 'value' },
  { k: 'value', k2: 'value' },
];
