import styled, { css } from "styled-components";

export const BlinkContainer = styled.div`
  background-color: var(--neutral95, #1f2121);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const LoadingContainer = styled.div<{ isLoading: boolean }>`
  transition: opacity ease var(--DURATION_SLOW, 0.4s);

  ${({ isLoading }) =>
    isLoading
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`;
