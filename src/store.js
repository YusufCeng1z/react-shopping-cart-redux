import { configureStore } from '@reduxjs/toolkit'
import shopBascet,{ localStorageMiddleware } from './reducers/shopBasket'
import likes from './reducers/likes'

export const store = configureStore({
  reducer: {
     shopBasket:shopBascet,
     likes : likes
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})