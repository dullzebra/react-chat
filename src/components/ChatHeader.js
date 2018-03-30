import React from 'react';
import PropTypes from 'prop-types';
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

ChatHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  activeChat: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  closeChat: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  editUser: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

ChatHeader.defaultProps = {
  activeChat: null,
};

export default withStyles(styles)(ChatHeader);
