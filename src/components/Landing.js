import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PreviewCollections from "./PreviewCollections";
import AuthenticateForm from "./Auth/AuthenticateForm";
import AccountFaq from "./AccountFaq";
import NotFound from ".//NotFound";
import Dashboard from "./Dashboard";
import * as ROUTES from "../constants/routes";
// import Navigation from "./Navigation";

class Landing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={AuthenticateForm} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route path={ROUTES.ACCOUNT_FAQ} component={AccountFaq} />
          <Route
            path={ROUTES.PREVIEW_COLLECTIONS}
            component={PreviewCollections}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Landing;
