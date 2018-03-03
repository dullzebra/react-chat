import fetch from 'isomorphic-fetch';
import * as types from '../constants'


export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_REQUEST
    })

    return fetch('http://localhost:8000/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json
        } else {
          throw new Error(json.message)
        }
      })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided')
        }

        localStorage.setItem('token', json.token)

        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: json
        })
      })
      .catch(reason =>
        dispatch({
          type: types.SIGNUP_FAILURE,
          payload: reason
        }))
  }
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_REQUEST
    })

    return fetch('http://localhost:8000/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json
        } else {
          throw new Error(json.message)
        }
      })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided')
        }

        localStorage.setItem('token', json.token)

        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: json
        })
      })
      .catch(reason =>
        dispatch({
          type: types.LOGIN_FAILURE,
          payload: reason
        }))
  }
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_REQUEST
    })

    return fetch('http://localhost:8000/v1/logout', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch({
            type: types.LOGOUT_SUCCESS
          })
          delete localStorage.token
        } else {
          throw new Error(json.message)
        }
      })
      .catch(reason =>
        dispatch({
          type: types.LOGOUT_FAILURE,
          payload: reason
        }))
  }
}

export function receiveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth

    if (!token) {
      dispatch({
        type: types.RECEIVE_AUTH_FAILURE
      })
    }

    return fetch('http://localhost:8000/v1/users/me', {     
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }      
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json
        } else {
          throw new Error(json.message)
        }
      })
      .then(json => 
        dispatch({
          type: types.RECEIVE_AUTH_SUCCESS,
          payload: json
        })
      )
      .catch(reason =>
        dispatch({
          type: types.RECEIVE_AUTH_FAILURE,
          payload: reason
        }))
  }
}
