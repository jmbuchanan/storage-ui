import React from 'react';

import logo from '../img/logo.svg'; 
import storageDesktop from '../img/storage-main-desktop.jpg';


import { Lock, Box, DollarSign } from 'react-feather';

import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Home() {

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="menu">
              <img src={logo} alt="Logo" />
            </IconButton>
            <Tabs>
              <Tab label="Units" />
              <Tab label="Billing" />
              <Tab label="Contact Us" />
            </Tabs>
          </Toolbar>
    </AppBar>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={8}>
        <img src={ storageDesktop } className="jumbotron" alt="Storage units located conveniently close to downtown Jefferson, GA"/>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper>
          <Typography color="primary" variant="h3">
            Warehouses in Jefferson, GA for Your Storage Needs
          </Typography>
          <Typography color="primary" className="body-text">
            Jefferson Mini Warehouses offers secure and affordable self-storage warehouses conveniently located in downtown Jefferson. With professional management and over 40 units with a variety of sizes, we are here to meet all of your storage needs. Call today to learn more!
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <ul>
          <li><Lock size='50' color='#212F3D'/><span className="feature">Secure</span></li>
          <li><Box size='50' color='#212F3D'/><span className="feature">Local</span></li>
          <li><DollarSign size='50' color='#212F3D'/><span className="feature">Affordable</span></li>
        </ul>
      </Grid>
    </Grid>
    <footer>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Subtitle
        </Typography>
      </Container>
    </footer>
  </React.Fragment>
    );
}

export default Home;