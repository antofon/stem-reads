import React, { Component } from "react";
import PreviewCollections from "./PreviewCollections";
import AuthenticateForm from "./Auth/AuthenticateForm";
import AccountFaq from "./AccountFaq";
import * as ROUTES from "../constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navigation from "./Navigation";

class Landing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={AuthenticateForm} />
          <Route path={ROUTES.ACCOUNT_FAQ} component={AccountFaq} />
          <Route
            path={ROUTES.PREVIEW_COLLECTIONS}
            component={PreviewCollections}
          />
        </Switch>
      </Router>
    );
  }
}

export default Landing;
