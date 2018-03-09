import React from 'react';
import { withStyles } from 'material-ui/styles';
import ChatMessage from './ChatMessage';

const styles = theme => ({
  messageList: {
    position: 'relative',
    flexBasis: '100%',
  }
});

const ChatMessageList = ({ classes, messages, user }) => (
  <div className={classes.messageList}>
    {messages.map((item, index) =>
      <ChatMessage key={index} message={item} user={user} />)}
  </div>
)

export default withStyles(styles)(ChatMessageList);
