import React, {Component} from "react";
import ComponentLoading from "./ComponentLoading";
import PropTypes from "prop-types";

/**
 * @description  Show a component list of author
 * @param {Object} book -The Object of the book with data of authors
 */
const renderAuthors = book => {
  return book.authors.map((autor, index) => (
    <div key={index} className="book-authors">
      {autor}
    </div>
  ));
};

class ItemBook extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
    listBook: PropTypes.array
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
                  backgroundImage: `url(${book.data.imageLinks.smallThumbnail})`
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
          <div className="book-title">{book.title}</div>
          {renderAuthors(book.data)}
        </div>
      </li>
    );
  }
}
export default ItemBook;
