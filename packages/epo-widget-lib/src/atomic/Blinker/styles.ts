import styled, { css } from "styled-components";
import Controls from "./Controls/Controls";
import Images from "./Images/Images";

export const BlinkerContainer = styled.div<{ isCondensed: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  justify-items: center;
  position: relative;
  height: 100%;
`;

export const BlinkerControls = styled(Controls)<{ isCondensed: boolean }>`
  grid-row: 2;

  ${({ isCondensed }) =>
    isCondensed
      ? css`
          margin-block-start: var(--PADDING_SMALL, 20px);
        `
      : css`
          margin-block-end: var(--PADDING_SMALL, 20px);
        `}
`;

export const BlinkerImages = styled(Images)<{ isCondensed: boolean }>`
  aspect-ratio: 1;
  width: 100%;

  ${({ isCondensed }) =>
    isCondensed
      ? css`
          grid-row: 1;
        `
      : css`
          position: absolute;
          grid-row: span 2;
        `};
`;
