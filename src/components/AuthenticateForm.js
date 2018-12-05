import React, { Component } from "react";

class AuthenticateForm extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form>
          <label for="username" />
          Username
          <input type="text" id="username" />
          <label for="pass" />
          Password
          <input type="password" id="pass" />
        </form>

        <div className="sign-up-buttons">
          <input type="submit" value="Sign up" />
          <div className="or-flex">
            <hr className="horiz-left" />
            <span className="or-copy">or</span>
            <hr className="horiz-right" />
          </div>
          <input type="submit" value="Use another account" />
        </div>
      </div>
    );
  }
}

export default AuthenticateForm;
