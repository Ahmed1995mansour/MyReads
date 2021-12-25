import React from 'react';
import { MDBNavbar } from 'mdbreact';

class FixedNavbar extends React.Component {
  render() {
    const bgPink = { backgroundColor: '#e91e63' };
    return (
      <div>
        <header>
          <MDBNavbar style={bgPink} dark expand='md' scrolling fixed='top'>
            <h3 className='header-title bold'>My Reads</h3>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default FixedNavbar;
