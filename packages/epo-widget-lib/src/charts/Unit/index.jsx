/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import StellarUnit from './StellarUnit';
import StandardUnit from './StandardUnit';

const Unit = props => {
  return (
    {
      hubbleConstant: <StandardUnit {...props} />,
      distance: <StandardUnit {...props} />,
      velocity: <StandardUnit {...props} />,
      velocity_large: <StandardUnit {...props} />,
      temperature: <StandardUnit {...props} />,
      lifetime: <StandardUnit {...props} />,
      count: <StandardUnit {...props} />,
      luminosity: <StellarUnit {...props} />,
      volume: <StandardUnit {...props} />,
      stellarMass: <StellarUnit {...props} />,
      mass: <StandardUnit {...props} />,
      radius: <StellarUnit {...props} />,
      inclination: <StandardUnit {...props} />,
      semimajor_axis: <StandardUnit {...props} />,
      moid: <StandardUnit {...props} />,
      diameter: <StandardUnit {...props} />,
      craterDiameter: <StandardUnit {...props} />,
      craterDepth: <StandardUnit {...props} />,
      kineticEnergy: <StandardUnit {...props} />,
      density: <StandardUnit {...props} />,
      overPressure: <StandardUnit {...props} />,
      observerDistance: <StandardUnit {...props} />,
    }[props.type] || null
  );
};

Unit.propTypes = {
  type: PropTypes.string,
  isSvg: PropTypes.bool,
};

export default Unit;
