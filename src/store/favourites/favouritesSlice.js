import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: { data: [] },
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
    remove: (state, action) => {
      state.data = state.data.filter((x) => x.id !== action.payload);
    },
    sort: (state, action) => {
      if (state.data.length) {
        if (action.payload === true) {
          state.data = state.data.sort((a, b) => a.price - b.price);
        } else if (action.payload === false) {
          state.data = state.data.sort((a, b) => b.price - a.price);
        }
      }
    },
  },
});
export const { add, remove, sort } = favouritesSlice.actions;
export default favouritesSlice.reducer;
