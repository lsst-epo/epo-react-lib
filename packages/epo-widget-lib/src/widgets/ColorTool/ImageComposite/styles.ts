import styled from "styled-components";
import CircularLoader from "@rubin-epo/epo-react-lib/CircularLoader";

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-area: image;
  background-color: rgba(0, 0, 0, var(--image-container-opacity, 0.1));
  transition: background-color ease var(--DURATION, 0.2s);
  width: 100%;
  height: 100%;
`;

export const Image = styled.canvas`
  opacity: var(--loading-opacity, 0);
  transition: opacity ease var(--DURATION_SLOW, 0.4s);
  width: 100%;
  height: 100%;
`;

export const Loader = styled(CircularLoader)`
  position: absolute;
`;
