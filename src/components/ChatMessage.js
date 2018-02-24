import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ChatAvatar from './ChatAvatar';

const styles = theme => ({
  messageItem: {
    marginBottom: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'flex-end',
    margin: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageItemMe: {
    flexDirection: 'row-reverse',
  },
  messageItem__author: {
    fontSize: '90%'
  },
  messageItem__text: {
    margin: '.2em 0'
  },
  messageItem__date: {
    fontSize: '90%'
  },
  messagePaper: {
    minWidth: '10em',
    maxWidth: '70%',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    padding: theme.spacing.unit,
    fontSize: '.9em',
  },
  messagePaperMe: {
    backgroundColor: 'lightBlue',
  }
});

const ChatMessage = ({ classes, author, message }) => {  
  const IsMessageFromMe = author.toLowerCase() === 'me';

  return (
    <div className={classnames(classes.messageItem, IsMessageFromMe && classes.messageItemMe)}>
      <ChatAvatar name={author} />
      <Paper className={classnames(classes.messagePaper, IsMessageFromMe && classes.messagePaperMe)}>
        <Typography variant="caption">{author}</Typography>
        <Typography variant="body1">{message}</Typography>
        <div className={classes.messageItem__date}>40 мин назад</div>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(ChatMessage);
