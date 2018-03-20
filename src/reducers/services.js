import { combineReducers } from 'redux';
import * as types from '../constants';

const initialState = {
  isFetching: {
    signup: false,
    login: false,
    logout: false,
    receiveAuth: false,
    getAllChats: false,
    getMyChats: false,
    createChat: false,
    joinChat: false,
    leaveChat: false,
    deleteChat: false,
    editUser: false,
    getChat: false,
    sockets: false,
  },
  errors: {
    auth: null,
    chat: null,
  },
  isConnected: false,
};


export function isFetching(state = initialState.isFetching, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return { ...state, signup: true };
    case types.LOGIN_REQUEST:
      return { ...state, login: true };
    case types.LOGOUT_REQUEST:
      return { ...state, logout: true };
    case types.RECEIVE_AUTH_REQUEST:
      return { ...state, receiveAuth: true };
    case types.ALL_CHATS_REQUEST:
      return { ...state, getAllChats: true };
    case types.MY_CHATS_REQUEST:
      return { ...state, getMyChats: true };
    case types.CHAT_REQUEST:
      return { ...state, getChat: true };
    case types.CREATE_CHAT_REQUEST:
      return { ...state, createChat: true };
    case types.JOIN_CHAT_REQUEST:
      return { ...state, joinChat: true };
    case types.LEAVE_CHAT_REQUEST:
      return { ...state, leaveChat: true };
    case types.DELETE_CHAT_REQUEST:
      return { ...state, deleteUser: true };
    case types.EDIT_USER_REQUEST:
      return { ...state, editUser: true };
    case types.SOCKET_CONNECTION_REQUEST:
      return { ...state, sockets: true };

    case types.SIGNUP_SUCCESS:
    case types.SIGNUP_FAILURE:
      return { ...state, signup: false };
    case types.LOGIN_SUCCESS:
    case types.LOGIN_FAILURE:
      return { ...state, login: false };
    case types.LOGOUT_SUCCESS:
    case types.LOGOUT_FAILURE:
      return { ...state, logout: false };
    case types.RECEIVE_AUTH_SUCCESS:
    case types.RECEIVE_AUTH_FAILURE:
      return { ...state, receiveAuth: false };
    case types.ALL_CHATS_SUCCESS:
    case types.ALL_CHATS_FAILURE:
      return { ...state, getAllChats: false };
    case types.MY_CHATS_SUCCESS:
    case types.MY_CHATS_FAILURE:
      return { ...state, getMyChats: false };
    case types.CHAT_SUCCESS:
    case types.CHAT_FAILURE:
      return { ...state, getChat: false };
    case types.CREATE_CHAT_SUCCESS:
    case types.CREATE_CHAT_FAILURE:
      return { ...state, createChat: false };
    case types.JOIN_CHAT_SUCCESS:
    case types.JOIN_CHAT_FAILURE:
      return { ...state, joinChat: false };
    case types.LEAVE_CHAT_SUCCESS:
    case types.LEAVE_CHAT_FAILURE:
      return { ...state, leaveChat: false };
    case types.DELETE_CHAT_SUCCESS:
    case types.DELETE_CHAT_FAILURE:
      return { ...state, deleteUser: false };
    case types.EDIT_USER_SUCCESS:
    case types.EDIT_USER_FAILURE:
      return { ...state, editUser: false };
    case types.SOCKET_CONNECTION_SUCCESS:
    case types.SOCKET_CONNECTION_FAILURE:
      return { ...state, sockets: false };
    default:
      return state;
  }
}

export function error(state = initialState.errors, action) {
  switch (action.type) {
    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
      return { ...state, auth: action.payload };
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGOUT_SUCCESS:
      return { ...state, auth: null };

    case types.ALL_CHATS_FAILURE:
    case types.MY_CHATS_FAILURE:
    case types.CHAT_FAILURE:
    case types.CREATE_CHAT_FAILURE:
    case types.JOIN_CHAT_FAILURE:
    case types.LEAVE_CHAT_FAILURE:
    case types.DELETE_CHAT_FAILURE:
    case types.EDIT_USER_FAILURE:
    case types.SOCKET_CONNECTION_FAILURE:
      return { ...state, chat: action.payload };

    case types.ALL_CHATS_SUCCESS:
    case types.MY_CHATS_SUCCESS:
    case types.CHAT_SUCCESS:
    case types.CREATE_CHAT_SUCCESS:
    case types.JOIN_CHAT_SUCCESS:
    case types.LEAVE_CHAT_SUCCESS:
    case types.DELETE_CHAT_SUCCESS:
    case types.EDIT_USER_SUCCESS:
    case types.SOCKET_CONNECTION_SUCCESS:
      return { ...state, chat: null };
    default:
      return state;
  }
}

export function isConnected(state = initialState.isConnected, action) {
  switch (action.type) {
    case types.SOCKET_CONNECTION_FAILURE:
    case types.SOCKET_CONNECTION_MISSING:
      return false;
    case types.SOCKET_CONNECTION_SUCCESS:
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  isFetching,
  error,
  isConnected,
});
