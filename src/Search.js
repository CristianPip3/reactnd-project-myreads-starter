import React, {Component} from "react";
import {Link} from "react-router-dom";
import ListBooks from "./ListBooks";
import ComponentLoading from "./ComponentLoading";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";

class Search extends Component {
  static propTypes = {
    booksList: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  };
  state = {
    query: "",
    newBooks: [],
    searchErr: false,
    loading: false
  };
  /**
   * @description  Search books from API adn update state
   * @param {string} query - The query of searc
   */
  updateQuery = query => {
    if (query) {
      this.setState({loading: true});
      BooksAPI.search(query, 20)
        .then(data => {
          if (data.length > 0) {
            this.setState(currentlyState => ({
              loading: false,
              searchErr: false,
              newBooks: data.map(elemt => {
                const obj = {
                  data: elemt,
                  load: false
                };
                return obj;
              })
            }));
          } else {
            this.setState({searchErr: true, loading: false});
          }
        })
        .catch(error => console.log("Problem in Search"));
    }
  };
  render() {
    const {query, loading, newBooks, searchErr} = this.state;
    const {booksList, onUpdateShelf} = this.props;
    const showingBooks =
      query === "" && newBooks
        ? newBooks
        : newBooks.filter(c =>
            c.data.title.toLowerCase().includes(query.toLowerCase())
          );
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          {loading ? (
            ComponentLoading()
          ) : (
            <ListBooks
              books={showingBooks}
              oldBooks={booksList}
              onUpdateShelf={onUpdateShelf}
            />
          )}
          {searchErr && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
