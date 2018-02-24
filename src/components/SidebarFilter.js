import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import * as style from '../utils/constants';

const styles = theme => ({
  searchField: {
    marginLeft: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2,
    width: 250,
    height: style.appBarHeight - theme.spacing.unit * 2,
  },
});

const SidebarFilter = ({ classes }) => (
  <form className={classes.container} noValidate autoComplete="off">
  <TextField
    id="search"
    placeholder="Найти чат"
    type="search"    
    className={classes.searchField}
  />
</form>
);

export default withStyles(styles)(SidebarFilter);
