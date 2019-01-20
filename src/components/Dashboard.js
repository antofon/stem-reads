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
      type: "non-fiction"
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
        {Object.keys(this.props.books).map(key => (
          <Book key={key} index={key} details={this.props.books[key]} />
        ))}
        {/* <BookList books={this.state.books} type={this.state.type} /> */}
        <div>Fiction</div>
        {/* <BookList books={this.state.books} type={this.state.type} /> */}
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
