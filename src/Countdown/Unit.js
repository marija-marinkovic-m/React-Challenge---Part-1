import React from 'react';
import PropTypes from 'prop-types';

const TimeUnit = ({ value, label }) => (
  <div>
    <span>{ value }</span>
    { label && <span>{ label }</span> }
  </div>
);
TimeUnit.displayName = 'TimeUnit';
TimeUnit.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string
}

export default TimeUnit;