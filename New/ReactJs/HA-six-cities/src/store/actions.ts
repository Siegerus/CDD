import { createAction } from '@reduxjs/toolkit';
import { SortField } from '../types';

const setActiveNav = createAction('navs/setActiveNav', (value: string) => {
  return {
    type: 'navs/setActiveNav',
    payload: value,
  };
});

const sortByScale = createAction('cards/sortByScale', (value: SortField) => {
  return {
    type: 'cards/sortByScale',
    payload: value,
  };
});

export { setActiveNav, sortByScale };
