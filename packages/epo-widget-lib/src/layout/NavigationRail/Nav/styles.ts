"use client";
import styled, { css } from "styled-components";

/** When the list contains any icon, left-align every button. */
export const railItemLayout = css`
  &:has(svg) button {
    justify-content: start;
  }
`;

export const NavigationRail = styled.aside`
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: var(--navigation-rail-z-index, 10);
  background-color: var(--white);
  inline-size: var(--navigation-rail-width, 10%);
  min-inline-size: fit-content;
  block-size: 100%;
  display: flex;
  flex-direction: column;

  ${railItemLayout}
`;