import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import ChatList from './ChatList';
import SidebarFilter from './SidebarFilter';
import SidebarActions from './SidebarActions';
import * as style from '../utils/constants';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: style.drawerWidth,
    overflow: 'hidden'
  }
});


const Sidebar = ({ classes, chats }) => (
  <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
    <SidebarFilter />
    <Divider />
    <ChatList chats={chats} />
    <SidebarActions />
  </Drawer>
);

export default withStyles(styles)(Sidebar);
