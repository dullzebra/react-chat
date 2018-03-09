import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import UserActions from './UserActions';
import * as style from '../utils/constants';
import ChatTitle from './ChatTitle';

const styles = theme => ({
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${style.drawerWidth}px)`,
  }
});

class ChatHeader extends React.Component {
  render() {
    const { classes, activeChat, closeChat, logout, user, editUser } = this.props;

    return (<AppBar className={classes.appBar}>
      <Toolbar>
        <ChatTitle user={user} activeChat={activeChat} closeChat={closeChat} />
        <UserActions user={user} logout={logout} editUser={editUser} />
      </Toolbar>
    </AppBar>
    )
  }
}

export default withStyles(styles)(ChatHeader);
