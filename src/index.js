import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Firebase, { FirebaseContext } from "./components/Firebase";
import NotFound from "./components/NotFound";
import AccountFaq from "./components/AccountFaq";
import PreviewCollections from "./components/PreviewCollections";
import * as ROUTES from "./constants/routes";
import * as serviceWorker from "./serviceWorker";

// Reference for connecting Firebase and React: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#react-router-setup
// Firebase is only instantiated once (FirebaseContext) and that it is injected via React’s Context API to React’s component tree. Now, every component that is interested in using Firebase has access to the Firebase instance with a FirebaseContext.Consumer component.

ReactDOM.render(
  <Router>
    <Switch>
      <FirebaseContext.Provider value={new Firebase()}>
        <Route exact path={ROUTES.LANDING} component={App} />
      </FirebaseContext.Provider>
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
