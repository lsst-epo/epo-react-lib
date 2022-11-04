import styled from "styled-components";

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;

  @supports (aspect-ratio: auto) {
    padding-bottom: 0;
    height: auto;
    aspect-ratio: 16 / 9;
  }

  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
