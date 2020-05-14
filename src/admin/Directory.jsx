import React from 'react';

import ProtectedResource from '../security/ProtectedResource';

const WrappedDirectory = () => {
    return (
      <div className="default-body">
        <h1>Table of Contents</h1>
        <ul className="toc paper">
            <li><a href="/admin/customers">Customers</a></li>
            <li><a href="/admin/units">Units</a></li>
            <li><a href="/admin/transactions">Transactions</a></li>
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