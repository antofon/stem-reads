import React, { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // OBJECTIVE:
    // Have one location for all data at the parent level
    // break up into variables at the child level and iterate of corresponding objects
    // Pass details for each separate type of object to details props and Construct Book Component

    /* SOLUTION: 
    Use one data file for books.
    Slice at certain sections to break data into non-fiction and illustrated genres
    Checked the genre type and iterate through the split book data sections
    Pushed the JSX content to two separate arrays denoting the different genres
    Pass that through the return
    complete.
    */
    let realBookDataArr = Object.keys(this.props.books).slice(0, 4);
    let illustratedBookDataArr = Object.keys(this.props.books).slice(4, 8);
    let realListElt = [],
      illustratedListElt = [];

    if (this.props.genres.type1 === "real") {
      realBookDataArr.map(key =>
        realListElt.push(
          <div key={key}>
            <ul>
              <li key={key} className="float-left">
                <Book key={key} index={key} details={this.props.books[key]} />
              </li>
            </ul>
          </div>
        )
      );
    }

    if (this.props.genres.type2 === "illustrated") {
      illustratedBookDataArr.map(key =>
        illustratedListElt.push(
          <div key={key}>
            <ul>
              <li key={key} className="float-left">
                <Book key={key} index={key} details={this.props.books[key]} />
              </li>
            </ul>
          </div>
        )
      );
    }

    return (
      <div>
        <h3 className="non-fiction">Autobiography &amp; Non-Fiction</h3>
        <div className="real-book-list-wrapper">{realListElt}</div>
        <h3 className="illustrated">Illustrated</h3>
        <div className="illustrated-book-list-wrapper">
          {illustratedListElt}
        </div>
      </div>
    );
  }
}

export default BookList;
