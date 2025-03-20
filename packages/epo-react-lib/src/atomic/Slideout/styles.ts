import { zStack } from "@/styles/abstracts";
import styled from "styled-components";

export const Wrapper = styled.div`
  --transition-time: calc(var(--slide-time, 0) + var(--slide-delay, 0));

  @media (prefers-reduced-motion: no-preference) {
    --slide-time: 400ms;
    --slide-delay: 100ms;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zStack.dialog};
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, var(--overlay-opacity, 0.9));
  width: 100%;
  height: 100%;
  position: absolute;
  transition-property: opacity;
  transition-duration: var(--transition-time);
  opacity: 0;

  &[data-open] {
    opacity: 1;
  }

  &[data-enter],
  &[data-leave],
  &[data-closed] {
    opacity: 0;
  }

  @media (prefers-reduced-transparency: no-preference) {
    --overlay-opacity: 0.7;
  }
`;
export const Slideout = styled.div`
  position: absolute;
  transition-property: transform;
  transition-duration: var(--slide-time);
  transition-delay: var(--slide-delay);

  &[data-open] {
    transform: translate(0, 0);
  }
  &[data-enter],
  &[data-leave],
  &[data-closed] {
    transform: var(--transform);
  }
`;
