import React, { useState, useEffect } from 'react';

import axios from 'axios';

const TransactionsTable = () => {

  const [data, setData] = useState([]);
  
  const handleClick = () => {
    window.location.href = process.env.REACT_APP_DOMAIN + "/transactions/getAllTransactions/export";
  }

  const fetchData = async () => {
    const api = process.env.REACT_APP_DOMAIN + "/transactions/getAllTransactions";
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

      return data.map((data, i) => (
        <tr key={i}>
          <td>{data.id}</td>
          <td>{data.type}</td>
          <td>{data.date}</td>
          <td>{data.amount}</td>
          <td>{data.customer_id}</td>
          <td>{data.unit_id}</td>
        </tr>
        )
      )

    }

    return (
      <div className="default-body">
        <a href="/admin">Return</a>
        <div className="table-header">
        <h1>Transactions</h1>
        <button className="excel-icon paper" onClick={handleClick}>
        </button>
        </div>
        <div className="table-div">
        <table>
          <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Customer Id</th>
            <th>Unit Id</th>
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

export default TransactionsTable;