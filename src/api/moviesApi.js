import axios from "axios";

export const moviesApi = axios.create({
  baseURL: 'http://www.omdbapi.com/'
});
