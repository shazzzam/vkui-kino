import {
  APP_GO_BACK,
  APP_GO_TO,
  APP_MENU_CLOSE,
  APP_MENU_OPEN,
} from './appTypes';

export const goBack = () => ({ type: APP_GO_BACK });
export const goTo = (view) => ({ type: APP_GO_TO, payload: view });

export const menuOpen = () => ({ type: APP_MENU_OPEN });
export const menuClose = () => ({ type: APP_MENU_CLOSE });
