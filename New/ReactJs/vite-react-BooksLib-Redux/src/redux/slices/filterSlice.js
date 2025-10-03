import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: ''
}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reduсers: {
        setTitleFilter: (state, action) => {           // редьюсер
            return {...state, title: action.payload}
        }
    }
})
console.log(filterSlice)
export default filterSlice.reducer;      // св-во слайса, в котором находится редьюсер