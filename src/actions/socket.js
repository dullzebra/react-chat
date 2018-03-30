import SocketIOClient from 'socket.io-client';
import * as types from '../constants';
import { redirect } from './services';
import config from '../config';

let socket = null;

export function socketConnectionMissing() {
  return {
    type: types.SOCKET_CONNECTION_MISSING,
    payload: new Error('Socket connection missing'),
  };
}

export function socketConnect() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    const { isFetching } = getState().services;
    if (isFetching.sockets) {
      return Promise.resolve();
    }

    dispatch({
      type: types.SOCKET_CONNECTION_REQUEST,
    });

    const { isConnected } = getState().services;

    if (!isConnected) {
      socket = SocketIOClient(config.SOCKET_URL, { query: { token } });
    }

    socket.on('connect', () => {
      dispatch({
        type: types.SOCKET_CONNECTION_SUCCESS,
      });
    });

    socket.on('error', (error) => {
      dispatch({
        type: types.SOCKET_CONNECTION_FAILURE,
        payload: new Error(error),
      });
    });

    socket.on('connect_error', () => {
      dispatch({
        type: types.SOCKET_CONNECTION_FAILURE,
        payload: new Error('Connection error'),
      });
    });

    socket.on('new-message', (message) => {
      dispatch({
        type: types.RECEIVE_MESSAGE,
        payload: message,
      });
    });

    socket.on('new-chat', ({ chat }) => {
      dispatch({
        type: types.RECEIVE_NEW_CHAT,
        payload: { chat },
      });
    });

    socket.on('deleted-chat', ({ chat }) => {
      const { currentId } = getState().chat;

      dispatch({
        type: types.RECEIVE_DELETED_CHAT,
        payload: { chat },
      });

      if (currentId === chat._id) {
        dispatch(redirect('/chat'));
      }
    });
  };
}

export function sendMessage(content) {
  return (dispatch, getState) => {
    if (!socket) {
      return dispatch(socketConnectionMissing());
    }
    const chatId = getState().chat.currentId;
    socket.emit('send-message', { chatId, content }, () =>
      dispatch({
        type: types.SEND_MESSAGE,
        payload: { chatId, content },
      }));
  };
}
export function mountChat(chatId) {
  return (dispatch) => {
    if (!socket) {
      return dispatch(socketConnectionMissing());
    }
    socket.emit('mount-chat', chatId);
    dispatch({
      type: types.MOUNT_CHAT,
      payload: { chatId },
    });
  };
}
export function unmountChat(chatId) {
  return (dispatch) => {
    if (!socket) {
      return dispatch(socketConnectionMissing());
    }
    socket.emit('unmount-chat', chatId);
    dispatch({
      type: types.UNMOUNT_CHAT,
      payload: { chatId },
    });
  };
}
