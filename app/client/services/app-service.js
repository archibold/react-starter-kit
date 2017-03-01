import { setTitle } from 'actions/app-actions';

export function changeTitle(newTitle) {
  return (dispatch /* , getState */) => {
    dispatch(setTitle(newTitle));
  };
}
