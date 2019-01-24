import React, { Component } from "react";

import Book from "./Book";
import { FaLevelDownAlt } from "react-icons/fa";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // OBJECTIVE:
    // Have one location for all data at the parent level
    // break up into variables at the child level and iterate of corresponding objects
    // Pass details for each separate type of object to details props and Construct Book Component

    /* SOLUTION: 
    Use one data file for books.
    Slice at certain sections to break data into non-fiction and illustrated genres
    Checked the genre type and iterate through the split book data sections
    Pushed the JSX content to two separate arrays denoting the different genres
    Pass that through the return
    complete.
    */
    let realBookDataArr = Object.keys(this.props.bookData).slice(0, 4);
    let illustratedBookDataArr = Object.keys(this.props.bookData).slice(4, 8);
    let realListElt = [],
      illustratedListElt = [];

    if (this.props.genres.type1 === "real") {
      realBookDataArr.map(key =>
        realListElt.push(
          <div>
            <ul>
              <li key={key} className="float-left">
                <Book
                  key={key}
                  index={key}
                  details={this.props.bookData[key]}
                />
              </li>
            </ul>
          </div>
        )
      );
    }

    if (this.props.genres.type2 === "illustrated") {
      illustratedBookDataArr.map(key =>
        illustratedListElt.push(
          <div>
            <ul>
              <li key={key} className="float-left">
                <Book
                  key={key}
                  index={key}
                  details={this.props.bookData[key]}
                />
              </li>
            </ul>
          </div>
        )
      );
    }
    // const realBookDataObj = Object.assign({}, realBookDataArr);
    // const illustratedBookDataObj = Object.assign({}, illustratedBookDataArr);
    // console.log(realBookDataObj);
    // console.log(illustratedBookDataObj);
    // console.log(
    //   `RealBookData:${realBookData.author}\nIllustratedBookData:${
    //     illustratedBookData.author
    //   }`
    // );

    // console.log(this.props.bookData.);
    return (
      <div>
        <h3>Autobiography &amp; Non-Fiction</h3>
        {realListElt}
        <h3>Illustrated</h3>
        {illustratedListElt}
        {/* <ul>
          {this.props.genres.type1 === "real"
            ? Object.keys(this.props.bookData).map(key => (
                <li key={key} className="float-left">
                  <Book
                    key={key}
                    index={key}
                    details={this.props.bookData[key]}
                  />
                </li>
              ))
            : Object.keys(this.props.bookData).map(key => (
                <li key={key}>
                  <Book
                    key={key}
                    index={key}
                    details={this.props.bookData[key]}
                  />
                </li>
              ))}
        </ul> */}
      </div>
    );
  }
}

export default BookList;
