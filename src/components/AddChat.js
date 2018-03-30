import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Modal from 'material-ui/Modal';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import * as style from '../constants/styles';

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
  },
});

class SidebarActions extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  state = {
    value: '',
    isValid: true,
  };

  handleInputChange = (e) => {
    this.setState({ value: e.target.value, isValid: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (!value || !value.trim().length) {
      this.setState({ value, isValid: false });
      return;
    }
    this.props.onSubmit(value);
    this.props.onClose();
    this.setState({ value: '', isValid: true });
  };

  render() {
    const { classes, open, onClose } = this.props;

    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
          <Typography variant="title" gutterBottom>
            Новый чат
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              required
              fullWidth
              label="Название"
              name="title"
              value={this.state.value}
              onChange={this.handleInputChange}
              error={!this.state.isValid}
            />
            <div className={classes.footer}>
              <Button type="submit" variant="raised" color="primary" className={classes.button}>
                Сохранить
              </Button>
              <Button variant="raised" className={classes.button} onClick={onClose}>
                Отменить
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}
export default withStyles(styles)(SidebarActions);
