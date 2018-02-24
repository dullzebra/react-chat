import React from 'react';
import { withStyles } from 'material-ui/styles';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import ChatHeader from './components/ChatHeader';

import { chats, messages } from './mock-data.json'

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  }
  //drawerHeader: theme.mixins.toolbar,  
});

const App = ({ classes }) => (
  <div className={classes.appFrame}>
    <ChatHeader />
    <Sidebar chats={chats} />
    <Chat messages={messages} />
  </div>
);    

export default withStyles(styles)(App);
