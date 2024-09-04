import palette from "./palette";
import * as baseTokens from "@rubin-epo/epo-style-dictionary/legacy/tokens";

const { Z_STACK_DIALOG, Z_STACK_HEADER, Z_STACK_LOADER, ...rest } = baseTokens;

export const tokens = {
  ...palette,
  ...rest,
};

export type StyleToken = keyof typeof tokens;

export const zStack = {
  loader: Z_STACK_LOADER,
  dialog: Z_STACK_DIALOG,
  header: Z_STACK_HEADER,
};

/** @deprecated use token() method or CSS variables */
export const white = tokens.white;
/** @deprecated use token() method or CSS variables */
export const offWhite = tokens.offWhite;
/** @deprecated use token() method or CSS variables */
export const neutral02 = tokens.neutral02;
/** @deprecated use token() method or CSS variables */
export const neutral08 = tokens.neutral08;
/** @deprecated use token() method or CSS variables */
export const neutral10 = tokens.neutral10;
/** @deprecated use token() method or CSS variables */
export const neutral15 = tokens.neutral15;
/** @deprecated use token() method or CSS variables */
export const neutral20 = tokens.neutral20;
/** @deprecated use token() method or CSS variables */
export const neutral30 = tokens.neutral30;
/** @deprecated use token() method or CSS variables */
export const neutral40 = tokens.neutral40;
/** @deprecated use token() method or CSS variables */
export const neutral60 = tokens.neutral60;
/** @deprecated use token() method or CSS variables */
export const neutral80 = tokens.neutral80;
/** @deprecated use token() method or CSS variables */
export const neutral90 = tokens.neutral90;
/** @deprecated use token() method or CSS variables */
export const neutral95 = tokens.neutral95;
/** @deprecated use token() method or CSS variables */
export const black = tokens.black;
/** @deprecated use token() method or CSS variables */
export const orange20 = tokens.orange20;
/** @deprecated use token() method or CSS variables */
export const orange55 = tokens.orange55;
/** @deprecated use token() method or CSS variables */
export const turquoise10 = tokens.turquoise10;
/** @deprecated use token() method or CSS variables */
export const turquoise20 = tokens.turquoise20;
/** @deprecated use token() method or CSS variables */
export const turquoise50 = tokens.turquoise50;
/** @deprecated use token() method or CSS variables */
export const turquoise55 = tokens.turquoise55;
/** @deprecated use token() method or CSS variables */
export const turquoise60 = tokens.turquoise60;
/** @deprecated use token() method or CSS variables */
export const turquoise70 = tokens.turquoise70;
/** @deprecated use token() method or CSS variables */
export const turquoise80 = tokens.turquoise80;
/** @deprecated use token() method or CSS variables */
export const turquoise85 = tokens.turquoise85;
/** @deprecated use token() method or CSS variables */
export const turquoise90 = tokens.turquoise90;
/** @deprecated use token() method or CSS variables */
export const red = tokens.red;
/** @deprecated use token() method or CSS variables */
export const red20 = tokens.red20;
/** @deprecated use token() method or CSS variables */
export const red40 = tokens.red40;
/** @deprecated use token() method or CSS variables */
export const BREAK_HEADER_LAYOUT = tokens.BREAK_HEADER_LAYOUT;
/** @deprecated use token() method or CSS variables */
export const BREAK_DESKTOP = tokens.BREAK_DESKTOP;
/** @deprecated use token() method or CSS variables */
export const BREAK_DESKTOP_SMALL = tokens.BREAK_DESKTOP_SMALL;
/** @deprecated use token() method or CSS variables */
export const BREAK_LARGE_TABLET = tokens.BREAK_LARGE_TABLET;
/** @deprecated use token() method or CSS variables */
export const BREAK_LARGE_TABLET_MIN = tokens.BREAK_LARGE_TABLET_MIN;
/** @deprecated use token() method or CSS variables */
export const BREAK_TABLET = tokens.BREAK_TABLET;
/** @deprecated use token() method or CSS variables */
export const BREAK_TABLET_MIN = tokens.BREAK_TABLET_MIN;
/** @deprecated use token() method or CSS variables */
export const BREAK_PHABLET = tokens.BREAK_PHABLET;
/** @deprecated use token() method or CSS variables */
export const BREAK_PHABLET_MIN = tokens.BREAK_PHABLET_MIN;
/** @deprecated use token() method or CSS variables */
export const BREAK_MOBILE = tokens.BREAK_MOBILE;
/** @deprecated use token() method or CSS variables */
export const BREAK_MOBILE_MIN = tokens.BREAK_MOBILE_MIN;
/** @deprecated use token() method or CSS variables */
export const CONTAINER_MAX = tokens.CONTAINER_MAX;
/** @deprecated use token() method or CSS variables */
export const CONTAINER_FULL = tokens.CONTAINER_FULL;
/** @deprecated use token() method or CSS variables */
export const CONTAINER_WIDE = tokens.CONTAINER_WIDE;
/** @deprecated use token() method or CSS variables */
export const CONTAINER_REGULAR = tokens.CONTAINER_REGULAR;
/** @deprecated use token() method or CSS variables */
export const CONTAINER_NARROW = tokens.CONTAINER_NARROW;
/** @deprecated use token() method or CSS variables */
export const FONT_WEIGHT_NORMAL = tokens.FONT_WEIGHT_NORMAL;
/** @deprecated use token() method or CSS variables */
export const FONT_WEIGHT_MEDIUM = tokens.FONT_WEIGHT_MEDIUM;
/** @deprecated use token() method or CSS variables */
export const FONT_WEIGHT_BOLD = tokens.FONT_WEIGHT_BOLD;
/** @deprecated use token() method or CSS variables */
export const FONT_SIZE_BASE_DESKTOP = tokens.FONT_SIZE_BASE_DESKTOP;
/** @deprecated use token() method or CSS variables */
export const FONT_SIZE_BASE_MOBILE = tokens.FONT_SIZE_BASE_MOBILE;
/** @deprecated use token() method or CSS variables */
export const FONT_STACK_BASE = tokens.FONT_STACK_BASE;
/** @deprecated use token() method or CSS variables */
export const LINE_HEIGHT_BASE = tokens.LINE_HEIGHT_BASE;
/** @deprecated use token() method or CSS variables */
export const PADDING_LARGE = tokens.PADDING_LARGE;
/** @deprecated use token() method or CSS variables */
export const PADDING_MEDIUM = tokens.PADDING_MEDIUM;
/** @deprecated use token() method or CSS variables */
export const PADDING_SMALL = tokens.PADDING_SMALL;
/** @deprecated use token() method or CSS variables */
export const DURATION = tokens.DURATION;
/** @deprecated use token() method or CSS variables */
export const DURATION_SLOW = tokens.DURATION_SLOW;
/** @deprecated use token() method or CSS variables */
export const DURATION_SUPER_SLOW = tokens.DURATION_SUPER_SLOW;
