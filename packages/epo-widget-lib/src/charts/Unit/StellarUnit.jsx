import React from 'react';
import PropTypes from 'prop-types';
import { renderUnit } from './utilities.js';
import Span from './Span';
import TSpan from './TSpan';
import Sub from './Sub';
import SvgSub from './SvgSub';

const StellarUnit = ({ type, isSvg }) => {
  const WrapperTag = isSvg ? TSpan : Span;
  const SubTag = isSvg ? SvgSub : Sub;

  return (
    <WrapperTag className="unit">
      &nbsp;{renderUnit(type)}
      <SubTag>&#8857;</SubTag>
    </WrapperTag>
  );
};

StellarUnit.propTypes = {
  type: PropTypes.string,
  isSvg: PropTypes.bool,
};

export default StellarUnit;
