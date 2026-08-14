import React, { useEffect, useMemo, useState } from 'react';
import Button from "@rubin-epo/epo-react-lib/Button";
import { useOrbitalSimContext } from '../Context';
import * as Styled from "./styles";
import { GlobalStyles } from "../styles";
import { getRefObjProps } from "../orbitalUtilities.js";

function OrbitalDetails() {
  const [active, setActive] = useState(false);

  const { orbits, selectedNeoIndex, selectedObjectRef, setSelectedObjectRef } = useOrbitalSimContext();

  // Find orbital details by neo index
  const neoDetails = useMemo(() => {
    const { 
      object_details: rows
    } = orbits.neos?.[selectedNeoIndex] || {};
    return rows;
  }, [selectedNeoIndex, orbits]);

  // Find orbital detials by ref 
  const refDetails = useMemo(() => {
    const refObjs = orbits.refObjs || ["earth", "jupiter", "mars", "neptune"].map(getRefObjProps);
    const refDetails = refObjs.find((object) => object.Ref === selectedObjectRef)?.object_details;
    const neoDetails = orbits.neos?.find((object) => object.Ref === selectedObjectRef)?.object_details;
    const details = refDetails || neoDetails;

    if (details) setActive(true);
    return details; 
  }, [orbits, selectedObjectRef]);
  
  return (
    <>
      <GlobalStyles/>
      <Styled.ButtonWrapper
        styleAs="secondary"
        isInactive={!refDetails && !neoDetails}
        onClick={() => { setActive(!active); }}
      >
        {active ? "Hide Details" : "Show Details"}
      </Styled.ButtonWrapper>
      <Styled.SlideoutWrapper slideFrom="left" isOpen={active} >
        <Styled.SlideoutPanel>

          <h3>Orbital Details</h3>

          {refDetails ? refDetails.map(e => (
            <Styled.SlideoutRow key={e.rowTitle}>
              <Styled.SlideoutColLeft>
                <p>{e.rowTitle}</p>
              </Styled.SlideoutColLeft>
              <Styled.SlideoutColRight>
                <p>{e.rowContent}</p>
              </Styled.SlideoutColRight>
            </Styled.SlideoutRow >
          )) : neoDetails && neoDetails.map(e => (
            <Styled.SlideoutRow key={e.rowTitle}>
              <Styled.SlideoutColLeft>
                <p>{e.rowTitle}</p>
              </Styled.SlideoutColLeft>
              <Styled.SlideoutColRight>
                <p>{e.rowContent}</p>
              </Styled.SlideoutColRight>
            </Styled.SlideoutRow >
          ))}

          <Button
            isBlock
            onClick={() => {
              setActive(!active)
              setSelectedObjectRef(undefined)
            }}
          >
            Close
          </Button>
          
        </Styled.SlideoutPanel>
      </Styled.SlideoutWrapper>
    </>
  );
}

export default OrbitalDetails;
