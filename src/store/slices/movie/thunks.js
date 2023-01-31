import { moviesApi } from "../../../api/moviesApi";
import {
  setMovies,
  startLoadingMovies,
} from "./moviesSlice";

//SOLO LLAMADO a enpoints, servidores
export const getMovies = () => {
  return async (dispatch) => {
    dispatch(startLoadingMovies());

    const { data } = await moviesApi.get(
      "?i=tt3896198&apikey=2360f34c"
    );
    dispatch(
      setMovies({
        movies: data.Search,
      })
    );
  };
};



