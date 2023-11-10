import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 1 / 1;
  grid-area: image;
  background-color: rgba(0, 0, 0, var(--image-container-opacity, 0.1));
  transition: background-color ease var(--DURATION, 0.2s);
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  opacity: var(--loading-opacity, 0);
  transition: opacity ease var(--DURATION_SLOW, 0.4s);
  position: absolute;
  top: 0;
  left: 0;
`;
