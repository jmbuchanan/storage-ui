import React, { useState, useEffect } from 'react';

import axios from 'axios';
import ProtectedResource from '../security/ProtectedResource';

const UnitsTable = () => {

  const [data, setData] = useState([]);
  
  const handleClick = () => {
    window.location.href = process.env.REACT_APP_DOMAIN + "/units/getAllUnits/export";
  }

  const fetchData = async () => {
    const api = process.env.REACT_APP_DOMAIN + "/units/getAllUnits";
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
          <td>{data.unitNumber}</td>
          <td>{data.large ? "Yes" : "No"}</td>
          <td>{data.occupied ? "Yes" : "No"}</td>
          <td className="lg">{(data.startDate == null) ? "" : data.startDate}</td>
          <td>{data.delinquent ? "Yes" : "No"}</td>
          <td className="lg">{data.daysDelinquent}</td>
        </tr>
        )
      );

    }

    return (
      <div className="default-body">
        <ProtectedResource isAdminRequired>
        <a href="/admin">Return</a>
        <div className="table-header">
        <h1>Units</h1>
        <button className="excel-icon paper" onClick={handleClick}>
        </button>
        </div>
        <div className="table-div">
        <table>
          <thead>
          <tr>
            <th>Unit Number</th>
            <th>Large</th>
            <th>Occupied</th>
            <th className="lg">Start Date</th>
            <th>Delinquent</th>
            <th className="lg">Days Delinquent</th>
          </tr>
          </thead>
          <tbody>
          {renderContent()}
          </tbody>
        </table>
        </div>
        </ProtectedResource>
      </div>
    );
  }

export default UnitsTable;