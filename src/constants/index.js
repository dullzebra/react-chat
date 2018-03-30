/* Auth */
export const SIGNUP_REQUEST = Symbol('SIGNUP_REQUEST');
export const SIGNUP_SUCCESS = Symbol('SIGNUP_SUCCESS');
export const SIGNUP_FAILURE = Symbol('SIGNUP_FAILURE');

export const LOGIN_REQUEST = Symbol('LOGIN_REQUEST');
export const LOGIN_SUCCESS = Symbol('LOGIN_SUCCESS');
export const LOGIN_FAILURE = Symbol('LOGIN_FAILURE');

export const LOGOUT_REQUEST = Symbol('LOGOUT_REQUEST');
export const LOGOUT_SUCCESS = Symbol('LOGOUT_SUCCESS');
export const LOGOUT_FAILURE = Symbol('LOGOUT_FAILURE');

export const RECEIVE_AUTH_SUCCESS = Symbol('RECEIVE_AUTH_SUCCESS');
export const RECEIVE_AUTH_FAILURE = Symbol('RECEIVE_AUTH_FAILURE');
export const RECEIVE_AUTH_REQUEST = Symbol('RECEIVE_AUTH_REQUEST');

export const REDIRECT = Symbol('REDIRECT');

/* Chats */
export const ALL_CHATS_REQUEST = Symbol('ALL_CHATS_REQUEST');
export const ALL_CHATS_SUCCESS = Symbol('ALL_CHATS_SUCCESS');
export const ALL_CHATS_FAILURE = Symbol('ALL_CHATS_FAILURE');

export const MY_CHATS_REQUEST = Symbol('MY_CHATS_REQUEST');
export const MY_CHATS_SUCCESS = Symbol('MY_CHATS_SUCCESS');
export const MY_CHATS_FAILURE = Symbol('MY_CHATS_FAILURE');

export const CHAT_REQUEST = Symbol('CHAT_REQUEST');
export const CHAT_SUCCESS = Symbol('CHAT_SUCCESS');
export const CHAT_FAILURE = Symbol('CHAT_FAILURE');

export const CREATE_CHAT_REQUEST = Symbol('CREATE_CHAT_REQUEST');
export const CREATE_CHAT_SUCCESS = Symbol('CREATE_CHAT_SUCCESS');
export const CREATE_CHAT_FAILURE = Symbol('CREATE_CHAT_FAILURE');

export const JOIN_CHAT_REQUEST = Symbol('JOIN_CHAT_REQUEST');
export const JOIN_CHAT_SUCCESS = Symbol('JOIN_CHAT_SUCCESS');
export const JOIN_CHAT_FAILURE = Symbol('JOIN_CHAT_FAILURE');

export const LEAVE_CHAT_REQUEST = Symbol('LEAVE_CHAT_REQUEST');
export const LEAVE_CHAT_SUCCESS = Symbol('LEAVE_CHAT_SUCCESS');
export const LEAVE_CHAT_FAILURE = Symbol('LEAVE_CHAT_FAILURE');

export const DELETE_CHAT_REQUEST = Symbol('DELETE_CHAT_REQUEST');
export const DELETE_CHAT_SUCCESS = Symbol('DELETE_CHAT_SUCCESS');
export const DELETE_CHAT_FAILURE = Symbol('DELETE_CHAT_FAILURE');

export const SET_ACTIVE_CHAT = Symbol('SET_ACTIVE_CHAT');
export const UNSET_ACTIVE_CHAT = Symbol('UNSET_ACTIVE_CHAT');

export const SHOW_ALL_CHATS = Symbol('SHOW_ALL_CHATS');

/* User */
export const EDIT_USER_REQUEST = Symbol('EDIT_USER_REQUEST');
export const EDIT_USER_SUCCESS = Symbol('EDIT_USER_SUCCESS');
export const EDIT_USER_FAILURE = Symbol('EDIT_USER_FAILURE');

/* Socket */
export const SOCKET_CONNECTION_REQUEST = Symbol('SOCKET_CONNECTION_REQUEST');
export const SOCKET_CONNECTION_SUCCESS = Symbol('SOCKET_CONNECTION_SUCCESS');
export const SOCKET_CONNECTION_FAILURE = Symbol('SOCKET_CONNECTION_FAILURE');
export const SOCKET_CONNECTION_MISSING = Symbol('SOCKET_CONNECTION_MISSING');

export const MOUNT_CHAT = Symbol('MOUNT_CHAT');
export const UNMOUNT_CHAT = Symbol('UNMOUNT_CHAT');

export const SEND_MESSAGE = Symbol('SEND_MESSAGE');
export const RECEIVE_MESSAGE = Symbol('RECEIVE_MESSAGE');
export const RECEIVE_NEW_CHAT = Symbol('RECEIVE_NEW_CHAT');
export const RECEIVE_DELETED_CHAT = Symbol('RECEIVE_DELETED_CHAT');
