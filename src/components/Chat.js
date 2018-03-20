import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import * as style from '../constants/styles';
import ChatMessageList from './ChatMessageList';
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
    overflow: 'auto',
  },
  messageList: {
    position: 'relative',
    flexBasis: '100%',
  },
  chatIntro: {
    flexBasis: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Chat extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }

  handleSend = (content) => {
    this.props.sendMessage(content);
  };

  render() {
    const {
      classes, user, activeChat, joinChat, messages, isConnected,
    } = this.props;

    const msgPanel = messages.length ? (
      <ChatMessageList messages={messages} userId={user._id} />
    ) : (
      <div className={classes.chatIntro}>
        <Typography variant="subheading">В чате пока тихо... Будь первым!</Typography>
      </div>
    );

    const footer = user.isChatMember ? (
      <ChatInput disabled={!isConnected} sendMessage={this.handleSend} />
    ) : (
      <Button
        disabled={!isConnected}
        onClick={joinChat}
        variant="raised"
        color="primary"
        style={{ margin: 16 }}
      >
        Хочу к вам
      </Button>
    );

    const unactivePanel = (
      <div className={classes.chatIntro}>
        <Typography variant="subheading">Выбери чат из списка слева или создай свой</Typography>
      </div>
    );

    return (
      <main className={classes.content}>
        <div
          ref={(c) => {
            this.messagesContainer = c;
          }}
          className={classes.chatContainer}
        >
          {activeChat ? (
            <React.Fragment>
              {msgPanel}
              {footer}
            </React.Fragment>
          ) : (
            unactivePanel
          )}
        </div>
      </main>
    );
  }
}
export default withStyles(styles)(Chat);
