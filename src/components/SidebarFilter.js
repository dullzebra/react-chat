import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import * as style from '../utils/constants';

const styles = theme => ({
  container: {
    display: 'flex',    
    alignItems: 'center',
    height: style.appBarHeight,
    padding: `0 ${theme.spacing.unit * 3}px` 
  },
  searchField: {           
    flexGrow: 1
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
