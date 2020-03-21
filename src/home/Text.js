import React from 'react';

import { Phone } from 'react-feather';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core';

function Text() {

  const PaddedPaper = withStyles({
    root: {
      height: '100%',
      padding: '15px',
      backgroundColor: '#f2f2f2',
    }
  })(Paper)

  const HeaderTypography = withStyles({
    root: {
      marginBottom: '25px',
      fontWeight: '500'
    }
  })(Typography)

  const useStyles = makeStyles({
    root: {
      gridArea: 'text'
    },
    phone: {
      fontSize: '20px',
      color: '#669'
    }
  })

  const classes = useStyles();
  
    return (
      <PaddedPaper className={classes.root}>
        <HeaderTypography color="primary" variant="h4" component="h1">
          Warehouses in Jefferson, GA for Your Storage Needs
        </HeaderTypography>
        <Typography color="primary" className="body-text">
          Jefferson Mini Warehouses offers secure and affordable self-storage warehouses conveniently located in downtown Jefferson.
           With professional management and over 40 units with a variety of sizes, we are here to meet all of your storage needs.
           Call today to learn more!
        </Typography>
        <p><Phone size='20' color='#212F3D'/> <a className={classes.phone} href="tel://+14044417583">404-441-7583</a></p>
      </PaddedPaper>
    );
}

export default Text;