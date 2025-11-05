import React from 'react';
import PropTypes from 'prop-types';
import { Html } from '@react-three/drei';
import { getLabelSize, ORBITAL_COLORS } from './orbitalUtilities';

import styles from "./OrbitalSim.module.css";

function Sun({ defaultZoom, zoomLevel, t }: any) {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[9, 16, 8]} />
      <meshBasicMaterial
        attach="material"
        color={ORBITAL_COLORS.sun.objectColor}
      />
      <Html>
        <div
          className={styles.label}
          style={{
            fontSize: getLabelSize(zoomLevel, defaultZoom),
          }}
        >
          {t("orbital_sim.astronomy.orbital_bodies.sun")}
        </div>
      </Html>
    </mesh>
  );
}

Sun.propTypes = {
  zoomLevel: PropTypes.number,
  defaultZoom: PropTypes.number,
  // t: PropTypes.func,
};

export default Sun;
