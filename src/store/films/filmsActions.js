const {
  FILMS_SET_ACTIVE_PANEL,
  FILMS_REQUEST_LIST,
  FILMS_REQUEST_ONE,
  FILMS_UPDATE_LIST,
  FILMS_UPDATE_ONE,
  FILMS_LIST_LOADER_SET,
  FILMS_LIST_LOADER_UNSET,
  FILMS_ONE_LOADER_SET,
  FILMS_ONE_LOADER_UNSET,
  FILMS_LIST_ERROR_SET,
  FILMS_LIST_ERROR_UNSET,
  FILMS_ONE_ERROR_SET,
  FILMS_ONE_ERROR_UNSET,
} = require('./filmsTypes');

export const setActivePanel = (panel) => ({
  type: FILMS_SET_ACTIVE_PANEL,
  payload: panel,
});

export const requestList = () => ({
  type: FILMS_REQUEST_LIST,
});

export const requestOne = (id) => ({
  type: FILMS_REQUEST_ONE,
  payload: id,
});

export const updateList = (films) => ({
  type: FILMS_UPDATE_LIST,
  payload: films,
});

export const updateOne = (film) => ({
  type: FILMS_UPDATE_ONE,
  payload: film,
});

export const listLoaderSet = () => ({ type: FILMS_LIST_LOADER_SET });

export const listLoaderUnset = () => ({ type: FILMS_LIST_LOADER_UNSET });

export const oneLoaderSet = () => ({ type: FILMS_ONE_LOADER_SET });

export const oneLoaderUnset = () => ({ type: FILMS_ONE_LOADER_UNSET });

export const listErrorSet = () => ({ type: FILMS_LIST_ERROR_SET });

export const listErrorUnset = () => ({ type: FILMS_LIST_ERROR_UNSET });

export const oneErrorSet = () => ({ type: FILMS_ONE_ERROR_SET });

export const oneErrorUnset = () => ({ type: FILMS_ONE_ERROR_UNSET });
