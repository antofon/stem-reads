import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import app from "../Firebase/firebase";
import * as ROUTES from "../constants/routes";

class Dashboard extends Component {
  signOut = () => {
    console.log("User signed out successfully");
    app.auth().signOut();
    this.props.history.push(ROUTES.LANDING);
  };

  render() {
    return (
      <div>
        <h2>Welcome to the Dashboard!!!!</h2>

        <input
          type="button"
          value="Sign out"
          id="Sign out"
          onClick={this.signOut}
        />
      </div>
    );
  }
}

export default withRouter(Dashboard);
