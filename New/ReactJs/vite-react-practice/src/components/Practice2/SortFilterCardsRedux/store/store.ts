import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from './reducers/cardsReducer';

const store = configureStore({
	reducer: cardsReducer,
});

export default store;
