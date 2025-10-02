import * as actionTypes from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_BOOK:
			return [...state, action.payload];
        case actionTypes.DELETE_BOOK: 
            return state.filter(item => item.id !== action.payload);
        case actionTypes.ADD_RANDOM: 
            return [...state, action.payload];
		default:
			return state;
	}
};

export default booksReducer;
