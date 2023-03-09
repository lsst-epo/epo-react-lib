import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: var(--button-background-color);
  color: var(--neutral95, #1f2121);
`;

export const PlaybackButton = styled.button`
  --button-color: var(--white, #fff);
  --button-background-color: var(--neutral15, #e6e6e6);

  background: transparent;
  border: none;
  color: var(--button-color);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75em;
  text-align: center;
  padding: 0;
  margin: 0;

  &:not(:disabled):not([aria-disabled="true"]):hover,
  &:not(:disabled):not([aria-disabled="true"]):focus-visible,
  &:not(:disabled):not([aria-disabled="true"]).focus-visible {
    text-decoration: underline;

    ${IconContainer} {
      outline: 1px solid var(--white, #fff);
      outline-offset: 1px;
    }
  }
  &:not(:disabled):not([aria-disabled="true"]):focus {
    outline: none;
  }
`;
