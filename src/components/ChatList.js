import React from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import ChatListItem from './ChatListItem';
import * as style from '../constants/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    minHeight: style.appBarHeight,
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  chatList: {
    overflowX: 'hidden',
  },
  chatIntro: {
    margin: theme.spacing.unit * 3,
    display: 'flex',
    flex: 1,
  },
});

class ChatList extends React.Component {
  state = {
    filter: '',
  };

  getList() {
    const { chats } = this.props;
    const { filter } = this.state;

    if (filter.trim().length) {
      return chats
        .filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => (a.title.toLowerCase() <= b.title.toLowerCase() ? -1 : 1));
    }
    return chats;
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { classes, disabled } = this.props;

    const emptyChatList = this.state.filter ? (
      <Typography className={classes.chatIntro} align="center">
        Таких чатов не нашлось
      </Typography>
    ) : (
      <Typography className={classes.chatIntro} align="center">
        В списке пока нет чатов. Cоздай свой
      </Typography>
    );

    return (
      <React.Fragment>
        <form className={classes.container} autoComplete="off">
          <TextField
            fullWidth
            name="filter"
            placeholder="Найти чат"
            type="search"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </form>
        <Divider />

        {this.getList().length > 0 ? (
          <List className={classes.chatList}>
            {this.getList().map(item => (
              <ChatListItem
                key={item._id}
                disabled={disabled}
                id={item._id}
                title={item.title}
                date={item.updatedAt}
              />
            ))}
          </List>
        ) : (
          emptyChatList
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ChatList);
