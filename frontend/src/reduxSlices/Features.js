import { createSlice } from "@reduxjs/toolkit";

const Features = createSlice({
  name: "features",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    searchFilter(state, action) {
      state.searchQuery = action.payload.query;
    },
  },
});

export const { searchFilter } = Features.actions;
export default Features.reducer;
