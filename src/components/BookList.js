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
        <div>
          {this.props.type === "non-fiction" ? (
            <div>
              <Book books={this.books} />
              <Book books={this.books} />
              <Book books={this.books} />
              <Book books={this.books} />
              <Book books={this.books} />
            </div>
          ) : null}
        </div>

        <div>
          {this.props.type === "fiction" ? (
            <div>
              <Book books={this.books} />
              <Book books={this.books} />
              <Book books={this.books} />
              <Book books={this.books} />
              <Book books={this.books} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default BookList;
