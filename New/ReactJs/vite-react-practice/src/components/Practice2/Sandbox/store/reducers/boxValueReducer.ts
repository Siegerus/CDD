import { createReducer } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import addValue from '../actionCreators/addValue';
import resetValue from '../actionCreators/resetValue';
import { State, AppDispatch } from '../../types';

const initialState: { values: string[] } = {
	values: [],
};

const boxValueReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(addValue, (state, action) => {
			return {
				...state,
				values: [...state.values, action.payload],
			};
		})
		.addCase(resetValue, (state) => {
			return {
				...state,
				values: [],
			};
		});
});

export default boxValueReducer;

export const valuesSelector = (state: State) => state.values;

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
