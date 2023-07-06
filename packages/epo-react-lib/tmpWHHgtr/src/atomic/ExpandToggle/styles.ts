import { protoButton } from "@/styles/mixins/appearance";
import styled from "styled-components";

export const Button = styled.button`
  ${protoButton()}
  display: flex;
  color: var(--turquoise85);
  transition: color 0.2s;

  &:hover {
    color: var(--turquoise85);
  }

  &[aria-hidden="true"] {
    display: none;
  }
`;
