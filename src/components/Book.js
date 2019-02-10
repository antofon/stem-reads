import React from "react";

const Book = props => {
  const { author, title, image, link } = props.details;

  return (
    <div>
      <figure>
        <img className="book-image" src={image} alt={title} />
        <figcaption>
          <p className="book-title">{title}</p>
          <p className="book-author">{author}</p>
        </figcaption>
      </figure>

      <div className="book-buttons">
        <a href={link} target="_blank" rel="noopener noreferrer">
          View on Amazon
        </a>
        <button onClick={() => props.deleteBook(props.index)}>
          Delete Book
        </button>
      </div>
    </div>
  );
};
export default Book;
