import React from 'react';
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
  state = {
    title: { value: '', isValid: true },
  };

  handleInputChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state.title;
    if (!value || !value.trim().length) {
      this.state.title.isValid = false;
      return;
    }
    this.props.onSubmit(value);
    this.props.onClose();
    this.setState({ title: { value: '', isValid: true } });
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
              value={this.state.title.value}
              onChange={this.handleInputChange}
              error={!this.state.title.isValid}
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
