import PropTypes from 'prop-types';
import React from 'react';
import Seat from './seat';

const SeatRow = ({ seats }) => (
  <div>
    <li className="row">
      <ol className="seatrow">
        {seats.map((seat) => (
          <Seat
            key={seat.number}
            number={seat.number}
            price={seat.price}
            status={seat.status}
          />
        ))}
      </ol>
    </li>
  </div>
);

export default SeatRow;

SeatRow.propTypes = {
  seats: PropTypes.arrayOf(PropTypes.any),
};

SeatRow.defaultProps = {
  seats: [],
};
