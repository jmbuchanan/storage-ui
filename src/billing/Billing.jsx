import React from 'react';

import './_styles.css';
import ProtectedResource from '../security/ProtectedResource';

const BillingBody = () => {
  return (
      <div className="billing paper">
        <p>Coming soon...</p>
      </div>
  );
}

const Billing = () => {

  const Component = ProtectedResource(BillingBody);

  return (
    <div className="default-body">
      <h1>Pay Bill</h1>
      <Component />
    </div>
  );
}

export default Billing;