import { aHidden } from "@/styles/mixins/appearance";
import styled from "styled-components";
import DefaultButton from "../Button";

export const Button = styled(DefaultButton)`
  left: var(--NextButton-left, calc(100% + 10px));

  svg {
    transform: rotate(180deg) translateX(-5%);
  }
`;

export const SrText = styled.span`
  ${aHidden}
`;
