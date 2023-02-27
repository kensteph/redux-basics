import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import modalReducer from './features/modalSlice';

// Configure the store
const store = configureStore({
  reducer: { cart: cartReducer, modal: modalReducer },
});

// Export the store
export default store;
