import styled from "styled-components";
import Controls from "./Controls/Controls";

export const BlinkerContainer = styled.div`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
`;

export const BlinkerControls = styled(Controls)`
  position: absolute;
  bottom: var(--PADDING_SMALL, 20px);
`;
