import React from 'react';
import { withStyles } from 'material-ui/styles';
import Sidebar from './Sidebar';
import Chat from './Chat';
import ChatHeader from './ChatHeader';

import { chats, messages } from '../mock-data.json'

const styles = theme => ({
  appFrame: {
    display: 'flex',
    height: '100%',
  }
});

const ChatPage = ({ classes, logout }) => {
  return (
    <div className={classes.appFrame}>
      <ChatHeader logout={logout} />
      <Sidebar chats={chats} />
      <Chat messages={messages} />
    </div>
  )
}

export default withStyles(styles)(ChatPage);
