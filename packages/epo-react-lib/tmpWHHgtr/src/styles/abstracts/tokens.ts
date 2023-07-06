import palette from "@/styles/abstracts/palette";

export const tokens: { [key: string]: string } = {
  ...palette,
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
  FONT_WEIGHT_NORMAL: "400",
  FONT_WEIGHT_MEDIUM: "500",
  FONT_WEIGHT_BOLD: "600",
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
