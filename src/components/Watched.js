import React from "react";
import { useGlobal } from "./context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useGlobal();
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenen Filmler</h1>
          <div className="count-pill">
            {watched.length} {watched.lengt < 2 ? "Movie" : "Movies"}
          </div>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Listenizde Film Yok...</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
