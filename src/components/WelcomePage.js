import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import * as style from '../constants/styles';
import WelcomeHeader from './WelcomeHeader';
import Auth from './Auth';
import ErrorMessage from './ErrorMessage';

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
  },
});

const WelcomePage = ({
  classes, signup, login, isAuthenticated, error,
}) => {
  if (isAuthenticated) {
    return <Redirect to="/chat" />;
  }

  return (
    <React.Fragment>
      <div className={classes.appFrame}>
        <WelcomeHeader />
        <main className={classes.content}>
          <Auth signup={signup} login={login} />
        </main>
      </div>
      <ErrorMessage error={error} />
    </React.Fragment>
  );
};

WelcomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
};

WelcomePage.defaultProps = {
  error: null,
};

export default withStyles(styles)(WelcomePage);
