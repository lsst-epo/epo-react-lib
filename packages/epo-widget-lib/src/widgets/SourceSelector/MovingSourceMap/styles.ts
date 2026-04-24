import styled from "styled-components";

export const SVG = styled.svg`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Point = styled.circle`
  cursor: pointer;
  transition: transform ease var(--DURATION, 0.2s);
  transform-origin: center;

  &:focus {
    outline: none;
  }
`;
