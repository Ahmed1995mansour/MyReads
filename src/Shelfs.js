import React from 'react';

const Shelfs = (props) => {
  return (
    <select
      name='category'
      onChange={(e) => {
        props.changeCategory(props.book.id, e.target.value);
      }}
      value={props.shelf}
    >
      <option value='move' disabled>
        Move to ...
      </option>
      <option value='currentlyReading'>Currently Reading</option>
      <option value='wantToRead'>Want To Read</option>
      <option value='read'>Read</option>
      <option value='none'>None</option>
    </select>
  );
};

export default Shelfs;
