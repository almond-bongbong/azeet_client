import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ text, value }) => (
  <option value={value}>{text}</option>
);

Option.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Option;
