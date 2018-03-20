import React from 'react';
import { withStyles } from 'material-ui/styles';
import ChatMessage from './ChatMessage';

const styles = () => ({
  messageList: {
    position: 'relative',
    flexBasis: '100%',
  },
});

const ChatMessageList = ({ classes, messages, userId }) => (
  <div className={classes.messageList}>
    {messages.map(item => (
      <ChatMessage key={item._id} message={item} fromMe={item.sender._id === userId} />
    ))}
  </div>
);

export default withStyles(styles)(ChatMessageList);
