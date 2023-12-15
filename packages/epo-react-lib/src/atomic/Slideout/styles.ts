import { zStack } from "@/styles/abstracts";
import styled from "styled-components";

export const Transition = styled.div`
  --slide-time: 400ms;
  --slide-delay: 200ms;
  --transition-time: calc(var(--slide-time) + var(--slide-delay));

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
  transition: background-color var(--slide-time);
  transition-delay: var(--slide-delay);

  &.closed {
    --background-color: transparent;
  }

  &.open {
    --background-color: rgba(0, 0, 0, 0.7);
  }
`;
export const SlideoutContainer = styled.div`
  position: absolute;
  transition: transform var(--slide-time);
  &.closed {
    transform: var(--transform);
  }
  &.open {
    transform: translate(0, 0);
  }
`;
