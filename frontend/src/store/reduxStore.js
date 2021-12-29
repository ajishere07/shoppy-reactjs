import { configureStore } from "@reduxjs/toolkit";
import cartItems from "../reduxSlices/cartItems";
import checkSlice from "../reduxSlices/checkSlice";
import Features from "../reduxSlices/Features";
import productData from "../reduxSlices/productData";
import userCredentials from "../reduxSlices/userCredentials";
const store = configureStore({
  reducer: {
    check: checkSlice,
    data: productData,
    items: cartItems,
    credential: userCredentials,
    featurefilter: Features,
  },
});

export default store;
