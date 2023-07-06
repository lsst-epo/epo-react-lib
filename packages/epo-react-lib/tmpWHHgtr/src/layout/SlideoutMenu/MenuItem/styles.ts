import styled from "styled-components";
import Button from "@/atomic/Button";

export const StyledMenuItemWrapper = styled.div`
  padding: 0;
  margin: 0;

  &:first-of-type {
    margin-block-start: calc(var(--menu-padding) / 2);
  }
`;

export const StyledMenuItem = styled(Button)`
  --button-border-color: transparent;
  --button-background-color: transparent;
  --button-text-align: left;

  border: none;
  stroke-width: 0.25px;
  width: 100%;

  &:not(:disabled):not([aria-disabled="true"]):hover {
    text-decoration: underline;
  }
  &:not(:disabled):not([aria-disabled="true"]):focus,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    --button-border-color: var(--white, #fff);
  }
`;
