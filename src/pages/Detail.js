import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";

const Detail = () => {
  const location = useLocation();
  const { id } = location.state;

  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchAPI() {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=8240f7c5&i=${id}&plot=full`
      );
      setMovie(data);
    }
    fetchAPI();
  }, [id]);

  if (movie) {
    return (
      <div>
        <Navbar />
        <div className="container mt-3">
          <div class="jumbotron shadow border border-dark">
            <div class="row">
              <div class="col-md-4">
                <img
                  className="pull-left"
                  src={movie.Poster}
                  alt="imageDetail"
                />
              </div>
              <div class="col-md-8">
                <div class="row">
                  <h4>{movie.Title}</h4>{" "}
                  <small className="mt-2 ml-2 font-weight-light">
                    ({movie.Year})
                  </small>{" "}
                </div>
                <div className="row mt-3">
                  <span className="font-weight-bold mr-2">
                    {" "}
                    Released Date :{" "}
                  </span>{" "}
                  {movie.Released}
                </div>
                <div class="row">
                  <span className="font-weight-bold mr-2">Director :</span>
                  {movie.Director}
                </div>
                <div class="row">
                  <span className="font-weight-bold mr-2">Production :</span>
                  {movie.Production}
                </div>
                <div class="row">
                  <span className="font-weight-bold mr-2">Rated :</span>
                  {movie.Rated}
                </div>
                <div class="row">
                  <span className="font-weight-bold mr-2">Language :</span>
                  {movie.Language}
                </div>
                <div class="row">
                  <span className="font-weight-bold mr-2">Actors :</span>
                  {movie.Actors}
                </div>
                <div class="row mt-4">
                  <p className="text-justify">{movie.Plot}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <div class="container d-flex justify-content-center mt-5">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }
};

export default Detail;
