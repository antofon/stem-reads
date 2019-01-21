import React, { Component } from "react";

import Book from "./Book";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.genres.type1 === "real"
            ? Object.keys(this.props.bookData).map(key => (
                <li>
                  <Book
                    key={key}
                    index={key}
                    details={this.props.bookData[key]}
                  />
                </li>
              ))
            : Object.keys(this.props.bookData).map(key => (
                <li>
                  <Book
                    key={key}
                    index={key}
                    details={this.props.bookData[key]}
                  />
                </li>
              ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
