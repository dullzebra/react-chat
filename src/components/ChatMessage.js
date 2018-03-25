import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import meColor from 'material-ui/colors/orange';
import ChatAvatar from './ChatAvatar';
import initials from '../utils/initials';
import getColor from '../utils/color-from';

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
  messageItem__date: {
    fontSize: '85%',
  },
  messagePaper: {
    minWidth: '10em',
    maxWidth: '70%',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    padding: theme.spacing.unit,
  },
  messagePaperMe: {
    backgroundColor: meColor[50],
  },
  statusMessage: {
    textAlign: 'center',
    margin: theme.spacing.unit * 3
  }
});

const Color = ({ children }) => <span style={{ color: getColor(initials(children)) }}>{children}</span>;

const ChatMessage = ({ classes, message, fromMe }) => {
  const displayName = (u) => {
    return u.firstName || u.lastName ? `${u.firstName} ${u.lastName}` : u.username
  }
  const sender = displayName(message.sender);
  
  return (
    <React.Fragment>
      {message.statusMessage &&
        <Typography variant="body1" className={classes.statusMessage}>
          <Color>{sender}</Color> {message.content}
          &nbsp;<span className={classes.messageItem__date}>{moment(message.updatedAt).fromNow()}</span>
        </Typography>
      }
      {!message.statusMessage &&
        <div className={classnames(classes.messageItem, fromMe && classes.messageItemMe)}>
          <ChatAvatar name={sender} />
          <Paper className={classnames(classes.messagePaper, fromMe && classes.messagePaperMe)}>
            <Typography variant="body2">
              <Color>{sender}</Color>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {message.content}
            </Typography>
            <div className={classes.messageItem__date}>
              {moment(message.updatedAt).fromNow()}
            </div>
          </Paper>
        </div>}
    </React.Fragment>
  )
};

export default withStyles(styles)(ChatMessage);
