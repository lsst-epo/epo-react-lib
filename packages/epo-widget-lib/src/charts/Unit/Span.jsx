import React from 'react';
import PropTypes from 'prop-types';

const Span = ({ children }) => <span className="unit">{children}</span>;

Span.propTypes = {
  children: PropTypes.node,
};

export default Span;
