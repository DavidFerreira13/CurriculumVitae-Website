import './App.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Drawer from './Drawer'
import DropDownMenu from "./DropDownMenu.js"
import "./DropDownMenu.css"
import {useState} from 'react'
import Button from '@material-ui/core/Button'
import curriculum_image from "./Images/cv-white.png"
import ImageOfMyName from './Images/MyName.png'
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { ButtonGroup } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { indigo } from '@material-ui/core/colors'

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

const theme = createMuiTheme({
  palette:{
    primary: {
      main: indigo[600]      
    }
  }
})

function App() {

  const classes = useStyles();  
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <main>
      <Navbar id="headerNavbar" position="static" className={clsx(classes.appBar, { [classes.appBarShift]: open, })} >

        <div className="navbar-nav">      
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)} >
            <MenuIcon className="menuIcon"/>
          </IconButton>
        </div>

        <div className={classes.title} color="">
          <img src={ImageOfMyName} alt="DavidFerreira" width="300px" height="auto" className="nameImage"/>               
        </div>
        <div variant="h6" className={classes.title} color="" id="cvParent">
          <img src={curriculum_image} alt="CvImage" width="auto" height="90" className="cvImage"/> 
        </div>   

        <NavItem>         

          <DropDownMenu/>

        </NavItem>
      </Navbar>

      <Drawer/>

      <div className={classes.root}>
        <header className="App-header">
          Welcome to my online Curriculum
        </header>
      </div>
      
      <footer className="page-footer">
        <p className="footer-text">
          This web-curriculum was made with react for the purpose of learning how to use it
        </p>
      </footer>
    </main>
  );
}
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

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
export default App;
