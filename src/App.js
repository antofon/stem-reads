import React, { Component } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./styles/css/main.css";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import AccountFaq from "./components/AccountFaq";
import PreviewCollections from "./components/PreviewCollections";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="app">
            <Header />
          </div>
          <Switch>
            <Route
              exact
              path={ROUTES.LANDING}
              render={props => (
                // <div className="app">
                <Landing />
                // {/* <AuthenticateForm /> */}
                // </div>
              )}
            />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={ROUTES.ACCOUNT_FAQ} component={AccountFaq} />
            <Route
              path={ROUTES.PREVIEW_COLLECTIONS}
              component={PreviewCollections}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
