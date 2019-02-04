import React, { Component } from "react";
import app, { base } from "./Firebase/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import books from "./book-data";
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
    // const books = { ...this.state.books };
    // const id = Date.now();
    // books[id] = {
    //   id: id,
    //   title: title,
    //   author: author
    // };
    // console.log(`${this.state.user.uid}`);
    this.setState({ books });
  };

  addBook = book => {
    const books = { ...this.state.books };
    books[`book${Date.now()}`] = book;
    this.setState({ books });
  };

  deleteBook = key => {
    const books = { ...this.state.books };
    books[key] = null;
    this.setState({ books });
  };

  clearBooks = () => {
    this.setState({ books: "" });
  };

  componentDidMount = () => {
    //when component is first mounted to page (rendered for the first time)
    //  this.authListener();

    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });

        // const books = {{ ...this.state.books} };
        // console.log(`Books: ${books}`);
        console.log(`User: ${this.state.user.uid}`);
        console.log(`All user info: ${user}`);
        this.ref = base.syncState(`users/${this.state.user.uid}`, {
          context: this,
          state: "books"
        });
        console.log(
          `User logged in: ${JSON.stringify(this.state.user, null, 2)}`
        );
      } else {
        console.log(`User not logged in: ${user}`);
        this.setState({ user: null });
      }
    });

    // console.log(`${this.state.user.uid}`);

    console.log("DID MOUNTED");
    // this.setState({ books: bookData });
  };

  componentWillMount() {
    console.log("Will MOUNTED");
    // this.userRef = base.syncState(`${this.state.user.email}/books`, {
    //   context: this,
    //   state: "books"
    // });
    // this.userRef = base.syncState(`${this.state.user.email}/books`, {
    //   context: this,
    //   state: "books"
    // });

    // this.ref = base.syncState(`/books`, {
    //   context: this,
    //   state: "books"
    // });

    // this.setState({ books: bookData });
    console.log(`User state in AUTH function: ${this.state.user.uid}`);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    console.log(`Unmounting!!!!!!!`);
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

        // console.log(`User state in AUTH function: ${this.state.user.uid}`);
        // this.ref = base.syncState(`/${app.auth().currentUser.uid}/books`, {
        //   context: this,
        //   state: "books"
        // });

        //prints potential user name of logged in user
        // console.log(app.auth().currentUser.displayName);
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
                      username={this.state.user.email}
                      books={this.state.books}
                      loadBooks={this.loadBooks}
                      addBook={this.addBook}
                      deleteBook={this.deleteBook}
                      clearBooks={this.clearBooks}
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
