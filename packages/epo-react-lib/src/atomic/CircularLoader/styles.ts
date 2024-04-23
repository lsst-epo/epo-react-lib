import styled, { css, keyframes } from "styled-components";
import { zStack } from "@/styles/abstracts";

export type LoaderSpeed = "slow" | "normal" | "fast";

interface LoaderProps {
  $withOverlay?: boolean;
  $isVisible: boolean;
  $speed: LoaderSpeed;
}

export const speeds: { [key: string]: string } = {
  slow: "50s",
  normal: "20s",
  fast: "2s",
};

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div.attrs<LoaderProps>(
  ({ $isVisible }) => ({
    style: { opacity: $isVisible ? 1 : 0 },
  })
)<LoaderProps>`
  color: var(--turquoise50, #00bebf);
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--DURATION_SLOW, 0.4s) ease-in-out;

  svg {
    animation-name: ${spinAnimation};
    animation-duration: ${({ $speed }: LoaderProps) => speeds[$speed]};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  ${({ $withOverlay = false }) =>
    $withOverlay
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
