import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as moviesAction from "../stores/actions/movies";

import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Modal from "../components/Modal";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(moviesAction.setMovies());
  }, [dispatch]);

  const handlerPopUp = (data) => {
    setImage(data);
  };

  if (!movies || movies.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  } else if (movies === "Movie not found!") {
    return (
      <>
        <Navbar />
        <div className="mt-3">
          <Search />
        </div>
        <div className="container d-flex justify-content-center">
          <h2>Movie Not Found</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Modal imageData={image} />
        <Navbar />;
        <div className="container">
          <Search />
          <div className="row">
            {movies.map((movie, index) => (
              <div key={index} className="col-md-4 mb-3 d-flex rounded">
                <div className="card shadow flex-fill">
                  <img
                    onClick={(e) => handlerPopUp(movie.image)}
                    data-target="#modalPopUp"
                    data-toggle="modal"
                    className="card-img-top"
                    src={movie.image}
                    alt="imageList"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.year}</p>
                    <Link
                      to={{
                        pathname: "/detail",
                        state: { id: movie.id },
                      }}
                      className="btn btn-info btn-sm rounded"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Home;
