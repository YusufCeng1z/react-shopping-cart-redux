import { createSlice } from '@reduxjs/toolkit'

const initialState =  localStorage.getItem('likes') != null ? JSON.parse(localStorage.getItem('likes')) : {likes:[]}

export const likes = createSlice({
    name: 'likes',
    initialState,
    reducers : {
        addLike:(state,action) => {
            let product = state.likes.find(item => item == action.payload);
            if(product) {
               state.likes = state.likes.filter(item => item !== action.payload)
            }else {
                state.likes = [...state.likes,action.payload];
            }
        }
    }
});



export const {addLike} = likes.actions;
export default likes.reducer


