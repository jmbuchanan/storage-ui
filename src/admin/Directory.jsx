import React from 'react';

import { Link } from 'react-router-dom';

import ProtectedResource from '../security/ProtectedResource';

const WrappedDirectory = () => {
    return (
      <div className="default-body">
        <h1>Table of Contents</h1>
        <ul className="toc paper">
            <li><Link to="/admin/customers">Customers</Link></li>
            <li><Link to="/admin/units">Units</Link></li>
            <li><Link to="/admin/transactions">Transactions</Link></li>
        </ul>
      </div>
    );
}

const Directory = () => {

  const Component = () => {
    return ProtectedResource(WrappedDirectory);
  }

  return (
    <div className="default-body">
      <Component />
    </div>
  );
}

export default Directory;