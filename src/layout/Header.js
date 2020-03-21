import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {AppBar, Toolbar, IconButton, Tabs, Tab} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import logo from '../img/logo.svg'; 

  const styles = {

    root: {
      padding: '0px 5px',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    logoAndHamburger: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    hamburger: {
      width: '50px',
      padding: '20px',
      fontSize: '1.5rem'
    },
    tabs: {
      width: '100%',
      '&& a': {
        borderTop: '1px solid gray'
      },
      '&&& span': {
        alignItems: 'flex-start'
      }
    },
    hidden: {
      display: 'none'
    },

    '@media (min-width: 768px)': {
      root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      hamburger: {
        display: 'none'
      },
      tabs: {
        display: 'block',
        width: 'auto',
        '&& a': {
          borderTop: 'none'
        },
        '&&& span': {
          alignItems: 'center'
        }
      }
    },

    '@media (min-width: 1024px)': {
      root: {
        padding: '0px 16.6%'
      }
    }
  };



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: false};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => (
      {isToggled : !state.isToggled}
    ));
    }


  render() {

  const { classes } = this.props;

    return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <div className={classes.logoAndHamburger}>
          <Tab label="&#9776;" className={classes.hamburger} onClick={this.toggle} />
          <IconButton color="inherit" aria-disabled='true' component={Link} to="/">
            <img src={logo} alt="Logo" />
          </IconButton>
        </div>
        <Tabs orientation={false ? 'horizontal' : 'vertical'} className={true ? classes.tabs : classes.hidden}>
          <Tab label="Units" component={Link} to="/units" />
          <Tab label="Billing" component={Link} to="/billing" />
          <Tab label="Contact Us" component={Link} to="/contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
    }
  }
  
export default withStyles(styles)(Header); 
