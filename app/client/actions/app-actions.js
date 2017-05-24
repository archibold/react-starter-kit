/**
 * app Actions
 */

export const SET_TITLE = 'setTitle@app';
export const SET_PAGE = 'setPage@app';

export function setTitle(value) {
  return {
    type: SET_TITLE,
    payload: value,
  };
}

export function setPage(value) {
  return {
    type: SET_PAGE,
    payload: value,
  };
}
