import { v4 as uuidv4 } from 'uuid';
import { Icon } from 'leaflet';

import { OptionItem } from './types';

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

export enum APIRoute {
  Offers = '/offer-by-id.json',
  Comments = '/comments-list',
  Post = '/post-new-comment.json',
}

export enum LoadingStatus {
  idle,
  Loading,
  Success,
  Failed,
}

export const OPTION_ITEMS: OptionItem[] = [
  {
    id: uuidv4(),
    title: 'Popular',
    isActive: true,
    sortField: 'title',
    reverse: true,
    initial: true,
  },
  {
    id: uuidv4(),
    title: 'Price: low to high',
    isActive: false,
    sortField: 'price',
    reverse: false,
    initial: false,
  },
  {
    id: uuidv4(),
    title: 'Price: high to low',
    isActive: false,
    sortField: 'price',
    reverse: true,
    initial: false,
  },
  {
    id: uuidv4(),
    title: 'Top rated first',
    isActive: false,
    sortField: 'rating',
    reverse: true,
    initial: false,
  },
];

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
