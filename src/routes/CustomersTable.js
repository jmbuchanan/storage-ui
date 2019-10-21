
import React, { Component } from 'react';

import axios from 'axios';

class query extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      const api = "http://localhost:8080/customers/getAllCustomers";

      axios.get(api)
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
          <td>{data.customerId}</td>
          <td>{data.email}</td>
          <td>{data.phoneNumber}</td>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.streetAddress}</td>
          <td>{data.secondStreetAddress}</td>
          <td>{data.state}</td>
          <td>{data.zip}</td>
        </tr>
        )
      )

    }
    render () {

    return (
      <div className="default-body">
        <table>
          <tr>
            <th>Customer Id</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Street Address</th>
            <th>Street Address (2)</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
          {this.renderContent()}
        </table>
      </div>
    );
    }
}

export default query;