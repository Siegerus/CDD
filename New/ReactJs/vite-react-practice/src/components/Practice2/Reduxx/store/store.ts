import { createStore } from 'redux';
import { reducer } from './reducers/reducers';

const store = createStore(reducer, { value: 'initialValue' }); // 2ой аргумент - это initialState

export default store;

// Глобальное хранилище приложения
