import React from 'react';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import ChatAvatar from './ChatAvatar';

const styles = () => ({
  currentChat: {
    background: 'lightGrey',
  },
});

const ChatListItem = ({
  classes, disabled, id, title, date,
}) => (
  <ListItem
    button
    disabled={disabled}
    component={NavLink}
    to={`/chat/${id}`}
    activeClassName={classes.currentChat}
  >
    <ChatAvatar name={title} />
    <ListItemText primary={title} secondary={moment(date).fromNow()} />
  </ListItem>
);

export default withStyles(styles)(ChatListItem);
