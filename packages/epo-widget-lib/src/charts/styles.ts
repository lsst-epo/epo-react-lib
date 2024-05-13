import styled from "styled-components";

export const BaseLine = styled.line`
  stroke: var(--axis-stroke, #707070);
`;

export const Guide = styled.polyline`
  stroke: var(--guide-stroke, #808080);
`;

export const Tick = styled.line`
  stroke: var(--axis-tick-stroke, #000);
  stroke-width: 2;
`;

export const Bar = styled.rect`
  cursor: pointer;
  transform-origin: center bottom;
`;

export const XLabel = styled.text`
  text-anchor: middle;
  dominant-baseline: hanging;
`;

export const YLabel = styled.text`
  text-anchor: end;
  dominant-baseline: central;
`;
