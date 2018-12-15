import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import AccountFaq from "./components/AccountFaq";
import PreviewCollections from "./components/PreviewCollections";
import * as ROUTES from "./constants/routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path={ROUTES.LANDING} component={App} />
      <Route path={ROUTES.PREVIEW_COLLECTIONS} component={PreviewCollections} />
      <Route path={ROUTES.ACCOUNT_FAQ} component={AccountFaq} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
