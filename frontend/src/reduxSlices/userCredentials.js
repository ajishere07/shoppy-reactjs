import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  selectedAddress: "",
  isAuthenticated: false,
};

const userCredentials = createSlice({
  name: "credentials",
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    unsetCredentials(state) {
      state.name = "";
      state.email = "";
      state.password = "";
      state.isAuthenticated = false;
    },
    selectAddress(state, action) {
      state.selectedAddress = action.payload.address;
    },
  },
});

export const { setCredentials, selectAddress, unsetCredentials } =
  userCredentials.actions;
export default userCredentials.reducer;
