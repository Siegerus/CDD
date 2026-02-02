import { createAction } from '@reduxjs/toolkit';

const setActiveItem = createAction('SET_ACTIVE_ITEM', (value: number) => {
	return {
		type: 'SET_ACTIVE_ITEM',
		payload: value,
	};
});

// Второй вариант описание действий с payload. Говорим, что payload дожен соответсвовать объекту "{ value: number }"
// setActiveItem в вызове будет ожидать "{ value: number }"
// const setActiveItem = createAction<{ value: number }>('SET_ACTIVE_ITEM');

export default setActiveItem;
