import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers/reducers';

// это вариант без rtk
// const store = createStore(reducer, { value: 'initialValue' }); // 2ой аргумент - это initialState

// Вариант c rtk
const store = configureStore({
	reducer: reducer,
	preloadedState: ['initialValue'],
});

export default store;

// Глобальное хранилище приложения
