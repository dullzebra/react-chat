import React from 'react';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
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

ChatListItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default withStyles(styles)(ChatListItem);
