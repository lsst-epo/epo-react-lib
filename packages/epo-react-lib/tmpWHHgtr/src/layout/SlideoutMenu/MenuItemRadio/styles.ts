import styled from "styled-components";
import Button from "@/atomic/Button";
import { aButton, protoButton } from "@/styles/mixins/appearance";

export const StyledMenuItemWrapper = styled.div`
  padding: 0;
  margin: 0;

  &:first-of-type {
    margin-block-start: calc(var(--menu-padding) / 2);
  }
`;

export const StyledMenuItemRadio = styled.div`
  ${protoButton()}
  ${aButton}

  display: flex;
  align-items: center;
  padding-inline: 0;
  width: 100%;
  position: relative;

  &::before {
    background-color: var(--white, #fff);
    content: "";
    border-radius: 15px;
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
  }

  &[aria-checked="true"] {
    &::after {
      background-color: var(--turquoise55, #009fa1);
      content: "";
      border-radius: 10px;
      width: 20px;
      height: 20px;
      position: absolute;
      right: 5px;
    }
  }

  &:not(:disabled):not([aria-disabled="true"]):hover {
    text-decoration: underline;
  }
  &:not(:disabled):not([aria-disabled="true"]):focus,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    outline: 3px solid var(--white, #fff);
    outline-offset: 1px;
  }
`;
