import * as actionTypes from './actionTypes';

export const addBook = newBook => {
	return {
		type: actionTypes.ADD_BOOK,
		payload: newBook
	};
};

export const deleteBook = id => ({
	type: actionTypes.DELETE_BOOK,
	payload: id
});

export const addRandomBook = randomBook => {
	return {
		type: actionTypes.ADD_RANDOM,
		payload: randomBook
	};
};

export const toggleFavoriteBook = id => ({
	type: actionTypes.TOGGLE_FOVORITE,
	payload: id
});
