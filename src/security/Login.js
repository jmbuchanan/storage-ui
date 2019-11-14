import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      requestStatus: ''
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleUsername(e) {
    this.setState({username: e.target.value});
    console.log(this.state.username);
  }
  
  handlePassword(e) {
    this.setState({password: e.target.value});
    console.log(this.state.password);
  }

  handleSubmit(e) {

    let formData = new URLSearchParams();
    formData.set('username', this.state.username);
    formData.set('password', this.state.password);

    axios('http://localhost:8080/login', {
      method: 'POST',
      data: formData
    })
    .then(response => {
      console.log(response);
      this.setState({requestStatus: response.status})
    })
    .catch(error => {
      console.log(error);
    });
  }

    render() {
        return (
          <div className="default-body">
            <div>
              <h2>Please sign in</h2>
                <input 
                  type="text" 
                  placeholder="Username"
                  value={this.state.username}
                  onChange = {this.handleUsername}
                />
                <br/>
                <input
                  type="password" 
                  placeholder="Password"
                  value={this.state.password}
                  onChange = {this.handlePassword}
                />
                <br/>
                <button 
                  className="login-button"
                  type="submit"
                  value="Login"
                  onClick={this.handleSubmit}
                >
                  Sign in
                </button>
            </div>
          </div>
        )
    }
  }

export default Login;