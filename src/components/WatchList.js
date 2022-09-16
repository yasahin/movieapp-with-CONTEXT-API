import React from "react";
import { useGlobal } from "./context/GlobalState";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const { watchList } = useGlobal();
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenecek Filmler</h1>
          <div className="count-pill">
            {watchList.length} {watchList.lengt < 2 ? "Movie" : "Movies"}
          </div>
        </div>

        {watchList.length > 0 ? (
          <div className="movie-grid">
            {watchList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchList" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Listenizde Film Yok...</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
