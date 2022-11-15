import styled from "styled-components";

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &[aria-hidden="true"] {
    visibility: hidden;
  }
`;
