import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import UserActions from './UserActions';
import * as style from '../utils/constants';

const styles = theme => ({
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${style.drawerWidth}px)`,
  },
  title: {
    flex: 1
  }
});

const ChatHeader = ({ classes, ...user }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.title}>
        Чат зверчат
      </Typography>
      <UserActions  {...user} />
    </Toolbar>
  </AppBar>
);  

export default withStyles(styles)(ChatHeader);
