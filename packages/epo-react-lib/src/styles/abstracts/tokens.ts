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
export const FONT_WEIGHT_NORMAL = tokens.FONT_WEIGHT_NORMAL;
export const FONT_WEIGHT_MEDIUM = tokens.FONT_WEIGHT_MEDIUM;
export const FONT_WEIGHT_BOLD = tokens.FONT_WEIGHT_BOLD;
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
