import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from './api';
import { axiosSlice } from './slices';

const api = createAPI();
const store = configureStore({
	reducer: axiosSlice.reducer,
	// имплементируем помредник
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}),
});

export default store;
