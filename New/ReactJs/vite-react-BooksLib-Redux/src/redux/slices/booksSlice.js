import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import createBookWithId from '../../utils/createBookWithId';
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

// export const thunkFunction = async (dispatch, getState) => {  // thunkFunction. Так отправляется ф-ция через redux store
//     try {                                                       // вынесли её в slice и потом импортируем уже в ком-те
//         const response = await axios.get('http://localhost:4000/random-book');   // запрос на сервер с помощью axios
//         if(response?.data?.author && response?.data?.title) dispatch(addBook(createBookWithId(response.data, 'API')));
//     } catch (error) {
//         console.log('Error fetching random-book', error);
//     }   
//     console.log(getState()); // можно так же вывести в консоль состояние
// }

export const selectBooks = (state) => state.books;
export default booksSlice.reducer;