import { configureStore } from "@reduxjs/toolkit";
import cartItems from "../reduxSlices/cartItems";
import checkSlice from "../reduxSlices/checkSlice";
import productData from "../reduxSlices/productData";
const store = configureStore({
  reducer: { check: checkSlice, data: productData, items: cartItems },
});

export default store;
