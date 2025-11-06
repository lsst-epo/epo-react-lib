import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import Observations from './Observations.jsx';
import {
  getMinorAxis,
  auToUnit,
  getFocus,
  getCurve,
  convert2dTo3d,
} from './orbitalUtilities.js';

const PotentialOrbits = ({
  data,
  observations,
  activeObs,
  selectionCallback,
}) => {
  function getCurveVectors(majAxis, minAxis, orbitData) {
    const focus = getFocus(majAxis, minAxis);
    const offsetCenter = new THREE.Vector3(focus, 0, 0);

    return getCurve(majAxis, minAxis, offsetCenter.x, offsetCenter.y)
      .getPoints(100)
      .map(vector2D => {
        return convert2dTo3d(vector2D, orbitData);
      })
      .flat();
  }

  function getCurvesVectors(orbitsData) {
    return orbitsData.map(d => {
      const { a, e } = d;
      const majAxis = auToUnit(a);
      const minAxis = getMinorAxis(a, e);

      return getCurveVectors(majAxis, minAxis, d);
    });
  }

  const [potentialsGeometry] = useState(() => {
    let transI = 0;
    const indicies = [];
    const vertices = [];

    getCurvesVectors(data).forEach(vectors => {
      const stopIndex = vectors.length - 1;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < vectors.length; i++) {
        const vector = vectors[i];
        const offsetIndex = i + transI;

        // add vectors to vertices array
        vertices.push(vector.x);
        vertices.push(vector.y);
        vertices.push(vector.z);
        // add indicies to draw line between current vertice and the next one
        indicies.push(offsetIndex);
        indicies.push(i === stopIndex ? transI : offsetIndex + 1);
      }

      transI += vectors.length;
    });

    const bufferGeom = new THREE.BufferGeometry();
    const typesPos = new THREE.Float32BufferAttribute(vertices, 3);
    bufferGeom.setAttribute('position', typesPos);
    bufferGeom.setIndex(indicies);

    return bufferGeom;
  });

  return (
    <>
      <lineSegments position={[0, 0, 0]} geometry={potentialsGeometry}>
        <lineBasicMaterial attach="material" color="#CEB3DB" />
      </lineSegments>
      {observations && data && (
        <Observations
          data={data[0]}
          {...{ observations, selectionCallback, activeObs }}
        />
      )}
    </>
  );
};

PotentialOrbits.propTypes = {
  data: PropTypes.array,
  observations: PropTypes.array,
  selectionCallback: PropTypes.func,
  activeObs: PropTypes.object,
};

export default PotentialOrbits;
