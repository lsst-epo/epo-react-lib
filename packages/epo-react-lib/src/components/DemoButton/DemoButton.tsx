import styled from "styled-components";

const DemoButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: var(--turquoise80, black);
  color: hsl(0deg, 0%, 98%);
  padding: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: var(--turquoise70);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #62b0e8;
    background-color: var(--turquoise70);
  }
`;

export default DemoButton;
