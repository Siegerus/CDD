import { createAction } from '@reduxjs/toolkit';
import { Action } from '../actions/actions';

// вариант без rtk
// function action_1(value: any) {
// 	return {
// 		type: Action.ACTION_1,
// 		payload: value + ' v1',
// 	};
// }

// Вариант c rtk
const action_1 = createAction(Action.ACTION_1, (value) => {
	return {
		type: Action.ACTION_1,
		payload: value + ' v1',
	};
});

export default action_1;

// actionCreator - ф-ция создания действия
