import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Html } from "@react-three/drei";

import styles from "./OrbitalSim.module.css";

function Observation({ data, activeObs, vector, selectionCallback }) {
  const { id, label, interactable, isActive } = data;
  const [isHover, setIsHover] = useState(false);
  const [isActiveAnswer, setIsActiveAnswer] = useState(() => {
    const { id: activeObsId } = activeObs || {};
    return activeObsId === id;
  });

  useEffect(() => {
    const { id: activeObsId } = activeObs || {};
    setIsActiveAnswer(activeObsId === id);
  }, [activeObs]);

  function getObsColor() {
    if (isActive && isActiveAnswer) return "green";
    if (isActiveAnswer || isHover) return "blue";

    return "gray";
  }

  return (
    <mesh
      className={styles["obs-mesh"]}
      position={vector}
      onClick={interactable ? () => selectionCallback(data, "obs") : null}
      onPointerOver={interactable ? () => setIsHover(true) : null}
      onPointerOut={interactable ? () => setIsHover(false) : null}
    >
      <Html>
        <div
          className={classnames(styles["obs-label"], {
            [styles["obs-answer"]]: isActive && isActiveAnswer,
            [styles["obs-hover"]]: isHover,
            [styles["obs-active"]]: isActiveAnswer,
          })}
        >
          {label}
        </div>
      </Html>
      <octahedronGeometry attach="geometry" args={[20]} />
      <meshBasicMaterial
        attach="material"
        color={getObsColor(isActiveAnswer, isActive)}
      />
    </mesh>
  );
}

Observation.propTypes = {
  data: PropTypes.object,
  selectionCallback: PropTypes.func,
  activeObs: PropTypes.object,
  vector: PropTypes.object,
};

export default Observation;
