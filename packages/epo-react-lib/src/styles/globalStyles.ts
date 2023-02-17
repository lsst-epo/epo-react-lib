/* eslint-disable */
import { createGlobalStyle } from "styled-components";
import { fluidScaleBase, stripUnit, respondBase } from "@castiron/style-mixins";
import { baseFont } from "@/styles/mixins/font";
import base from "@/styles/base";

export const colorTokens: { [key: string]: string } = {
  white: "#ffffff",
  offWhite: "#e9e9e9",
  neutral02: "#fafafa",
  neutral08: "#ebebeb",
  neutral10: "#f5f5f5",
  neutral15: "#e3e4e8",
  neutral20: "#dce0e3",
  neutral30: "#d3d4d5",
  neutral40: "#9E9EA3",
  neutral60: "#6A6E6E",
  neutral80: "#404040",
  neutral90: "#2b2e34",
  neutral95: "#1F2121",
  black: "#000000",
  turquoise05: "#EDFFFE",
  turqouise07: "#EDFFFE",
  turquoise10: "#D9F7F6",
  turquoise20: "#B2F2EF",
  turquoise50: "#00bebf",
  turquoise55: "#009fa1",
  turquoise60: "#078b8c",
  turquoise70: "#058b8c",
  turquoise80: "#117273",
  turquoise85: "#12726c",
  turquoise90: "#0c4a4c",
  orange02: "#FFFDFA",
  orange04: "#FFF8F0",
  orange05: "#FFF9F2",
  orange10: "#FFEDD9",
  orange20: "#FFE7CC",
  orange55: "#FAB364",
  blue10: "#eef5fb",
  blue20: "#C7D4F4",
  green05: "#D7E6CF",
  red: "#cf4040",
  red20: "#f2c3c0",
  red40: "#FF8489",
};

export const tokens: { [key: string]: string } = {
  ...colorTokens,
  BREAK_HEADER_LAYOUT: "1500px",
  BREAK_DESKTOP: "1280px",
  BREAK_DESKTOP_SMALL: "1130px",
  BREAK_LARGE_TABLET: "850px",
  BREAK_LARGE_TABLET_MIN: "851px",
  BREAK_TABLET: "768px",
  BREAK_TABLET_MIN: "769px",
  BREAK_PHABLET: "600px",
  BREAK_PHABLET_MIN: "601px",
  BREAK_MOBILE: "446px",
  // For extremely thin devices, or users with largeer font bases
  BREAK_MOBILE_MIN: "280px",
  CONTAINER_MAX: "2560px",
  CONTAINER_FULL: "1920px",
  CONTAINER_WIDE: "1435px",
  CONTAINER_REGULAR: "1160px",
  CONTAINER_NARROW: "900px",
  FONT_SIZE_BASE_DESKTOP: "22px",
  FONT_SIZE_BASE_MOBILE: "16px",
  FONT_STACK_BASE: `"Source Sans Pro", system-ui`,
  LINE_HEIGHT_BASE: "1.636",
  PADDING_LARGE: "100px",
  PADDING_MEDIUM: "40px",
  PADDING_SMALL: "20px",
  DURATION: "0.2s",
  DURATION_SLOW: "0.4s",
  DURATION_SUPER_SLOW: "1s",
};

export const zStack = {
  loader: 45,
  dialog: 35,
  header: 25,
};

