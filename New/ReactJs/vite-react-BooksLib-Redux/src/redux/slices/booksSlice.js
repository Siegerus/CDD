import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const booksSlice = createSlice( {
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            // return [...state, action.payload];
            state.push(action.payload);        // можно так с библиотекой immer
        },
        deleteBook: (state, action) => {
            const index = state.findIndex(item => item.id == action.payload) // алтернативный вариант с библиотекой immer // находим индек элемента
            if(index !== -1) state.splice(index, 1);                         // удаляем элемент
            // return state.filter(item => item.id != action.payload);
        },
        addRandomBook: (state, action) => {
            return [...state, action.payload];
        },
        toggleFavoriteBook: (state, action) => {
            state.forEach(item => {
                if(item.id == action.payload) item.isFavorite = !item.isFavorite;    // алтернативный вариант с библиотекой immer
            });
            // return state.map(item => {
            //     return item.id == action.payload ?  {...item, isFavorite: !item.isFavorite} : {...item}
            // });
        }
    }
});

export const { addBook, addRandomBook, deleteBook, toggleFavoriteBook } = booksSlice.actions;

export const selectBooks = (state) => state.books;
export default booksSlice.reducer;