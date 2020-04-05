import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './_styles.css';

const CustomersTable = () => {

  const [data, setData] = useState({});

  const handleClick = () => {
    window.location.href = process.env.REACT_APP_DOMAIN + "/customers/getAllCustomers/export";
  }

  const fetchData = async () => {
    const api = process.env.REACT_APP_DOMAIN + "/customers/getAllCustomers";
    const response = await axios.get(
      api, {withCredentials: true}
    );
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (data.length === 0) {
      return null;
    }
    var content = [];
    for (var i = 0; i < data.length; i++) {
      content.push(data[i]);
    }

    return content.map((data, i) => (
      <tr key={i}>
        <td className="lg">{data.id}</td>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.email}</td>
        <td>{data.phoneNumber}</td>
        <td className="lg">{data.streetAddress}</td>
        <td className="lg">{data.secondStreetAddress}</td>
        <td className="lg">{data.state}</td>
        <td className="lg">{data.zip}</td>
        <td className="lg">{data.admin ? "Yes" : "No"}</td>
      </tr>
      )
    );
  }

  return (
    <div className="default-body">
      <a href="/admin">Return</a>
      <div className="table-header">
      <h1>Customers</h1>
      <button className="excel-icon" onClick={handleClick}>
      </button>
      </div>
      <div className="table-div">
      <table>
        <thead>
        <tr>
          <th className="lg">Id</th>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
          <th className="lg">Address</th>
          <th className="lg">Address (2)</th>
          <th className="lg">State</th>
          <th className="lg">Zip</th>
          <th className="lg">Admin</th>
        </tr>
        </thead>
        <tbody>
        {renderContent()}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default CustomersTable;