import React, { Component } from 'react';
import axios from 'axios';

class CustomersTable extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };

    this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
      window.location.href = "https://www.jeffersonminiwarehouses.com/api/customers/getAllCustomers/export";
    }


    componentDidMount() {
      const api = "https://www.jeffersonminiwarehouses.com/api/customers/getAllCustomers";

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
          <td className="hidden-when-mobile">{data.customerId}</td>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.email}</td>
          <td>{data.phoneNumber}</td>
          <td className="hidden-when-mobile">{data.streetAddress}</td>
          <td className="hidden-when-mobile">{data.secondStreetAddress}</td>
          <td className="hidden-when-mobile">{data.state}</td>
          <td className="hidden-when-mobile">{data.zip}</td>
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
            <th className="hidden-when-mobile">Id</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Number</th>
            <th className="hidden-when-mobile">Address</th>
            <th className="hidden-when-mobile">Address (2)</th>
            <th className="hidden-when-mobile">State</th>
            <th className="hidden-when-mobile">Zip</th>
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