import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import PreviewCollections from "./PreviewCollections";
import * as ROUTES from "../constants/routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Navigation from "./Navigation";
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

  constructor(props) {
    // super(props);
    // this.state = {
    //   authUser: null
    // };
    super(props);
    this.state = { authUser: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      authUser: !state.authUser
    }));

    console.log(`Auth user: ${this.state.authUser}`);
  }

  render() {
    return (
      <Router>
        <div className="component-wrapper">
          <div className="form-wrapper">
            <div className="routing-buttons" onClick={this.handleClick}>
              {this.state.authUser ? <Login /> : <Signup />}

              {/* <Navigation authUser={this.state.authUser} /> *
            </div>

            {/* <div className="routing-buttons"> */}
              {/*<p className="signup-button" onClick={this.handleClick}>
              Sign up
            </p>
            <p className="login-button" onClick={this.handleClick}>
              Log in
    </p>*/}
              {/* <Navigation authUser={this.state.authUser} /> */}
              {/* </div> */}
            </div>
            <p className="account-question">
              <Link to={ROUTES.PREVIEW_COLLECTIONS}>
                Why should I create an account?
              </Link>
            </p>
            <Route
              path={ROUTES.PREVIEW_COLLECTIONS}
              component={PreviewCollections}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default AuthenticateForm;
