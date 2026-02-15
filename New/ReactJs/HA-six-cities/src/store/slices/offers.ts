import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';
import { NAV_ITEMS } from '../../constants';
import { SortField, NavItemType, Review, Offer } from '../../types';

export type OffersState = {
  navs: NavItemType[];
  offers: Offer[];
  acitveCard: Offer['id'];
  isOffersLoading: boolean;
  comments: Review[];
};

const initialState: OffersState = {
  navs: NAV_ITEMS,
  offers: [],
  acitveCard: '',
  isOffersLoading: true,
  comments: [],
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
    getOffers: (state: OffersState, action: PayloadAction<Offer[]>) => {
      return { ...state, offers: action.payload };
    },
    getComments: (state: OffersState, action: PayloadAction<Review[]>) => {
      return {
        ...state,
        comments: action.payload,
      };
    },
    postComment: (state: OffersState, action: PayloadAction<Review>) => {
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    },
    setLoadingStatus: (state: OffersState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isOffersLoading: action.payload,
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
});

const offersActions = offersSlice.actions;

export { offersSlice, offersActions };
