import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { useTranslation } from "react-i18next";
import OrbitalDetails from "./OrbitalDetails.jsx";
import CameraController from "./CameraController.jsx";
import Camera from "./Camera.jsx";
import Orbitals from "./Orbitals";
import Sun from "./Sun.jsx";
import PlaybackSpeed from "./PlaybackSpeed.jsx";
import PlaybackControls from "./Controls/PlaybackControls";
import styles from "./OrbitalSim.module.css";
import { useOrbitalSimContext } from "./Context";

function OrbitalSim() {
  const { orbits }= useOrbitalSimContext();

  const { 
    paused,
    pov,
    defaultZoom,
    potentialOrbits,
    noDetails,
    noControls = false,
   } = orbits;

  const speeds = { min: 0.00001157, max: 365.25, initial: 11.574, step: 1 };
  const [playing, setPlaying] = useState(!paused);
  const [activeVelocity, setActiveVelocity] = useState(null);
  const [stepDirection, setStepDirection] = useState(1);
  const [frameOverride, setFrameOverride] = useState(0);
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
      setReset(-1);
    } else if (reset < 0) {
      setElapsedTime(0);
      setPlaying(true);
      setReset(0)
    }
  }, [reset]);

  const handleStepSelect = (e: any) => {
    setDayPerVizSec(+e);
  };

  const handleStartStop = () => {
    if(!playing) {
      setStepDirection(1);
    }
    setPlaying(!playing)
  }

  const handleReset = () => {
    setPlaying(e => false);
    setReset(e => e + 1);
  }

  const handleNext = (e: any) => {
    setPlaying(false);
    setStepDirection(1);
    setFrameOverride(e => e + 1);
  }

  const handlePrevious = (e: any) => {
    setPlaying(false);
    setStepDirection(-1);
    setFrameOverride(e => e + 1);
  }

  let isDisabled = false;

  return (
    <>
      <div className={styles.container}>
        {!potentialOrbits && !noDetails && (
          <OrbitalDetails/>
        )}
        {!paused && (
          <PlaybackSpeed
            {...{ elapsedTime, dayPerVizSec, speeds }}
            sliderOnChangeCallback={handleStepSelect}
          />
        )}
        {!noControls && (
          <PlaybackControls
          {...{
            playing,
            handleStartStop,
            handleNext,
            handlePrevious,
            isDisabled,
            handleReset
            }}
          />
        )}
       
        <Canvas className={styles["orbital-canvas"]}>
          <CameraController {...{ pov, reset }} />
          <Camera
            left={5000}
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
            defaultZoom={defaultZoom || 1}
            {...{
              playing,
              stepDirection,
              dayPerVizSec,
              frameOverride,
              potentialOrbits,
              elapsedTime,
              setElapsedTime,
              reset,
              zoomLevel,
              setZoomLevel,
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

export default OrbitalSim;
