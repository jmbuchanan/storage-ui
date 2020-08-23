import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './_styles.css';

import Home from '../home/Home';
import Units from '../units/Units';
import Billing from '../billing/Billing';
import Contact from '../contact/Contact';
import Directory from '../admin/Directory';
import CustomersTable from '../admin/CustomersTable';
import UnitsTable from '../admin/UnitsTable';
import TransactionsTable from '../admin/TransactionsTable';
import Register from '../security/Register';
import BookUnit from '../units/BookUnit';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path = "/units" component={Units} />
      <Route path = "/book" component={BookUnit} />
      <Route path = "/billing" component={Billing} />
      <Route path = "/contact" component={Contact} />
      <Route exact path = "/register" component={Register} />
      <Route exact path = "/admin" component={Directory} />
      <Route path = "/admin/customers" component={CustomersTable} />
      <Route path = "/admin/units" component={UnitsTable} />
      <Route path = "/admin/transactions" component={TransactionsTable} />
    </Switch>
  );
}

export default Routes;