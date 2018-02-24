import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import * as style from '../utils/constants';

const styles = theme => ({
  addChat: {
    position: 'fixed',
    bottom: style.bottomPanelHeight + theme.spacing.unit,
    left: style.drawerWidth - 80
  },
  bottomPanel: {
    zIndex: 2,
    backgroundColor: theme.palette.background.default,
  }
});

const SidebarActions = ({ classes }) => (
  <React.Fragment>
    <Button variant="fab" color="primary" className={classes.addChat} title="Создать новый чат">
      <AddIcon />
    </Button>
    <BottomNavigation showLabels className={classes.bottomPanel}>
      <BottomNavigationAction label="Мои чаты" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Все чаты" icon={<ExploreIcon />} />
    </BottomNavigation>
  </React.Fragment>
);

export default withStyles(styles)(SidebarActions);
