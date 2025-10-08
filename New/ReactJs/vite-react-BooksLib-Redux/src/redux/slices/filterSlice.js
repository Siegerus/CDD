import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    author: '',
    onlyFavorite: false
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {        // редьюсер
            //    return {...state, title: action.payload}
            state.title = action.payload;   //  Благодаря библиотеке immer можно мутировать объект.А под капотом всё равно будет создаватся новый объект.
        },
        setAuthorFilter: (state, action) => {       
            state.author = action.payload;  
        },
        resetFilters: (state) => {
            return initialState;
        },
        setOnlyFavoriteFilter: (state, action) => {
        //    return {...state, onlyFavorite: !state.onlyFavorite}
        state.onlyFavorite = !state.onlyFavorite;
        }

    }
});

export const { setTitleFilter, setAuthorFilter, setOnlyFavoriteFilter, resetFilters } = filterSlice.actions; // экспорт actionCreators используя деструктуризацию

export const selectTitleFilter = (state) => state.filter.title;  // ф-ция для useSelector
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;


export default filterSlice.reducer;  // св-во слайса, в котором находится редьюсер