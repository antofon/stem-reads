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
      //   <li>I'm a Book</li>
      //   {/* <li>{this.props.books}</li> */}
      //   {/* {this.state.books.map(books => (
      //     <li key={books.id}>
      //       <figure>
      //         <img src={books.image} alt={books.title} />
      //         <figcaption>
      //           <div>{books.title}</div>
      //           <div>{books.author}</div>
      //         </figcaption>
      //       </figure>
      //     </li>
      //   ))} */}
    );
  }
}

export default Book;
