// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';


// Load the initial state from localStorage
const persistedState = JSON.parse(localStorage.getItem('reduxState') || '{}');

// Configure the Redux store with the initial state
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

// Subscribe to store changes and update localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(state));
});

export default store;
