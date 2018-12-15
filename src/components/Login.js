import React from "react";
import { FaUser } from "react-icons/fa";
const Login = () => {
  return (
    // <form>
    //   <div className="input-fields">
    //     <div className="username-field">
    //       <label htmlFor="username" />
    //       Username
    //       <input type="text" id="login-username" />
    //     </div>

    //     <div className="password-field">
    //       <label htmlFor="pass" />
    //       Password
    //       <input type="password" id="login-pass" />
    //     </div>
    //   </div>

    //   <div className="sign-up-buttons">
    //     <input type="submit" value="Log in" />
    //     <div className="or-flex">
    //       <hr className="horiz-left" />
    //       <span className="or-copy">or</span>
    //       <hr className="horiz-right" />
    //     </div>
    //     <input type="submit" value="Use another account" />
    //   </div>
    // </form>
    <div className="login-wrapper">
      {/* <p className="login-button">
        Login <FaUser />
      </p> */}
      <form>
        <div className="input-fields">
          <div className="username-field">
            <label htmlFor="username" />
            Username
            <input type="text" id="login-username" />
          </div>
          <div className="password-field">
            <label htmlFor="pass" />
            Password
            <input type="password" id="login-pass" />
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
};

export default Login;
