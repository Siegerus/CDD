import { configureStore } from '@reduxjs/toolkit';

import { ITEMS } from '../consts';
import itemReducer from './reducers/itemReducer';

const store = configureStore({
	reducer: itemReducer,
});

export default store;
