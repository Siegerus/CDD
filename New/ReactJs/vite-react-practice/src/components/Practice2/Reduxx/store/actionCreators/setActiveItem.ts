import { createAction } from '@reduxjs/toolkit';

const setActiveItem = createAction('SET_ACTIVE_ITEM', (value: number) => {
	return {
		type: 'SET_ACTIVE_ITEM',
		payload: value,
	};
});

export default setActiveItem;
