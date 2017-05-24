import {
  setTitle,
  setPage,
} from 'actions/app-actions';

export function changeTitle(newTitle) {
  return (dispatch /* , getState */) => {
    dispatch(setTitle(newTitle));
  };
}

export function changePage(newPage) {
  return (dispatch /* , getState */) => {
    dispatch(setPage(newPage));
  };
}
