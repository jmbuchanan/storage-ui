import React, { Component } from 'react';
import axios from 'axios';

import './_styles.css';

class CustomersTable extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };

    this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
      window.location.href = process.env.REACT_APP_DOMAIN + "customers/getAllCustomers/export";
    }


    componentDidMount() {
      const api = process.env.REACT_APP_DOMAIN + "customers/getAllCustomers";

      axios.get(api, {withCredentials: true})
        .then((result) => {
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
          <td className="lg">{data.customerId}</td>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.email}</td>
          <td>{data.phoneNumber}</td>
          <td className="lg">{data.streetAddress}</td>
          <td className="lg">{data.secondStreetAddress}</td>
          <td className="lg">{data.state}</td>
          <td className="lg">{data.zip}</td>
        </tr>
        )
      )

    }
    render () {

    return (
      <div className="default-body">
        <a href="/admin">Return</a>
        <div className="table-header">
        <h1>Customers</h1>
        <button className="excel-icon" onClick={this.handleClick}>
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
          </tr>
          </thead>
          <tbody>
          {this.renderContent()}
          </tbody>
        </table>
        </div>
      </div>
    );
    }
}

export default CustomersTable;