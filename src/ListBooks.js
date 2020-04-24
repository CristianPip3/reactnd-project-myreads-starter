import React, {Component} from "react";
import PropTypes from "prop-types";
import ItemBook from "./ItemBook";
class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array,
    onUpdateShelf: PropTypes.func
  };
  /**
   * @description  Send and run the function that comes in the props to change a bookshelf
   * @param {string} shelfChange - The shelf of the book
   * @param {Object} book - The Object of the book
   */
  updateShelf = (shelfChange, book) => {
    if(shelfChange && book){
      this.props.onUpdateShelf(shelfChange, book);
    }

  };
  render() {
    const {books, oldBooks} = this.props;
    return (
      <div className="bookshelf-books">
        {(!books || books.length === 0) && <p> Not book</p>}
        <ol className="books-grid">
          {books.map(bookM => {
            return (
              <ItemBook
                listBook={oldBooks}
                key={bookM.data.id}
                book={bookM}
                changeShelf={this.updateShelf}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}
export default ListBooks;
