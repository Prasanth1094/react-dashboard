import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '../Assets/speedometer.png'
import Activity from '../Assets/graph.png'
import Timesheet from '../Assets/timer_white.png'
import ToDo from '../Assets/icons8-today-96.png'
import Invoices from '../Assets/bill.png'
import Projects from '../Assets/folder.png'
import Help from '../Assets/help.png'
import DownloadApp from '../Assets/download.png'
import Logo from '../Assets/logo.png'
import SidebarOverlay from '../Assets/sidebar_overlay.png'
import Notification from '../Assets/notification.png'
import Settings from '../Assets/settings.png'
import LeftArrow from '../Assets/left_arrow.png'
import Home from '../components/Home'
import { Route, Switch, Redirect } from "react-router-dom";
import Button from '../components/ui/Buttton'
import DropDownButton from '../components/ui/DropDown'
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footerIcon: {
    margin: '0 auto'
  },


  gridroot: {
    width: 'fit-content',    
    '& img': {
      margin: '0 25px',
      width: '20px',
      height: '20px',
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
      backgoundColor: 'white',
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const menus=[menu{name:"Dashboard",icon:Dashboard}]
  const data = [
    { id: 1, name: "Dashboard", icon: Dashboard },
    { id: 2, name: "Activity", icon: Activity },
    { id: 3, name: "Timesheet", icon: Timesheet },
    { id: 4, name: "To-Do", icon: ToDo },
    { id: 5, name: "Invoices", icon: Invoices },
    { id: 6, name: "Projects", icon: Projects },
    { id: 7, name: "Help", icon: Help },
    { id: 8, name: "DownloadApp", icon: DownloadApp },

  ];


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={clsx('topbar-logo', {
            [classes.hide]: !open,
          })}>
            <IconButton onClick={handleDrawerClose} className="hide-icon">
              <img src={LeftArrow} alt=""/>

            </IconButton>
          </div>
          <ListItemIcon className={clsx('topbar-logo', {
            [classes.hide]: open,
          })}>
            <img src={Logo} alt=""/>
          </ListItemIcon>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <DropDownButton text="ADD PROJECT" icon="add" className="add-" style={{ float: "right" }} />
          </Typography>
          <Button text="ADD PROJECT" icon="add" className="add-" style={{ float: "right" }} />

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <ListItemIcon >
            <img src={Logo} alt=""/>
          </ListItemIcon>

        </div>
        <List className="sidebartext">
          {data.map((user, index) => (
            <div>
              <ListItem button key={index} className="sidebartext">
                <ListItemIcon>
                  <img src={user.icon} alt=""/>
                </ListItemIcon>
                <ListItemText primary={user.name} className="sidebartext" />
              </ListItem>
              {
                index === 2 || index === 5 ? <Divider className="divider" /> : ""
              }
            </div>
          ))}
        </List>
        <div className={classes.sidebarOverlay}>  <img src={SidebarOverlay} alt=""/></div> 
        <div className={classes.gridroot}>
          <Grid container alignItems="center" >
            <img src={Notification} alt=""/>
            <Divider orientation="vertical" className="sidebarver-divider" flexItem />
            <img src={Settings} alt=""/>
            <Divider orientation="vertical"  className="sidebarver-divider" flexItem/>
            <AccountCircleIcon className="avatar-image"/>            
          </Grid>
        </div>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </main>
    </div>
  );
}
