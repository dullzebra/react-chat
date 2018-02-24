import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as style from '../utils/constants';

const styles = theme => ({
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${style.drawerWidth}px)`,
  }, 
});


const ChatHeader = ({ classes }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>     
      <Typography variant="title" color="inherit" align="center" noWrap>
        Чат зверчат
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
