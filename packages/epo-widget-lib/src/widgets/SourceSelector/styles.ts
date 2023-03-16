import styled from "styled-components";
import * as StyledSVG from "@/styles/svg";
import Blinker from "@/atomic/Blinker";
import ElapsedTime from "@/atomic/ElapsedTime";

export const SourceSelectorContainer = styled(StyledSVG.Container)<{
  width: number;
}>`
  aspect-ratio: 1;
  max-width: ${({ width }) => width}px;
`;

export const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const BackgroundBlinker = styled(Blinker)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ElapsedDisplay = styled(ElapsedTime)`
  position: absolute;
  right: var(--PADDING_SMALL, 20px);
  bottom: var(--PADDING_SMALL, 20px);
`;
