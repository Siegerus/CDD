import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {        // редьюсер
            // return {...state, title: action.payload }
            state.title = action.payload;   //  Благодаря библиотеке immer можно мутировать объект.А под капотом всё равно будет создаватся новый объект.
        },
        resetFilters: (state) => {
            return initialState;
        } 

    }
});

export const { setTitleFilter, resetFilters } = filterSlice.actions; // экспорт actionCreators используя деструктуризацию

export const selectTitleFilter = (state) => state.filter.title;  // ф-ция для useSelector

export default filterSlice.reducer;  // св-во слайса, в котором находится редьюсер