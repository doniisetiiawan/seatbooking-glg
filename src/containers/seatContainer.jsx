/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import SeatList from '../components/seatList';
import SeatRow from '../components/seatRow';
import { getAllSeats } from '../reducers/seats';
import { addSeatToCart } from '../actions';

const SeatContainer = ({ seatrows, addSeatToCart }) => (
  <SeatList title="Seats">
    {seatrows.map((row, index) => (
      <SeatRow
        key={index}
        seats={row.seats}
        rowNumber={index}
        onAddToCartClicked={addSeatToCart}
      />
    ))}
  </SeatList>
);

const mapStateToProps = (state) => ({
  seatrows: getAllSeats(state.seats),
});

export default connect(mapStateToProps, { addSeatToCart })(
  SeatContainer,
);

SeatContainer.propTypes = {
  addSeatToCart: PropTypes.func.isRequired,
  seatrows: PropTypes.arrayOf(PropTypes.any),
};

SeatContainer.defaultProps = {
  seatrows: [],
};
