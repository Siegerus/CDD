import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './reducer';

const store = configureStore({
  reducer: cardsReducer,
});

export default store;
