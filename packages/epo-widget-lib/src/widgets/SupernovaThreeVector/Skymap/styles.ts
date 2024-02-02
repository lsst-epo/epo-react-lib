"use client";
import styled from "styled-components";

export const Background = styled.path`
  fill: #d9f7f7;
`;

export const Graticule = styled.path`
  fill: none;
  stroke: #30e0e3;
`;

export const Outline = styled.path`
  fill: none;
  stroke: var(--black, #000);
`;

export const LatLabel = styled.text`
  font-size: 0.75em;
  text-anchor: end;
`;
export const LongLabel = styled.text`
  font-size: 0.75em;
  text-anchor: middle;
  dominant-baseline: central;
`;
