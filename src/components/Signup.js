import React from "react";

const Signup = () => {
  return (
    <form>
      <div className="input-fields">
        <div className="username-field">
          <label htmlFor="username" />
          Username
          <input type="text" id="signup-username" />
        </div>

        <div className="password-field">
          <label htmlFor="pass" />
          Password
          <input type="password" id="signup-pass" />
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
  );
};

export default Signup;
