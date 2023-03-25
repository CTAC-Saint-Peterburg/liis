import { configureStore } from "@reduxjs/toolkit";
import favouritesSlice from "./favourites/favouritesSlice";
import urlforfetchSlice from "./urlforfetch/urlforfetchSlice";

export const store = configureStore({
  reducer: {
    urlforfetch: urlforfetchSlice,
    favourites: favouritesSlice,
  },
});
