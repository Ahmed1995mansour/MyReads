import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import FixedNavbar from './Header';
import Category from './Categories';
import { Routes, Route } from 'react-router-dom';
import Search from './Search';
import Notification from './Notification';

class BooksApp extends React.Component {
  state = {
    categories: [
      { name: 'currentlyReading', title: 'Currently Reading' },
      { name: 'wantToRead', title: 'Want to Read' },
      { name: 'read', title: 'Read' },
    ],
    books: [],
    showSearchPage: false,
    notifications: [],
  };

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books: books }));
    });
  };

  changeCategory = (bookId, category) => {
    BooksAPI.get(bookId)
      .then((book) => {
        BooksAPI.update(book, category).then(() => {
          this.updateState();
        });
        this.addNotification();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addNotification = () => {
    const id = Math.random();
    this.setState((currState) => ({
      notifications: [{ id: id }],
    }));
  };

  render() {
    return (
      <>
        {this.state.notifications.map((not) => (
          <Notification key={not.id} />
        ))}
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div className='categories'>
                <FixedNavbar />

                {this.state.categories.map((cat) => (
                  <Category
                    key={cat.name}
                    cat={cat}
                    books={this.state.books.filter(
                      (book) => cat.name === book.shelf
                    )}
                    changeCategory={this.changeCategory}
                  />
                ))}
              </div>
            }
          />
          <Route
            path='/search'
            element={
              <div>
                <Search changeCategory={this.changeCategory} />
              </div>
            }
          />
        </Routes>
      </>
    );
  }
}

export default BooksApp;
