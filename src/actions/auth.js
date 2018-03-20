import http from '../utils/api';
import * as types from '../constants';

export function signup(username, password) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.signup) {
      return Promise.resolve();
    }

    dispatch({
      type: types.SIGNUP_REQUEST,
    });

    return http('signup', undefined, { username, password }, { method: 'POST' })
      .then((data) => {
        if (!data.token) {
          throw new Error('Token has not been provided');
        }

        localStorage.setItem('token', data.token);

        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: data,
        });
      })
      .catch(reason =>
        dispatch({
          type: types.SIGNUP_FAILURE,
          payload: reason,
        }));
  };
}

export function login(username, password) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.login) {
      return Promise.resolve();
    }

    dispatch({
      type: types.LOGIN_REQUEST,
    });

    return http('login', undefined, { username, password }, { method: 'POST' })
      .then((data) => {
        if (!data.token) {
          throw new Error('Token has not been provided');
        }

        localStorage.setItem('token', data.token);

        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch(reason =>
        dispatch({
          type: types.LOGIN_FAILURE,
          payload: reason,
        }));
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_REQUEST,
    });

    return http('logout')
      .then(() => {
        dispatch({
          type: types.LOGOUT_SUCCESS,
        });
        localStorage.removeItem('token');
        dispatch({
          type: types.UNSET_ACTIVE_CHAT,
        });
        dispatch({
          type: types.SHOW_ALL_CHATS,
          payload: true,
        });
      })
      .catch(reason =>
        dispatch({
          type: types.LOGOUT_FAILURE,
          payload: reason,
        }));
  };
}

export function receiveAuth() {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.receiveAuth) {
      return Promise.resolve();
    }

    const { token } = getState().auth;
    if (!token) {
      return dispatch({
        type: types.RECEIVE_AUTH_FAILURE,
      });
    }

    return http('users/me', token)
      .then(data =>
        dispatch({
          type: types.RECEIVE_AUTH_SUCCESS,
          payload: data,
        }))
      .catch(reason =>
        dispatch({
          type: types.RECEIVE_AUTH_FAILURE,
          payload: reason,
        }));
  };
}
