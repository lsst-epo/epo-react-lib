import styled, { css } from "styled-components";
import * as StyledSVG from "@/styles/svg";
import Blinker from "@/atomic/Blinker";
import ElapsedTime from "@/atomic/ElapsedTime";

export const SourceSelectorContainer = styled(StyledSVG.Container)<{
  width: number;
  height: number;
}>`
  ${({ width, height }) => css`
    aspect-ratio: ${width} / ${height};
    max-width: ${width}px;
    max-height: ${height}px;
  `}
`;

export const SVG = styled.svg<{ isDisplayOnly: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  cursor: ${({ isDisplayOnly }) => (isDisplayOnly ? "default" : "pointer")};
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
