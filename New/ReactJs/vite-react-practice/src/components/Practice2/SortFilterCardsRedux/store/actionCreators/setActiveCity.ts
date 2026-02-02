import { createAction } from '@reduxjs/toolkit';

const setActiveCity = createAction('navs/setActiveCity', (value: number) => {
	return {
		type: 'navs/setActiveCity',
		payload: value,
	};
});

export default setActiveCity;
