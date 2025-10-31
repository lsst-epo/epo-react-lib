/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { renderUnit } from './utilities.js';
import Span from './Span';
import TSpan from './TSpan';

const StandardUnit = ({ type, isSvg }) => {
  const WrapperTag = isSvg ? TSpan : Span;

  return <WrapperTag className="unit">{renderUnit(type)}</WrapperTag>;
};

StandardUnit.propTypes = {
  type: PropTypes.string,
  isSvg: PropTypes.bool,
};

export default StandardUnit;
