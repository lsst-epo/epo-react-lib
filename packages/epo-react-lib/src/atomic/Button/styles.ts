import styled, { css } from "styled-components";
import { aButton, aButtonTheme } from "@/styles/mixins/appearance";
import { ButtonStyleAs } from "./Button";

interface StyledButtonProps {
  $styleAs?: ButtonStyleAs;
  $isBlock: boolean;
  $hasIcon: boolean;
}

export const Button = styled.button<StyledButtonProps>`
  ${({ $styleAs = "primary" }) => aButtonTheme($styleAs)}
  ${aButton}

  --button-text-align: center;

  align-items: center;
  gap: 10px;
  font-size: 0.81818em;
  text-align: center;

  ${({ $isBlock }: StyledButtonProps) =>
    $isBlock &&
    css`
      display: flex;
      width: 100%;
    `}

  ${({ $hasIcon }: StyledButtonProps) =>
    $hasIcon &&
    css`
      display: inline-flex;
      padding-inline-start: 15px;
    `}
`;

export const ButtonText = styled.span`
  flex: 1 1 auto;
  text-align: var(--button-text-align);
`;
