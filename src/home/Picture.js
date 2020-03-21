import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import storageDesktop from '../img/storage-main-desktop.jpg';

function Picture() {

  const useStyles = makeStyles({
    root: {
      overflowX: 'hidden'
    }
  })

  const classes = useStyles();


  return (
    <Paper className={classes.root}>
      <img src={ storageDesktop } alt="Storage units located conveniently close to downtown Jefferson, GA"/>
    </Paper>
  );
}

export default Picture;