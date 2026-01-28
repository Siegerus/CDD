import { createAction } from '@reduxjs/toolkit';

const sortItems = createAction('SORT_ITEMS', () => {
	return {
		type: 'SORT_ITEMS',
	};
});

export default sortItems;
