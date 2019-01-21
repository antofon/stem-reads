import React, { Component } from "react";

class Book extends Component {
  render() {
    const { id, author, title, type, image } = this.props.details;
    return (
      <figure>
        <img src={image} alt={title} />
        <figcaption>
          <p>{title}</p>
          <p>{author}</p>
        </figcaption>
      </figure>
    );
  }
}

export default Book;
