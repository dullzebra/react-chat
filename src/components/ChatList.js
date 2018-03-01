import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ChatAvatar from './ChatAvatar';

const styles = theme => ({
  chatList: {
    overflowX: 'hidden'
  }
});

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatList}>
    {chats && chats.map((item, index) => (
      <ListItem button key={index}>
        <ChatAvatar name={item.title} />
        <ListItemText primary={item.title} secondary="2 мин назад" />
      </ListItem>
    ))}
  </List>
)

export default withStyles(styles)(ChatList)
