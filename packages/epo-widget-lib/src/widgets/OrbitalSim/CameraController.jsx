import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useThree } from "@react-three/fiber";

function CameraController({ pov, reset }) {
  const { camera, gl } = useThree();
  const orbitControls = useRef();

  function setPov() {
    if (pov) {
      const targetPov = {
        side: Math.PI / 1.0075,
        top: Math.PI / 2,
      }[pov];
      // horizontal rotation
      orbitControls.current.minAzimuthAngle = 0;
      orbitControls.current.maxAzimuthAngle = 0;
      // vertical rotation
      orbitControls.current.minPolarAngle = targetPov;
      orbitControls.current.maxPolarAngle = targetPov;
    }

    orbitControls.current.update();
  }

  useEffect(() => {
    if (orbitControls.current && reset > 0) {
      orbitControls.current.reset();
    }
  }, [reset]);

  useEffect(() => {
    orbitControls.current = new OrbitControls(camera, gl.domElement);
    orbitControls.current.minDistance = 70;
    orbitControls.current.maxDistance = 10000;
    orbitControls.current.screenSpacePanning = true;
    // controls.mouseButtons.RIGHT = THREE.MOUSE.PAN;
    // controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
    // controls.touches.TWO = THREE.TOUCH.PAN;
    // controls.touches.ONE = THREE.TOUCH.DOLLY_ROTATE;

    setPov();
    return () => {
      orbitControls.current.dispose();
    };
  }, [camera, gl]);

  return null;
}

CameraController.propTypes = {
  pov: PropTypes.string,
  reset: PropTypes.number,
};

export default CameraController;
