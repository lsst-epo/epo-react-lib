import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { container } from "./OrbitalSim.module.css";


function OrbitalSim() {

  return (
    <>
      <div className={container}>
        {/* <Controls
          {...{
            playing,
            handleStartStop,
            handleNext,
            handlePrevious,
            handleReset,
            dayPerVizSec,
          }}
        /> */}
        hello storybook
      </div>
    </>
  );
}

OrbitalSim.propTypes = {};

export default OrbitalSim;