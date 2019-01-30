import React, { Component } from "react";
import app, { base } from "./Firebase/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import bookData from "./book-data";
import "./styles/css/main.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import AccountFaq from "./components/AccountFaq";
import PreviewCollections from "./components/PreviewCollections";
import SignupSuccess from "./components/Auth/SignupSuccess";

class App extends Component {
  constructor(props) {
    super(props);
    // this.loadBooks = this.loadBooks.bind(this);
    this.state = {
      user: {},
      books: {}
    };
  }

  loadBooks = (title, author) => {
    const books = { ...this.state.books };
    const id = Date.now();
    books[id] = {
      id: id,
      title: title,
      author: author
    };
    this.setState({ books: bookData });
  };

  componentDidMount() {
    //when component is first mounted to page (rendered for the first time)
    this.authListener();
  }

  componentWillMount() {
    this.userRef = base.syncState("books", {
      context: this,
      state: "books"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.userRef);
  }

  // checks if the authentication state of a user changes (i.e. logged in)
  authListener() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        // user is currently [object Object]. can wrap this in JSON.stringify() to break down object and see key-value pairs
        // console.log(`User logged in: ${JSON.stringify(user, null, 2)}`)
        // let userCount = 0;
        // userCount++;
        // base.ref("users/" + userCount).set({
        //   username: app.auth().currentUser.uid,
        //   email: app.auth().currentUser.email
        // });
        this.setState({ user });
        // this.ref = base.syncState(`/${app.auth().currentUser.uid}/books`, {
        //   context: this,
        //   state: "books"
        // });
        //prints potential user name of logged in user
        console.log(app.auth().currentUser.displayName);
      } else {
        console.log(`User not logged in: ${user}`);
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <Router>
        <div>
          <div className="app">
            <Header />
            {/* check if user is logged in or not, protecting certain routes from being accessed */}
            {this.state.user ? (
              <Switch>
                <Route
                  exact
                  path={ROUTES.DASHBOARD}
                  render={props => (
                    <Dashboard
                      books={this.state.books}
                      loadBooks={this.loadBooks}
                    />
                  )}
                />
                <Route path={ROUTES.ACCOUNT_FAQ} component={AccountFaq} />
                <Route
                  path={ROUTES.SIGN_UP_SUCCESS}
                  component={SignupSuccess}
                />
                <Route
                  path={ROUTES.PREVIEW_COLLECTIONS}
                  component={PreviewCollections}
                />
                <Route component={NotFound} />
              </Switch>
            ) : (
              <Switch>
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route path={ROUTES.ACCOUNT_FAQ} component={AccountFaq} />
                <Route component={NotFound} />
              </Switch>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
