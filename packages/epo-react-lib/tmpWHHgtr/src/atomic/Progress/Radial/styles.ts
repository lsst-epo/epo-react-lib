import styled from "styled-components";

export const Container = styled.svg`
  aspect-ratio: 1 / 1;
`;

export const BackgroundCircle = styled.circle`
  fill: none;
  stroke: var(--black, #000);
  shape-rendering: geometricPrecision;
`;

export const ProgressArc = styled.circle`
  fill: none;
  stroke: #30e0e3;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: var(--DURATION, 0.2s) stroke-dashoffset;
  shape-rendering: geometricPrecision;
`;

export const MarkerText = styled.text<{ $darkMode: boolean }>`
  fill: ${({ $darkMode }) => ($darkMode ? "var(--white,#fff)" : "inherit")};
  text-anchor: middle;
  dominant-baseline: central;
  font-variant: tabular-nums;
`;
