import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Category = (props) => {
  return (
    <div className='category'>
      <h2 className='category-name bold'>{props.cat.title}</h2>
      <MDBContainer>
        <MDBRow>
          {props.books.map((book) => {
            return (
              <MDBCol key={book.id}>
                <Book book={book} changeCategory={props.changeCategory} />
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
      <div className='open-search'>
        <Link to='/search' className='add-book'>
          Add a book{' '}
        </Link>
      </div>
    </div>
  );
};

export default Category;
