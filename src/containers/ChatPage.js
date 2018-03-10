import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout, editUser } from '../actions/auth'
import {
  getAllChats, getMyChats, setActiveChat,
  createChat, joinChat, leaveChat, deleteChat, showAllChats
} from '../actions/chat';
import { socketConnect, sendMessage, mountChat, unmountChat } from '../actions/socket'
import * as fromChats from '../reducers/chat'
import * as fromState from '../reducers'
import ChatPage from '../components/ChatPage'

const mapStateToProps = state => {
  const activeChat = fromChats.getById(state.chat.currentId, state.chat);
  return {
    user: {
      ...state.auth.user,
      isMember: fromState.isMember(state.auth.user, activeChat),
      isCreator: fromState.isCreator(state.auth.user, activeChat),
      isChatMember: fromState.isChatMember(state.auth.user, activeChat),
    },
    chats: {
      active: activeChat,
      isAllChatsActive: state.chat.isAllChatsActive,
      allChats: fromChats.getChatsById(state.chat.allIds, state.chat),
      myChats: fromChats.getChatsById(state.chat.myIds, state.chat)
    },
    messages: state.chat.messages
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  logout, editUser,
  getAllChats, getMyChats, showAllChats,
  setActiveChat, createChat, joinChat, leaveChat, deleteChat,
  socketConnect, sendMessage, mountChat, unmountChat
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
