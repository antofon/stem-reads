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
            <button
              type="submit"
              firebase={firebase}
              id="Sign out"
              onClick={() => {
                firebase.doSignOut(() =>
                  this.props.history.push(ROUTES.LANDING)
                );
              }}
            >
              Sign out
            </button>
          )}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}

export default withRouter(Dashboard);
