import Relay from 'react-relay';
import networkLayer from 'libs/networkLayer';

export const LOGIN = 'LOGIN';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_TOKEN = 'SET_TOKEN';

function beginLogin() {
  return {
    type: LOGIN_START,
  };
}

function loginSuccess(json) {
  return {
    type: LOGIN_SUCCESS,
    token: json,
  };
}

export function readToken() {
  const token = localStorage.getItem('ello.jwt');

  if (token) {
    return {type: SET_TOKEN, token};
  }
  return {type: NO_TOKEN}
}

export function init() {
  return async dispatch => dispatch(readToken());
}

export const logIn = (username, password) =>
  async dispatch => {
    dispatch(beginLogin());

    const response = await fetch('/knock/auth_token', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({auth: {username, password} }),
    });

    const json = await response.json();
    console.log(json);
    const {jwt: token} = json;

    localStorage.setItem('ello.jwt', token);
    Relay.injectNetworkLayer(networkLayer({
      headers: `Bearer ${token}`,
    }));

    dispatch(loginSuccess(token));
  };
