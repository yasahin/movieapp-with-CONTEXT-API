export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
    case "REMOVE_MOVIE_FROM_TRASH":
      return {
        ...state,
        trashList: state.trashList.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload],
      };
    case "MOVE_TO_WATCHEDLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchList: [...state.watchList, action.payload],
      };
    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };

    case "MOVE_TO_TRASH_WATCHEDLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        trashList: [...state.trashList, action.payload],
      };
    case "MOVE_TO_TRASH_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        trashList: [...state.trashList, action.payload],
      };
    case "MOVE_TO_WATCH_FROM_TRASH":
      return {
        ...state,
        trashList: state.trashList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchList: [...state.watchList, action.payload],
      };

    case "MOVE_TO_WATCHED_FROM_TRASH":
      return {
        ...state,
        trashList: state.trashList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload],
      };
    case "MOVE_TO_WATCHLIST_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchList: [...state.watchList, action.payload],
      };

    default:
      return state;
  }
};
