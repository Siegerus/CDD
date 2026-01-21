import { v4 as uuidv4 } from 'uuid';
import { Icon } from 'leaflet';

export const OFFERS_COUNT = 111;

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  Page404: '*',
} as const;

export const AuthState = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknow: 'Unknow',
} as const;

export const NAV_ITEMS = [
  { id: uuidv4(), city: 'Paris', isActive: true },
  { id: uuidv4(), city: 'Cologne', isActive: false },
  { id: uuidv4(), city: 'Brussels', isActive: false },
  { id: uuidv4(), city: 'Amsterdam', isActive: false },
  { id: uuidv4(), city: 'Hamburg', isActive: false },
  { id: uuidv4(), city: 'Dusseldorf', isActive: false },
];

export const DEFAULT_CUSTOM_ICON = new Icon({
  iconUrl: '../../markup/img/pin.svg',
  iconSize: [27, 40],
  iconAnchor: [13, 40],
});

export const CURRENT_CUSTOM_ICON = new Icon({
  iconUrl: '../../markup/img/pin-active.svg',
  iconSize: [27, 40],
  iconAnchor: [13, 40],
});
