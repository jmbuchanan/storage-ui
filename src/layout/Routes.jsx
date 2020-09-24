import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './_styles.css';

import Home from '../home/Home';
import Book from '../book/Book';
import Portal from '../portal/Portal';
import Directory from '../admin/Directory';
import CustomersTable from '../admin/CustomersTable';
import UnitsTable from '../admin/UnitsTable';
import TransactionsTable from '../admin/TransactionsTable';
import Register from '../security/Register';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path = "/portal" component={Portal} />
      <Route exact path = "/register" component={Register} />
      <Route exact path = "/book" component={Book} />
      <Route exact path = "/admin" component={Directory} />
      <Route exact path = "/admin/customers" component={CustomersTable} />
      <Route exact path = "/admin/units" component={UnitsTable} />
      <Route exact path = "/admin/transactions" component={TransactionsTable} />
    </Switch>
  );
}

export default Routes;