import http from '../utils/api';
import { redirect } from './services';
import * as types from '../constants';


export function getAllChats() {
  return (dispatch, getState) => {
    dispatch({
      type: types.ALL_CHATS_REQUEST
    })

    return http('chats', getState().auth.token)
      .then(data => {
        dispatch({
          type: types.ALL_CHATS_SUCCESS,
          payload: data
        })
      })
      .catch(reason =>
        dispatch({
          type: types.ALL_CHATS_FAILURE,
          payload: reason
        }))
  }
}

export function getMyChats() {
  return (dispatch, getState) => {
    dispatch({
      type: types.MY_CHATS_REQUEST
    })

    return http('chats/my', getState().auth.token)
      .then(data => {
        dispatch({
          type: types.MY_CHATS_SUCCESS,
          payload: data
        })
      })
      .catch(reason =>
        dispatch({
          type: types.MY_CHATS_FAILURE,
          payload: reason
        }))
  }
}

export function getChat(chatId) {
  return (dispatch, getState) => {
    dispatch({
      type: types.CHAT_REQUEST
    })

    return http(`chats/${chatId}`, getState().auth.token)
      .then((data) => {
        dispatch({
          type: types.CHAT_SUCCESS,
          payload: data
        });
        return data;
      })
      .catch(reason => {
        dispatch({
          type: types.CHAT_FAILURE,
          payload: reason
        })
        dispatch(redirect('/chat'));
      })
  }
}

export function setActiveChat(chatId) {
  return (dispatch) => {
    return dispatch(getChat(chatId))
      .then(data => {
        if (!data.chat) {
          dispatch(redirect('/chat'));
          dispatch({
            type: types.UNSET_ACTIVE_CHAT
          })
        }
        dispatch({
          type: types.SET_ACTIVE_CHAT,
          payload: data
        })
      })
  }
}

export function createChat(title) {
  return (dispatch, getState) => {
    dispatch({
      type: types.CREATE_CHAT_REQUEST,
      payload: title
    })

    return http('chats/', getState().auth.token, { data: { title } }, { method: 'post' })
      .then(data => {
        dispatch({
          type: types.CREATE_CHAT_SUCCESS,
          payload: data
        });
        dispatch(redirect(`/chat/${data.chat._id}`));     
      })
      .catch(reason =>
        dispatch({
          type: types.CREATE_CHAT_FAILURE,
          payload: reason
        }))
  }
}

export function joinChat(chatId) {
  return (dispatch, getState) => {
    dispatch({
      type: types.JOIN_CHAT_REQUEST,
      payload: chatId
    })

    return http(`chats/${chatId}/join`, getState().auth.token)
      .then((data) => {
        dispatch({
          type: types.JOIN_CHAT_SUCCESS,
          payload: data
        });  
        dispatch(redirect(`/chat/${chatId}`));            
      })
      .catch(reason => {
        dispatch({
          type: types.JOIN_CHAT_FAILURE,
          payload: reason
        })
      })
  }
}

export function leaveChat() {
  return (dispatch, getState) => {
    const chatId = getState().chat.currentId;
    dispatch({
      type: types.LEAVE_CHAT_REQUEST,
      payload: chatId
    })

    return http(`chats/${chatId}/leave`, getState().auth.token)
      .then((data) => {
        dispatch({
          type: types.LEAVE_CHAT_SUCCESS,
          payload: data
        });        
      })
      .catch(reason => {
        dispatch({
          type: types.LEAVE_CHAT_FAILURE,
          payload: reason
        })
      })
  }
}

export function deleteChat() {
  return (dispatch, getState) => {
    const chatId = getState().chat.currentId;    
    dispatch({
      type: types.DELETE_CHAT_REQUEST,
      payload: chatId
    })   

    return http(`chats/${chatId}`, getState().auth.token, {}, { method: 'DELETE' })
      .then((data) => {
        dispatch({
          type: types.DELETE_CHAT_SUCCESS,
          payload: data
        });
       dispatch(redirect('/chat'));      
      })
      .catch(reason => {
        dispatch({
          type: types.DELETE_CHAT_FAILURE,
          payload: reason
        })
      })
  }
}

export function showAllChats(bool) {
  return {
    type: types.SHOW_ALL_CHATS,
    payload: bool
  }
}

export function sendMessage(chatId, content) {
  return (dispatch, getState) => {
    dispatch({
      type: types.SEND_MESSAGE_REQUEST
    })

    return http(`chats/${chatId}`, getState().auth.token, { data: { content } }, { method: 'POST' })
      .then(data => {
        dispatch({
          type: types.SEND_MESSAGE_SUCCESS,
          payload: data
        })
        dispatch(getChat(chatId))
      })
      .catch(reason =>
        dispatch({
          type: types.SEND_MESSAGE_FAILURE,
          payload: reason
        }))
  }
}
