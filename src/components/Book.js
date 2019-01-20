import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div>
        {/* <ul>
          {this.props.books.map(books => (
            <li key={books.id}>
              <figure>
                <img src={books.image} alt={books.title} />
                <figcaption>
                  <div>{books.title}</div>
                  <div>{books.author}</div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul> */}
        I'm a Book!
      </div>
    );
  }
}

export default Book;
