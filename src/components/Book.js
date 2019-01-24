import React, { Component } from "react";

class Book extends Component {
  render() {
    const { author, title, image } = this.props.details;
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
