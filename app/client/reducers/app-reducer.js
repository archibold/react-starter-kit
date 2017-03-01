
import {
  SET_TITLE,
} from 'actions/app-actions';

export const INITIAL_STATE = {
  title: 'React Client',
};

export function appReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TITLE: return setTitle(state, payload);
    default: return state;
  }
}

function setTitle(state, payload) {
  return {
    ...state,
    title: payload,
  };
}
