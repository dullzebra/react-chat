import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const styles = theme => ({
  modalPaper: {
    width: '33em',    
    margin: theme.spacing.unit * 3 + 'px auto'
  },
});

class Auth extends React.Component {
  state = {
    value: 'signup',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.modalPaper} elevation={4}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}           
            fullWidth>
            <Tab value="login" label="Вход" />
            <Tab value="signup" label="Регистрация" />
          </Tabs>
        </AppBar>
        {value === 'login' && <LoginForm />}
        {value === 'signup' && <SignupForm />}
      </Paper>
    )
  }

};
export default withStyles(styles)(Auth);
