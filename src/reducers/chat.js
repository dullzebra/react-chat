import { combineReducers } from 'redux';
import * as types from '../constants'

const initialState = {
  currentId: null,
  allIds: [],
  myIds: [],
  byIds: {},
  isAllChatsActive: true,
  messages: []
}

const currentId = (state = initialState.currentId, action) => {
  switch (action.type) {
    case types.CREATE_CHAT_SUCCESS:
    case types.SET_ACTIVE_CHAT:
      return getChatId(action.payload.chat);
    case types.DELETE_CHAT_SUCCESS:
    case types.UNSET_ACTIVE_CHAT:
      return null;
    default:
      return state;
  }
}

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.CREATE_CHAT_SUCCESS:
      return [...state, getChatId(action.payload.chat)];
    case types.DELETE_CHAT_SUCCESS:
      return state.filter(id => id !== getChatId(action.payload.chat))
    default:
      return state;
  }
}

const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case types.MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.JOIN_CHAT_SUCCESS:
    case types.CREATE_CHAT_SUCCESS:
      return [...state, getChatId(action.payload.chat)];
    case types.DELETE_CHAT_SUCCESS:
    case types.LEAVE_CHAT_SUCCESS:
      return state.filter(id => id !== getChatId(action.payload.chat));
    default:
      return state;
  }
}

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case types.ALL_CHATS_SUCCESS:
    case types.MY_CHATS_SUCCESS:
      return {
        ...state,
        ...action.payload.chats.reduce((result, item) => ({
          ...result,
          [getChatId(item)]: item
        }), {})
      }
    case types.CREATE_CHAT_SUCCESS:
      return {
        ...state,
        [getChatId(action.payload.chat)]: action.payload.chat
      }
    case types.DELETE_CHAT_SUCCESS:
      const copy = { ...state };
      delete copy[getChatId(action.payload.chat)];
      return copy;
    case types.LEAVE_CHAT_SUCCESS:
    case types.JOIN_CHAT_SUCCESS:
      const chat = { ...state[getChatId(action.payload.chat)] };
      chat.members = action.payload.chat.members;
      return {
        ...state,
        [getChatId(action.payload.chat)]: { ...chat }
      }
    default:
      return state;
  }
}

const isAllChatsActive = (state = initialState.isAllChatsActive, action) => {
  switch (action.type) {
    case types.SHOW_ALL_CHATS:
      return action.payload;
    default:
      return state;
  }
}

const messages = (state = initialState.messages, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_CHAT:
      return action.payload.chat.messages;
    case types.DELETE_CHAT_SUCCESS:
      return [];
    case types.SEND_MESSAGE_SUCCESS:
      return [...state, action.payload.message]
    default:
      return state;
  }
}

export default combineReducers({
  currentId,
  allIds,
  myIds,
  byIds,
  isAllChatsActive,
  messages
})

export const getChatId = chat => chat._id;
export const getById = (id, state) => state.byIds[id];
export const getChatsById = (ids, state) => ids.map(id => getById(id, state));
