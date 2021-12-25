import React from 'react';
import { MDBIcon } from 'mdbreact';
import * as BooksAPI from './BooksAPI';
import Shelfs from './Shelfs';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: '',
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      const filteredBooks = books.filter((b) => b.id === this.props.book.id);
      if (filteredBooks.length > 0) {
        this.setState({ shelf: filteredBooks[0].shelf });
      } else {
        this.setState({ shelf: 'none' });
      }
    });
  }
  render() {
    return (
      <div className='book'>
        <div className='book-top'>
          <img
            className='bookImage'
            src={
              this.props.book.imageLinks && this.props.book.imageLinks.thumbnail
            }
            alt={this.props.book.title}
          />
          <div className='book-shelf-changer'>
            <MDBIcon icon='angle-down' className='angle-down' />

            <Shelfs
              book={this.props.book}
              shelf={this.state.shelf}
              changeCategory={this.props.changeCategory}
            />
          </div>
        </div>
        <div className='book-title'>{this.props.book.title}</div>
        <div className='book-authors'>
          {this.props.book.authors &&
            this.props.book.authors.map((auth, index) => (
              <span key={index}>{auth}, </span>
            ))}
        </div>
      </div>
    );
  }
}

export default Book;
