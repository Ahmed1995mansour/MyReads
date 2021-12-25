import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class Search extends React.Component {
  state = {
    searchValue: '',
    books: [],
  };

  inputChangeHandler = (e) => {
    e.persist();
    const query = e.target.value;
    this.setState({ searchValue: query });
    if (query === '') {
      return this.setState(() => ({ books: [] }));
    }

    this.search(query);
  };

  search = (query) => {
    BooksAPI.search(query)
      .then((result) => {
        if (result.length > 0) {
          this.setState(() => {
            return {
              books: result,
            };
          });
        } else {
          this.setState(() => ({
            books: [],
          }));
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='search-box'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>
            Close
          </Link>
          <div className='search-box-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={this.inputChangeHandler}
              value={this.state.searchValue}
            />
          </div>
        </div>
        <div className='search-results'>
          <MDBContainer>
            {this.state.books.length < 1 ? (
              this.state.searchValue === '' ? (
                <div>Serach for books...</div>
              ) : (
                <div>No Match Found</div>
              )
            ) : (
              <MDBRow>
                {this.state.books.map((book) => {
                  return (
                    <MDBCol key={book.id}>
                      <Book
                        book={book}
                        key={book.id}
                        className='serach-results-book'
                        changeCategory={this.props.changeCategory}
                      />
                    </MDBCol>
                  );
                })}
                ))
              </MDBRow>
            )}
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Search;
