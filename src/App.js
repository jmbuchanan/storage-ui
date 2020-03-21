import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';
import deepOrange from '@material-ui/core/colors/deepOrange';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Home from './home/Home';
import Directory from './admin/Directory';
import CustomersTable from './admin/CustomersTable';
import UnitsTable from './admin/UnitsTable';
import Billing from './billing/Billing';
import Contact from './contact/Contact';
import Login from './security/Login';
import Register from './security/Register';
import Success from './security/Success';
import Units from './units/Units';

import Header from './layout/Header';
import Footer from './layout/Footer';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212f3d'
    }
  }
});

function App() {

  const MainGrid = withStyles({
    root: {
      minHeight: "85vh",
      overflowX: 'hidden',
      overflowY: 'hidden'
    }
  })(Grid)
 
  return (

    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <MainGrid container
        direction = 'row'
        justify = 'center'
        >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path = "/admin" component={Directory} />
          <Route path = "/admin/customers" component={CustomersTable} />
          <Route path = "/admin/units" component={UnitsTable} />
          <Route path = "/billing" component={Billing} />
          <Route path = "/contact" component={Contact} />
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/register" component={Register} />
          <Route exact path = "/success" component={Success} />
          <Route path = "/units" component={Units} />
        </Switch>
      </MainGrid>
      <Footer />
    </MuiThemeProvider>

  );
}

export default App;