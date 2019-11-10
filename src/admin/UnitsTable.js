import React, { Component } from 'react';

import axios from 'axios';

class UnitsTable extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      const api = "http://localhost:8080/units/getAllUnits";


      axios.get(api, {
        auth: {
          username: 'admin',
          password: 'password'
        }
      })
        .then(result => {
          console.log(result);
          this.setState({data: result.data})
        })
        .catch((error) => {
          console.log(error);
        });
    }

    renderContent() {
      if (this.state.data.length === 0) {
        return null;
      }
      var content = [];
      for (var i = 0; i < this.state.data.length; i++) {
        content.push(this.state.data[i]);
      }

      return content.map((data, i) => (
        <tr key={i}>
          <td>{data.unitNumber}</td>
          <td>{data.large ? "t" : "f"}</td>
          <td>{data.occupied ? "t" : "f"}</td>
          <td>{(data.startDate == null) ? "" : data.startDate.substring(0,10)}</td>
          <td>{data.delinquent ? "t" : "f"}</td>
          <td>{data.daysDelinquent}</td>
        </tr>
        )
      )

    }
    render () {

    return (
      <div className="default-body">
        <a href="/admin">Return</a>
        <h1>Units</h1>
        <table>
          <tr>
            <th>Unit Number</th>
            <th>Large</th>
            <th>Occupied</th>
            <th>Start Date</th>
            <th>Delinquent</th>
            <th>Days Delinquent</th>
          </tr>
          {this.renderContent()}
        </table>
      </div>
    );
    }
}

export default UnitsTable;