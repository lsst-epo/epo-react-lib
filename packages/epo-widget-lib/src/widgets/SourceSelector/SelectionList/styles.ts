import styled from "styled-components";

export const SelectionList = styled.ul`
  display: grid;
  grid-template-columns: minmax(18ch, max-content) 1fr;
  grid-auto-rows: 1fr;
  color: var(--neutral95, #1f2121);
  gap: calc(var(--PADDING_SMALL, 20px) / 2);
  margin: 0;
  padding: 0;
`;

export const Selection = styled.li`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  align-items: center;
`;

export const RemoveSelectionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(var(--PADDING_SMALL, 20px) / 2);
  background-color: var(--white, #fff);
  border-radius: 5px;
  border: 1px solid var(--turquoise85, #12726c);
  padding: calc(var(--PADDING_SMALL, 20px) / 2);

  &:not(:disabled) {
    cursor: pointer;
  }

  &:not(:disabled)&:hover,
  &:not(:disabled)&:focus,
  &:not(:disabled)&:focus-visible,
  &:not(:disabled)&.focus-visible {
    outline: 2px solid var(--turquoise85, #12726c);
    outline-offset: -2px;

    > svg {
      border-color: var(--black, #000);
    }
  }

  > svg {
    border: 1px solid transparent;
    border-radius: 50%;
    color: #ed4c4c;
  }
`;
