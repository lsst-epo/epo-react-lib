"use client";
import styled from "styled-components";
import { NavigationRailButton, railItemLayout } from "../styles";

export const Wrapper = styled.div`
  position: relative;
  inline-size: fit-content;
`;

export const MenuButton = styled(NavigationRailButton)`
  background-color: transparent;
  inline-size: auto;
  color: var(--black);

  &:hover,
  &[aria-expanded="true"] {
    color: var(--black);
    background-color: var(--neutral10);
  }
`;

export const Dialog = styled.dialog`
  position: absolute;
  margin: 0;
  padding: 0;
  border: none;
  inset: auto auto auto 0;
  inline-size: max-content;
  min-inline-size: 100%;
  z-index: calc(var(--navigation-rail-z-index, 10) + 1);
  overscroll-behavior: contain;
  background-color: var(--white);
  color: inherit;
  transform: translateX(-100%);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform var(--DURATION_SLOW) ease,
      display var(--DURATION_SLOW) allow-discrete;
  }

  &[open] {
    display: flex;
    flex-direction: column;
    transform: translateX(0);
  }

  @starting-style {
    &[open] {
      transform: translateX(-100%);
    }
  }

  ${railItemLayout}
`;
