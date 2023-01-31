import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    status: "checking",
    movies: [],
    isLoading: false,
    errorMessage: null,
    user: localStorage.getItem("user") ?? null
  },
  reducers: {
    startLoadingMovies: (state) => {
      state.isLoading = true;
    },
    setMovies: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.movies;
    },
    login: (state, {payload}) => {
      state.user = payload;
    },
    logout: (state, { payload }) => {
      (state.status = "not-authenticated"),
        (state.errorMessage = payload?.errorMessage);
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    filteredMovies:(state, {payload})=>{
      state.movies = state.movies.filter((item) => {
        return item.Title.toLowerCase().includes(payload.toLowerCase());
      });
    }
  },
});

export const { startLoadingMovies, setMovies, login, logout,checkingCredentials,filteredMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
