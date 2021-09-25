import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as moviesAction from "../stores/actions/movies";

const Search = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState();

  const inputHandler = (event) => {
    setKeyword({
      [event.target.name]: event.target.value,
    });
  };

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(moviesAction.searchMovie(keyword));
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={searchHandler}>
        <div className="row">
          <div className="col-md-10">
            <div className="form-group">
              <input
                name="keyword"
                type="text"
                className="form-control"
                placeholder="Search Movie"
                onChange={inputHandler}
              />
            </div>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
