import EnhancedStore from '@reduxjs/toolkit';
import store from '../store';
import { State, AppDispatch } from '../types/store';
// пример своей middleware
function customMidlware(store: unknown) {
	return function f(next: (arg: unknown) => void) {
		return function inner(action: unknown) {
			console.log('cutom middleware');
			next(action);
		};
	};
}

export default customMidlware;
