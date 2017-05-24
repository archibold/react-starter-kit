/**
 * App's Redux Reducers
 * --------------------
 *
 * here are listed all the reducers that will compose the state of the app.
 * if you want/need to disable a reducer just comment it out in the exported object.
 */

import { appReducer } from 'reducers/app-reducer';

export const reducers = {
  app: appReducer,
};