export const white = tokens.white;
export const offWhite = tokens.offWhite;
export const neutral02 = tokens.neutral02;
export const neutral08 = tokens.neutral08;
export const neutral10 = tokens.neutral10;
export const neutral15 = tokens.neutral15;
export const neutral20 = tokens.neutral20;
export const neutral30 = tokens.neutral30;
export const neutral40 = tokens.neutral40;
export const neutral60 = tokens.neutral60;
export const neutral80 = tokens.neutral80;
export const neutral90 = tokens.neutral90;
export const neutral95 = tokens.neutral95;
export const black = tokens.black;
export const orange20 = tokens.orange20;
export const orange55 = tokens.orange55;
export const turquoise10 = tokens.turquoise10;
export const turquoise20 = tokens.turquoise20;
export const turquoise50 = tokens.turquoise50;
export const turquoise55 = tokens.turquoise55;
export const turquoise60 = tokens.turquoise60;
export const turquoise70 = tokens.turquoise70;
export const turquoise80 = tokens.turquoise80;
export const turquoise85 = tokens.turquoise85;
export const turquoise90 = tokens.turquoise90;
export const blue10 = tokens.blue10;
export const red = tokens.red;
export const red20 = tokens.red20;
export const red40 = tokens.red40;
export const BREAK_HEADER_LAYOUT = tokens.BREAK_HEADER_LAYOUT;
export const BREAK_DESKTOP = tokens.BREAK_DESKTOP;
export const BREAK_DESKTOP_SMALL = tokens.BREAK_DESKTOP_SMALL;
export const BREAK_LARGE_TABLET = tokens.BREAK_LARGE_TABLET;
export const BREAK_LARGE_TABLET_MIN = tokens.BREAK_LARGE_TABLET_MIN;
export const BREAK_TABLET = tokens.BREAK_TABLET;
export const BREAK_TABLET_MIN = tokens.BREAK_TABLET_MIN;
export const BREAK_PHABLET = tokens.BREAK_PHABLET;
export const BREAK_PHABLET_MIN = tokens.BREAK_PHABLET_MIN;
export const BREAK_MOBILE = tokens.BREAK_MOBILE;
export const BREAK_MOBILE_MIN = tokens.BREAK_MOBILE_MIN;
export const CONTAINER_MAX = tokens.CONTAINER_MAX;
export const CONTAINER_FULL = tokens.CONTAINER_FULL;
export const CONTAINER_WIDE = tokens.CONTAINER_WIDE;
export const CONTAINER_REGULAR = tokens.CONTAINER_REGULAR;
export const CONTAINER_NARROW = tokens.CONTAINER_NARROW;
export const FONT_SIZE_BASE_DESKTOP = tokens.FONT_SIZE_BASE_DESKTOP;
export const FONT_SIZE_BASE_MOBILE = tokens.FONT_SIZE_BASE_MOBILE;
export const FONT_STACK_BASE = tokens.FONT_STACK_BASE;
export const LINE_HEIGHT_BASE = tokens.LINE_HEIGHT_BASE;
export const PADDING_LARGE = tokens.PADDING_LARGE;
export const PADDING_MEDIUM = tokens.PADDING_MEDIUM;
export const PADDING_SMALL = tokens.PADDING_SMALL;
export const DURATION = tokens.DURATION;
export const DURATION_SLOW = tokens.DURATION_SLOW;
export const DURATION_SUPER_SLOW = tokens.DURATION_SUPER_SLOW;

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

export const palette = (color: string) => {
  return tokens[color];
};

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

export const pxToEm = (px: string, base = tokens.FONT_SIZE_BASE_DESKTOP) => {
  return `${stripUnit(px) / stripUnit(base)}em`;
};

// Converts pt to em
// pt values are rounded down to the nearest px
export const ptToEm = (pt: string, base = tokens.FONT_SIZE_BASE_DESKTOP) => {
  return `${Math.floor(stripUnit(pt) * 1.333) / stripUnit(base)}em`;
};

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

const createCSSGlobalStyles = () => {
  return Object.keys(tokens).map((k) => `--${k}: ${tokens[k]};`);
};

const GlobalStyles = createGlobalStyle`
${baseFont}
  html {
    font-size: ${fluidScale(
      FONT_SIZE_BASE_DESKTOP,
      FONT_SIZE_BASE_MOBILE,
      BREAK_TABLET,
      BREAK_MOBILE
    )}
  }
  body {
    font-family: var(--FONT_STACK_BASE);
    font-size: 1em;
    line-height: var(--LINE_HEIGHT_BASE);
  }
  :root {
      ${createCSSGlobalStyles()}
  }
  ${base}
`;

export default GlobalStyles;
