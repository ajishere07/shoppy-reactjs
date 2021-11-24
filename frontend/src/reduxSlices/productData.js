import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  img: "",
  name: "",
  price: 0,
  qty: 1,
  img2: "",
  img3: "",
  img4: "",
};

const productData = createSlice({
  name: "data",
  initialState,
  reducers: {
    // fetchNow(state, action) {
    //   state.fetchApi = action.payload;
    // },
    getID(state, action) {
      state.id = action.payload;
    },
    dataCollection(state, action) {
      state.id = action.payload.id;
      state.price = action.payload.price;
      state.name = action.payload.name;
      state.img = action.payload.img;
      state.qty = action.payload.qty;
      state.img2 = action.payload.img2;
      state.img3 = action.payload.img3;
      state.img4 = action.payload.img4;
    },
  },
});

export const { dataCollection, getID } = productData.actions;
export default productData.reducer;
