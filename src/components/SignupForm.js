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
    margin: theme.spacing.unit,
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2
  }
});

class SignupForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    },
    password2: {
      value: '',
      isValid: true
    }
  }

  validate = () => {
    const { password, password2 } = this.state
    const isValid = password.value === password2.value

    this.setState({
      password: {
        ...password,
        isValid
      },
      password2: {
        ...password2,
        isValid
      }
    })

    return isValid
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

    if (!this.validate()) {
      return;
    }

    const { username, password } = this.state

    fetch('http://localhost:8000/v1/signup',{
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
    const { username, password, password2 } = this.state;
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
          autoComplete="password1"
          className={classes.textField}
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <TextField
          required
          id="password2"
          name="password2"
          label="Повторите пароль"
          type="password"
          autoComplete="password1"
          className={classes.textField}
          value={password2.value}
          onChange={this.handleInputChange}
          error={!password2.isValid}
        />
        <Button type="submit" variant="raised" color="primary" className={classes.button}>
          Зарегистрироваться
        </Button>
      </form>
    )
  }

};
export default withStyles(styles)(SignupForm);
