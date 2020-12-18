import {
  APP_GO_BACK,
  APP_GO_TO,
  APP_MENU_CLOSE,
  APP_MENU_OPEN,
} from './appTypes';

const initialState = {
  menuState: false,
  activeView: 'films',
  history: ['films'],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_GO_BACK: {
      const newHistory = [...state.history];
      newHistory.pop();
      if (newHistory.length === 0) {
        newHistory.push('films');
      }
      return {
        ...state,
        activeView: newHistory[newHistory.length - 1],
        history: newHistory,
      };
    }

    case APP_GO_TO: {
      const newHistory = [...state.history];
      if (action.payload === newHistory[newHistory.length - 1]) {
        return state;
      }
      newHistory.push(action.payload);
      return {
        ...state,
        activeView: action.payload,
        history: newHistory,
      };
    }

    case APP_MENU_OPEN: {
      return {
        ...state,
        menuState: true,
      };
    }

    case APP_MENU_CLOSE: {
      return {
        ...state,
        menuState: false,
      };
    }

    default:
      return state;
  }
};
