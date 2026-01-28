import { createReducer } from '@reduxjs/toolkit';
import setActiveItem from '../actionCreators/setActiveItem';
import { ITEMS, Item } from '../../consts';
import { State } from '../../types/state';

const initialState = {
	items: ITEMS,
};

const itemReducer = createReducer(initialState, (builder) => {
	builder.addCase(setActiveItem, (state, action) => {
		return {
			...state,
			items: ITEMS.map((item, i) => {
				return i === action.payload
					? { ...item, isActive: true }
					: { ...item, isActive: false };
			}),
		};
	});
});

export const selectItems = (state: State) => state.items;
export default itemReducer;

//пример случая с sort. Как не мутировать массив
// const itemReducer = createReducer(initialstate, (builder) => {
// 	builder.addCase(sortItems, (state, action) => {
// 		const sorted = [...ITEMS].sort((a, b) => {
// 			return a.value < b.value ? 1 : -1;
// 		});
// 		return {
// 			...state,
// 			items: sorted,
// 		};
// 	});
// });
