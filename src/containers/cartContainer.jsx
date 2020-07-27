import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/cart';
import { getCartSeats, getTotal } from '../reducers';
import { bookSeats } from '../actions';

const CartContainer = ({ seats, total, bookSeats }) => (
  <Cart
    seats={seats}
    total={total}
    onCheckoutClicked={() => bookSeats(seats)}
  />
);

const mapStateToProps = (state) => ({
  seats: getCartSeats(state),
  total: getTotal(state),
});

export default connect(mapStateToProps, { bookSeats })(
  CartContainer,
);

CartContainer.propTypes = {
  bookSeats: PropTypes.func.isRequired,
  seats: PropTypes.arrayOf(PropTypes.any),
  total: PropTypes.string,
};

CartContainer.defaultProps = {
  seats: [],
  total: 0,
};
