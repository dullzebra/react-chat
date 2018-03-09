import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import GroupIcon from 'material-ui-icons/Group';
import StarIcon from 'material-ui-icons/Star';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import * as style from '../utils/constants';

const styles = theme => ({
  addChat: {
    position: 'absolute',
    bottom: style.bottomPanelHeight + theme.spacing.unit * 3,
    right: theme.spacing.unit * 3
  }
});

const SidebarActions = ({ classes }) => (
  <React.Fragment>
    <Button variant="fab" color="primary" className={classes.addChat} title="Создать новый чат">
      <AddIcon />
    </Button>
    <BottomNavigation showLabels>
      <BottomNavigationAction label="Мои чаты" icon={<StarIcon />} />
      <BottomNavigationAction label="Все чаты" icon={<GroupIcon />} />
    </BottomNavigation>
  </React.Fragment>
);

export default withStyles(styles)(SidebarActions);
