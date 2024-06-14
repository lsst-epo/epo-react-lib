import styled from "styled-components";
import BaseImage from "../Image";

export const ResponsiveImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: var(--aspect-ratio);
`;

export const Image = styled(BaseImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;
