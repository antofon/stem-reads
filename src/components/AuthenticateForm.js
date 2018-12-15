import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

class AuthenticateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { authUser: true, showAuthSignup: false, showAuthLogin: true };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handleSignupClick() {
    if (this.state.showAuthLogin) {
      return null;
    }
    this.setState(state => ({
      authUser: !state.authUser,
      showAuthSignup: !state.showAuthSignup,
      showAuthLogin: !state.showAuthLogin
    }));

    console.log(
      `SignUp Clicked -> Auth signup: ${
        this.state.showAuthSignup
      } and Auth login:${this.state.showAuthLogin}`
    );
  }
  handleLoginClick() {
    if (this.state.showAuthSignup) {
      return null;
    }
    this.setState(state => ({
      authUser: !state.authUser,
      showAuthLogin: !state.showAuthLogin,
      showAuthSignup: !state.showAuthSignup
    }));

    console.log(
      `LoginClicked -> Auth signup: ${
        this.state.showAuthSignup
      } and Auth login:${this.state.showAuthLogin}`
    );
  }
  render() {
    return (
      <div className="component-wrapper">
        <div className="form-wrapper">
          <div className="routing-buttons">
            <p className="signup-button" onClick={this.handleSignupClick}>
              <span className="auth-copy">Sign up</span>
              <span className="auth-icon">
                <FaUser />
              </span>
            </p>
            <p className="login-button" onClick={this.handleLoginClick}>
              <span className="auth-copy">Login</span>
              <span className="auth-icon">
                <FaUser />
              </span>
            </p>
          </div>
          {this.state.authUser ? (
            <Login authLogin={this.state.showAuthLogin} />
          ) : (
            <Signup authSignup={this.state.showAuthSignup} />
          )}

          {/* {this.state.authUser ? <Login /> : <Signup />} */}
          {/* <Login />
            <Signup /> */}
          {/* <Navigation authUser={this.state.authUser} /> *
          </div>

          {/* <div className="routing-buttons"> */}

          {/* <Navigation authUser={this.state.authUser} /> */}
          {/* </div> */}
        </div>
        <p className="account-question">
          <Link to={ROUTES.ACCOUNT_FAQ}>Why should I create an account?</Link>
        </p>

        <p className="preview-collection-wrapper">
          <Link to={ROUTES.PREVIEW_COLLECTIONS}>
            <button className="preview-collection">Preview Collection</button>
          </Link>
        </p>
      </div>
    );
  }
}

export default AuthenticateForm;
