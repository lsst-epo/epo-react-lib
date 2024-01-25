import styled from "styled-components";
import Controls from "./Controls/Controls";
import ImageStack from "../ImageStack";

export const BlinkerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  justify-items: center;
  position: relative;
  height: 100%;
`;

export const BlinkerControls = styled(Controls)`
  grid-row: 2;
  margin-block-start: var(--PADDING_SMALL, 20px);
`;

export const BlinkerImages = styled(ImageStack)`
  aspect-ratio: 1;
  grid-row: 1;
  width: 100%;
`;
