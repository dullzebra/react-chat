import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import GroupIcon from 'material-ui-icons/Group';
import StarIcon from 'material-ui-icons/Star';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import AddChat from './AddChat';
import * as style from '../constants/styles';

const styles = theme => ({
  panel: {
    minHeight: style.bottomPanelHeight,
  },
  addChat: {
    position: 'absolute',
    bottom: style.bottomPanelHeight + theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
  },
  paper: {
    ...style.centerPosition,
    ...style.dialogWidth,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing.unit * 2,
  },
});

class SidebarActions extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    createChat: PropTypes.func.isRequired,
    showAllChats: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
  };

  state = {
    isModalOpen: false,
    navValue: 1,
  };

  handleNav = (event, navValue) => {
    this.setState({ navValue });
    this.props.showAllChats(!!navValue);
  };

  handleOpen = (e) => {
    e.preventDefault();
    this.setState({ isModalOpen: true });
  };

  handleClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { classes, disabled } = this.props;

    return (
      <React.Fragment>
        <BottomNavigation
          showLabels
          disabled={disabled}
          className={classes.panel}
          value={this.state.navValue}
          onChange={this.handleNav}
        >
          <BottomNavigationAction label="Мои чаты" icon={<StarIcon />} />
          <BottomNavigationAction label="Все чаты" icon={<GroupIcon />} />
        </BottomNavigation>

        <Button
          variant="fab"
          color="primary"
          className={classes.addChat}
          disabled={disabled}
          onClick={this.handleOpen}
        >
          <AddIcon />
        </Button>
        <AddChat
          open={this.state.isModalOpen}
          onClose={this.handleClose}
          onSubmit={this.props.createChat}
        />
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(SidebarActions);
