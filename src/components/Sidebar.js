import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import ChatList from './ChatList';
import SidebarActions from './SidebarActions';
import * as style from '../utils/constants';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: style.drawerWidth,
    overflow: 'hidden'
  }
});

class Sidebar extends React.Component {
  state = {
    isAllChatsActive: true
  }
  
  showAllChats = (bool) => {
    this.setState({ isAllChatsActive: bool })
  }

  render() {
    const { classes, chats, createChat, setActiveChat } = this.props;

    return (
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <ChatList chats={chats} setActiveChat={setActiveChat} isAllChatsActive={this.state.isAllChatsActive} />
        <SidebarActions createChat={createChat} showAllChats={this.showAllChats} />
      </Drawer>)
  }
}
export default withStyles(styles)(Sidebar);
