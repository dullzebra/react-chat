import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import UserActions from './UserActions';
import * as style from '../constants/styles';
import ChatTitle from './ChatTitle';

const styles = () => ({
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${style.drawerWidth}px)`,
  },
});

const ChatHeader = ({
  classes, activeChat, closeChat, logout, user, editUser, isConnected,
}) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <ChatTitle
        user={user}
        activeChat={activeChat}
        closeChat={closeChat}
        isConnected={isConnected}
      />
      <UserActions user={user} editUser={editUser} logout={logout} isConnected={isConnected} />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
