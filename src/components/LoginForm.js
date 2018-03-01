import React from 'react';
import fetch from 'isomorphic-fetch';
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
  state = {
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    }
  }


  handleInputChange = (event) => {
    event.persist()
    const { name, value } = event.target 
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value
      }
    }))
  }

  handleSubmit = (event) => {   
    event.preventDefault()
    const { username, password } = this.state

    fetch('http://localhost:8000/v1/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })
      .then(response => response.json())
      .then(console.log)
      .catch(e => console.log(e))
  }

  render() {
    const { classes } = this.props;
    const {username, password} = this.state;
    return (
      <form className={classes.formContainer} onSubmit={this.handleSubmit}>     
        <TextField
          required
          id="login"
          label="Логин" 
          name="username"             
          autoComplete="username"     
          className={classes.textField}
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          id="password"
          name="password"
          label="Пароль"
          type="password"
          autoComplete="password"
          className={classes.textField}
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <Button type="submit" variant="raised" color="primary" className={classes.button}>
          Войти
        </Button>
      </form>
    )
  }

};
export default withStyles(styles)(LoginForm);
