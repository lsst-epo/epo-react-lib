import styled, { css } from "styled-components";

export const BlinkerImage = styled.img<{ active: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;

  ${({ active }) =>
    active
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
`;
