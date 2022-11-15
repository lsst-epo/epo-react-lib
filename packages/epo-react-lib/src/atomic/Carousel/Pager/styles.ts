import styled from "styled-components";
import { respond, BREAK_DESKTOP_SMALL } from "@/styles/globalStyles";
import { aHidden, protoButton } from "@/styles/mixins/appearance";

export const List = styled.ul`
  display: none;
  justify-content: center;
  list-style: none;
  gap: 20px;

  ${respond(`display: flex;`, BREAK_DESKTOP_SMALL)}
`;

export const Button = styled.button`
  ${protoButton()}
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--turquoise85);
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: background-color 0.2s, outline-color 0.2s;

  // override global outline style
  .js-focus-visible &:focus:not(.focus-visible) {
    outline-width: 2px;
  }

  &:hover {
    background-color: var(--turquoise50);
  }

  &:focus-visible {
    background-color: var(--turquoise50);
    outline: 2px solid var(--turquoise50);
  }

  &[aria-current="step"] {
    background-color: var(--turquoise50);
    outline-color: var(--turquoise50);

    &:hover,
    &:focus-visible {
      background-color: var(--turquoise20);
      outline: 2px solid var(--turquoise20);
    }
  }
`;

export const SrText = styled.span`
  ${aHidden}
`;
