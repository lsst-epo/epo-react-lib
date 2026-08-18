"use client";
import styled, { css } from "styled-components";

/** When the list contains any icon, left-align every button. */
export const railItemLayout = css`
  &:has(svg) button {
    justify-content: start;
  }
`;

export const NavigationRailContainer = styled.div`
  --navigation-rail-z-index: 10;

  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  min-block-size: 300px;
  overflow: hidden;
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

export const NavigationRailButton = styled.button`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  min-block-size: 56px;
  padding: 12px 22px;
  text-align: center;
  background-color: var(--neutral10);
  color: var(--color-background-button-primary-default);

  &:hover {
    background-color: var(--color-background-button-primary-default);
    color: var(--white);
  }

  &[aria-pressed="true"] {
    background-color: var(--color-background-button-primary-default);
    color: var(--white);
  }

  svg {
    inline-size: 24px;
    block-size: 24px;
    flex: 0 0 auto;
  }
`;
