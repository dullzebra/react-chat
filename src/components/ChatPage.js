import React from 'react';
import PropTypes from 'prop-types';
import 'moment/locale/ru';
import { withStyles } from 'material-ui/styles';
import Sidebar from './Sidebar';
import Chat from './Chat';
import ChatHeader from './ChatHeader';
import ErrorMessage from './ErrorMessage';

// import {chats, messages } from '../mock-data.json'

const styles = () => ({
  appFrame: {
    display: 'flex',
    height: '100%',
  },
});

class ChatPage extends React.Component {
  static propTypes = {
    getAllChats: PropTypes.func.isRequired,
    getMyChats: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    socketConnect: PropTypes.func.isRequired,
    mountChat: PropTypes.func.isRequired,
    unmountChat: PropTypes.func.isRequired,
    createChat: PropTypes.func.isRequired,
    joinChat: PropTypes.func.isRequired,
    leaveChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      allChats: PropTypes.arrayOf(PropTypes.object),
      myChats: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool.isRequired,
    }).isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      chatId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      sender: PropTypes.object.isRequired,
      updatedAt: PropTypes.string.isRequired,
    })).isRequired,
    error: PropTypes.instanceOf(Error),
    isConnected: PropTypes.bool.isRequired,
    match: PropTypes.PropTypes.shape({
      params: PropTypes.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    error: null,
  };

  componentDidMount() {
    const {
      getAllChats, getMyChats, setActiveChat, socketConnect, mountChat,
    } = this.props;

    Promise.all([getAllChats(), getMyChats()])
      .then(() => {
        socketConnect();
      })
      .then(() => {
        const urlParam = this.props.match.params.id;
        if (urlParam) {
          setActiveChat(urlParam);
          mountChat(urlParam);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const { mountChat, unmountChat, setActiveChat } = this.props;
    const urlParam = this.props.match.params.id;
    const nextUrlParam = nextProps.match.params.id;

    if (nextUrlParam && urlParam !== nextUrlParam) {
      setActiveChat(nextUrlParam);
      unmountChat(urlParam);
      mountChat(nextUrlParam);
    }
  }

  render() {
    const {
      classes,
      chats,
      chats: { active: activeChat },
      createChat,
      joinChat,
      leaveChat,
      deleteChat,
      user,
      editUser,
      logout,
      messages,
      sendMessage,
      error,
      isConnected,
    } = this.props;

    return (
      <React.Fragment>
        <div className={classes.appFrame}>
          <ChatHeader
            user={user}
            activeChat={activeChat}
            logout={logout}
            editUser={editUser}
            closeChat={user.isCreator ? deleteChat : leaveChat}
            isConnected={isConnected}
          />
          <Sidebar chats={chats} createChat={createChat} isConnected={isConnected} />
          <Chat
            user={user}
            activeChat={activeChat}
            joinChat={joinChat}
            messages={messages}
            sendMessage={sendMessage}
            isConnected={isConnected}
          />
        </div>
        <ErrorMessage error={error} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ChatPage);
