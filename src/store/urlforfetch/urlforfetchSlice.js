import { createSlice } from "@reduxjs/toolkit";

const urlforfetchSlice = createSlice({
  name: "urlforfetch",
  initialState: {
    url: "http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-03-25&checkOut=2023-03-26&limit=10",
  },
  reducers: {
    change: (state, action) => {
      state.url = action.payload;
    },
  },
});
export const { change } = urlforfetchSlice.actions;
export default urlforfetchSlice.reducer;
