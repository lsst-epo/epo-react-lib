import styled from "styled-components";
import CircularLoader from "@rubin-epo/epo-react-lib/CircularLoader";

export const StackContainer = styled.div`
  background-color: var(--image-stack-background, transparent);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "stack";

  justify-items: center;
  align-items: center;

  width: 100%;
  height: auto;
`;

export const StackedImage = styled.img`
  grid-area: stack;
  height: auto;
  width: 100%;

  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;

  &[hidden] {
    display: none;
  }
`;

export const StackLoader = styled(CircularLoader)`
  grid-area: stack;
`;
