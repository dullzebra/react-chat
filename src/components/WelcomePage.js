import React from 'react';
import { withStyles } from 'material-ui/styles';
import * as style from '../utils/constants';
import WelcomeHeader from './WelcomeHeader';
import Auth from './Auth';

const styles = theme => ({
  appFrame: {    
    display: 'flex',
    width: '100%',
    height: '100%',
  }, 
  content: {   
    width: '100%',    
    marginTop: style.appBarHeight,    
    backgroundColor: theme.palette.background.default,
  } 
});

const WelcomePage = ({ classes }) => (
  <div className={classes.appFrame}>
    <WelcomeHeader />
    <main className={classes.content}>
      <Auth />
    </main>
  </div>
);
export default withStyles(styles)(WelcomePage);
