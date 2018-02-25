import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PetsIcon from 'material-ui-icons/Pets';
import * as style from '../utils/constants';

const styles = theme => ({
 title: {
   display: 'flex',
   alignItems: 'baseline',
   ...style.authWidth,
   margin: 'auto'
 }
});


const WelcomeHeader = ({ classes }) => (
  <AppBar className={classes.welcomeBar}>
    <Toolbar>
      <Typography 
        variant="title" color="inherit" noWrap className={classes.title}
        >
        <PetsIcon /><span>&nbsp;&nbsp;Зверчата ждут вас</span>
     </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(WelcomeHeader);
