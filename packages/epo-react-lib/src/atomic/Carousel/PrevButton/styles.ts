import { aHidden } from "@/styles/mixins/appearance";
import styled from "styled-components";
import DefaultButton from "../Button";

export const Button = styled(DefaultButton)`
  right: var(--PrevButton-right, calc(100% + 10px));

  svg {
    transform: translateX(-5%);
  }
`;

export const SrText = styled.span`
  ${aHidden}
`;
