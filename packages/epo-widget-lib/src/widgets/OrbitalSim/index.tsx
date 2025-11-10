import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { useTranslation } from "react-i18next";
import CameraController from "./CameraController.jsx";
import Camera from "./Camera.jsx";
import Sun from "./Sun.jsx";
import styles from "./OrbitalSim.module.css";

import Orbitals from "./Orbitals";

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

  const { t } = useTranslation();

  useEffect(() => {
    if (reset > 0) {
      setDayPerVizSec(speeds.initial);
      setStepDirection(1);
      setElapsedTime(0);
    }
  }, [reset]);

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
          <Orbitals
            activeVelocityCallback={setActiveVelocity}
            defaultZoom={defaultZoom || 1}
            {...{
              refObjs,
              neos,
              activeNeo,
              activeObs,
              playing,
              stepDirection,
              dayPerVizSec,
              frameOverride,
              potentialOrbits,
              observations,
              selectionCallback,
              elapsedTime,
              setElapsedTime,
              noLabels,
              reset,
              zoomLevel,
              setZoomLevel,
              t,
            }}
          />
          <Sun
            zoomLevel={zoomLevel}
            defaultZoom={defaultZoom || 1}
            {...{ t }}
          />
        </Canvas>
      </div>
    </>
  );
}

OrbitalSim.propTypes = {
  neos: PropTypes.array,
  activeNeo: PropTypes.object,
  activeObs: PropTypes.object,
  selectionCallback: PropTypes.func,
  paused: PropTypes.bool,
  pov: PropTypes.string,
  defaultZoom: PropTypes.number,
  potentialOrbits: PropTypes.bool,
  observations: PropTypes.array,
  noDetails: PropTypes.bool,
  noLabels: PropTypes.bool,
  detailsSet: PropTypes.string,
  refObjs: PropTypes.array,
};

export default OrbitalSim;
