import React from 'react';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import PersonIcon from 'material-ui-icons/AccountCircle';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  //
});

class UserActions extends React.Component {
  state = {
    menuEl: null,
    isProfileOpen: false
  };

  handleMenuClick = event => {
    this.setState({ menuEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuEl: null });
  };

  handleProfileClick = () => {
    this.setState({ isProfileOpen: true })
  }

  render() {
    const { classes, logout } = this.props
    const { menuEl } = this.state

    return (
      <React.Fragment>
        <IconButton onClick={this.handleMenuClick} color="inherit">
          <PersonIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={menuEl}
          open={Boolean(menuEl)}
          onClose={this.handleMenuClose}
          style={{ marginTop: 30 }}
        >
          <MenuItem onClick={this.handleProfileClick}>Личные данные</MenuItem>
          <MenuItem onClick={logout}>Выйти</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(UserActions);
