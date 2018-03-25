import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  inputPaper: {
    position: 'sticky',
    bottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3,
    margin: theme.spacing.unit * 3
  }
});

class ChatInput extends React.Component {
  state = {
    input: ''
  }

  handleInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();   
    if (!this.state.input.trim().length) return;

    this.props.sendMessage(this.state.input);
    this.setState({input: ''})
  }

  render() {
    const { classes, disabled } = this.props;
    return (
      <Paper className={classes.inputPaper} elevation={4}>
        <form onSubmit={this.handleSubmit}>
        <TextField
          fullWidth
          name="inputMessage"
          placeholder="Напишите что-нибудь еще"
          type="text"
          value={this.state.input}
          onChange={this.handleInputChange}
          disabled={disabled}
        />
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(ChatInput);
