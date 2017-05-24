
import {
  SET_TITLE,
  SET_PAGE,
} from 'actions/app-actions';

export const INITIAL_STATE = {
  title: 'React Client',
  page: 'main',
};

export function appReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TITLE: return setTitle(state, payload);
    case SET_PAGE: return setPage(state, payload);
    default: return state;
  }
}

function setTitle(state, payload) {
  return {
    ...state,
    title: payload,
  };
}

function setPage(state, payload) {
  return {
    ...state,
    page: payload,
  };
}
