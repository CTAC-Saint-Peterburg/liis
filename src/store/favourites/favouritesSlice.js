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
  },
});
export const { add, remove } = favouritesSlice.actions;
export default favouritesSlice.reducer;
