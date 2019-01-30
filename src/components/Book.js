import React from "react";

const Book = props => {
  const { author, title, image } = props.details;

  return (
    <figure>
      <img className="book-image" src={image} alt={title} />
      <figcaption>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
      </figcaption>
    </figure>
  );
};

export default Book;
