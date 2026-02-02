import { createAction } from '@reduxjs/toolkit';

const sortCards = createAction('cards/sortCards', (value: 'id' | 'price') => {
	return { type: 'cards/sortCards', payload: value };
});

export default sortCards;
