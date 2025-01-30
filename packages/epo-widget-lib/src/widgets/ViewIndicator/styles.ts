"use client";
import styled from "styled-components";

export const Container = styled.div`
  --size-svg-inner: calc(var(--size-container) * 0.65);

  aspect-ratio: 1;
  background-color: #313333;
  block-size: var(--size-container);
  border-radius: calc(var(--size-container) / 2);
  color: var(--color-font-invert);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
`;

export const SVG = styled.svg`
  aspect-ratio: 1;
  overflow: visible;
  width: calc(var(--size-container) * 0.65);
`;

export const NorthDirection = styled.div`
  font-size: calc(calc(var(--size-container) - var(--size-svg-inner)) / 2);
  font-weight: bold;
  line-height: 1;
  position: absolute;
  top: 0px;
`;

export const Outline = styled.path`
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
`;

export const Meridian = styled.path`
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
`;
export const MeridianBackFacing = styled.path`
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  opacity: 0.85;
`;

export const ViewCone = styled.g`
  --color-fill-primary: var(--color-rubin-yellow-200);
  --color-fill-secondary: #eba85b;
  fill: var(--color-fill-primary);
  fill: color-mix(
    in hsl,
    var(--color-fill-primary) var(--percent-mix-primary),
    var(--color-fill-secondary) var(--percent-mix-secondary)
  );
`;

export const Plane = styled.path`
  opacity: 0.8;
`;

export const SideEdges = styled.path`
  opacity: 0.3;
`;
export const TopEdges = styled.path`
  opacity: 0.5;
`;
