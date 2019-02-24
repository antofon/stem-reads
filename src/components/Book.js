import React from "react";

const Book = props => {
  const { author, title, image, link } = props.details;

  return (
    <div>
      <figure>
        <div className="delete-button-wrapper">
          <div className="book-image-wrapper">
            <img className="book-image" src={image} alt={title} />
            <button onClick={() => props.deleteBook(props.index)}>
              &times;
            </button>
          </div>
        </div>
        <figcaption>
          <p className="book-title">{title}</p>
          <p className="book-author">{author}</p>
        </figcaption>
      </figure>

      <div className="book-buttons">
        <a href={link} target="_blank" rel="noopener noreferrer">
          View on Amazon
        </a>
      </div>
    </div>
  );
};
export default Book;
