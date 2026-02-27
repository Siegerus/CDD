import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from './types/store';

export type InitialState = {
	data: string[];
};

const initialState = {
	data: [''],
};

const fetchData = createAsyncThunk<
	void,
	undefined, // "undefined" тут это _arg
	{
		dispatch: AppDispatch;
		state: State;
		extra: AxiosInstance;
	}
>('fetchData', async (_arg, { dispatch, extra: api }) => {
	// _arg - вргумент, который никак не будет использоваться

	const { data } = await api.get('https://jsonplaceholder.typicode.com/posts');
	dispatch(axiosSlice.actions.addData(data[0].title));
});

const axiosSlice = createSlice({
	initialState,
	name: 'datas',
	reducers: {
		addData: (state, action: PayloadAction<string>) => {
			return {
				...state,
				data: [...state.data, action.payload],
			};
		},
	},
});

export { axiosSlice, fetchData };
