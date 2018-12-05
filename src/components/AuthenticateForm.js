import React, { Component } from "react";

class AuthenticateForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label for="username" />
          Username
          <input type="text" id="username" />
          <label for="pass" />
          Pass
          <input type="password" id="pass" />
        </form>

        <input type="submit" value="Sign up" />
        <div>&horiz;or&horiz;</div>
        <input type="submit" value="Use another account" />
      </div>
    );
  }
}

export default AuthenticateForm;
