import React, { Component } from 'react';

class Directory extends Component {
    render() {
        return (
          <div className="default-body">
            <h1>Table of Contents</h1>
            <ul className="toc">
                <li><a href="/admin/customers">Customers</a></li>
                <li><a href="/admin/units">Units</a></li>
            </ul>
          </div>
        )
    }
}

export default Directory;