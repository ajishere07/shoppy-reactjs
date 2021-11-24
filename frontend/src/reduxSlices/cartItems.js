import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalItems: 0,
  items: [],
  renderItems: false,
  totalAmount: 0,
};
export const cartItems = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartItems(state) {
      state.totalItems++;
    },
    addToCart(state, action) {
      if (state.items.length === 0) {
        state.items.push(action.payload);
        state.totalAmount = state.totalAmount + action.payload.price;
        return;
      } else {
        let i = 0;
        while (i < state.items.length) {
          if (state.items[i].id === action.payload.id) {
            state.items[i].qty++;
            state.totalAmount = state.totalAmount + action.payload.price;
            return;
          }
          i++;
        }
        state.items.push(action.payload);
        state.totalAmount = state.totalAmount + action.payload.price;
      }
    },
  
    increaseQuantity(state, action) {
      let i = 0;
      while (i < state.items.length) {
        if (action.payload === state.items[i].id) {
          state.items[i].qty++;
          state.totalItems++;
          state.totalAmount = state.totalAmount + state.items[i].price;
          break;
        }
        i++;
      }
    },
    decreaseQuantity(state, action) {
      let i = 0;
      while (i < state.items.length) {
        if (action.payload === state.items[i].id) {
          if (state.items[i].qty > 0 && state.totalItems > 0) {
            state.items[i].qty = state.items[i].qty - 1;
            state.totalItems = state.totalItems - 1;
            state.totalAmount = state.totalAmount - state.items[i].price;
            if (state.items[i].qty === 0) {
              state.items.splice(i, 1);
            }
          }
          break;
        }
        i++;
      }
    },
  },
});

export const {
  increaseCartItems,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartItems.actions;
export default cartItems.reducer;
