import { combineReducers } from 'redux';
import auth from './auth';
import chat from './chat';
import services from './services';

export default combineReducers({
  auth,
  chat,
  services
});

export const isMember = (user, chat) => {
  try {
    return chat.members.some(member => (member._id === user._id))
  } catch (e) {
    return false
  }
};

export const isCreator = (user, chat) => {
  try {
    return user._id === chat.creator._id;
  } catch (e) {
    return false
  }
};

export const isChatMember = (user, chat) => isCreator(user, chat) || isMember(user, chat);
