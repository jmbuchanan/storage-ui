import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Units from '../units/Units';
import Billing from '../billing/Billing';
import Contact from '../contact/Contact';
import Directory from '../admin/Directory';
import CustomersTable from '../admin/CustomersTable';
import UnitsTable from '../admin/UnitsTable';
import Login from '../security/Login';
import Register from '../security/Register';
import Success from '../security/Success';

import MaterialHome from '../material-ui/MaterialHome';

class Routes extends Component {
  render() {
    return (
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

        <Route exact path="/material" component={MaterialHome} />
      </Switch>
    );
  }
}

export default Routes; 
