import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FirebaseContext } from "./Firebase";
import * as ROUTES from "../constants/routes";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Dashboard!!!!</h2>
        <FirebaseContext.Consumer>
          {firebase => (
            <input
              type="button"
              firebase={firebase}
              value="Sign out"
              id="Sign out"
              onClick={() => {
                firebase.doSignOut(() => {
                  console.log("Sign out clicked");
                  this.props.history.push(ROUTES.LANDING);
                });
              }}
            />
          )}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}

export default withRouter(Dashboard);
