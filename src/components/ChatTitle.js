import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import IconButton from 'material-ui/IconButton';
import PetsIcon from 'material-ui-icons/Pets';
import ChatAvatar from './ChatAvatar';

const styles = () => ({
  title: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
});

class ChatTitle extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    closeChat: PropTypes.func.isRequired,
    activeChat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    user: PropTypes.shape({
      isCreator: PropTypes.bool.isRequired,
    }).isRequired,
    isConnected: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    activeChat: null,
  };

  state = {
    menuEl: null,
  };

  handleMenuClick = (event) => {
    this.setState({ menuEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuEl: null });
  };

  handleOnCloseChat = () => {
    this.props.closeChat();
    this.handleMenuClose();
  };

  render() {
    const {
      classes, activeChat, user, isConnected,
    } = this.props;
    const { menuEl } = this.state;

    return (
      <div className={classes.title}>
        {activeChat && (
          <React.Fragment>
            <ChatAvatar name={activeChat.title} />
            <Typography variant="title" color="inherit" style={{ marginLeft: 10 }}>
              {activeChat.title}
            </Typography>

            {user.isChatMember && (
              <React.Fragment>
                <IconButton disabled={!isConnected} onClick={this.handleMenuClick} color="inherit">
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="leave-menu"
                  anchorEl={menuEl}
                  open={Boolean(menuEl)}
                  onClose={this.handleMenuClose}
                >
                  <MenuItem onClick={this.handleOnCloseChat}>
                    {user.isCreator ? 'Удалить чат' : 'Выйти из чата'}
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
        {!activeChat && (
          <React.Fragment>
            <PetsIcon style={{ height: '1.5em' }} />
            <Typography variant="title" color="inherit" style={{ marginLeft: 10 }}>
              Чат зверчат
            </Typography>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ChatTitle);
