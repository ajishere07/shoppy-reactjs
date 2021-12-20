import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isElectronicsPage: false,
  isMobilesPage: false,
  isBooksPage: false,
  checkoutForPayment: false,
};
const checkSlice = createSlice({
  name: "check",
  initialState,
  reducers: {
    checkoutItems(state) {
      state.checkoutForPayment = true;
    },
    renderElectronicsProducts(state, action) {
      state.isElectronicsPage = action.payload;
      state.isMobilesPage = !action.payload;
      state.isBooksPage = !action.payload;
    },
    renderMobilesProducts(state, action) {
      state.isMobilesPage = action.payload;
      state.isElectronicsPage = !action.payload;
      state.isBooksPage = !action.payload;
    },
    renderBooksProducts(state, action) {
      state.isBooksPage = action.payload;
      state.isMobilesPage = !action.payload;
      state.isElectronicsPage = !action.payload;
    },
  },
});

export const {
  checkoutItems,
  renderElectronicsProducts,
  renderMobilesProducts,
  renderBooksProducts,
} = checkSlice.actions;

export default checkSlice.reducer;
