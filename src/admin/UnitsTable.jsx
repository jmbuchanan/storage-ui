import React, { useState, useEffect } from 'react';

import axios from 'axios';

const UnitsTable = () => {

  const [data, setData] = useState({});
  
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
      var content = [];
      for (var i = 0; i < data.length; i++) {
        content.push(data[i]);
      }

      return content.map((data, i) => (
        <tr key={i}>
          <td>{data.unitNumber}</td>
          <td>{data.large ? "Yes" : "No"}</td>
          <td>{data.occupied ? "Yes" : "No"}</td>
          <td className="lg">{(data.startDate == null) ? "" : data.startDate.substring(0,10)}</td>
          <td>{data.delinquent ? "Yes" : "No"}</td>
          <td className="lg">{data.daysDelinquent}</td>
        </tr>
        )
      );

    }

    return (
      <div className="default-body">
        <a href="/admin">Return</a>
        <div className="table-header">
        <h1>Units</h1>
        <button className="excel-icon" onClick={handleClick}>
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
      </div>
    );
  }

export default UnitsTable;