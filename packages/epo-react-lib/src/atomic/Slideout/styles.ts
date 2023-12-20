import { zStack } from "@/styles/abstracts";
import styled from "styled-components";

export const Transition = styled.div`
  --transition-time: calc(var(--slide-time, 0) + var(--slide-delay, 0));

  @media (prefers-reduced-motion: no-preference) {
    --slide-time: 400ms;
    --slide-delay: 200ms;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zStack.dialog};
`;

export const Overlay = styled.div`
  background-color: var(--background-color, transparent);
  width: 100%;
  height: 100%;
  position: absolute;
  transition: background-color var(--slide-time, 0);
  transition-delay: var(--slide-delay, 0);

  &.closed {
    --background-color: transparent;
  }

  &.open {
    --background-color: rgba(0, 0, 0, var(--overlay-opacity, 0.9));

    @media (prefers-reduced-transparency: no-preference) {
      --overlay-opacity: 0.7;
    }
  }
`;
export const SlideoutContainer = styled.div`
  position: absolute;
  transition: transform var(--slide-time, 0);
  &.closed {
    transform: var(--transform);
  }
  &.open {
    transform: translate(0, 0);
  }
`;
