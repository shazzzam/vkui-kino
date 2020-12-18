import { combineReducers } from 'redux';

import { appReducer } from './app/appReducer';
import { filmsReducer } from './films/filmsReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  films: filmsReducer,
});
