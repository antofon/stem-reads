import React, { Component } from "react";
import app, { base } from "./Firebase/firebase";
import realBookData from "./real-book-data";
import illustratedBookData from "./illustrated-book-data";
import Header from "./components/Header";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./styles/css/main.css";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import AccountFaq from "./components/AccountFaq";
import PreviewCollections from "./components/PreviewCollections";
import SignupSuccess from "./components/Auth/SignupSuccess";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      realBookData: realBookData,
      illustratedBookData: illustratedBookData
    };
  }

  componentDidMount() {
    //when component is first mounted to page (rendered for the first time)

    this.authListener();
  }

  renderBooks(book) {
    // this.setState({ books: this.state.books.concat([book]) });
    alert("renderBooks called!");
  }

  loadBooks = () => {
    this.setState({ realBookData, illustratedBookData });
  };
  // checks if the authentication state of a user changes (i.e. logged in)
  authListener() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        // user is currently [object Object]. can wrap this in JSON.stringify() to break down object and see key-value pairs
        // console.log(`User logged in: ${JSON.stringify(user, null, 2)}`);
        // database.ref("users/" + 1).set({
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
        //localStorage.setItem('user', user.uid);
      } else {
        console.log(`User not logged in: ${user}`);
        this.setState({ user: null });
        //localStorage.setItem('user', user.uid);
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
                      renderBooks={this.renderBooks}
                      // loadBooks={this.loadBooks}
                      realBookData={this.state.realBookData}
                      illustratedBookData={this.state.illustratedBookData}
                      // renderBooks={this.renderBooks.bind(this)}
                      // {...props}
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
