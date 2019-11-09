import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Units from '../units/Units';
import Billing from '../billing/Billing';
import Contact from '../contact/Contact';
import CustomersTable from '../admin/CustomersTable';
import UnitsTable from '../admin/UnitsTable';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/units" component={Units} />
        <Route path = "/billing" component={Billing} />
        <Route path = "/contact" component={Contact} />
        <Route path = "/admin/customers" component={CustomersTable} />
        <Route path = "/admin/units" component={UnitsTable} />
      </Switch>
    );
  }
}

export default Routes; 
