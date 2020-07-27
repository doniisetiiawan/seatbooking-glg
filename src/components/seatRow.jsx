import PropTypes from 'prop-types';
import React from 'react';
import Seat from './seat';

const SeatRow = ({
  seats,
  onAddToCartClicked,
}) => (
  <div>
    <li className="row row--1" key="1">
      <ol className="seatrow">
        {seats.map((seat) => (
          <Seat
            key={seat.number}
            number={seat.number}
            price={seat.price}
            status={seat.status}
            rowNo={seat.rowNo}
            handleClick={() => onAddToCartClicked(seat)}
          />
        ))}
      </ol>
    </li>
  </div>
);

export default SeatRow;

SeatRow.propTypes = {
  onAddToCartClicked: PropTypes.func.isRequired,
  seats: PropTypes.arrayOf(PropTypes.any),
};

SeatRow.defaultProps = {
  seats: [],
};
