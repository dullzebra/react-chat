import React from 'react';
import { withStyles } from 'material-ui/styles';
import Sidebar from './Sidebar';
import Chat from './Chat';
import ChatHeader from './ChatHeader';

//import {chats, messages } from '../mock-data.json'

const styles = theme => ({
  appFrame: {
    display: 'flex',
    height: '100%',
  }
});

class ChatPage extends React.Component {
  componentDidMount() {
    const { getAllChats, getMyChats, setActiveChat } = this.props;
    const urlParam = this.props.match.params.id

    Promise.all([getAllChats(), getMyChats()]).then(() => {       
      urlParam && setActiveChat(urlParam)
    })
  }

  componentWillReceiveProps(nextProps) {    
    const urlParam = this.props.match.params.id
    const nextUrlParam = nextProps.match.params.id

    if (nextUrlParam && urlParam !== nextUrlParam) {
      this.props.setActiveChat(nextUrlParam);
    }
  }

  render() {
    const { classes,
      chats, chats: { active: activeChat }, showAllChats,
      createChat, joinChat, leaveChat, deleteChat, setActiveChat,
      user, editUser, logout,
      messages, sendMessage } = this.props

    return (
      <div className={classes.appFrame}>
        <ChatHeader
          user={user}
          activeChat={activeChat}
          logout={logout}
          editUser={editUser}
          closeChat={user.isCreator ? deleteChat : leaveChat} />
        <Sidebar
          chats={chats}
          createChat={createChat}
          setActiveChat={setActiveChat}
          showAllChats={showAllChats}
        />
        <Chat
          user={user}
          activeChat={activeChat}
          joinChat={joinChat}
          messages={messages}
          sendMessage={sendMessage} />
      </div>
    )
  }
}

export default withStyles(styles)(ChatPage);
