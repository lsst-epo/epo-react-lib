"use client";
import styled from "styled-components";

/** Scaled rather than given a new radius, so growing on hover or selection can be transitioned */
export const Point = styled.circle`
  transform-box: fill-box;
  transform-origin: center;
  transition:
    transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 300ms ease-out;

  &[data-interactive="true"] {
    cursor: pointer;
  }

  &[data-active="true"] {
    transform: scale(var(--active-point-scale, 2));
  }

  &[data-dimmed="true"] {
    opacity: 0.4;
  }

  &[data-hidden="true"] {
    opacity: 0;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid var(--focus-outline, #058b8c);
    outline-offset: 2px;
  }
`;

export const LabelBox = styled.rect`
  fill: var(--white, #fff);
  stroke: var(--black, #000);
  stroke-width: 2;
`;

export const Label = styled.text`
  font-size: 0.75em;

  &[data-active="true"] {
    font-weight: 500;
  }
`;
