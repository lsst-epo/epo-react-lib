import styled from "styled-components";

export const Point = styled.circle`
  cursor: pointer;
  transition: transform ease var(--DURATION, 0.2s);
  transform-origin: center;

  &:focus {
    outline: none;
  }
`;
