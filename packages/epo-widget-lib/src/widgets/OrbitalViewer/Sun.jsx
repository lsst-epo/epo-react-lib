import React from 'react';
import PropTypes from 'prop-types';
import { HTML } from 'drei';
import { getLabelSize, ORBITAL_COLORS } from './orbitalUtilities.js';

import { label } from './orbital-viewer.module.scss';

function Sun({ defaultZoom, zoomLevel, t }) {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry attach="geometry" args={[9, 16, 8]} />
      <meshBasicMaterial
        attach="material"
        color={ORBITAL_COLORS.sun.objectColor}
      />
      <HTML>
        <div
          className={label}
          style={{
            fontSize: getLabelSize(zoomLevel, defaultZoom),
          }}
        >
          {t('astronomy::orbital_bodies.sun')}
        </div>
      </HTML>
    </mesh>
  );
}

Sun.propTypes = {
  zoomLevel: PropTypes.number,
  defaultZoom: PropTypes.number,
  t: PropTypes.func,
};

export default Sun;
