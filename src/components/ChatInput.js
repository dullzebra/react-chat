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
  },
  inputField: {
    width: '100%'
  }
});

const ChatInput = ({ classes }) => (
  <Paper className={classes.inputPaper} elevation={4}>
    <TextField
      id="inputMessage"
      placeholder="Напишите что-нибудь еще"
      type="text"
      className={classes.inputField}
    />
  </Paper>
);

export default withStyles(styles)(ChatInput);
