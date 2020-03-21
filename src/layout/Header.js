import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {AppBar, Toolbar, IconButton, Tabs, Tab} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import logo from '../img/logo.svg'; 

  const styles = theme => ({

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
      transition: 'display 0.15s ease-out',
      overflow: 'hidden',
      width: '100%',
      '& div': {
        flexDirection: 'column',
      },
      '&& a': {
        borderTop: '1px solid gray'
      },
      '&&& span': {
        alignItems: 'flex-start'
      }
    },
    hidden: {
      display: 'none',
      overflow: 'hidden'
    },

    [theme.breakpoints.up('sm')] : {
      root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
          borderTop: 'none'
        },
        '&&& span': {
          alignItems: 'center'
        }
      },
      hidden: {
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
  });



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
        <Tabs className={this.state.isToggled ? classes.tabs : `${this.props.classes.tabs} ${this.props.classes.hidden}`}>
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
