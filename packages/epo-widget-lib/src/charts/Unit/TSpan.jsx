import React from 'react';
import PropTypes from 'prop-types';

const TSpan = ({ children }) => <tspan className="unit">{children}</tspan>;

TSpan.propTypes = {
  children: PropTypes.node,
};

export default TSpan;
