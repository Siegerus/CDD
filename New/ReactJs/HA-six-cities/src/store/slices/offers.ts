import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NAV_ITEMS } from '../../constants';
import { OffersState, SortField } from '../../types';
import { offers } from '../../mocks/offers';

const initialState: OffersState = {
  navs: NAV_ITEMS,
  offers: offers,
};

const offersSlice = createSlice({
  initialState: initialState,
  name: 'offers',
  reducers: {
    setActiveNav: (state: OffersState, action: PayloadAction<string>) => {
      return {
        ...state,
        navs: state.navs.map((nav) => {
          return nav.id === action.payload
            ? { ...nav, isActive: true }
            : { ...nav, isActive: false };
        }),
      };
    },
    sortByScale: (state: OffersState, action: PayloadAction<SortField>) => {
      const { field, reverse } = action.payload;

      const sorted = [...offers].sort((a, b) =>
        a[field] > b[field] === reverse ? -1 : 1
      );
      return {
        ...state,
        offers: sorted,
      };
    },
  },
});

const offersActions = offersSlice.actions;

export { offersSlice, offersActions };
