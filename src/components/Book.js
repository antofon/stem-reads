import React, { Component } from "react";

class Book extends Component {
  render() {
    const { author, title, image } = this.props.details;
    return (
      <figure>
        <img className="book-image" src={image} alt={title} />
        <figcaption>
          <p className="book-title">{title}</p>
          <p className="book-author">{author}</p>
        </figcaption>
      </figure>
    );
  }
}

export default Book;
