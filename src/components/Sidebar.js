import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import * as style from '../utils/constants';
import ChatAvatar from './ChatAvatar';
import SidebarFilter from './SidebarFilter';
import SidebarActions from './SidebarActions';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',   
    width: style.drawerWidth,
    overflow: 'hidden'
  }, 
  chatList: {      
    overflowX: 'hidden'
  }  
});


const Sidebar = ({ classes, chats }) => (
  <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
  <SidebarFilter />
  <Divider />
  <List className={classes.chatList}>
    {chats && chats.map((item, index) => (
      <ListItem button key={index}>
        <ChatAvatar name={item.title} />
        <ListItemText primary={item.title} secondary="2 мин назад" />
      </ListItem>
    ))}
  </List>
  <SidebarActions /> 
</Drawer>
);

export default withStyles(styles)(Sidebar);
