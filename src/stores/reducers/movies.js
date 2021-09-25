import { SET_MOVIES, SEARCH_MOVIE } from "../actions/movies";

const initialState = {
  movies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        movies: action.movies,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: action.movies,
      };
  }
  return state;
};
