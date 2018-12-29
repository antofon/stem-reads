import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name);
  };

  onSubmit = event => {
    console.log("Submit clicked");
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.DASHBOARD);
        console.log(`email: ${email}, password: ${password}`);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="login-wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="input-fields">
            <div className="username-field">
              <label htmlFor="login-email" />
              Email Address
              <input
                name="email"
                type="text"
                id="login-email"
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="password-field">
              <label htmlFor="login-password" />
              Password
              <input
                name="password"
                type="password"
                id="login-password"
                value={password}
                onChange={this.onChange}
              />
            </div>
          </div>

          {error && <p className="error-message">{error.message}</p>}
          <div className="sign-up-buttons">
            <input disabled={isInvalid} type="submit" value="Log in" />
            {/* LOG IN WITH GOOGLE LATER */}
            {/* <div className="or-flex">
              <hr className="horiz-left" />
              <span className="or-copy">or</span>
              <hr className="horiz-right" />
            </div>
            <input type="submit" value="Log in with Google" /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
