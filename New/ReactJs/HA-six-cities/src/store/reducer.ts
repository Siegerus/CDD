import { createReducer } from '@reduxjs/toolkit';

import { setActiveNav, sortByScale } from './actions';

import { NAV_ITEMS } from '../constants';
import { offers } from '../mocks/offers';
import { State } from '../types';

const initialState = {
  navs: NAV_ITEMS,
  offers: offers,
};

const cardsReducer = createReducer(initialState, (builder) => {
  builder

    .addCase(setActiveNav, (state, action) => {
      return {
        ...state,
        navs: NAV_ITEMS.map((item) => {
          return item.id === action.payload
            ? { ...item, isActive: true }
            : { ...item, isActive: false };
        }),
      };
    })

    .addCase(sortByScale, (state, action) => {
      const { field, reverse } = action.payload;

      const sorted = [...offers].sort((a, b) =>
        a[field] > b[field] === reverse ? -1 : 1
      );
      return {
        ...state,
        offers: sorted,
      };
    });
});

export const navsSelector = (state: State) => state.navs;
export const offersSelector = (state: State) => state.offers;

export default cardsReducer;
