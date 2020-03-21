import React from 'react';

import { makeStyles, Grid } from '@material-ui/core';

import Picture from './Picture';
import Text from './Text';
import Features from './Features';


function Home() {

  const useStyles = makeStyles({
    roundedCorner: {
      borderRadius: '4px'
    },
    responsiveGrid: {
      direction: 'column'
    },
    '@media (min-width: 600px)': {
      responsiveGrid: {
        direction: 'row'
      }
    }
  })

  const classes = useStyles();

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} md={8} className={classes.roundedCorner}>
          <Picture />
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.responsiveGrid}>
        <Grid item xs={12} md={4} className={classes.roundedCorner}>
          <Text />
        </Grid>
        <Grid item xs={12} md={4} className={classes.roundedCorner}>
          <Features />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;