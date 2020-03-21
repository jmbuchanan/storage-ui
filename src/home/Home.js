import React from 'react';

import { makeStyles } from '@material-ui/core';

import Picture from './Picture';
import Text from './Text';
import Features from './Features';

function Home() {

  const useStyles = makeStyles({
    wrapper: {
      display: 'grid',
      gridTemplateAreas: `
        'picture' 'picture'
        'text' 'features'
      `
    }
  })

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Picture />
      <Text />
      <Features />
    </div>
  );
}

export default Home;