import React from 'react';

import { Link } from 'react-router-dom';

import ProtectedResource from '../security/ProtectedResource';


const Directory = () => {

  const TableOfContents = () => {
    return (
      <>
        <h1>Table of Contents</h1>
        <ul className="toc paper">
            <li><Link to="/admin/customers">Customers</Link></li>
            <li><Link to="/admin/units">Units</Link></li>
            <li><Link to="/admin/transactions">Transactions</Link></li>
        </ul>
      </>
    );
  }

  return (
    <div className="default-body">
      <ProtectedResource isAdminRequired>
        <TableOfContents />
      </ProtectedResource>
    </div>
  );

}


export default Directory;