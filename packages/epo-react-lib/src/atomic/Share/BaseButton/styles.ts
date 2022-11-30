import { ScreenreaderText } from "@/styles/utils";
import styled from "styled-components";

interface WrapperProps {
  $bgColor: string;
  $bgHoverColor: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: transparent solid 2px;
  border-radius: 50%;
  color: var(--white);
  transition: background-color 0.2s, border-color 0.2s;

  ${({ $bgColor, $bgHoverColor }) => `
    background-color: ${$bgColor};

    &:hover {
      background-color: ${$bgHoverColor};
    }
  `}
`;

export const SrText = ScreenreaderText;
