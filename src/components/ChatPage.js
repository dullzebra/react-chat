import React from 'react';
import 'moment/locale/ru';
import { withStyles } from 'material-ui/styles';
import Sidebar from './Sidebar';
import Chat from './Chat';
import ChatHeader from './ChatHeader';
import Error from './ErrorMessage';

//import {chats, messages } from '../mock-data.json'

const styles = theme => ({
  appFrame: {
    display: 'flex',
    height: '100%',
  }
});

class ChatPage extends React.Component {
  componentDidMount() {
    const { getAllChats, getMyChats, setActiveChat, socketConnect, mountChat } = this.props;

    Promise.all([getAllChats(), getMyChats()])
      .then(() => {
        socketConnect()
      })
      .then(() => {
        const urlParam = this.props.match.params.id
        if (urlParam) {
          setActiveChat(urlParam)
          mountChat(urlParam)
        }
      })
  }

  componentWillReceiveProps(nextProps) {
    const { mountChat, unmountChat, setActiveChat } = this.props
    const urlParam = this.props.match.params.id
    const nextUrlParam = nextProps.match.params.id

    if (nextUrlParam && urlParam !== nextUrlParam) {
      setActiveChat(nextUrlParam)
      unmountChat(urlParam)
      mountChat(nextUrlParam)
    }
  }

  render() {
    const { classes,
      chats, chats: { active: activeChat },
      createChat, joinChat, leaveChat, deleteChat,
      user, editUser, logout,
      messages, sendMessage,
      error, isConnected } = this.props

    return (
      <React.Fragment>
        <div className={classes.appFrame}>
          <ChatHeader
            user={user}
            activeChat={activeChat}
            logout={logout}
            editUser={editUser}
            closeChat={user.isCreator ? deleteChat : leaveChat}
            isConnected={isConnected} />
          <Sidebar
            chats={chats}
            createChat={createChat} 
            isConnected={isConnected} />
          <Chat
            user={user}
            activeChat={activeChat}
            joinChat={joinChat}
            messages={messages}
            sendMessage={sendMessage} 
            isConnected={isConnected} />
        </div>
        <Error error={error} />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(ChatPage);
