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
        <div className="books-wrapper">
          <div>
            {/* <h3>Autobiography &amp; Non-Fiction</h3> */}
            <BookList
              genres={this.state.genres}
              bookData={this.props.bookData}
              // realBookData={this.props.realBookData}
              // illustratedBookData={this.props.illustratedBookData}
            />
          </div>
          {/* <div>
            {/* <h3>Illustrated</h3>
            <BookList
              genres={this.state.genres}
              bookData={this.props.bookData}
               realBookData={this.props.realBookData}
               illustratedBookData={this.props.illustratedBookData}
            />
          </div> */}
        </div>
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
