import React from 'react';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import * as style from '../utils/constants';
import isEqual from 'lodash/isEqual';

const styles = theme => ({
  paper: {
    ...style.centerPosition,
    ...style.dialogWidth,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing.unit * 2,
  }
});

class UserProfile extends React.Component {
  state = {
    username: '',
    firstName: '',
    lastName: '',
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSave(this.state);
    this.props.onClose();
  }

  componentWillReceiveProps(nextProps) {
    const { username, firstName, lastName } = nextProps.user;
    this.setState({ username, firstName, lastName });
  }
 
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.open !== this.props.open || !isEqual(nextState, this.state);
  }

  render() {   
    const { classes, open, onClose } = this.props;

    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
          <Typography variant="title" gutterBottom>
            Личные данные
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              required
              fullWidth
              label="Логин"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              label="Имя"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              label="Фамилия"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
            <div className={classes.footer}>
              <Button type="submit" variant="raised" color="primary"
                className={classes.button}>Сохранить</Button>
              <Button variant="raised" className={classes.button}
                onClick={onClose}>Отменить</Button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(UserProfile);
