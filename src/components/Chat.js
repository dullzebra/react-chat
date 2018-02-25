import React from 'react';
import { withStyles } from 'material-ui/styles';
import * as style from '../utils/constants';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const styles = theme => ({
  content: {
    flexGrow: 1,
    display: 'flex',      
    marginTop: style.appBarHeight,
    backgroundColor: theme.palette.background.default,
  },
  chatContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',   
    overflow: 'auto'
  },
  messageList: {
    flexBasis: '100%'
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
        <div ref="messagesContainer" className={classes.chatContainer}>
          <div className={classes.messageList}>
           {messages && messages.map((item, index) =>
            <ChatMessage key={index} {...item} />
          )}
          {/*<div className={classes.infoItem}>
            Username присоединился
            <div>10 мин назад</div>
          </div>
          */}
          </div>
         <ChatInput /> 
        </div>
      </main>
    )
  }

};
export default withStyles(styles)(Chat);
