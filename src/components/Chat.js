import React from 'react';
import { withStyles } from 'material-ui/styles';
import * as style from '../utils/constants';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const styles = theme => ({
  content: {
    overflow: 'hidden',
    width: '100%',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: `calc(100% - ${style.appBarHeight}px)`,
      marginTop: style.appBarHeight,
    },
    backgroundColor: theme.palette.background.default,
  },
  messageContainer: {
    height: `100%`,
    overflow: 'auto'
  },
  infoItem: {
    margin: '.2em',
    fontSize: '.8em',
    textAlign: 'center'
  }
});

class Chat extends React.Component {
  componentDidMount() {
    this.scrollDownHistory()
  }

  componentDidUpdate() {
    this.scrollDownHistory()
  }

  scrollDownHistory() {
    const messagesContainer = this.refs.messagesContainer    
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <main className={classes.content}>
        <div ref="messagesContainer" className={classes.messageContainer}>
          {messages && messages.map((item, index) =>
            <ChatMessage key={index} {...item} />
          )}
          {/* <div className={classes.infoItem}>
            Username присоединился
            <div>10 мин назад</div>
          </div>
          */}
          <ChatInput />
        </div>
      </main>
    )
  }

};
export default withStyles(styles)(Chat);
