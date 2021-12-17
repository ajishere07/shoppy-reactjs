import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  selectedAddress:""
};

const userCredentials = createSlice({
  name: "credentials",
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    // loginCredentials(state,action){
    //   state.name = action.payload.name
    //   state.email = action.payload.email;
    //   state.password = action.payload.password
    // },
    selectAddress(state, action){
      state.selectedAddress = action.payload.address;
    }
  },
});

export const { setCredentials, selectAddress,loginCredentials} = userCredentials.actions;
export default userCredentials.reducer;
