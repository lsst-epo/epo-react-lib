import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import Observation from './Observation.jsx';
import {
  getMinorAxis,
  auToUnit,
  getFocus,
  getCurve,
  convert2dTo3d,
} from './orbitalUtilities.js';

const Observations = ({ data, observations, activeObs, selectionCallback }) => {
  const [observationsVectors] = useState(() => {
    const { a, e } = data;

    const majAxis = auToUnit(a);
    const minAxis = getMinorAxis(a, e);
    const focus = getFocus(majAxis, minAxis);
    const offsetCenter = new THREE.Vector3(focus, 0, 0);
    const curve = getCurve(majAxis, minAxis, offsetCenter.x, offsetCenter.y);

    return (observations || []).map(obs => {
      const { position } = obs;
      return convert2dTo3d(curve.getPoint(position), data);
    });
  });

  return (
    <>
      {observationsVectors && (
        <>
          {observationsVectors.map((obsVector, i) => {
            const observation = observations[i];
            const { id } = observation;

            return (
              <Observation
                key={id}
                data={observation}
                vector={obsVector}
                {...{ selectionCallback, activeObs }}
              />
            );
          })}
        </>
      )}
    </>
  );
};

Observations.propTypes = {
  data: PropTypes.object,
  observations: PropTypes.array,
  selectionCallback: PropTypes.func,
  activeObs: PropTypes.object,
};

export default Observations;
