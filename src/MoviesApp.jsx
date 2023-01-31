import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBarr } from "./components/AppBarr";
import { MovieCard } from "./components/movie/MovieCard";
import { getMovies } from "./store/slices/movie/thunks";

export const MoviesApp = () => {
  const { movies } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <AppBarr />
      <div className="movie">
        <h1 >Movies</h1>
      </div>
      
      <Grid container spacing={{ xs: 2, md: 3 }}>
        
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            justifyContent: "center",
            paddingLeft: 20,
          }}
        >
        
          {movies ? movies.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          )) : "No hay películas para mostrar"} 
        </Grid>
      </Grid>
    </>
  );
};
