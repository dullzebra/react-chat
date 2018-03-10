import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import * as style from '../utils/constants';
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
    overflow: 'auto'
  },
  messageList: {
    position: 'relative',
    flexBasis: '100%',

  },
  chatIntro: {
    flexBasis: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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

  handleJoin = () => {
    this.props.joinChat(this.props.activeChat._id);
  }

  handleSend = (content) => {
    this.props.sendMessage(content);
  }

  render() {
    const { classes, user, activeChat, messages } = this.props;

    const emptyPanel = (
      <div className={classes.chatIntro}>
        <Typography variant="subheading">В чате пока тихо... Будь первым!</Typography>
      </div>
    );

    const unactivePanel = (
      <div className={classes.chatIntro}>
        <Typography variant="subheading">Выбери чат из списка слева или создай свой</Typography>
      </div>
    );

    return (
      <main className={classes.content}>
        <div ref="messagesContainer" className={classes.chatContainer}>

          {activeChat &&
            <React.Fragment>
              {messages.length > 0
                ? <ChatMessageList messages={messages} user={user} />
                : emptyPanel}

              {user.isChatMember
                ? <ChatInput sendMessage={this.handleSend} />
                : <Button onClick={this.handleJoin} variant="raised" color="primary" style={{ margin: 16 }}>
                  Хочу к вам</Button>}
            </React.Fragment>}

          {!activeChat && unactivePanel}

        </div>
      </main>
    )
  }
};
export default withStyles(styles)(Chat);
