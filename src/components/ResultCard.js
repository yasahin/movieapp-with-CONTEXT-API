import React from "react";
import { useGlobal } from "./context/GlobalState";

const ResultCard = ({ movie }) => {
  const { watchList, addMovieToWatchList, addMovieToWatched, watched } =
    useGlobal();

  const storedWatched = watched.find((o) => o.id === movie.id);
  const storedMovie = watchList.find((o) => o.id === movie.id)
    ? true
    : storedWatched
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4>IMDB : {movie.vote_average ? movie.vote_average : "-"}</h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={storedMovie}
            onClick={() => addMovieToWatchList(movie)}
          >
            ADD TO WATCHLIST
          </button>
          <button
            className="btn"
            disabled={storedWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            ADD TO WATCHED
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
