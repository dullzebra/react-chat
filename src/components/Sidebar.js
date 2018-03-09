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

const Sidebar = ({ classes, chats, createChat, showAllChats, setActiveChat }) => (
  <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
    <ChatList chats={chats} setActiveChat={setActiveChat} />
    <SidebarActions createChat={createChat} showAllChats={showAllChats} />
  </Drawer>
);

export default withStyles(styles)(Sidebar);
