import styled, { css, keyframes } from "styled-components";

const growRadius = (r: number) =>
  keyframes`from {r: ${r}} to {r: ${Math.max(10, r * 1.2)}}`;

export const Point = styled.circle<{
  isSelected: boolean;
}>`
  cursor: pointer;
  transition: fill ease var(--DURATION, 0.2s), r ease-out 400ms;
  ${({ isSelected }) =>
    isSelected &&
    css`
      stroke-width: 4;
    `}

  &:focus {
    outline: none;
  }
`;
