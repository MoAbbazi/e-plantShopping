// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer to the store
  },
});

export default store;