import React, { useReducer, useEffect } from 'react';
import PropTypes from "prop-types";
import { useThree, useFrame } from "@react-three/fiber";
import Orbital from "./Orbital.jsx";
import PotentialOrbits from "./PotentialOrbits.jsx";
import { getRefObjProps } from "./orbitalUtilities.js";
import { useOrbitalSimContext } from "./Context"

function Orbitals({
  playing,
  dayPerVizSec,
  stepDirection,
  frameOverride,
  defaultZoom,
  potentialOrbits,
  elapsedTime,
  setElapsedTime,
  reset,
  zoomLevel,
  setZoomLevel
}) {
  const { orbits }= useOrbitalSimContext();
  
    const { 
      neos,
      refObjs,
      activeNeo
     } = orbits;

  function reducer(state) {
    const { remainingInits } = state;
    return { remainingInits: remainingInits - 1 };
  }

  const { camera } = useThree();
  const [state, dispatch] = useReducer(reducer, {
    remainingInits: (neos && Array.isArray(neos)) ? neos.length : 0,
  });

  function renderRefObjs() {
    const refObjsProperties = (
      refObjs || ["earth", "jupiter", "mars", "neptune"]
    ).map(getRefObjProps);

    return refObjsProperties.map((planet) => {
      const {
        orbitColor,
        objectColor,
        objectRadius,
        Ref: ref,
        Principal_desig: pd,
        name,
      } = planet;

      return (
        <Orbital
          type="planet"
          key={`${ref}-${pd || name}`}
          data={planet}
          position={[0, 0, 0]}
          zoomMod={zoomLevel}
          {...{
            defaultZoom,
            playing,
            stepDirection,
            dayPerVizSec,
            frameOverride,
            orbitColor,
            objectColor,
            objectRadius,
            reset,
          }}
        />
      );
    });
  }

  useFrame((frameState, delta) => {
    if (camera.zoom !== zoomLevel) setZoomLevel(camera.zoom);
    if (playing) {
      setElapsedTime(elapsedTime + stepDirection * delta * dayPerVizSec);
    }
  });

  // Called whenever frameOverride changes
  useEffect(() => {
    if (frameOverride) {
      setElapsedTime(elapsedTime + stepDirection * (1 / 60) * dayPerVizSec);
    }
  }, [frameOverride]);

  
  return (
    <>
      {renderRefObjs()}
      {potentialOrbits ? (
        <PotentialOrbits
          data={neos}
          position={[0, 0, 0]}
          initialized
          zoomMod={zoomLevel}
          {...{
            defaultZoom,
            playing,
            stepDirection,
            dayPerVizSec,
            frameOverride,
          }}
          initCallback={dispatch}
        />
      ) : (
        neos ? (neos.map((neo, badId) => {
            const { Ref: ref, Principal_desig: pd, name } = neo;
            return (
              <Orbital
                key={
                  ref && (pd || name) ? `${ref}-${pd || name}` : `orbit-${badId}`
                }
                data={neo}
                position={[0, 0, 0]}
                active={neo === activeNeo}
                initialized={state.remainingInits <= 0}
                zoomMod={zoomLevel}
                {...{
                  defaultZoom,
                  playing,
                  stepDirection,
                  dayPerVizSec,
                  frameOverride,
                  reset,
                }}
                initCallback={dispatch}
              />
            );
          }))
         : null
        )}
    </>
  );
}

Orbitals.propTypes = {
  playing: PropTypes.bool,
  dayPerVizSec: PropTypes.number,
  stepDirection: PropTypes.number,
  frameOverride: PropTypes.number,
  activeVelocityCallback: PropTypes.func,
  defaultZoom: PropTypes.number,
  zoomLevel: PropTypes.number,
  setZoomLevel: PropTypes.func,
  potentialOrbits: PropTypes.bool,
  elapsedTime: PropTypes.number,
  setElapsedTime: PropTypes.func,
  reset: PropTypes.number
};

export default Orbitals;
