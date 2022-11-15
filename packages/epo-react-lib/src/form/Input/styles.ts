import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid var(--turquoise70);
  border-radius: 6px;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  padding-block-start: calc(var(--Input-padding-block, 18px) - 1px);
  padding-block-end: var(--Input-padding-block, 18px);
  font-size: 20px;
  font-family: inherit;
`;
