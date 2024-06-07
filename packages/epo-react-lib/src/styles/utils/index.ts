import styled, { css } from "styled-components";
import { fluidScaleBase, stripUnit, respondBase } from "@castiron/style-mixins";
import { aHidden } from "@/styles/mixins/appearance";
import { tokens, palette as colorTokens, StyleToken } from "@/styles/abstracts";

export function fluidScale(
  max: string,
  min: string,
  maxVw = tokens.BREAK_DESKTOP,
  minVw = tokens.BREAK_TABLET
) {
  if (max === min) return max;
  return fluidScaleBase(max, min, maxVw, minVw);
}

export const containerMax = () => protoContainer(tokens.CONTAINER_MAX);

export const containerFull = () => protoContainer(tokens.CONTAINER_FULL);

export const containerFullBleed = (width: StyleToken = "CONTAINER_MAX") => {
  return `
    width: 100%;
    max-width: ${tokens[width]};
    margin-right: auto;
    margin-left: auto;
  `;
};

export const containerWide = () => protoContainer(tokens.CONTAINER_WIDE);

export const containerNews = () =>
  protoContainer(tokens.CONTAINER_WIDE, "110px", "50px");

export const containerRegular = () => protoContainer(tokens.CONTAINER_REGULAR);

export const containerNarrow = () => protoContainer(tokens.CONTAINER_NARROW);

export const layoutGrid = (
  columns: number | string = 3,
  gapDesktop = tokens.PADDING_SMALL,
  gapMobile = tokens.PADDING_SMALL,
  breakPoint = tokens.BREAK_TABLET
) => {
  return `
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: ${fluidScale(gapDesktop, gapMobile)};

  ${respond(
    `& > * {
      grid-column: span ${columns};
    }`,
    breakPoint
  )}
  `;
};

export const encodeColor = (string: string) => {
  const str = string.split("#").pop();
  return `%23${str}`;
};

export const needsDarkColor = (hexColor: string) => {
  const color =
    hexColor.charAt(0) === "#" ? hexColor.substring(1, 7) : hexColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186;
};

export const palette = (color: string) =>
  (colorTokens as { [key: string]: string })[color];

export const protoContainer = (
  maxWidth = tokens.CONTAINER_WIDE,
  widePadding = tokens.PADDING_LARGE,
  narrowPadding = tokens.PADDING_SMALL
) => {
  const units = widePadding.toString().split(/\d+/);
  const unit = units?.[0] || "px";
  const maxValue = stripUnit(maxWidth) + 2 * stripUnit(widePadding);
  const minValue = stripUnit(maxWidth) + 2 * stripUnit(narrowPadding);

  return `
    --max-width: ${fluidScale(maxValue + unit, minValue + unit)};
    max-width: var(--max-width);
    padding-right: ${fluidScale(widePadding, narrowPadding)};
    padding-left: ${fluidScale(widePadding, narrowPadding)};
    margin-right: auto;
    margin-left: auto;
    `;
};

export const pxToEm = (px: string, base = tokens.FONT_SIZE_BASE_DESKTOP) =>
  `${stripUnit(px) / stripUnit(base)}em`;

/**
 * Converts pt to em
 * pt values are rounded down to the nearest px
 */
export const ptToEm = (pt: string, base = tokens.FONT_SIZE_BASE_DESKTOP) =>
  `${Math.floor(stripUnit(pt) * 1.333) / stripUnit(base)}em`;

export const respond = (
  content: string,
  size = tokens.BREAK_TABLET,
  operator = "max",
  aspect = "width"
) => {
  return respondBase(content, size, operator, aspect);
};

export function token(which: StyleToken): string;
export function token(which: StyleToken[]): { [key: string]: string };
export function token(which: unknown): unknown {
  if (typeof which === "string") {
    return tokens[which as StyleToken];
  } else if (Array.isArray(which)) {
    const obj = which.reduce(
      (result: Record<StyleToken, string>, item: StyleToken) => {
        result[item] = tokens[item];
        return result;
      },
      {}
    );
    return obj;
  } else {
    return tokens;
  }
}

export const ScreenreaderText = styled.span`
  ${aHidden}
`;

export const cContentRte = css`
  > * + * {
    margin-top: 1rem;
  }

  > *:first-child {
    margin-block-start: 0;
  }

  a:not([class^="c-"]) {
    color: var(--link-color, ${palette("turquoise80")});
    text-decoration: underline;
  }

  ul {
    padding-inline-start: 1em;
    list-style-type: disc;
  }

  ol {
    padding-inline-start: 1em;
    list-style-type: decimal;
  }

  li {
    padding-inline-start: 0.5em;
  }

  h1 {
    margin-block-start: ${ptToEm("144pt")};
  }

  h2 {
    margin-block-start: ${ptToEm("40pt")};
  }

  h3,
  h4 {
    margin-block-start: ${ptToEm("20pt")};
  }

  figcaption {
    font-size: 18px;
    padding-block-start: 1em;
    padding-block-end: 1em;
  }
`;
