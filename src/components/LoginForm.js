import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  textField: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit   
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2
  }
});

class LoginForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.formContainer}>
        <TextField
          id="login"
          label="Логин"
          placeholder=""
          className={classes.textField}
        />
        <TextField
          id="password"
          label="Пароль"
          type="password"
          className={classes.textField}
        />         
        <Button variant="raised" color="primary" className={classes.button}>
          Войти
        </Button>
      </form>
    )
  }

};
export default withStyles(styles)(LoginForm);
