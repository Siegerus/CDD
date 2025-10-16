import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import createBookWithId from '../../utils/createBookWithId';
import { setError } from "./errorSlice";

let initialState = {
    books: [],
    isLoadingByAPI: false,
};

// Интеграция thunkFunction в slices
// В результате в сост-ие будет передаваться объект сначала с panding в котором будет только сгенерированный id, а потом с fullfield, в котором будет payload или с rejected в котором будет error
export const fetchBook = createAsyncThunk(
    'books/fetchBook',  //'books/fetchBook' - название действия. 'books' тут - это название пирога booksSlice // Второй параментр - сама асинхронная ф-ция
    async (url, thuncAPI) => { // 2ой параметр async ф-ции (thuncAPI) - это объект через него можно в том числе отправлять действия через dispatch в другое состояние    
        try {
            const response = await axios.get(url); 
            return response.data;
        } catch (error) {
            thuncAPI.dispatch(setError(error.message));
            throw error;     // Что бы промис в extraReducers не получился fulfilled, нужно пробросить  error
            // return thuncAPI.rejectWithValue(error);   // Либо вернуть error через такой метод (всё работает, но в консоле у меня ошибка "A non-serializable value")
        } 
    }
)

const booksSlice = createSlice( {
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            return {...state, books : [...state.books, action.payload]}
            // state.books.push(action.payload);        // можно так с библиотекой immer
        },
        deleteBook: (state, action) => {
            return {...state, books: state.books.filter(item => item.id != action.payload)}
        },
        addRandomBook: (state, action) => {
            // return {...state, books : [...state.books, action.payload]}
            state.books.push(action.payload);
        },
        toggleFavoriteBook: (state, action) => {
            state.books.forEach(item => {
                if(item.id == action.payload) item.isFavorite = !item.isFavorite;    // алтернативный вариант с библиотекой immer
            });
            // return state.map(item => {
            //     return item.id == action.payload ?  {...item, isFavorite: !item.isFavorite} : {...item}
            // });
        }
    },
    extraReducers: (builder) => {  // для интеграции thunkFunction в slices.
        // реагирование на состояние промиса при запросе в fetchBook
        builder.addCase(fetchBook.fulfilled, (state, action) => { // 1й аргумент - указываем сост-ие промиса, 2-ой ф-ция, которая будет выполнятся при этом сост-ии
            if(action.payload.title && action.payload.author) {
                state.isLoadingByAPI = false;
                /* return [...state, (createBookWithId(action.payload, 'API'))]; */
                state.books.push(createBookWithId(action.payload, 'API'));        // можно так с библиотекой immers
            } 
        });

        builder.addCase(fetchBook.pending, (state, action) => {
            state.isLoadingByAPI = true;
        });

        builder.addCase(fetchBook.rejected, (state, action) => {
            state.isLoadingByAPI = false;
        });
    },
});

export const { addBook, addRandomBook, deleteBook, toggleFavoriteBook } = booksSlice.actions;

// Ниже вариант без интеграции thunkFunction в slices

// export const thunkFunction = async (dispatch, getState) => {  // thunkFunction. Так отправляется ф-ция через redux store
//     try {                                                       // вынесли её в slices и потом импортируем уже в ком-те
//         const response = await axios.get('http://localhost:4000/random-book');   // запрос на сервер с помощью axios
//         if(response?.data?.author && response?.data?.title) dispatch(addBook(createBookWithId(response.data, 'API')));
//     } catch (error) {
//         console.log('Error fetching random-book', error);
//     }   
//     console.log(getState()); // можно так же вывести в консоль состояние
// }

export const selectBooks = (state) => state.books.books;
export const selectIsLoadingByAPI = (state) => state.books.isLoadingByAPI;

export default booksSlice.reducer;