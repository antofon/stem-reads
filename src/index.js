import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import NotFound from "./components/NotFound";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import PreviewCollections from "./components/PreviewCollections";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path={ROUTES.LANDING} component={App} />
      <Route path={ROUTES.PREVIEW_COLLECTIONS} component={PreviewCollections} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
