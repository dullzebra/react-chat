import http from '../utils/api';
import * as types from '../constants';

/* eslint-disable import/prefer-default-export */
export function editUser(user) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.editUser) {
      return Promise.resolve();
    }

    const { token } = getState().auth;
    if (!token) {
      return dispatch({
        type: types.EDIT_USER_FAILURE,
      });
    }

    return http('users/me', token, { data: user }, { method: 'POST' })
      .then(data =>
        dispatch({
          type: types.EDIT_USER_SUCCESS,
          payload: data,
        }))
      .catch(reason =>
        dispatch({
          type: types.EDIT_USER_FAILURE,
          payload: reason,
        }));
  };
}
