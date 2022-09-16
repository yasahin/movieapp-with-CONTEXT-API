import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalState = createContext();

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
  trashList: localStorage.getItem("trashList")
    ? JSON.parse(localStorage.getItem("trashList"))
    : [],
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("trashList", JSON.stringify(state.trashList));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchedList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHEDLIST", payload: movie });
  };
  const moveToWatchListFromWatched = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST_FROM_WATCHED", payload: movie });
  };

  const removeMovieFromTrash = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_TRASH", payload: id });
  };

  const moveToTrashFromWatchList = (movie) => {
    dispatch({ type: "MOVE_TO_TRASH_FROM_WATCHLIST", payload: movie });
  };
  const moveToTrashFromWatchedList = (movie) => {
    dispatch({ type: "MOVE_TO_TRASH_WATCHEDLIST", payload: movie });
  };

  const moveToWatchFromTrashList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCH_FROM_TRASH", payload: movie });
  };
  const moveToWatchedFromTrashList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHED_FROM_TRASH", payload: movie });
  };

  return (
    <GlobalState.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        trashList: state.trashList,
        addMovieToWatchList,
        addMovieToWatched,
        moveToWatchedList,
        removeMovieFromTrash,
        moveToTrashFromWatchList,
        moveToTrashFromWatchedList,
        moveToWatchFromTrashList,
        moveToWatchedFromTrashList,
        moveToWatchListFromWatched,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export const useGlobal = () => useContext(GlobalState);
