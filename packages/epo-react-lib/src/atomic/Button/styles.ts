import styled, { css } from "styled-components";
import { fluidScale } from "@/styles/utils";
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
  font-size: ${fluidScale("20px", "16px")};
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
