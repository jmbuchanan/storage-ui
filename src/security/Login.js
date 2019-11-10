import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
          <div className="default-body">
            <h1>Login</h1>
            <form method="post">
                Username: <br/>
                <input type="text" name="username"/>
                <br/>
                Password: <br/>
                <input type="password" name="password"/>
                <br/>
                <input type="submit" value="Login"/>
            </form>
          </div>
        )
    }
}

export default Login;