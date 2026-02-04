import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NAV_CITIES, PLACES } from '../../consts';
import { Place, NavCity } from '../../types/types';

type PlacesState = {
	navs: NavCity[];
	places: Place[];
};

const initialState: PlacesState = {
	navs: NAV_CITIES,
	places: PLACES,
};

export const placesSlice = createSlice({
	initialState: initialState,
	name: 'places',
	reducers: {
		setActiveCity: (state, action: PayloadAction<number>) => {
			return {
				...state,
				navs: state.navs.map((nav, i) => {
					return action.payload === i
						? {
								...nav,
								isActive: true,
						  }
						: {
								...nav,
								isActive: false,
						  };
				}),
			};
		},
		sortCards: (state, action: PayloadAction<'id' | 'price'>) => {
			const sorted = [...state.places].sort((a, b) =>
				a[action.payload] < b[action.payload] ? -1 : 1
			);

			return {
				...state,
				places: sorted,
			};
		},
	},
});

export const placesActions = placesSlice.actions;
