import { configureStore } from '@reduxjs/toolkit';

import { placesSlice } from './slices/places';

const store = configureStore({
	reducer: placesSlice.reducer,
});

export default store;
