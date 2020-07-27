import PropTypes from 'prop-types';
import React from 'react';

const Cart = ({ seats, total, onCheckoutClicked }) => {
  const hasSeats = seats.length > 0;
  const nodes = hasSeats ? (
    seats.map((seat, index) => (
      <div key={index}>
        Seat Number: {seat.number} - Price: {seat.price}
      </div>
    ))
  ) : (
    <em>No seats selected</em>
  );
  return (
    <div>
      <b>Selected Seats</b> <br />
      {nodes} <br />
      <b>Total</b> <br />
      {total}
      <br />
      <button type="button" onClick={onCheckoutClicked}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  onCheckoutClicked: PropTypes.func.isRequired,
  seats: PropTypes.arrayOf(PropTypes.any),
  total: PropTypes.string,
};

Cart.defaultProps = {
  seats: [],
  total: '',
};
