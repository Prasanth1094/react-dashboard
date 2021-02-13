import React from 'react';
import clsx from 'clsx';
import Dashboard from './Dashboard'
import ActivityComp from '../components/Activity'
import { Route, Switch, Redirect,NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '../Assets/speedometer.png'
import ActivityIcon from '../Assets/graph1.png'
import TimesheetIcon from '../Assets/timer_white.png'
import ToDoIcon from '../Assets/icons8-today-96.png'
import InvoicesIcon from '../Assets/bill.png'
import ProjectsIcon from '../Assets/folder.png'
import HelpIcon from '../Assets/help.png'
import DownloadAppIcon from '../Assets/download.png'
import Logo from '../Assets/logo.png'
import SidebarOverlay from '../Assets/sidebar_overlay.png'
import Notification from '../Assets/notification.png'
import Settings from '../Assets/settings.png'
import LeftArrow from '../Assets/left_arrow.png'
import Button from '../components/ui/Buttton'
import DropDownButton from '../components/ui/DropDown'
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import curve from '../Assets/curved.png'
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
      margin: '10px 25px',
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
    { id: 1, name: "Dashboard", icon: DashboardIcon,path:"/dashboard"},
    { id: 2, name: "Activity", icon: ActivityIcon,path:"/activity" },
    { id: 3, name: "Timesheet", icon: TimesheetIcon,path:"/timesheet" },
    { id: 4, name: "To-Do", icon: ToDoIcon,path:"/todo" },
    { id: 5, name: "Invoices", icon: InvoicesIcon,path:"/invoices" },
    { id: 6, name: "Projects", icon: ProjectsIcon,path:"/projects" },
    { id: 7, name: "Help", icon: HelpIcon ,path:"/help"},
    { id: 8, name: "DownloadApp", icon: DownloadAppIcon,path:"/downloadapp" },

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
              <img src={curve} className="curve" alt=""/>
              <img src={LeftArrow} alt="" className="arrow-icon-left"/>

            </IconButton>
          </div>
          
          <ListItemIcon className={clsx('topbar-logo', {
            [classes.hide]: open,
          })}>
           
            <img src={Logo} alt="" className="logo-icon"/>
            
            
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
          <Grid container spacing={3}>
            <Grid item xs={8} sm={8} md={9}>
              <div className="toolbar-left-side">
                <DropDownButton text="ADD PROJECT" icon="add" className="" />
              </div>

            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Button text="ADD PROJECT" icon="add" className="add-icon" />
            </Grid>
          </Grid>
        </Toolbar>
        <Divider className="header-divider" />
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
            <img src={Logo} alt="" className="logo-icon"/>
          </ListItemIcon>

        </div>
        <List >
          {data.map((menu, index) => (
            <div key={index}>
            <div className="sidebar" >              
               <NavLink className="nav-link" to={menu.path}>
               <span className="sidebar-img"><img src={menu.icon} alt=""  className="sidebar-icon"/></span><span className="sidebar-text"> {menu.name}</span>
                                    </NavLink>
            </div>
             <div>
             {
               index === 2 || index === 5 ? <Divider className="divider" /> : ""
             }
             </div>
             </div>
          ))}
        </List>
        <div className="overlay-div">  <img src={SidebarOverlay} alt="" className="overlay-img"/></div>
        <div className={clsx(classes.gridroot, {
            'sidebar-footer': open,
            'sidebar-footeronhide': !open,
          })}>
    
          <Grid container alignItems="center" item xs={4} sm={12}>
            <img src={Notification} alt="" />
            <Divider orientation="vertical" className="sidebarver-divider" flexItem />
            <img src={Settings} alt="" />
            <Divider orientation="vertical" className="sidebarver-divider" flexItem />
            <AccountCircleIcon className="avatar-image"/>
          </Grid>
        </div>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/activity" component={ActivityComp} />
          <Redirect to="/dashboard" />
        </Switch>
      </main>
    </div>
  );
}
