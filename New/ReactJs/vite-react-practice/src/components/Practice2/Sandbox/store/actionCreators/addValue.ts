import { createAction } from '@reduxjs/toolkit';

const addValue = createAction('form/addValue', (value: string) => {
	return { type: 'form/addValue', payload: value };
});

export default addValue;
