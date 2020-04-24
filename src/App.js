import React from "react";
import {Route, Switch} from "react-router-dom";
import Search from "./Search";
import NotFound from "./NotFound";
import ContentListBooks from "./ContentListBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
const shelfNames = [
  {
    name: "currentlyReading",
    title: "Currently Reading"
  },

  {
    name: "wantToRead",
    title: "Want to Read"
  },

  {
    name: "read",
    title: "Read"
  }
];

class BooksApp extends React.Component {
  state = {
    booksList: [],
    loading: false
  };

  componentDidMount() {
    this.setState({loading: true});
    BooksAPI.getAll()
      .then(data => {
        this.setState(currentlyState => ({
          loading: false,
          booksList: data.map(elemt => {
            let obj = {
              data: elemt,
              load: false
            };
            return obj;
          })
        }));
      })
      .catch(error => console.log("Problem given Books Api"));
  }
  /**
   * @description  Change the load state of a book,
   * @param {Object} changedBook - The Object of the book
   */
  updateLoadign = changedBook => {
    this.setState(prevState => ({
      booksList: prevState.booksList.map(book =>
        book.data.id !== changedBook.data.id
          ? book
          : Object.assign({}, book, {load: !book.load})
      )
    }));
  };
  /**
   * @description  Change a bookshelf book
   * @param {string} shelf - The shelf of the book
   * @param {Object} changedBook - The Object of the book
   */
  updateShelf = (shelf, changedBook) => {
    this.updateLoadign(changedBook);
    changedBook.data.shelf = shelf;
    changedBook.load = false;
    BooksAPI.update(changedBook.data, shelf)
      .then(response => {
        this.setState(prevState => ({
          booksList: prevState.booksList
            // remove updated book from array
            .filter(book => book.data.id !== changedBook.data.id)
            // add updated book to array
            .concat(changedBook),
          bookListener: prevState.booksList.concat(changedBook)
        }));
      })
      .catch(error => console.log("Problem update book"));
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/search"
            render={() => (
              <Search
                onUpdateShelf={this.updateShelf}
                booksList={this.state.booksList}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <ContentListBooks
                onUpdateShelf={this.updateShelf}
                loading={this.state.loading}
                booksList={this.state.booksList}
                shelfs={shelfNames}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
