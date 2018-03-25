import React from 'react';
import { withStyles } from 'material-ui/styles';
import ChatMessage from './ChatMessage';

const styles = theme => ({
  messageList: {
    position: 'relative',
    flexBasis: '100%',
  }
});

const ChatMessageList = ({ classes, messages, userId }) => (
  <div className={classes.messageList}>
    {messages.map((item, index) =>
      <ChatMessage key={index} message={item} fromMe={item.sender._id === userId} />)}
  </div>
);

export default withStyles(styles)(ChatMessageList);
