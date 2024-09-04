import styled from "styled-components";

export const Input = styled.input`
  --color-input-border: var(--color-rubin-gray-200);
  --color-input-border-hover: var(--color-font-accent);

  border: 1px solid var(--color-input-border);
  border-radius: var(--size-spacing-3xs);
  box-sizing: border-box;
  font-weight: var(--weight-font-normal);
  height: var(--size-spacing-xl);
  line-height: 1;
  width: 100%;
  padding: var(--size-spacing-s);

  &:not(:disabled):hover,
  &:not(:disabled):focus-within {
    outline: 2px solid var(--color-input-border-hover);
    outline-offset: -2px;
  }
`;
