import {LOGIN_SUCCESS, SET_TOKEN} from '../actions/auth.js';

export function authReducer(state = null, action) {
  console.log(action, state);
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
}
