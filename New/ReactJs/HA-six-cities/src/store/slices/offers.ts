import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NAV_ITEMS, LoadingStatus } from '../../constants';
import { SortField, NavItemType, Offer } from '../../types';
import { fetchOffers } from '../api-actions';

type OffersState = {
  navs: NavItemType[];
  offers: Offer[];
  acitveCard: Offer['id'];
  loadingStatus: LoadingStatus;
};

const initialState: OffersState = {
  navs: NAV_ITEMS,
  offers: [],
  acitveCard: '',
  loadingStatus: LoadingStatus.idle,
};

const offersSlice = createSlice({
  initialState: initialState,
  name: 'offers',
  reducers: {
    setActiveNav: (
      state: OffersState,
      action: PayloadAction<NavItemType['id']>
    ) => {
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
      const { field, reverse, initial } = action.payload;

      const sorted = [...state.offers].sort((a, b) =>
        a[field] > b[field] === reverse ? -1 : 1
      );
      return {
        ...state,
        offers: initial ? state.offers : sorted,
      };
    },

    setActiveId: (state: OffersState, action: PayloadAction<Offer['id']>) => {
      return {
        ...state,
        acitveCard: action.payload,
      };
    },

    setFavorites: (state: OffersState, action: PayloadAction<Offer['id']>) => {
      return {
        ...state,
        offers: state.offers?.map((offer) => {
          return offer.id === action.payload
            ? {
                ...offer,
                isFavorite: !offer.isFavorite,
              }
            : {
                ...offer,
              };
        }),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        return { ...state, loadingStatus: LoadingStatus.Loading };
      })
      .addCase(
        fetchOffers.fulfilled,
        (state: OffersState, action: PayloadAction<Offer[]>) => {
          return {
            ...state,
            offers: action.payload,
            loadingStatus: LoadingStatus.Success,
          };
        }
      )
      .addCase(fetchOffers.rejected, (state) => {
        return { ...state, loadingStatus: LoadingStatus.Failed };
      });
  },
});

// собираем асинхронные actions вместе со всеми для удобства
const offersActions = { ...offersSlice.actions, fetchOffers };

export { offersSlice, offersActions };
