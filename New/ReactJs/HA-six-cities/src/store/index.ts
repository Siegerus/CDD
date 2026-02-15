import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';

import { createAPI } from '../services/api';

const api = createAPI();

// Группировка слайсов
// const reducer = combineReducers({
//   [offersSlice.name]: offersSlice.reducer,
// });

const store = configureStore({
  // reducer,
  reducer: offersSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export default store;
