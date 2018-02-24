import React from 'react';
import { withStyles } from 'material-ui/styles';
import * as style from '../utils/constants';
import WelcomeHeader from './WelcomeHeader';
import Auth from './Auth';

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
 
  content: {
    overflow: 'hidden',
    width: '100%',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: `calc(100% - ${style.appBarHeight}px)`,
      marginTop: style.appBarHeight,
    },
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
