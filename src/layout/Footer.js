import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core';


function Footer() {

  const useStyles = makeStyles({
    link: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#212f3d',
    }
  })

  const AddressTypography = withStyles({
    root: {
      color: 'white'
    }
  })(Typography)

  const classes = useStyles();

  return (
    <footer className={classes.link}>
      <address>
        <AddressTypography align="center" gutterBottom>
          50 Professional Drive,<br />
          Jefferson GA, 30549
        </AddressTypography>
      </address>
    </footer>
  );
}

export default Footer; 
