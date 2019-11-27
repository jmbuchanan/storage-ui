import React, { Component } from 'react';

import axios from 'axios';

class Authenticate extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }

    componentDidMount() {
      const api = "https://www.jeffersonminiwarehouses.com/api/authenticate";

      axios.get(api)
        .then((result) => {
          console.log(result);
          this.setState({data: result})
        })
        .catch((error) => {
                console.log(error);
            }
        );
    }

    render() {
        if (this.state.data != null) {
        return <p>{this.state.data}</p>
        }
        else {
            return <p>Hasn't rendered...</p>;
        }
    }
}

export default Authenticate;