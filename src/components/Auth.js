import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import * as style from '../utils/constants';

const styles = theme => ({
  authPaper: {
    ...style.dialogWidth,    
    margin: theme.spacing.unit * 3 + 'px auto'
  },
});

class Auth extends React.Component {
  state = {
    value: 'login',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes, login, signup } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.authPaper} elevation={4}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}           
            fullWidth>
            <Tab value="login" label="Вход" />
            <Tab value="signup" label="Регистрация" />
          </Tabs>
        </AppBar>
        {value === 'login' && <LoginForm onSubmit={login}  />}
        {value === 'signup' && <SignupForm onSubmit={signup} />}
      </Paper>
    )
  }

};
export default withStyles(styles)(Auth);
