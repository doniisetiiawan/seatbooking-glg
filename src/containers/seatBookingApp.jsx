import React from 'react';
import CartContainer from './cartContainer';
import SeatContainer from './seatContainer';

import '../App.css';

const SeatBookingApp = () => (
  <div className="layout">
    <h2>Ticket Booking App</h2>
    <hr />
    <SeatContainer />
    <hr />
    <CartContainer />
  </div>
);

export default SeatBookingApp;
