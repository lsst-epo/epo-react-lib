import styled, { css } from "styled-components";
import { ptToEm } from "@/styles/utils";

interface FigureProps {
  $withBackground?: boolean;
}

export const Figure = styled.figure<FigureProps>`
  ${({ $withBackground }) =>
    $withBackground &&
    css`
      background-color: var(--neutral10);
      padding: 20px;
    `}
`;

export const FigCaption = styled.figcaption`
  font-size: ${ptToEm("14pt")};
  line-height: 1.428;
  padding-top: 13px;
`;
