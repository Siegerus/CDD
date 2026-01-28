import { createReducer } from '@reduxjs/toolkit';

import { ITEMS, Item } from '../../consts';
import { State } from '../../../Reduxx/types/state';
import sortItems from '../actionCreators/sortItems';

const initialstate = {
	items: ITEMS,
};

const itemReducer = createReducer(initialstate, (builder) => {
	builder.addCase(sortItems, (state, action) => {
		const sorted = [...ITEMS].sort((a, b) => {
			return a.value < b.value ? 1 : -1;
		});
		return {
			...state,
			items: sorted,
		};
	});
});

export const selectItems = (state: State) => state.items;

export default itemReducer;
