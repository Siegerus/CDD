import { createAction } from '@reduxjs/toolkit';
import { Action } from '../actions/actions';

// вариант без rtk
// function action_2(value: any) {
// 	return {
// 		type: Action.ACTION_2,
// 		payload: value + ' v2',
// 	};
// }

// Вариант c rtk
const action_2 = createAction(Action.ACTION_2, (value) => {
	return {
		type: Action.ACTION_2,
		payload: value + ' v2',
	};
});

export default action_2;

// actionCreator - ф-ция создания действия
