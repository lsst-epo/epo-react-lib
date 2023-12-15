import styled from "styled-components";
import { BREAK_TABLET_MIN } from "@/styles/abstracts";
import { protoButton } from "@/styles/mixins/appearance";

export const MenuContainer = styled.div`
  --menu-padding: var(--PADDING_SMALL, 20px);

  background-color: var(--neutral95, #1f2121);
  box-sizing: border-box;
  color: var(--white, #fff);
  padding: var(--menu-padding);
  height: 100%;
  width: 20rem;
  max-width: 100%;
  overflow-y: auto;

  & > * + * {
    margin-block-start: calc(var(--menu-padding) / 2);
  }

  @media screen and (min-width: ${BREAK_TABLET_MIN}) {
    --menu-padding: var(--PADDING_MEDIUM, 40px);
  }
`;
export const MenuHeader = styled.div`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid var(--white, #fff);
  padding-block-end: calc(var(--menu-padding) / 2);

  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: min-content min-content;
  grid-template-areas:
    "title close"
    "callToAction close";
  align-items: center;
`;
export const MenuTitle = styled.h2`
  font-weight: var(--FONT_WEIGHT_NORMAL, 400);
  font-size: 0.8rem;
  grid-area: title;
  margin: 0;
  padding: 0;
`;
export const MenuCallToAction = styled.span`
  font-weight: var(--FONT_WEIGHT_BOLD, 600);
  grid-area: callToAction;
`;
export const MenuCloseButton = styled.button`
  ${protoButton()}
  aspect-ratio: 1;
  color: var(--white, #fff);
  display: flex;
  align-items: center;
  grid-area: close;
  padding: 0.25rem;

  &:not(:disabled):not([aria-disabled="true"]):hover,
  &:not(:disabled):not([aria-disabled="true"]):focus,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    outline: 3px solid var(--white, #fff);
  }
`;
