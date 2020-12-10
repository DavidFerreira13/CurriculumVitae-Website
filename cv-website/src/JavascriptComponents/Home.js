import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import curriculum_image from "../Images/Pngs/cv.png"
import ImageOfMyName from '../Images/Pngs/MyName.png'
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import DropDownMenu from "./DropDownMenu.js";
import { indigo } from '@material-ui/core/colors';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ButtonGroup} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Switch, Route} from 'react-router-dom';
import MenuOptions from './MenuOptionsList'
import AboutMe from './MenuButtonPaths/AboutMe';
import ContactInformation from './MenuButtonPaths/ContactInformation';
import EducationalHistory from './MenuButtonPaths/EducationalHistory';
import Hobbies from './MenuButtonPaths/Hobbies';
import Portfolio from './MenuButtonPaths/Portfolio';
import ProfessionalExperience from './MenuButtonPaths/ProfessionalExperience';
import Skills from './MenuButtonPaths/Skills';
import { Link as RouterLink } from 'react-router-dom';
import MainPage from "./MainPage"

const drawerWidth = 255;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const someStyles = makeStyles((theme) => ({
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
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  palette:{
    primary: {
      main: indigo[600]      
    }
  }
})

function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item">
        <ThemeProvider theme={theme}>
          <ButtonGroup variant="outlined" color="primary">
            <Button variant="contained"href="#" className="icon-button"  id="loginButton" onClick={() => setOpen(!open)}>
              {props.icon}
                Login
            </Button>
          </ButtonGroup>
        </ThemeProvider>
        {open && props.children}
      </li>
    );
  }

function Home() {

    const classes = useStyles();  
    const drawerClasses = someStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const drawerStyle = {
      "backgroundColor": "#282c34"
    }

    return (
        <div className={drawerClasses.root}>
            <CssBaseline />
            <AppBar
                id="appbar"
                position="fixed"
                className={clsx(drawerClasses.appBar, {
                    [drawerClasses.appBarShift]: open,
                })} >
                <Toolbar>
                    <div className="navbar-nav">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(drawerClasses.menuButton, {
                                [drawerClasses.hide]: open,
                            })}>
                            <MenuIcon className="menuIcon" />
                        </IconButton>
                    </div>
                    <div className={classes.title} color="">
                        <Button 
                           component={RouterLink} to="/" >
                        <img src={ImageOfMyName}
                         alt="DavidFerreira"
                          width="300px" height="auto"
                           className="nameImage" />
                        </Button>
                    </div>
                    <div variant="h6" className={classes.title} color="" id="cvParent">
                      <Button
                      className="cv-button"
                           component={RouterLink} to="/">
                        <img src={curriculum_image}
                         alt="CvImage"
                          width="auto" height="90"
                           className="cvImage" 
                           />
                      </Button>
                    </div>

                    <NavItem>
                        <DropDownMenu />
                    </NavItem>

                </Toolbar>
            </AppBar>

            <Drawer
            style={drawerStyle}
                variant="permanent"
                className={clsx(drawerClasses.drawer, {
                    [drawerClasses.drawerOpen]: open,
                    [drawerClasses.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [drawerClasses.drawerOpen]: open,
                        [drawerClasses.drawerClose]: !open,
                    })
                }}>

                <div className={drawerClasses.toolbar}
                  style={drawerStyle}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />

                <MenuOptions/>

                <Divider />

            </Drawer>

            <div className={classes.root}>
                <nav className="main-content">
                    <Switch>
                        <Route path="/" exact                   component={MainPage} />
                        <Route path="/about-me"                 component={AboutMe} />
                        <Route path="/educational-history"      component={EducationalHistory} />
                        <Route path="/skills"                   component={Skills} />
                        <Route path="/professional-experience"  component={ProfessionalExperience} />
                        <Route path="/portfolio"                component={Portfolio} />
                        <Route path="/hobbies"                  component={Hobbies} />
                        <Route path="/contacts"                 component={ContactInformation} />
                    </Switch>      
                </nav>
            </div>

            <br />

            <footer className="page-footer">
                <p className="footer-text">
                    This web-curriculum was made with react for the purpose of learning how to use it
                </p>
            </footer>
        </div>
    )
}

export default Home;