import React from 'react';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';

const drawerWidth = 320;
const appBarHeight = 64;
const bottomPanelHeight = 56;

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    overflow: 'hidden'
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: `calc(100% - ${appBarHeight + theme.spacing.unit * 3 * 2}px)`,
      marginTop: appBarHeight,
    },
  },
  searchField: {
    marginLeft: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2,
    width: 250,
    height: appBarHeight - theme.spacing.unit * 2,
  },
  inputPaper: {
    position: 'fixed',
    left: drawerWidth + theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3
  },
  inputField: {
    width: '100%'
  },
  chatList: {
    height: `calc(100% - ${appBarHeight + bottomPanelHeight}px)`,
    overflow: 'auto'
  },
  messageItem: {
    marginBottom: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'flex-end',
    margin: theme.spacing.unit,
  },
  messageItemMe: {
    flexDirection: 'row-reverse'
  },
  messageItem__author: {
    fontSize: '90%'
  },
  messageItem__text: {
    margin: '.2em 0'
  },
  messageItem__date: {
    fontSize: '90%'
  },
  messagePaper: {
    maxWidth: '70%',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    padding: theme.spacing.unit,
    fontSize: '.9em'
  },
  infoItem: {
    margin: '.2em',
    fontSize: '.8em',
    textAlign: 'center'
  },
  bottomPanel: {
    zIndex: 2,
    backgroundColor: theme.palette.background.default,
  }

});

class App extends React.Component {

  render() {
    const { classes } = this.props

    return (
      <div className={classes.appFrame}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <Typography variant="title" color="inherit" noWrap>
              Зверчат
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="search"
              placeholder="Найти чат"
              type="search"
              className={classes.searchField}
            />
          </form>

          <Divider />
          <List className={classes.chatList}>
            <ListItem button>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="Чат про бельчат" secondary="2 мин назад" />
            </ListItem>
            <ListItem button>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="А тут мычат" secondary="2 час назад" />
            </ListItem>
            <ListItem button>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="А там торчат" secondary="2 час назад" />
            </ListItem>
            <ListItem button>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="Чат про бельчат" secondary="2 мин назад" />
            </ListItem>
            <ListItem button>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="А тут мычат" secondary="2 час назад" />
            </ListItem>
            <ListItem button>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="А там торчат" secondary="2 час назад" />
            </ListItem>
          </List>

          <BottomNavigation  showLabels className={classes.bottomPanel}>
            <BottomNavigationAction label="Мои чаты" icon={<RestoreIcon />} />  
            <BottomNavigationAction label="Все чаты" icon={<ExploreIcon />} />            
          </BottomNavigation>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.infoItem}>
            Username присоединился
            <div>10 мин назад</div>
          </div>

          <div className={classes.messageItem}>
            <Avatar className={classes.messageAvatar}>
              <ImageIcon />
            </Avatar>
            <Paper className={classes.messagePaper}>
              <Typography variant="caption">Username</Typography>
              <Typography variant="body1">Ели мясо мужики, пивом запивали</Typography>
              <div className={classes.messageItem__date}>40 мин назад</div>
            </Paper>
          </div>
          <div className={[classes.messageItem, classes.messageItemMe].join(' ')}>
            <Avatar className={classes.messageAvatar}>
              <ImageIcon />
            </Avatar>
            <Paper className={classes.messagePaper}>
              <div className={classes.messageItem__author}>Me</div>
              <p className={classes.messageItem__text}>Дело было в январе - стояла едка на горе. и Возле этой елки бродили злые волки. Вот как-то раз ночной порой, когда в лесу так тихо, встречают волка под горой зайчата и зайчиха.</p>
              <div className={classes.messageItem__date}>вчера</div>
            </Paper>
          </div>

          <Paper className={classes.inputPaper} elevation={4}>
            <TextField
              id="inputMessage"
              placeholder="Напишите что-нибудь еще"
              type="text"
              className={classes.inputField}
            />
          </Paper>
        </main>
      </div>

    );
  }
}

export default withStyles(styles)(App);
