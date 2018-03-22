import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import ChatList from './ChatList';
import SidebarActions from './SidebarActions';
import * as style from '../constants/styles';

const styles = () => ({
  drawerPaper: {
    position: 'relative',
    width: style.drawerWidth,
    overflow: 'hidden',
  },
});

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    createChat: PropTypes.func.isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      allChats: PropTypes.arrayOf(PropTypes.object),
      myChats: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    isConnected: PropTypes.bool.isRequired,
  };

  state = {
    isAllChatsActive: true,
  };

  showAllChats = (bool) => {
    this.setState({ isAllChatsActive: bool });
  };

  render() {
    const {
      classes, chats, createChat, isConnected,
    } = this.props;

    return (
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <ChatList
          disabled={!isConnected}
          chats={this.state.isAllChatsActive ? chats.allChats : chats.myChats}
        />
        <SidebarActions
          disabled={!isConnected}
          createChat={createChat}
          showAllChats={this.showAllChats}
        />
      </Drawer>
    );
  }
}
export default withStyles(styles)(Sidebar);
