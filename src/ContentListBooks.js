import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ComponentLoading from "./ComponentLoading";
import ListBooks from "./ListBooks";

class ContentListBooks extends Component {
  render() {
    const {shelfs, booksList, loading, onUpdateShelf} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1> MyReads </h1>
        </div>
        {loading ? (
          ComponentLoading()
        ) : (
          <div className="list-books-content">
            <div>
              {shelfs.map(shelf => {
                return (
                  <div key={shelf.name} className="bookshelf">
                    <h2 className="bookshelf-title"> {shelf.title} </h2>
                    <ListBooks
                      books={booksList.filter(
                        book => book.data.shelf === shelf.name
                      )}
                      onUpdateShelf={onUpdateShelf}
                    />
                  </div>
                );
              })}
            </div>
            <div className="open-search">
              <Link
                to={{
                  pathname: "/search"
                }}
              >
                Search
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
ContentListBooks.propTypes = {
  shelfs: PropTypes.array,
  booksList: PropTypes.array,
  loading: PropTypes.bool,
  onUpdateShelf: PropTypes.func
};
export default ContentListBooks;
