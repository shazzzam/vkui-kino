import {
  FILMS_LIST_ERROR_SET,
  FILMS_LIST_ERROR_UNSET,
  FILMS_LIST_LOADER_SET,
  FILMS_LIST_LOADER_UNSET,
  FILMS_ONE_ERROR_SET,
  FILMS_ONE_ERROR_UNSET,
  FILMS_ONE_LOADER_SET,
  FILMS_ONE_LOADER_UNSET,
  FILMS_SET_ACTIVE_PANEL,
  FILMS_UPDATE_LIST,
  FILMS_UPDATE_ONE,
} from './filmsTypes';

const initialState = {
  activePanel: 'list',
  hasMore: true,
  list: [],
  currentPage: 0,
  listLoader: false,
  listError: false,
  film: null,
  filmId: null,
  filmLoader: false,
  filmError: false,
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILMS_SET_ACTIVE_PANEL: {
      return { ...state, activePanel: action.payload };
    }
    case FILMS_LIST_LOADER_SET: {
      return {
        ...state,
        listLoader: true,
      };
    }

    case FILMS_LIST_LOADER_UNSET: {
      return {
        ...state,
        listLoader: false,
      };
    }

    case FILMS_ONE_LOADER_SET: {
      return {
        ...state,
        filmLoader: true,
      };
    }

    case FILMS_ONE_LOADER_UNSET: {
      return {
        ...state,
        filmLoader: false,
      };
    }

    case FILMS_UPDATE_LIST: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
        list: [...state.list, ...action.payload],
      };
    }

    case FILMS_UPDATE_ONE: {
      return {
        ...state,
        film: action.payload,
        filmId: action.payload.filmId,
      };
    }

    case FILMS_LIST_ERROR_SET: {
      return {
        ...state,
        listError: true,
      };
    }

    case FILMS_LIST_ERROR_UNSET: {
      return {
        ...state,
        listError: false,
      };
    }

    case FILMS_ONE_ERROR_SET: {
      return {
        ...state,
        filmError: true,
      };
    }

    case FILMS_ONE_ERROR_UNSET: {
      return {
        ...state,
        filmError: false,
      };
    }

    default:
      return state;
  }
};
