import React, { useState, useEffect } from 'react';
import Button from "@rubin-epo/epo-react-lib/Button";
import { useOrbitalSimContext } from '../Context';
import * as Styled from "./styles";
import { GlobalStyles } from "../styles";

function OrbitalDetails() {

  const { orbits }= useOrbitalSimContext();
  
  const { 
    detailsRows: rows
  } = orbits;
     
  const [active, setActive] = useState(false);

  return (
    <>
      <GlobalStyles/>
      <Styled.ButtonWrapper
        styleAs="secondary"
        isInactive={!rows}
        onClick={() => { setActive(!active);}}
      >
        {active ? "Hide Details" : "Show Details"}
      </Styled.ButtonWrapper>
      <Styled.SlideoutWrapper slideFrom="left" isOpen={active} >
        <Styled.SlideoutPanel>

          <h3>Orbital Details</h3>

          {rows && rows.map(e => (
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
            onClick={() => setActive(!active)}
          >
            Close
          </Button>
          
        </Styled.SlideoutPanel>
      </Styled.SlideoutWrapper>
    </>
  );
}

export default OrbitalDetails;
