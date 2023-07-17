import { zStack } from "@/styles/abstracts";
import { protoButton } from "@/styles/mixins/appearance";
import styled from "styled-components";

export const SelectContainer = styled.div`
  --select-background-color: var(--turquoise10, #d9f7f6);
  --select-border-color: var(--turquoise85, #12726c);
  --select-color: var(--turquoise95, #1f2121);
  --select-height: 32px;
  --select-padding: 5px;

  display: inline-block;
  font-size: 14px;
  position: relative;
  max-width: var(--max-width);
  width: var(--width);
`;

export const SelectDropdown = styled.ul`
  background-color: var(--select-background-color);
  border: 1px solid var(--select-border-color);
  border-radius: var(--select-padding);
  color: var(--select-color);
  margin: 0;
  padding: var(--select-padding) 0;
  list-style: none;

  position: absolute;
  z-index: ${zStack.dialog};
  top: calc(var(--select-height) + var(--select-padding));
  min-width: 100%;
`;

export const DropdownText = styled.span`
  grid-column: 3;
  white-space: nowrap;
`;

export const DropdownOption = styled.li`
  &[aria-selected="true"] {
    label {
      border-color: var(--select-border-color);
    }
  }

  label {
    display: grid;
    align-items: center;
    border: 1px solid transparent;
    cursor: pointer;
    grid-template-rows: 1fr;
    grid-template-columns: 0 15px 1fr;
    gap: var(--select-padding);
    height: var(--select-height);
    padding: 0 10px 0 5px;
  }

  input[type="radio"],
  input[type="checkbox"] {
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
    padding: 0;
    margin: 0;
  }
`;

export const SelectButton = styled.button`
  ${protoButton()}

  background-color: var(--select-background-color);
  border: 1px solid var(--select-border-color);
  border-radius: var(--select-padding);
  color: var(--select-color);
  height: var(--select-height);
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  svg {
    color: var(--select-border-color);
    transform: rotate(-90deg);
    margin-inline-start: 10px;
    flex-shrink: 0;
  }

  &:hover {
    outline: 1px solid var(--select-border-color);
  }

  &:not([aria-expanded="true"]) + ${SelectDropdown} {
    height: 0;
    border: 0;
    padding: 0;
    overflow: hidden;
  }

  &:disabled {
    --select-background-color: var(--neutral10, "#f5f5f5");
    --select-border-color: var(--neutral60, #6a6e6e);
    --select-color: var(--neutral60, #6a6e6e);

    pointer-events: none;
    user-select: none;
  }
`;

export const ButtonText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
