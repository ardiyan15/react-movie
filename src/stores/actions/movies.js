import axios from "axios";
import Movies from "../../models/Movies";

export const SET_MOVIES = "SET_MOVIES";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

export const setMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await axios.get(
        "http://www.omdbapi.com/?apikey=8240f7c5&s=avengers"
      );
      const { Search } = movies.data;
      const loadMovies = [];
      for (const key in Search) {
        loadMovies.push(
          new Movies(
            Search[key].imdbID,
            Search[key].Title,
            Search[key].Year,
            Search[key].Type,
            Search[key].Poster
          )
        );
      }
      dispatch({
        type: SET_MOVIES,
        movies: loadMovies,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const searchMovie = ({ keyword }) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        `http://www.omdbapi.com/?apikey=faf7e5bb&s=${keyword}`
      );
      let loadMovies;
      if (result.data.Response === "False") {
        loadMovies = result.data.Error;
      } else {
        const { Search } = result.data;
        loadMovies = [];
        for (const key in Search) {
          loadMovies.push(
            new Movies(
              Search[key].imdbID,
              Search[key].Title,
              Search[key].Year,
              Search[key].Type,
              Search[key].Poster
            )
          );
        }
      }
      dispatch({
        type: SEARCH_MOVIE,
        movies: loadMovies,
      });
    } catch (err) {
      throw err;
    }
  };
};
