"use client";
import styled from "styled-components";

export const AspectRatio = styled.div`
  aspect-ratio: var(--size-aspect-ratio);
  position: relative;
  width: calc(var(--widget-max-height, 100vh) * var(--size-aspect-ratio));
  max-height: var(--widget-max-height, 100vh);
  max-width: 100%;

  @media (orientation: landscape) {
    --size-aspect-ratio: var(--size-aspect-ratio-landscape, 1);
  }

  @media (orientation: portrait) {
    --size-aspect-ratio: var(--size-aspect-ratio-portrait, 1);
  }
`;
