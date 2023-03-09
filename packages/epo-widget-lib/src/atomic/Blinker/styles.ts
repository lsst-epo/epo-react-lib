import styled from "styled-components";
import Controls from "./Controls/Controls";
import Images from "./Images/Images";

export const BlinkerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  justify-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BlinkerControls = styled(Controls)`
  grid-row: 2;
`;

export const BlinkerImages = styled(Images)`
  grid-row: span 2;
`;
