import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = event => {};

  render() {
    return (
      <div className="signup-wrapper">
        <form>
          <div className="input-fields">
            <div className="username-field">
              <label htmlFor="username" />
              Username
              <input type="text" id="username" />
            </div>
            <div className="password-field">
              <label htmlFor="pass" />
              Password
              <input type="password" id="pass" />
            </div>

            <div className="confirm-password-field">
              <label htmlFor="confirm-pass" />
              Confirm Password
              <input type="password" id="confirm-pass" />
            </div>
          </div>

          <div className="sign-up-buttons">
            <input type="submit" value="Sign up" onSubmit={this.onSubmit} />
            {/* <div className="or-flex">
              <hr className="horiz-left" />
              <span className="or-copy">or</span>
              <hr className="horiz-right" />
            </div>
            <input type="submit" value="Use another account" /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
