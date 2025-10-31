import React from 'react';
import PropTypes from 'prop-types';

const SvgSub = ({ children }) => <tspan baselineShift="sub">{children}</tspan>;

SvgSub.propTypes = {
  children: PropTypes.node,
};

export default SvgSub;
