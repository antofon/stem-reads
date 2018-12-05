import React, { Component } from "react";

class AuthenticateForm extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { clicked: true };
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  //   handleClick() {
  //     if (this.state.clicked === "true") {
  //       //   this.setState(state => ({

  //       //   }));
  //       alert(this.state.clicked);
  //     } else {
  //       this.setState(state => ({
  //         clicked: !state.clicked
  //       }));
  //       alert(this.state.clicked);
  //     }
  // }
  render() {
    return (
      <div className="form-wrapper">
        <div class="routing-buttons">
          <p className="signup-button" onClick={this.handleClick}>
            Sign up
          </p>
          <p className="login-button" onClick={this.handleClick}>
            Log in
          </p>
        </div>

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
          </div>

          <div className="sign-up-buttons">
            <input type="submit" value="Sign up" />
            <div className="or-flex">
              <hr className="horiz-left" />
              <span className="or-copy">or</span>
              <hr className="horiz-right" />
            </div>
            <input type="submit" value="Use another account" />
          </div>
        </form>
      </div>
    );
  }
}

export default AuthenticateForm;
