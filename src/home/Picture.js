import React from 'react';

import storageDesktop from '../img/storage-main-desktop.jpg';
import { makeStyles } from '@material-ui/core';


function Picture() {

  const useStyles = makeStyles({
    root: {
      gridArea: 'picture'
    }
  })

  const classes = useStyles();

    return (
        <div className={classes.root}>
          <img src={ storageDesktop } className="jumbotron" alt="Storage units located conveniently close to downtown Jefferson, GA"/>
        </div>
    );
}

export default Picture;