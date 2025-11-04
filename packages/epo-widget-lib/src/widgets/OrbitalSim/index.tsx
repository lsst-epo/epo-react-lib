import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./OrbitalSim.module.css";
import CameraController from "./CameraController.jsx";
import Camera from "./Camera.jsx";
import Sun from "./Sun.jsx";

function OrbitalSim({
  neos,
  activeNeo,
  activeObs,
  selectionCallback,
  paused,
  pov,
  defaultZoom,
  potentialOrbits,
  observations,
  noDetails,
  detailsSet,
  refObjs,
  noLabels,
}: any) {
  const speeds = { min: 0.00001157, max: 365.25, initial: 11.574, step: 1 };
  const [playing, setPlaying] = useState(!paused);
  const [activeVelocity, setActiveVelocity] = useState(null);
  const [stepDirection, setStepDirection] = useState(1);
  const [frameOverride, setFrameOverride] = useState(null);
  const [dayPerVizSec, setDayPerVizSec] = useState(paused ? 0 : speeds.initial);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [reset, setReset] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <>
      <div className={styles.container}>
        <Canvas>
          <CameraController {...{ pov, reset }} /> 
          <Camera
            left={-15000}
            right={15000}
            top={15000}
            bottom={-15000}
            near={0.1}
            far={30000}
            position={[0, 0, 8000]}
            defaultZoom={defaultZoom || 1}
          />
          <ambientLight intensity={0.9} />
          <Sun zoomLevel={zoomLevel} defaultZoom={defaultZoom || 1} />
        </Canvas>
      </div>
    </>
  );
}

OrbitalSim.propTypes = {};

export default OrbitalSim;
