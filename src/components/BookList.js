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
          {this.props.type ? (
            // <div>
            // <ul>
            //   {Object.keys(this.props.books).map(key => (
            //     <Book key={key} books={this.props} />
            //   ))}
            // </ul>
            <Book books={this.props.books} />
          ) : (
            console.log("Type not valid")
          )}
        </div>

        <div>
          {this.props.type === "fiction" ? (
            // <div>
            <ul>
              {Object.keys(this.props.books).map(key => (
                <Book key={key} />
              ))}
            </ul>
          ) : (
            console.log("Type not valid")
          )}
        </div>
      </div>
    );
  }
}

export default BookList;
