import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
// Configure the store
const store = configureStore({ reducer: {cart:cartReducer} });

// Export the store
export default store;
