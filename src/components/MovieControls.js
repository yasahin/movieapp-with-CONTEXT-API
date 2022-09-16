import React from "react";
import { useGlobal } from "./context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    moveToTrashFromWatchList,
    moveToTrashFromWatchedList,
    addMovieToWatched,
    moveToWatchListFromWatched,
    removeMovieFromTrash,
    moveToWatchFromTrashList,
    moveToWatchedFromTrashList,
  } = useGlobal();

  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => moveToTrashFromWatchList(movie)}
          >
            <i className="fa-fw far fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveToWatchListFromWatched(movie)}
          >
            <i className="fa-fw far fa-eye-slash"> </i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => moveToTrashFromWatchedList(movie)}
          >
            <i className="fa-fw far fa-times"></i>
          </button>
        </>
      )}
      {type === "trashList" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveToWatchFromTrashList(movie)}
          >
            <i className="fa-fw far fa-eye-slash"> </i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => moveToWatchedFromTrashList(movie)}
          >
            <i className="fa-fw far fa-eye"> </i>
          </button>
          <button
            className="ctrl-btn-delete"
            onClick={() => removeMovieFromTrash(movie.id)}
          >
            <i className="fa-fw far fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
