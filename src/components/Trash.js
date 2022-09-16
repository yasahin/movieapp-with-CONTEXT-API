import React from "react";
import { useGlobal } from "./context/GlobalState";
import MovieCard from "./MovieCard";

const Trash = () => {
  const { trashList } = useGlobal();
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Çöp Kutusu</h1>
          <div className="count-pill">
            {trashList.length} {trashList.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>

        {trashList.length > 0 ? (
          <div className="movie-grid">
            {trashList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="trashList" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Çöp Kutusunda Film Yok...</h2>
        )}
      </div>
    </div>
  );
};

export default Trash;
