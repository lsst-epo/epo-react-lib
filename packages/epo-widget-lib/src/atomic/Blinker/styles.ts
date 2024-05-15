import styled from "styled-components";
import Controls from "./Controls/Controls";
import { token } from "@rubin-epo/epo-react-lib/styles";

export const BlinkerContainer = styled.div`
  aspect-ratio: 1;
  container-type: inline-size;
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
`;

export const BlinkerControls = styled(Controls)``;

export const ControlsContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  justify-items: end;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  gap: var(--widget-padding, var(--PADDING_SMALL));
  padding: var(--widget-padding, var(--PADDING_SMALL));

  @container (min-width: ${token("BREAK_PHABLET_MIN")}) {
    justify-items: center;
  }
`;
