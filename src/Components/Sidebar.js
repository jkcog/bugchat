import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { Avatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    selected: {
      background: '#d3d3d3',
    },
    page: {
      minWidth: '50vw',
      flex: 1,
      alignItems: 'Center',
    },
    title: {
      margin: '20px auto 10px auto',
    },
  };
});

export default function Sidebar({
  children,
  setCurrentContact,
  currentContact,
  clearChat,
  contacts,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            All Ducks
          </Typography>
        </div>

        <List>
          {contacts.map((item) => (
            <ListItem
              button
              key={item.name}
              onClick={() => {
                clearChat();
                setCurrentContact(item.name);
              }}
              className={currentContact == item.name ? classes.selected : null}
            >
              <ListItemIcon>
                <Avatar>{item.name[0].toUpperCase()}</Avatar>
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  );
}
