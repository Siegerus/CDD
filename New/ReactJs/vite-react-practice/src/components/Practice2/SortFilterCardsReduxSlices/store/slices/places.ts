import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../hooks/store';
import { NAV_CITIES, PLACES } from '../../consts';
import { Place, NavCity, Data } from '../../types/types';

type PlacesState = {
	navs: NavCity[];
	places: Place[];
};

const initialState: PlacesState = {
	navs: NAV_CITIES,
	places: PLACES,
};

const fetchData = createAppAsyncThunk(
	'fetchData',
	async (url: RequestInfo | 'Url', { getState }) => {
		console.log(getState());
		const response = await fetch(url);
		const json = await response.json();
		return json;
	}
);

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
	extraReducers: (builder) => {
		builder.addCase(fetchData.fulfilled, (state, action) => {
			console.log(action.payload);
			return {
				...state,
				places: state.places.map((place, i) => {
					return {
						...place,
						name: place.name + action.payload[i].title,
					};
				}),
			};
		});
	},
	// selectors: {
	// 	navs: (state) => state.navs,
	// 	places: (state) => state.places,
	// },
});

export const placesActions = { ...placesSlice.actions, fetchData }; // добираем fetchData в один объект для удобства
// export const placesSelectors = placesSlice.selectors;
