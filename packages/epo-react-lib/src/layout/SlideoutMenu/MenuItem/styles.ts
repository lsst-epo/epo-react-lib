import styled from "styled-components";
import { aButton } from "@/styles/mixins/appearance";
import { fluidScale } from "@/styles/utils";

export const MenuItemWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;

  &:first-of-type {
    margin-block-start: calc(var(--menu-padding) / 2);
  }
`;

export const MenuItem = styled.button`
  ${aButton}

  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: ${fluidScale("20px", "16px")};
  border: none;
  stroke-width: 0.25px;
  width: 100%;
  padding-inline-start: 15px;

  &:not(:disabled):not([aria-disabled="true"]):hover {
    text-decoration: underline;
  }
  &:not(:disabled):not([aria-disabled="true"]):focus,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    --button-border-color: var(--white, #fff);
  }
`;
