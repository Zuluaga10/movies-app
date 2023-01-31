import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices/movie/moviesSlice";

export const store = configureStore({
  reducer: {
    movie: moviesSlice.reducer,
    user : {
      email: "camila-zuluaga@hotmail.com",
      password: "1234",
    }
  },
});
