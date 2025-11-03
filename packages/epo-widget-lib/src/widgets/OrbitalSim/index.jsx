import React, { useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import styles from "./OrbitalSim.module.css";
import CameraController from "./CameraController.jsx";

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
}) {
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
        <Canvas invalidateFrameloop className={styles.orbitalCanvas}>
          <CameraController {...{ pov, reset }} />
        </Canvas>
      </div>
    </>
  );
}

OrbitalSim.propTypes = {};

export default OrbitalSim;
