import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {AppBar, Toolbar, IconButton, Tabs, Tab, useMediaQuery} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import logo from '../img/logo.svg'; 

function Header() {

  const useStyles = makeStyles(theme => ({

    root: {
      padding: '0px 5px',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    logoAndHamburger: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    hamburger: {
      width: '50px',
      padding: '0 20px',
      fontSize: '1.5rem'
    },
    tabs: {
      minHeight: '0px',
      overflow: 'hidden',
      '& div': {
        maxHeight: '0px',
        flexDirection: 'column',
        transition: 'max-height .2s ease-in-out'
      }
    },
    navToggled: {
      width: '100%',
      '& div': {
        maxHeight: '500px',
        transition: 'max-height 0.2s ease-in-out'
      },
      '&& a': {
        maxWidth: '100%',
        borderTop: '1px solid gray'
      },
      '&&& span': {
        alignItems: 'flex-start'
      }
    },

    [theme.breakpoints.up('sm')] : {
      root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      logoAndHamburger: {
        width: 'auto'
      },
      hamburger: {
        display: 'none'
      },
      tabs: {
        flexDirection: 'row',
        width: 'auto',
      '& div': {
        flexDirection: 'row',
      },
        '&& a': {
          maxWidth: 'auto',
          borderTop: 'none'
        },
        '&&& span': {
          alignItems: 'center'
        }
      },
      navToggled: {
        display: 'flex',
        flexDirection: 'row',
        width: 'auto',
        '&& a': {
          borderTop: 'none'
        },
        '&&& span': {
          alignItems: 'center'
        }
      }
    },
    [theme.breakpoints.up('md')]: {
      root: {
        padding: '0px 16.6%'
      }
    }
  }));

  const isMobile = useMediaQuery('(max-width:600px)');

  const [isBurgerToggled, setIsBurgerToggled] = useState(false);

  const classes = useStyles(); 

  const toggle = () => {
    setIsBurgerToggled(!isBurgerToggled);
  }

  const toggleFalse = () => {
    setIsBurgerToggled(false);
  }

 
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <div className={classes.logoAndHamburger}>
          <Tab label="&#9776;" className={classes.hamburger} onClick={toggle} />
          <IconButton color="inherit" aria-disabled='true' component={Link} to="/" onClick={toggleFalse}>
            <img src={logo} alt="Logo" />
          </IconButton>
        </div>
        <Tabs className={isMobile && isBurgerToggled ? `${classes.tabs} ${classes.navToggled}` : classes.tabs}>
          <Tab label= "Units" component={Link} to="/units" onClick={toggleFalse} />
          <Tab label= "Billing" component={Link} to="/billing" onClick={toggleFalse} />
          <Tab label="Contact Us" component={Link} to="/contact" onClick={toggleFalse} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
  
export default Header; 
