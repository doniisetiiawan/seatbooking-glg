import PropTypes from 'prop-types';
import React from 'react';

const SeatList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <ol className="list">{children}</ol>
  </div>
);

export default SeatList;

SeatList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

SeatList.defaultProps = {
  children: null,
};
