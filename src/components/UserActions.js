import React from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import PersonIcon from 'material-ui-icons/AccountCircle';
import IconButton from 'material-ui/IconButton';
import UserProfile from './UserProfile';

class UserActions extends React.Component {
  state = {
    menuEl: null,
    isProfileOpen: false,
  };

  handleMenuClick = (event) => {
    this.setState({ menuEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuEl: null });
  };

  handleProfileClick = () => {
    this.setState({ isProfileOpen: true, menuEl: null });
  };

  handleProfileClose = () => {
    this.setState({ isProfileOpen: false });
  };

  render() {
    const {
      logout, editUser, isConnected, user,
    } = this.props;
    const { menuEl, isProfileOpen } = this.state;

    return (
      <React.Fragment>
        <IconButton disabled={!isConnected} onClick={this.handleMenuClick} color="inherit">
          <PersonIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={menuEl}
          open={Boolean(menuEl)}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleProfileClick}>Личные данные</MenuItem>
          <MenuItem onClick={logout}>Выйти</MenuItem>
        </Menu>
        <UserProfile
          user={user}
          open={isProfileOpen}
          onClose={this.handleProfileClose}
          onSave={editUser}
        />
      </React.Fragment>
    );
  }
}

export default UserActions;
