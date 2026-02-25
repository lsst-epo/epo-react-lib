import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFrame, useThree } from "@react-three/fiber";

function Camera({ ...props }) {
  const ref = useRef();
  // Make the camera known to the system
  useEffect(() => {
    const $el = ref.current;
    $el.zoom = props.defaultZoom;
    $el.updateProjectionMatrix();
  }, []);

  // Update it every frame
  useFrame(() => {
    ref.current.updateMatrixWorld();
  });
  return <orthographicCamera ref={ref} {...props} makeDefault zoom={100}/>;
}

Camera.propTypes = {
  defaultZoom: PropTypes.number,
};

export default Camera;
