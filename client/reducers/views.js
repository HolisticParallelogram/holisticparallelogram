import * as types from '../constants/ActionTypes.js';

const initialState = ['View 1', 'View 2', 'View 3'];

export default function views (state = initialState, action) {
  switch (action.type) {

  case types.UPDATE_VIEWS:
    return state;

  default:
    return state;
  }
}
