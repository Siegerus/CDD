import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { commentsSlice } from './slices/comments';

import { createAPI } from '../services/api';

const api = createAPI();

// Группировка слайсов
const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [commentsSlice.name]: commentsSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export default store;
