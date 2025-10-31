import React from 'react';
import PropTypes from 'prop-types';

const Sub = ({ children }) => <sub>{children}</sub>;

Sub.propTypes = {
  children: PropTypes.node,
};

export default Sub;
