import React, { Component } from 'react';
import { MDBNotification } from 'mdbreact';

class Notification extends Component {
  state = {
    show: 'animate__backInRight',
  };

  componentDidMount() {
    this.timeOut = setTimeout(() => {
      this.setState({ show: 'animate__backOutRight' });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    return (
      <div
        className={`notification-wrapper animate__animated  ${this.state.show}`}
      >
        <MDBNotification
          show
          fade
          title='MyRead'
          message='Book Added to the Shelf'
        />
      </div>
    );
  }
}

export default Notification;
