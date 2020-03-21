import React from 'react';

import { Lock, Box, DollarSign } from 'react-feather';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

function Features() {

const useStyles = makeStyles({
  root: {
    gridArea: 'features',
    height: '100%',
    listStyleType: 'none',
    '& li': {
      margin: '30px 0px',
      display: 'flex',
      alignItems: 'center'
    },
    '& span': {
      marginLeft: '20px'
    }
  }
})

const classes = useStyles();

    return (
      <ul className={classes.root}>
        <li><Lock size='50' color='#212F3D'/><Typography variant="h4" component="span">Secure</Typography></li>
        <li><Box size='50' color='#212F3D'/><Typography variant="h4" component="span">Local</Typography></li>
        <li><DollarSign size='50' color='#212F3D'/><Typography variant="h4" component="span">Affordable</Typography></li>
      </ul>
    );
}

export default Features;