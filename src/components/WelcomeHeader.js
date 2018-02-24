import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
 //
});


const WelcomeHeader = ({ classes }) => (
  <AppBar className={classes.welcomeBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap align="center">
        Зверчата ждут вас
     </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(WelcomeHeader);
