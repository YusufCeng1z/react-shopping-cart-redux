import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
const initialState = localStorage.getItem('shopBasket') != null ? JSON.parse(localStorage.getItem('shopBasket')) : {basket:[]}

const push = (text) => toast.success(text);

export const shopBasket = createSlice({
  name: 'shopBasket',
  initialState,
  reducers: {
        addBasket:(state,action) => {

            const findItem = state.basket.find(item => item.id === action.payload.id);

            if(findItem) {
               findItem.value++;
               push(`${action.payload.name} added to shopping cart!`)
            }else {
              state.basket = [...state.basket,action.payload];
              push(`${action.payload.name} added to shopping cart!`)
            }

            
            
        },
        deleteBasket:(state,action) => {
          state.basket = state.basket.filter(item => item.id !== action.payload)
        },
        plusValueBasket:(state,action) => {
          const findItem = state.basket.find(item => item.id === action.payload);

          findItem.value++;
           

        },
        minusValueBasket : (state,action) => {
          const findItem = state.basket.find(item => item.id === action.payload);
          if(findItem.value > 1) {
            findItem.value--;
          }  
          
           
        }
  },
})


export const {addBasket,plusValueBasket,minusValueBasket,deleteBasket} = shopBasket.actions;

export default shopBasket.reducer

export const localStorageMiddleware = store => next => action => {
  const result = next(action); 

  if(result.type?.startsWith('shopBasket/')){

    let state = store.getState();
    
    localStorage.setItem('shopBasket', JSON.stringify(state.shopBasket));
  }else {
   
    let state = store.getState();
    
    localStorage.setItem('likes', JSON.stringify(state.likes));

  }

  return result;
};