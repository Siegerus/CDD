import { createReducer } from '@reduxjs/toolkit';

import action_1 from '../../store/actionCreators/action_1';
import action_2 from '../../store/actionCreators/action_2';

// Вариант без rtk
// function reducer(state: any, action: any) {
// 	switch (action.type) {
// 		case action_1('ACTION_1').type:
// 			return { value: [...state, action.payload] };
// 		case action_2('ACTION_2').type:
// 			return { value: [...state, action.payload] };

// 		default:
// 			return state;
// 	}
// }

// Вариант c rtk
// В "createReducer" 1й параметр - начальное значение, 2ой - колбек с п-ром builder
const reducer = createReducer(['initialValue'], (builder) => {
	builder
		//У метода "builderа" 1й п-тр - наше действие, 2й- колбек с начальным сос-ем и action - п-тр действия, в котором можно изъять полезную нагрузки payload
		.addCase(action_1, (state, action) => {
			return [...state, action.payload];
		})
		.addCase(action_2, (state, action) => {
			return [...state, action.payload];
		});
});

export { reducer };

// базовая функция reducer
// Функция принимает значение текущего состояния и обьект события (action).
// Обьект события содержит два свойства — это тип события (action.type) и значение события (action.value).
