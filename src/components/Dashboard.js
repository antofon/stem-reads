import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import app from "../Firebase/firebase";
import BookList from "./BookList";
import Book from "./Book";
import * as ROUTES from "../constants/routes";

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
        <h2>Welcome to the Dashboard!!!!</h2>
        {/* {this.props.loadBooks} */}
        {/* <button onClick={this.props.loadBooks}>Load Books</button> */}
        <div className="books-wrapper" />
        <div>Autobiography &amp; Non-Fiction</div>
        <BookList
          genres={this.state.genres}
          bookData={this.props.realBookData}
        />
        <div>Fiction</div>
        <BookList
          genres={this.state.genres}
          bookData={this.props.illustratedBookData}
        />
        <input
          type="button"
          value="Sign out"
          id="Sign out"
          onClick={this.signOut}
        />
      </div>
    );
  }
}

export default withRouter(Dashboard);
