import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Units from './Units';
import Billing from './Billing';
import Contact from './Contact';
import CustomersTable from './CustomersTable';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/units" component={Units} />
        <Route path = "/billing" component={Billing} />
        <Route path = "/contact" component={Contact} />
        <Route path = "/admin/customers" component={CustomersTable} />
      </Switch>
    );
  }
}

export default Routes; 
