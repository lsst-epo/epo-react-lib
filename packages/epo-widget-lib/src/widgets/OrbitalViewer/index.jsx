import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Canvas } from 'react-three-fiber';
import Camera from './Camera.jsx';
import CameraController from './CameraController.jsx';
import Sun from "../OrbitalSim/Sun.jsx";
import Orbitals from './Orbitals.jsx';
import Controls from './controls/index.jsx';
import PlaybackSpeed from './PlaybackSpeed.jsx';
import OrbitalDetails from './OrbitalDetails.jsx';
import { container, orbitalCanvas } from './orbital-viewer.module.scss';

function OrbitalViewer({
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

  const handleStartStop = () => {
    setPlaying(!playing);
    setStepDirection(1);
    setFrameOverride(null);
  };

  useEffect(() => {
    if (reset > 0) {
      setDayPerVizSec(speeds.initial);
      setStepDirection(1);
      setElapsedTime(0);
    }
  }, [reset]);

  const handleStepSelect = e => {
    setDayPerVizSec(+e.target.value);
  };

  const handleReset = () => {
    setReset(reset + 1);
  };

  const handleNext = () => {
    setPlaying(false);
    setStepDirection(1);
    setFrameOverride(frameOverride + 1);
  };

  const handlePrevious = () => {
    setPlaying(false);
    setStepDirection(-1);
    setFrameOverride(frameOverride + 1);
  };

  // const { t } = useTranslation();

  return (
    <>
      <div className={container}>
        {/* {!potentialOrbits && !noDetails && (
          <OrbitalDetails
            type={detailsSet}
            velocity={activeVelocity}
            data={activeNeo}
          />
        )} */}
        {/* {!paused && (
          <PlaybackSpeed
            {...{ elapsedTime, dayPerVizSec, speeds }}
            sliderOnChangeCallback={handleStepSelect}
          />
        )} */}
        <Canvas invalidateFrameloop className={orbitalCanvas}>
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
        {/* {!paused && (
          <Controls
            {...{
              playing,
              handleStartStop,
              handleNext,
              handlePrevious,
              handleReset,
              dayPerVizSec,
            }}
          />
        )} */}
      </div>
    </>
  );
}

OrbitalViewer.propTypes = {
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

export default OrbitalViewer;
