import { tokens } from "@/styles/abstracts";
import { respond } from "@/styles/utils";
import styled, { css } from "styled-components";
import { cContentRte } from "@/content-blocks/styles";

const colors = {
  none: tokens.neutral10,
  blue: tokens.blue20,
  green: tokens.green05,
  orange: tokens.orange10,
  paleOrange: tokens.orange04,
};

// a11y link colors
const linkColors = {
  none: tokens.turquoise80,
  blue: tokens.turquoise90,
  green: tokens.turquoise90,
  orange: tokens.turquoise80,
  paleOrange: tokens.turquoise80,
};

export type SimpleTableColor =
  | "none"
  | "blue"
  | "green"
  | "orange"
  | "paleOrange";

interface SimpleTableColorProps {
  $color: SimpleTableColor;
}

export const List = styled.dl`
  display: grid;
  grid-template-columns: 212px 1fr;
  gap: 5px;

  ${respond(`grid-template-columns: 1fr;`, tokens.BREAK_PHABLET)}
`;

const accessibleLink = css`
  a:not([class^="c-"]) {
    color: var(--SimpleTable-link-color, ${linkColors.orange});
    text-decoration: underline;
  }
`;

export const Title = styled.dt<SimpleTableColorProps>`
  ${cContentRte}
  ${accessibleLink}

  padding: 20px;
  padding-inline-end: 6px;
  padding-block-end: 22px;

  ${({ $color = "none" }) =>
    css`
      background: ${colors[$color]};
      --SimpleTable-link-color: ${linkColors[$color]};
    `}
`;

export const Description = styled.dd<SimpleTableColorProps>`
  ${cContentRte}
  ${accessibleLink}


  padding: 20px;
  padding-block-end: 22px;

  ${({ $color = "none" }) =>
    css`
      background: ${colors[$color]};
      --SimpleTable-link-color: ${linkColors[$color]};
    `}
`;
