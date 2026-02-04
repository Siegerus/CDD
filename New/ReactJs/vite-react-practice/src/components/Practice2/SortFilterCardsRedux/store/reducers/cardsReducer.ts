import { createReducer } from '@reduxjs/toolkit';

import setActiveCity from '../actionCreators/setActiveCity';
import sortCards from '../actionCreators/sortCard';
import { NAV_CITIES, PLACES } from '../../consts';

const initialState = {
	navs: NAV_CITIES,
	places: PLACES,
};
const cardsReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setActiveCity, (state, action) => {
			return {
				...state,
				navs: state.navs.map((nav, i) => {
					return i === action.payload
						? { ...nav, isActive: true }
						: { ...nav, isActive: false };
				}),
			};
		})
		.addCase(sortCards, (state, action) => {
			const sorted = [...state.places].sort((a, b) =>
				a[action.payload] < b[action.payload] ? -1 : 1
			);
			return {
				...state,
				places: sorted,
			};
		});
});

export default cardsReducer;
