import { createSlice } from "@reduxjs/toolkit";

const urlforfetchSlice = createSlice({
  name: "urlforfetch",
  initialState: {
    url: `https://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-${String(
      new Date().getMonth() + 1
    ).padStart(2, "0")}-${String(new Date().getDate()).padStart(
      2,
      "0"
    )}&checkOut=2023-${String(new Date().getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(new Date().getDate()).padStart(2, "0")}&limit=10`,
  },
  reducers: {
    change: (state, action) => {
      state.url = action.payload;
    },
  },
});
export const { change } = urlforfetchSlice.actions;
export default urlforfetchSlice.reducer;
