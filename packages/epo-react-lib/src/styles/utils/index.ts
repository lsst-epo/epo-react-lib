import styled from "styled-components";
import { fluidScaleBase, stripUnit, respondBase } from "@castiron/style-mixins";
import { aHidden } from "@/styles/mixins/appearance";
import { tokens, palette as colorTokens } from "@/styles/abstracts";

export const ScreenreaderText = styled.span`
  ${aHidden}
`;

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

export const containerFullBleed = (width = "CONTAINER_MAX") => {
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
  columns = 3,
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
  var color = hexColor.charAt(0) === "#" ? hexColor.substring(1, 7) : hexColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? true : false;
};

export const palette = (color: string) => colorTokens[color];

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

export const token = (which: string | string[]) => {
  if (typeof which === "string") {
    return tokens[which];
  } else if (Array.isArray(which)) {
    let obj = which.reduce(function (result: { [key: string]: string }, item) {
      result[item] = tokens[item];
      return result;
    }, {});
    return obj;
  } else {
    return tokens;
  }
};
