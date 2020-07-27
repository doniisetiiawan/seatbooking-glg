import PropTypes from 'prop-types';
import React from 'react';

const handleClick = (event) => {
  console.log(`seat selected ${event.target.checked}`);
};

const Seat = ({ number, status }) => (
  <li
    className={`seatobj ${status}`}
    key={number.toString()}
  >
    <input
      type="checkbox"
      disabled={status === 'booked'}
      id={number.toString()}
      onClick={handleClick}
    />
    <label htmlFor={number.toString()}>{number}</label>
  </li>
);

export default Seat;

Seat.propTypes = {
  number: PropTypes.number,
  status: PropTypes.string,
};

Seat.defaultProps = {
  number: 0,
  status: '',
};
