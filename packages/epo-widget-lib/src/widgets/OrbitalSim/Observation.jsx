import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from 'drei';

import {
  obsLabel,
  obsActive,
  obsHover,
  obsAnswer,
  obsMesh,
} from './orbital-viewer.module.scss';

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
    if (isActive && isActiveAnswer) return 'green';
    if (isActiveAnswer || isHover) return 'blue';

    return 'gray';
  }

  return (
    <mesh
      className={obsMesh}
      position={vector}
      onClick={interactable ? () => selectionCallback(data, 'obs') : null}
      onPointerOver={interactable ? () => setIsHover(true) : null}
      onPointerOut={interactable ? () => setIsHover(false) : null}
    >
      <HTML>
        <div
          className={classnames(obsLabel, {
            [obsAnswer]: isActive && isActiveAnswer,
            [obsHover]: isHover,
            [obsActive]: isActiveAnswer,
          })}
        >
          {label}
        </div>
      </HTML>
      <octahedronBufferGeometry attach="geometry" args={[20]} />
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
