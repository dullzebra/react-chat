import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import * as style from '../utils/constants';
import WelcomeHeader from './WelcomeHeader';
import Auth from './Auth';
import Error from './ErrorMessage';

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

const WelcomePage = ({ classes, signup, login, isAuthenticated, error }) => {
  if (isAuthenticated) {
    return (<Redirect to="/chat" />)
  }

  return (
    <React.Fragment>
      <div className={classes.appFrame}>
        <WelcomeHeader />
        <main className={classes.content}>
          <Auth signup={signup} login={login} />
        </main>
      </div>
      <Error error={error} />
    </React.Fragment>
  )
};
export default withStyles(styles)(WelcomePage);
