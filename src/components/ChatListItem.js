import React from 'react';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import ChatAvatar from './ChatAvatar';

const styles = theme => ({
  currentChat: {
    background: 'lightGrey'
  }
});

const ChatListItem = ({ classes, data, active }) => (
  <ListItem button
    component={Link} to={`/chat/${data._id}`}
    className={active && active._id === data._id ? classes.currentChat : ''}    
  >
    <ChatAvatar name={data.title} />
    <ListItemText primary={data.title} secondary={moment(data.updatedAt).fromNow()} />
  </ListItem>
);

export default withStyles(styles)(ChatListItem);
