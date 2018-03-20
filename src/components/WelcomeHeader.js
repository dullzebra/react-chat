import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PetsIcon from 'material-ui-icons/Pets';
import * as style from '../constants/styles';

const styles = () => ({
  title: {
    display: 'flex',
    alignItems: 'flex-end',
    ...style.dialogWidth,
    margin: 'auto',
  },
});

const WelcomeHeader = ({ classes }) => (
  <AppBar className={classes.welcomeBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap className={classes.title}>
        <PetsIcon className={classes.logo} style={{ height: '1.5em' }} />
        <span>&nbsp;&nbsp;Зверчата ждут вас</span>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(WelcomeHeader);
