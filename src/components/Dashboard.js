import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import app from "../Firebase/firebase";
import * as ROUTES from "../constants/routes";
import BookList from "./BookList";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: {
        type1: "real",
        type2: "illustrated"
      }
    };
  }
  signOut = () => {
    console.log("User signed out successfully");
    app.auth().signOut();
    this.props.history.push(ROUTES.LANDING);
  };

  render() {
    return (
      <div>
        <input
          type="button"
          value="Sign out"
          id="Sign out"
          onClick={this.signOut}
        />
        {/* <h2>Welcome to the Dashboard!!!!</h2> */}
        <button onClick={this.props.loadBooks}>Load Books</button>
        <button onClick={this.props.clearBooks}>Clear Books</button>
        <div className="books-wrapper">
          <div>
            <div>
              <h3>{this.props.username}'s Dashboard</h3>
              {/* <h3 className="non-fiction">Autobiography &amp; Non-Fiction</h3> */}
              <BookList
                type1={this.state.genres.type1}
                deleteBook={this.props.deleteBook}
                books={this.props.books}
              />
            </div>
            <div>
              {/* <h3 className="illustrated">Illustrated</h3> */}
              <BookList
                type2={this.state.genres.type2}
                deleteBook={this.props.deleteBook}
                books={this.props.books}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
