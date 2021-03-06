import React, {Component} from "react";
import ComponentLoading from "./ComponentLoading";
import noImage from "./images/no-cover-image.png";
import PropTypes from "prop-types";

class ItemBook extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
    listBook: PropTypes.array
  };
  managmentImages = book => {
    const coverImg =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : noImage;
    return coverImg;
  };

  /**
   * @description  Send and run the function that comes in the props to change a bookshelf
   * @param {event} event - The shelf of the book catch to select
   * @param {Object} book - The Object of the book
   */
  handleChange = (event, book) => {
    if (event && book) {
      this.props.changeShelf(event.target.value, book);
    }
  };
  render() {
    const {book, listBook} = this.props;
    let currentShelf = "none";
    // if book is in current list, set current shelf to book.shelf
    if (listBook) {
      for (let item of listBook) {
        if (item.data.id === book.data.id) {
          currentShelf = item.data.shelf;
          break;
        }
      }
    }
    return (
      <li>
        <div className="book">
          <div className="book-top">
            {book.load ? (
              ComponentLoading()
            ) : (
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${this.managmentImages(book.data)})`
                }}
                alt={book.data.description}
              ></div>
            )}
            <div className="book-shelf-changer">
              <select
                value={book.data.shelf || currentShelf}
                onChange={event => this.handleChange(event, book)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.data.title}</div>
          <div className="book-authors">
            {Array.isArray(book.data.authors)
              ? book.data.authors.join(", ")
              : ""}
          </div>
        </div>
      </li>
    );
  }
}
export default ItemBook;
