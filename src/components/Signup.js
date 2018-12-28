import React, { Component } from "react";
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        console.log(
          `username: ${username}, email: ${email}, password: ${passwordOne}`
        );
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div className="signup-wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="input-fields">
            <div className="username-field">
              <label htmlFor="username" />
              Username
              <input
                name="username"
                value={username}
                onChange={this.onChange}
                // placeholder="Full Name"
                type="text"
                id="username"
              />
            </div>

            <div className="email-field">
              <label htmlFor="email" />
              Email Address
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                // placeholder="Email Address"
                type="email"
                id="email"
              />
            </div>

            <div className="password-field">
              <label htmlFor="pass" />
              Password
              <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                // placeholder="Full Name"
                type="password"
                id="pass"
              />
            </div>

            <div className="confirm-password-field">
              <label htmlFor="confirm-pass" />
              Confirm Password
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                // placeholder="Full Name"
                type="password"
                id="confirm-pass"
              />
            </div>
          </div>
          {error && <p id="error-message">{error.message}</p>}
          <div className="sign-up-buttons">
            <input disabled={isInvalid} type="submit" value="Sign up" />
            {/* <div className="or-flex">
              <hr className="horiz-left" />
              <span className="or-copy">or</span>
              <hr className="horiz-right" />
            </div>
            <input type="submit" value="Use another account" /> */}
          </div>

          {/* {error && <p>Passwords Don't Match</p>} */}
        </form>
      </div>
    );
  }
}

export default Signup;
