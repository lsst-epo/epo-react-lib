import styled, { css } from "styled-components";

export const Point = styled.circle<{
  isSelected: boolean;
}>`
  cursor: pointer;
  transition: fill ease var(--DURATION, 0.2s), r ease-out 400ms;
  ${({ isSelected }) =>
    isSelected &&
    css`
      stroke-width: 3;
    `}

  &:focus {
    outline: none;
  }
`;
