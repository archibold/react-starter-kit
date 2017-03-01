/**
 * app Actions
 */

export const SET_TITLE = 'setTitle@app';

export function setTitle(value) {
  return {
    type: SET_TITLE,
    payload: value,
  };
}
