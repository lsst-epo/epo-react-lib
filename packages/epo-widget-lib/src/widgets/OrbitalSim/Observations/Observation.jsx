import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Html } from "@react-three/drei";
import styles from "../OrbitalSim.module.css";
import { useOrbitalSimContext } from '../Context';

function Observation({ data, vector }) {
  const { updateActiveObservation }= useOrbitalSimContext();
  const { label, interactable, isActive, isAnswer } = data;
  const [isHover, setIsHover] = useState(false);

  function getObsColor() {
    if (isActive && isAnswer) {
      return "green";
    } else if (isActive || isHover) {
      return "blue";
    }

    return "gray";
  }

  return (
    <mesh
      className={styles["obs-mesh"]}
      position={vector}
      onClick={interactable ? () => {
        updateActiveObservation(data.id)
       } : null}
      onPointerOver={interactable ? () => setIsHover(true) : null}
      onPointerOut={interactable ? () => setIsHover(false) : null}
    >
      <Html>
        <div
          className={classnames(styles["obs-label"])}>
          {label}
        </div>
      </Html>
      <octahedronGeometry attach="geometry" args={[20]} />
      <meshBasicMaterial
        attach="material"
        color={getObsColor()}
      />
    </mesh>
  );
}

Observation.propTypes = {
  data: PropTypes.object,
  vector: PropTypes.object,
};

export default Observation;
