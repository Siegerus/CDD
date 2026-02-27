import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from './api';
import { axiosSlice } from './slices';

import customMidlware from './middlewares/customMiddleware';

const api = createAPI();
const store = configureStore({
	reducer: axiosSlice.reducer,
	// имплементируем middleware
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}).concat(customMidlware), // подключение своей middleware
});

export default store;
