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

    if (this.props.type1) {
      realBookDataArr.map(key =>
        realListElt.push(
          <div key={key} className="nested-book-list-wrapper">
            <ul>
              <li key={key} className="float-left">
                <Book
                  key={key}
                  index={key}
                  details={this.props.books[key]}
                  deleteBook={this.props.deleteBook}
                />
              </li>
            </ul>
          </div>
        )
      );
    }

    if (this.props.type2) {
      illustratedBookDataArr.map(key =>
        illustratedListElt.push(
          <div key={key} className="nested-book-list-wrapper">
            <ul>
              <li key={key} className="float-left">
                <Book
                  key={key}
                  index={key}
                  details={this.props.books[key]}
                  deleteBook={this.props.deleteBook}
                />
              </li>
            </ul>
          </div>
        )
      );
    }

    return (
      <div>
        <div className="real-book-list-wrapper">{realListElt}</div>

        <div className="illustrated-book-list-wrapper">
          {illustratedListElt}
        </div>
      </div>
    );
  }
}

export default BookList;
