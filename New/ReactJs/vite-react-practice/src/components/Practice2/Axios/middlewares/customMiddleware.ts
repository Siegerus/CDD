import EnhancedStore, { PayloadAction } from '@reduxjs/toolkit';
import { axiosSlice, InitialState } from '../slices';
import store from '../store';
import { State, AppDispatch } from '../types/store';

// пример своей middleware

const customMidlware = () => (next: any) => (action: PayloadAction<string>) => {
	if (action.type === 'datas/addData') console.log(action.payload);
	return next(action); // ф-ция next() передаёт action в следующую middleware или уже в редюсер
};

// function customMidlware() {
// 	return function f(next) {
// 		return function f(action: PayloadAction<string>) {
// 			console.log('cutom middleware');
// 			if (action.type === 'datas/addData') console.log(action.payload);
// 			return next(action);
// 		};
// 	};
// }

export default customMidlware;
