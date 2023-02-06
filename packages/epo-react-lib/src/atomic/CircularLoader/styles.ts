import styled, { css } from "styled-components";
import { zStack } from "@/styles/globalStyles";

interface LoaderProps {
  fullScreen: boolean;
  isVisible: boolean;
}

export const LoaderContainer = styled.div.attrs(({ isVisible }) => ({
  style: { opacity: isVisible ? 1 : 0 },
}))<LoaderProps>`
  color: var(--turquoise50, #00bebf);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${({ fullScreen }) =>
    fullScreen
      ? css`
          z-index: ${zStack.loader};

          position: fixed;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          background-color: rgba(0, 0, 0, 1);

          display: flex;
          justify-content: center;
          align-items: center;
        `
      : css``}
`;
