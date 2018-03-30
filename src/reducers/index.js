import { combineReducers } from 'redux';
import auth from './auth';
import chat from './chat';
import services from './services';

export default combineReducers({
  auth,
  chat,
  services,
});

export const isMember = (user, activeChat) => {
  try {
    return activeChat.members.some(member => member._id === user._id);
  } catch (e) {
    return false;
  }
};

export const isCreator = (user, activeChat) => {
  try {
    return user._id === activeChat.creator._id;
  } catch (e) {
    return false;
  }
};

export const isChatMember = (user, activeChat) =>
  isCreator(user, activeChat) || isMember(user, activeChat);
