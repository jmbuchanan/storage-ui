import React from 'react';

const Directory = () => {
    return (
      <div className="default-body">
        <h1>Table of Contents</h1>
        <ul className="toc">
            <li><a href="/admin/customers">Customers</a></li>
            <li><a href="/admin/units">Units</a></li>
            <li><a href="/admin/transactions">Transactions</a></li>
        </ul>
      </div>
    )
}

export default Directory;