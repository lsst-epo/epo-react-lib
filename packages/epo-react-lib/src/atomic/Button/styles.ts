import styled from "styled-components";
import { aButton, aButtonTheme } from "@/styles/mixins/appearance";
import { ButtonStyleAs } from ".";

interface StyledButtonProps {
  $styleAs?: ButtonStyleAs;
}

export const Button = styled.button<StyledButtonProps>`
  ${({ $styleAs = "primary" }) => aButtonTheme($styleAs)}
  ${aButton}

  --button-text-align: center;

  align-items: center;
  gap: var(--size-spacing-xs);
  font-size: 0.81818em;
  text-align: center;

  &[data-is-block="true"] {
    display: flex;
    width: 100%;
  }

  &:has(> svg) {
    display: inline-flex;
    padding-inline-start: var(--size-spacing-s);
  }
`;

export const ButtonText = styled.span`
  flex: 1 1 auto;
  text-align: var(--button-text-align);
`;
